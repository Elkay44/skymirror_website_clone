---
sidebar_position: 9
title: "Coding Standards & Technical Setup"
---

# Coding Standards & Technical Setup Guide

## Overview

This guide defines the technical standards, coding conventions, and development environment setup for SkyMirror interns. Following these standards ensures code quality, consistency, and professional-grade deliverables.

**Audience:** Interns, Mentors, Technical Reviewers  
**Last Updated:** December 2024

:::tip Related Documentation
- [Program Overview](./internship-program-overview.md) - Program structure
- [Roadmap](./internship-roadmap.md) - Week-by-week plan
- [Playbook](./internship-playbook.md) - Daily operations
:::

---

## Technology Stacks

Interns work with one of two production-grade stacks based on project needs and career goals.

### Stack Comparison

| Category | Stack 1: TypeScript/Bun | Stack 2: Python AI |
|----------|-------------------------|-------------------|
| **Best For** | Modern web apps, real-time systems, edge computing | AI/ML applications, data pipelines, enterprise systems |
| **Performance** | ⚡ Extremely fast (top benchmarks) | Very fast for Python, mature ecosystem |
| **Learning Curve** | Moderate (TypeScript everywhere) | Moderate (Python + AI tools) |
| **Industry Demand** | High (modern startups) | Very High (AI/ML roles) |
| **SkyMirror Projects** | CheckMet API, Traquiva features | AI features, data processing |

---

## Stack 1: Ultra-Fast TypeScript / Bun Stack

### Overview

This stack teaches modern TypeScript, performance-first APIs, and edge-ready systems using cutting-edge tools.

**Technology Stack:**
- **Runtime:** Bun (fastest JavaScript runtime)
- **Backend Framework:** ElysiaJS (primary) / Hono (lightweight)
- **Background Jobs:** BullMQ + Redis
- **AI Integration:** Gemini API + LangChain.js
- **Frontend:** Quasar Framework (Vue + Material Design)
- **Database:** PostgreSQL / Redis
- **Testing:** Bun Test / Vitest
- **Deployment:** Docker, Fly.io, Cloudflare Workers

---

### TypeScript Coding Standards

#### 1. Type Safety

**Always use strict TypeScript:**

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

**❌ Bad - Using `any`:**
```typescript
function processData(data: any) {
  return data.value;
}
```

**✅ Good - Proper typing:**
```typescript
interface UserData {
  id: string;
  name: string;
  email: string;
}

function processData(data: UserData): string {
  return data.name;
}
```

**❌ Bad - Implicit types:**
```typescript
const users = [];
users.push({ name: "John" });
```

**✅ Good - Explicit types:**
```typescript
interface User {
  id: string;
  name: string;
}

const users: User[] = [];
users.push({ id: "1", name: "John" });
```

#### 2. Type vs Interface

**Use `type` for:**
- Unions and intersections
- Primitives and tuples
- Function types

**Use `interface` for:**
- Object shapes that might be extended
- API contracts
- Class implementations

```typescript
// ✅ Good - Type for unions
type Status = "pending" | "active" | "inactive";

// ✅ Good - Interface for objects
interface User {
  id: string;
  name: string;
  status: Status;
}

// ✅ Good - Interface extension
interface AdminUser extends User {
  permissions: string[];
}
```

#### 3. Runtime Validation with Zod

**Always validate external data:**

```typescript
import { z } from "zod";

// Define schema
const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  email: z.string().email(),
  age: z.number().int().positive().optional(),
});

// Infer TypeScript type
type User = z.infer<typeof UserSchema>;

// Validate at runtime
function createUser(data: unknown): User {
  return UserSchema.parse(data); // Throws if invalid
}

// Safe validation
function createUserSafe(data: unknown): User | null {
  const result = UserSchema.safeParse(data);
  return result.success ? result.data : null;
}
```

#### 4. File Naming & Structure

**Naming Convention:**
```
kebab-case.ts
```

