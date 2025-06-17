// src/lib/course-api.ts

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

interface CreateCourseData {
  title: string;
  description: string;
  imageUrl?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  isPublished?: boolean;
  price?: number;
  category?: string;
}

export async function createCourse(courseData: CreateCourseData): Promise<ApiResponse<{ id: string }>> {
  try {
    const response = await fetch('/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(courseData),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Failed to create course',
      };
    }

    return {
      success: true,
      data: { id: data.id },
    };
  } catch (error) {
    console.error('Error creating course:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}