**File Organization:**
```
src/
├── routes/
│   ├── user.routes.ts
│   ├── auth.routes.ts
│   └── index.ts
├── services/
│   ├── user.service.ts
│   ├── auth.service.ts
│   └── email.service.ts
├── models/
│   ├── user.model.ts
│   └── types.ts
├── utils/
│   ├── validation.ts
│   └── helpers.ts
└── config/
    └── database.ts
```

**One responsibility per file:**

```typescript
// ❌ Bad - Everything in one file
// user.ts
export class User {}
export class UserService {}
export const userRoutes = {};

// ✅ Good - Separated by responsibility
// user.model.ts
export class User {}

// user.service.ts
export class UserService {}

// user.routes.ts
export const userRoutes = {};
```

---

### ElysiaJS Standards

#### 1. Route Organization

**Group routes by domain:**

```typescript
// user.routes.ts
import { Elysia, t } from "elysia";
import { UserService } from "./user.service";

export const userRoutes = new Elysia({ prefix: "/users" })
  .decorate("userService", new UserService())
  
  .get("/", ({ userService }) => {
    return userService.getAll();
  })
  
  .get("/:id", ({ params, userService }) => {
    return userService.getById(params.id);
  }, {
    params: t.Object({
      id: t.String({ format: "uuid" })
    })
  })
  
  .post("/", async ({ body, userService }) => {
    return userService.create(body);
  }, {
    body: t.Object({
      name: t.String({ minLength: 1, maxLength: 100 }),
      email: t.String({ format: "email" })
    })
  });
```

#### 2. No Business Logic in Routes

**❌ Bad - Logic in route handler:**
```typescript
app.post("/users", async ({ body, db }) => {
  // Validation logic
  if (!body.email.includes("@")) {
    throw new Error("Invalid email");
  }
  
  // Business logic
  const hashedPassword = await hash(body.password);
  
  // Database logic
  const user = await db.users.create({
    ...body,
    password: hashedPassword
  });
  
  // Email logic
  await sendWelcomeEmail(user.email);
  
  return user;
});
```

**✅ Good - Thin routes, fat services:**
```typescript
// user.routes.ts
app.post("/users", async ({ body, userService }) => {
  return userService.create(body);
}, {
  body: UserCreateSchema
});

// user.service.ts
export class UserService {
  async create(data: UserCreateInput): Promise<User> {
    // All logic encapsulated
    const validated = this.validate(data);
    const user = await this.repository.create(validated);
    await this.emailService.sendWelcome(user.email);
    return user;
  }
}
```

#### 3. Error Handling

```typescript
import { Elysia } from "elysia";

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

const app = new Elysia()
  .onError(({ code, error, set }) => {
    if (error instanceof ValidationError) {
      set.status = 400;
      return { error: error.message };
    }
    
    if (error instanceof NotFoundError) {
      set.status = 404;
      return { error: error.message };
    }
    
    // Default error
    set.status = 500;
    return { error: "Internal server error" };
  });
```

---

### BullMQ Background Jobs

#### 1. Job Structure

```typescript
// jobs/email.job.ts
import { Queue, Worker } from "bullmq";

interface EmailJobData {
  to: string;
  subject: string;
  body: string;
}

// Create queue
export const emailQueue = new Queue<EmailJobData>("email", {
  connection: {
    host: "localhost",
    port: 6379,
  },
});

// Create worker
export const emailWorker = new Worker<EmailJobData>(
  "email",
  async (job) => {
    const { to, subject, body } = job.data;
    
    // Send email
    await sendEmail({ to, subject, body });
    
    // Return result
    return { sent: true, timestamp: new Date() };
  },
  {
    connection: {
      host: "localhost",
      port: 6379,
    },
  }
);
```

#### 2. Job Standards

**Jobs must be:**
- **Idempotent** - Safe to run multiple times
- **Retry-safe** - Handle failures gracefully
- **Observable** - Log progress and errors

```typescript
// ✅ Good - Idempotent job
export const processOrderWorker = new Worker(
  "process-order",
  async (job) => {
    const { orderId } = job.data;
    
    // Check if already processed
    const order = await db.orders.findUnique({ where: { id: orderId } });
    if (order.status === "processed") {
      return { skipped: true, reason: "Already processed" };
    }
    
    // Process order
    await processOrder(orderId);
    
    return { processed: true };
  },
  {
    attempts: 3,
    backoff: {
      type: "exponential",
      delay: 5000,
    },
  }
);
```

#### 3. Job Naming

```typescript
// Descriptive job names
emailQueue.add("send-welcome-email", { userId: "123" });
emailQueue.add("send-password-reset", { userId: "123" });
emailQueue.add("send-order-confirmation", { orderId: "456" });

// ❌ Bad
emailQueue.add("job1", { data: "..." });
```

---

### AI Integration (Gemini + LangChain.js)

#### 1. Prompt Management

**Prompts live in `/prompts` directory:**

```typescript
// prompts/user-summary.prompt.ts
export const userSummaryPrompt = `
You are a helpful assistant that summarizes user profiles.

User Data:
{userData}

Provide a concise 2-3 sentence summary highlighting:
- Key information
- Activity patterns
- Notable characteristics
`.trim();
```

**Use in code:**

```typescript
import { userSummaryPrompt } from "./prompts/user-summary.prompt";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro",
  apiKey: process.env.GEMINI_API_KEY,
});

async function summarizeUser(userData: User) {
  const prompt = userSummaryPrompt.replace("{userData}", JSON.stringify(userData));
  const response = await model.invoke(prompt);
  return response.content;
}
```

#### 2. LangChain Standards

```typescript
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

// Define chain
const promptTemplate = PromptTemplate.fromTemplate(
  "Summarize this text: {text}"
);

const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro",
});

const outputParser = new StringOutputParser();

const chain = promptTemplate.pipe(model).pipe(outputParser);

// Use chain
const result = await chain.invoke({ text: "Long text here..." });
```

#### 3. Logging & Monitoring

**Always log LLM interactions:**

```typescript
async function callLLM(prompt: string) {
  const startTime = Date.now();
  
  try {
    const response = await model.invoke(prompt);
    const duration = Date.now() - startTime;
    
    // Log success
    logger.info("LLM call successful", {
      duration,
      promptLength: prompt.length,
      responseLength: response.content.length,
      model: "gemini-pro",
    });
    
    return response;
  } catch (error) {
    // Log error
    logger.error("LLM call failed", {
      error: error.message,
      prompt: prompt.substring(0, 100), // First 100 chars only
    });
    throw error;
  }
}
```

---

### Performance Standards

#### 1. No Blocking I/O

**❌ Bad - Blocking operations:**
```typescript
import fs from "fs";

app.get("/data", () => {
  const data = fs.readFileSync("./data.json"); // Blocks!
  return JSON.parse(data);
});
```

**✅ Good - Async operations:**
```typescript
import fs from "fs/promises";

app.get("/data", async () => {
  const data = await fs.readFile("./data.json", "utf-8");
  return JSON.parse(data);
});
```

#### 2. Streaming Responses

**For large data:**

```typescript
app.get("/large-data", async ({ set }) => {
  set.headers["Content-Type"] = "application/json";
  
  const stream = new ReadableStream({
    async start(controller) {
      for await (const chunk of getLargeData()) {
        controller.enqueue(chunk);
      }
      controller.close();
    },
  });
  
  return stream;
});
```

#### 3. Use Bun-Native APIs

**Prefer Bun's built-in APIs:**

```typescript
// ✅ Good - Bun native
const file = Bun.file("./data.json");
const data = await file.json();

// ❌ Avoid - Node.js APIs when Bun has alternative
import fs from "fs/promises";
const data = await fs.readFile("./data.json");
```

---

## Stack 2: Production-Grade Python AI Stack

### Overview

This stack teaches enterprise-grade Python development, AI pipelines, and scalable architecture.

**Technology Stack:**
- **Language:** Python 3.11+
- **Backend Framework:** FastAPI + Pydantic v2
- **Background Jobs:** Celery + Redis/RabbitMQ
- **AI Integration:** Gemini API + LangChain.py
- **Workflow Engine:** Prefect (optional)
- **Database:** PostgreSQL / MongoDB
- **Testing:** Pytest
- **Deployment:** Docker, Kubernetes, AWS/GCP

---

### Python Coding Standards

#### 1. Code Style

**Follow PEP 8 strictly:**

```python
# Use ruff or black for automatic formatting
# pyproject.toml
[tool.black]
line-length = 100
target-version = ['py311']

[tool.ruff]
line-length = 100
select = ["E", "F", "I", "N", "W"]
```

**Naming conventions:**

```python
# ✅ Good
class UserService:
    def get_user_by_id(self, user_id: int) -> User:
        pass

# Constants
MAX_RETRY_ATTEMPTS = 3
API_BASE_URL = "https://api.example.com"

# Private methods
def _internal_helper(self) -> None:
    pass
```

#### 2. Type Hints (Mandatory)

**Always use type hints:**

```python
from typing import Optional, List, Dict, Any

# ❌ Bad - No type hints
def get_user(user_id):
    return db.query(User).filter(User.id == user_id).first()

# ✅ Good - Full type hints
def get_user(user_id: int) -> Optional[User]:
    return db.query(User).filter(User.id == user_id).first()

# Complex types
def process_users(
    users: List[User],
    filters: Dict[str, Any],
    limit: Optional[int] = None
) -> List[Dict[str, Any]]:
    pass
```

#### 3. File Structure

```
src/
├── api/
│   ├── __init__.py
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── users.py
│   │   └── auth.py
│   └── dependencies.py
├── services/
│   ├── __init__.py
│   ├── user_service.py
│   └── email_service.py
├── models/
│   ├── __init__.py
│   ├── user.py
│   └── base.py
├── schemas/
│   ├── __init__.py
│   └── user.py
├── core/
│   ├── __init__.py
│   ├── config.py
│   └── database.py
└── utils/
    ├── __init__.py
    └── helpers.py
```

---

### FastAPI Standards

#### 1. Route Organization

```python
# api/routes/users.py
from fastapi import APIRouter, Depends, HTTPException
from typing import List

from schemas.user import UserCreate, UserOut
from services.user_service import UserService
from api.dependencies import get_user_service

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/", response_model=List[UserOut])
async def get_users(
    skip: int = 0,
    limit: int = 100,
    user_service: UserService = Depends(get_user_service)
) -> List[UserOut]:
    """Get all users with pagination."""
    return user_service.get_all(skip=skip, limit=limit)

@router.get("/{user_id}", response_model=UserOut)
async def get_user(
    user_id: int,
    user_service: UserService = Depends(get_user_service)
) -> UserOut:
    """Get user by ID."""
    user = user_service.get_by_id(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.post("/", response_model=UserOut, status_code=201)
async def create_user(
    user_data: UserCreate,
    user_service: UserService = Depends(get_user_service)
) -> UserOut:
    """Create new user."""
    return user_service.create(user_data)
```

#### 2. Pydantic Models

**Always use Pydantic v2:**

```python
# schemas/user.py
from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    """Base user schema."""
    email: EmailStr
    name: str = Field(..., min_length=1, max_length=100)
    is_active: bool = True

class UserCreate(UserBase):
    """Schema for creating user."""
    password: str = Field(..., min_length=8)

class UserUpdate(BaseModel):
    """Schema for updating user."""
    email: Optional[EmailStr] = None
    name: Optional[str] = Field(None, min_length=1, max_length=100)
    is_active: Optional[bool] = None

class UserOut(UserBase):
    """Schema for user output."""
    id: int
    created_at: datetime
    updated_at: datetime
    
    model_config = ConfigDict(from_attributes=True)

class UserInDB(UserOut):
    """Schema for user in database (includes password)."""
    hashed_password: str
```

#### 3. Dependency Injection

```python
# api/dependencies.py
from typing import Generator
from sqlalchemy.orm import Session

from core.database import SessionLocal
from services.user_service import UserService

def get_db() -> Generator[Session, None, None]:
    """Get database session."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_user_service(db: Session = Depends(get_db)) -> UserService:
    """Get user service instance."""
    return UserService(db)
```

#### 4. Error Handling

```python
from fastapi import HTTPException, status

class UserNotFoundError(Exception):
    """Raised when user is not found."""
    pass

class ValidationError(Exception):
    """Raised when validation fails."""
    pass

# In service
class UserService:
    def get_by_id(self, user_id: int) -> User:
        user = self.repository.get(user_id)
        if not user:
            raise UserNotFoundError(f"User {user_id} not found")
        return user

# In route
@router.get("/{user_id}")
async def get_user(user_id: int, service: UserService = Depends()):
    try:
        return service.get_by_id(user_id)
    except UserNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
```

---

### Celery Background Jobs

#### 1. Task Structure

```python
# tasks/email_tasks.py
from celery import Task
from typing import Dict, Any

from core.celery_app import celery_app
from services.email_service import EmailService

class BaseTask(Task):
    """Base task with error handling."""
    
    def on_failure(self, exc, task_id, args, kwargs, einfo):
        """Handle task failure."""
        logger.error(f"Task {task_id} failed: {exc}")

@celery_app.task(
    bind=True,
    base=BaseTask,
    autoretry_for=(Exception,),
    retry_backoff=5,
    retry_kwargs={"max_retries": 3}
)
def send_welcome_email(self, user_id: int) -> Dict[str, Any]:
    """Send welcome email to user."""
    email_service = EmailService()
    
    try:
        result = email_service.send_welcome(user_id)
        return {"success": True, "user_id": user_id}
    except Exception as e:
        logger.error(f"Failed to send email to user {user_id}: {e}")
        raise
```

#### 2. Task Standards

**Tasks must be idempotent:**

```python
@celery_app.task
def process_order(order_id: int) -> Dict[str, Any]:
    """Process order (idempotent)."""
    
    # Check if already processed
    order = db.query(Order).filter(Order.id == order_id).first()
    if order.status == "processed":
        return {"skipped": True, "reason": "Already processed"}
    
    # Process order
    with db.begin():
        order.status = "processing"
        db.commit()
        
        try:
            # Do processing
            process_payment(order)
            send_confirmation(order)
            
            order.status = "processed"
            db.commit()
        except Exception as e:
            order.status = "failed"
            db.commit()
            raise
    
    return {"success": True, "order_id": order_id}
```

#### 3. Task Configuration

```python
# core/celery_app.py
from celery import Celery

celery_app = Celery(
    "skymirror",
    broker="redis://localhost:6379/0",
    backend="redis://localhost:6379/1",
)

celery_app.conf.update(
    task_serializer="json",
    accept_content=["json"],
    result_serializer="json",
    timezone="UTC",
    enable_utc=True,
    task_track_started=True,
    task_time_limit=300,  # 5 minutes
    task_soft_time_limit=240,  # 4 minutes
)
```

---

### AI Integration (Gemini + LangChain.py)

#### 1. Prompt Management

```python
# prompts/user_summary.py
USER_SUMMARY_PROMPT = """
You are a helpful assistant that summarizes user profiles.

User Data:
{user_data}

Provide a concise 2-3 sentence summary highlighting:
- Key information
- Activity patterns
- Notable characteristics
""".strip()
```

**Usage:**

```python
from langchain_google_genai import ChatGoogleGenerativeAI
from prompts.user_summary import USER_SUMMARY_PROMPT

class UserSummaryService:
    def __init__(self):
        self.llm = ChatGoogleGenerativeAI(
            model="gemini-pro",
            google_api_key=settings.GEMINI_API_KEY
        )
    
    async def summarize_user(self, user: User) -> str:
        """Generate user summary using LLM."""
        prompt = USER_SUMMARY_PROMPT.format(
            user_data=user.model_dump_json()
        )
        
        response = await self.llm.ainvoke(prompt)
        return response.content
```

#### 2. LangChain Chains

```python
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.output_parsers import PydanticOutputParser

class SummaryOutput(BaseModel):
    """Structured output for summary."""
    summary: str
    key_points: List[str]
    sentiment: str

class SummaryChain:
    def __init__(self):
        self.llm = ChatGoogleGenerativeAI(model="gemini-pro")
        self.parser = PydanticOutputParser(pydantic_object=SummaryOutput)
        
        self.prompt = PromptTemplate(
            template="""
            Summarize the following text:
            {text}
            
            {format_instructions}
            """,
            input_variables=["text"],
            partial_variables={
                "format_instructions": self.parser.get_format_instructions()
            }
        )
        
        self.chain = self.prompt | self.llm | self.parser
    
    async def run(self, text: str) -> SummaryOutput:
        """Run summary chain."""
        return await self.chain.ainvoke({"text": text})
```

#### 3. Logging & Monitoring

```python
import logging
from typing import Any, Dict
from datetime import datetime

logger = logging.getLogger(__name__)

class LLMLogger:
    """Logger for LLM interactions."""
    
    @staticmethod
    async def log_call(
        prompt: str,
        response: str,
        model: str,
        duration: float,
        metadata: Dict[str, Any] = None
    ) -> None:
        """Log LLM call."""
        log_data = {
            "timestamp": datetime.utcnow().isoformat(),
            "model": model,
            "prompt_length": len(prompt),
            "response_length": len(response),
            "duration_ms": duration * 1000,
            "metadata": metadata or {}
        }
        
        logger.info("LLM call completed", extra=log_data)

# Usage
async def call_llm(prompt: str) -> str:
    start_time = datetime.utcnow()
    
    try:
        response = await llm.ainvoke(prompt)
        duration = (datetime.utcnow() - start_time).total_seconds()
        
        await LLMLogger.log_call(
            prompt=prompt,
            response=response.content,
            model="gemini-pro",
            duration=duration
        )
        
        return response.content
    except Exception as e:
        logger.error(f"LLM call failed: {e}")
        raise
```

---

## Universal Standards (Both Stacks)

### Testing Standards

#### 1. Test Structure

**TypeScript (Bun Test):**
```typescript
import { describe, it, expect, beforeEach } from "bun:test";
import { UserService } from "./user.service";

describe("UserService", () => {
  let userService: UserService;
  
  beforeEach(() => {
    userService = new UserService();
  });
  
  describe("getById", () => {
    it("should return user when found", async () => {
      const user = await userService.getById("123");
      expect(user).toBeDefined();
      expect(user.id).toBe("123");
    });
    
    it("should throw error when user not found", async () => {
      expect(async () => {
        await userService.getById("invalid");
      }).toThrow("User not found");
    });
  });
});
```

**Python (Pytest):**
```python
import pytest
from services.user_service import UserService
from models.user import User

class TestUserService:
    """Test suite for UserService."""
    
    @pytest.fixture
    def user_service(self):
        """Create user service instance."""
        return UserService()
    
    def test_get_by_id_success(self, user_service):
        """Test getting user by ID successfully."""
        user = user_service.get_by_id(123)
        assert user is not None
        assert user.id == 123
    
    def test_get_by_id_not_found(self, user_service):
        """Test getting non-existent user."""
        with pytest.raises(UserNotFoundError):
            user_service.get_by_id(999)
```

#### 2. Test Coverage

**Minimum Requirements:**
- Unit tests: 80%+ coverage
- Integration tests for critical paths
- E2E tests for main user flows

**What to Test:**
- ✅ Services (business logic)
- ✅ Utilities (helper functions)
- ✅ Complex algorithms
- ❌ Routes (test via integration tests)
- ❌ Simple getters/setters

#### 3. Test Naming

```python
# Pattern: test_<method>_<scenario>_<expected_result>

def test_create_user_with_valid_data_returns_user():
    pass

def test_create_user_with_duplicate_email_raises_error():
    pass

def test_get_users_with_pagination_returns_correct_count():
    pass
```

---

### Git Standards

#### 1. Commit Messages

**Format:**
```
<type>(<scope>): <subject> [TICKET-ID]

<body>

<footer>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting
- `refactor` - Code restructuring
- `test` - Adding tests
- `chore` - Maintenance

**Examples:**
```
feat(auth): add OAuth2 login support SKY-123

- Implement Google OAuth2 flow
- Add user session management
- Update login UI

Closes SKY-123
```

```
fix(payment): resolve API timeout issue SKY-456

The payment API was timing out due to missing
retry logic. Added exponential backoff.

Fixes SKY-456
```

#### 2. Branch Strategy

```
main (production)
  ├── develop (integration)
  │   ├── feature/SKY-123-add-oauth
  │   ├── feature/SKY-124-user-profile
  │   └── bugfix/SKY-125-fix-timeout
  └── hotfix/SKY-126-critical-security
```

**Branch Naming:**
```
feature/<ticket-id>-<brief-description>
bugfix/<ticket-id>-<brief-description>
hotfix/<ticket-id>-<brief-description>
chore/<ticket-id>-<brief-description>
```

---

### Code Review Standards

#### 1. PR Size

**Ideal PR:**
- 200-400 lines changed
- Single responsibility
- Reviewable in 15-30 minutes

**If PR is large (>500 lines):**
- Break into smaller PRs
- Or: Add detailed description and walkthrough

#### 2. PR Checklist

**Before Creating PR:**
- [ ] All tests pass
- [ ] Code follows style guide
- [ ] No debug code (console.log, print statements)
- [ ] Documentation updated
- [ ] No secrets in code
- [ ] Commits are clean

**PR Description Must Include:**
- [ ] What changed
- [ ] Why it changed
- [ ] How to test
- [ ] Screenshots (if UI)
- [ ] Breaking changes (if any)

#### 3. Review Guidelines

**As Author:**
- Respond to all comments
- Be open to feedback
- Explain your reasoning
- Make requested changes promptly

**As Reviewer:**
- Be constructive and kind
- Explain the "why" behind suggestions
- Approve when ready (don't nitpick)
- Use conventional comments:
  - `nit:` - Minor suggestion
  - `question:` - Asking for clarification
  - `blocker:` - Must be fixed

---

### Security Standards

#### 1. Never Commit Secrets

**❌ Bad:**
```typescript
const API_KEY = "sk-1234567890abcdef";
```

**✅ Good:**
```typescript
const API_KEY = process.env.GEMINI_API_KEY;
```

**Use `.env` files:**
```bash
# .env (gitignored)
GEMINI_API_KEY=sk-1234567890abcdef
DATABASE_URL=postgresql://localhost/db
```

#### 2. Input Validation

**Always validate user input:**

```typescript
// TypeScript
import { z } from "zod";

const UserInputSchema = z.object({
  email: z.string().email(),
  age: z.number().int().positive().max(150),
});
```

```python
# Python
from pydantic import BaseModel, EmailStr, Field

class UserInput(BaseModel):
    email: EmailStr
    age: int = Field(gt=0, le=150)
```

#### 3. SQL Injection Prevention

**❌ Bad - String concatenation:**
```python
query = f"SELECT * FROM users WHERE email = '{email}'"
```

**✅ Good - Parameterized queries:**
```python
query = "SELECT * FROM users WHERE email = :email"
result = db.execute(query, {"email": email})
```

---

## Development Environment Setup

### Prerequisites

**Both Stacks:**
- Git
- Docker
- VS Code or Cursor
- Terminal (iTerm2, Warp, or default)

**Stack 1 (TypeScript/Bun):**
- Bun (latest version)
- Node.js 18+ (for compatibility)

**Stack 2 (Python):**
- Python 3.11+
- Poetry or pip

---

### Stack 1 Setup: TypeScript/Bun

#### 1. Install Bun

```bash
# macOS/Linux
curl -fsSL https://bun.sh/install | bash

# Verify installation
bun --version
```

#### 2. Project Setup

```bash
# Clone repository
git clone <repo-url>
cd project

# Install dependencies
bun install

# Setup environment
cp .env.example .env
# Edit .env with your values

# Run development server
bun run dev

# Run tests
bun test
```

#### 3. VS Code Extensions

```json
{
  "recommendations": [
    "oven.bun-vscode",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "eamodio.gitlens"
  ]
}
```

---

### Stack 2 Setup: Python

#### 1. Install Python 3.11+

```bash
# macOS (using Homebrew)
brew install python@3.11

# Verify
python3.11 --version
```

#### 2. Project Setup

```bash
# Clone repository
git clone <repo-url>
cd project

# Create virtual environment
python3.11 -m venv venv
source venv/bin/activate  # macOS/Linux
# or: venv\Scripts\activate  # Windows

# Install dependencies
pip install -r requirements.txt

# Setup environment
cp .env.example .env
# Edit .env with your values

# Run development server
uvicorn main:app --reload

# Run tests
pytest
```

#### 3. VS Code Extensions

```json
{
  "recommendations": [
    "ms-python.python",
    "ms-python.vscode-pylance",
    "charliermarsh.ruff",
    "eamodio.gitlens"
  ]
}
```

---

### Antigravity Setup

**Purpose:** Standardized development environment

```bash
# Install Antigravity CLI
npm install -g @antigravity/cli

# Initialize in project
cd your-project
antigravity init

# Start environment
antigravity start

# Verify
antigravity status
```

---

### Claude Code (GLM) Setup

**Purpose:** AI-powered coding assistant

#### Installation

```bash
# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Configure GLM (recommended)
npx @z_ai/coding-helper
```

#### Usage

```bash
# Start in project directory
cd your-project
claude

# Example commands
> Explain this codebase
> Fix this failing test in user.test.ts
> Refactor the UserService class
> Write unit tests for the auth module
> Why is the API endpoint slow?
```

#### Best Practices

- Use for code explanation
- Use for debugging help
- Use for test generation
- Don't blindly copy code (understand it first)
- Verify AI suggestions

---

## Intern Code Review Checklist

### Before Submitting PR

- [ ] Code runs without errors
- [ ] All tests pass
- [ ] Linter passes (no warnings)
- [ ] Code formatted (Prettier/Black)
- [ ] No console.log or print statements
- [ ] No commented-out code
- [ ] Secrets in environment variables
- [ ] Documentation updated
- [ ] Commit messages follow convention
- [ ] PR description complete

### Self-Review Questions

- [ ] Is this code readable?
- [ ] Would I understand this in 6 months?
- [ ] Are variable names descriptive?
- [ ] Is there duplicated code?
- [ ] Are edge cases handled?
- [ ] Is error handling appropriate?
- [ ] Are there security concerns?
- [ ] Is performance acceptable?

---

## Common Mistakes to Avoid

### TypeScript/Bun

❌ Using `any` type
❌ Not validating external data
❌ Business logic in routes
❌ Blocking I/O operations
❌ Missing error handling
❌ Not using async/await properly

### Python

❌ Missing type hints
❌ Not using Pydantic models
❌ Mutable default arguments
❌ Not using context managers
❌ Ignoring PEP 8
❌ Not handling exceptions

### Universal

❌ Committing secrets
❌ Large PRs (>500 lines)
❌ Vague commit messages
❌ No tests
❌ Copy-pasting without understanding
❌ Not asking questions when stuck

---

## Resources

### TypeScript/Bun Stack

- [Bun Documentation](https://bun.sh/docs)
- [ElysiaJS Documentation](https://elysiajs.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Zod Documentation](https://zod.dev)
- [LangChain.js Documentation](https://js.langchain.com)

### Python Stack

- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [Pydantic Documentation](https://docs.pydantic.dev)
- [Celery Documentation](https://docs.celeryq.dev)
- [LangChain.py Documentation](https://python.langchain.com)
- [Python Type Hints](https://docs.python.org/3/library/typing.html)

### General

- [Git Best Practices](https://git-scm.com/book/en/v2)
- [Clean Code Principles](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Testing Best Practices](https://martinfowler.com/testing/)

---

## Getting Help

**Questions about standards?**
- Ask in #interns-2025
- Message your mentor
- Check team wiki

**Code review feedback?**
- Read carefully
- Ask for clarification
- Learn from it

**Stuck on setup?**
- Check #it-help
- Review setup docs
- Ask mentor

---

**Ready to code?** Review the [Playbook](./internship-playbook.md) for daily workflows and the [Roadmap](./internship-roadmap.md) for your week-by-week plan!
