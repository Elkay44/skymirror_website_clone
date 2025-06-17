'use client';

import * as React from "react";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { ArrowLeft, Save, Eye } from 'lucide-react';

// UI Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Type definitions
type CourseStatus = 'draft' | 'published' | 'archived';

interface CourseFormData {
  title: string;
  description: string;
  slug: string;
  price: number;
  isFree: boolean;
  status: CourseStatus;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  language: string;
  imageUrl: string;
  welcomeMessage: string;
  congratulationsMessage: string;
}

interface InputEvent {
  target: {
    name: string;
    value: string;
    type?: string;
    checked?: boolean;
  };
}

interface FormEvent {
  preventDefault?: () => void;
}

// API Client
const createCourse = async (data: CourseFormData) => {
  try {
    const response = await fetch('/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to create course:', error);
    throw error;
  }
};

// Course Builder Component (placeholder)
const CourseBuilder = () => {
  return (
    <div className="border-2 border-dashed rounded-lg p-8 text-center">
      <h3 className="text-lg font-medium mb-2">Course Builder</h3>
      <p className="text-sm text-gray-500 mb-4">Add modules, lessons, quizzes, and assignments to build your course content.</p>
      <Button variant="outline" size="sm">
        <Eye className="h-4 w-4 mr-2" />
        Add Module
      </Button>
    </div>
  );
};

export default function CreateCoursePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState('builder');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [courseData, setCourseData] = React.useState<CourseFormData>({
    title: 'Untitled Course',
    description: '',
    slug: '',
    price: 0,
    isFree: true,
    status: 'draft',
    category: '',
    level: 'beginner',
    language: 'English',
    imageUrl: '',
    welcomeMessage: '',
    congratulationsMessage: '',
  });

  // Generate slug from title
  React.useEffect(() => {
    const slug = courseData.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
    setCourseData((prev: CourseFormData) => ({ ...prev, slug }));
  }, [courseData.title]);

  const handleInputChange = (e: InputEvent) => {
    const { name, value, type } = e.target;
    setCourseData((prev: CourseFormData) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setCourseData((prev: CourseFormData) => ({ ...prev, [name]: checked }));
  };

  const handlePriceChange = (e: InputEvent) => {
    const { value } = e.target;
    // Allow only numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setCourseData((prev: CourseFormData) => ({
        ...prev,
        price: value === '' ? 0 : parseFloat(value)
      }));
    }
  };

  const handleSubmit = async (e?: FormEvent) => {
    if (e?.preventDefault) e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Basic validation
      if (!courseData.title.trim()) {
        toast.error('Course title is required');
        setIsSubmitting(false);
        return;
      }

      const coursePayload = {
        ...courseData,
        // Ensure slug is URL-friendly
        slug: courseData.slug
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/--+/g, '-')
      };
      
      const response = await createCourse(coursePayload);
      console.log('Course created successfully:', response);
      toast.success('Course created successfully!');
      router.push('/dashboard/instructor/courses');
    } catch (error) {
      console.error('Error creating course:', error);
      toast.error('Failed to create course. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => router.back()}
            className="flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled={isSubmitting}>
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button 
            variant="default" 
            size="sm"
            onClick={() => handleSubmit()}
            disabled={isSubmitting}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {isSubmitting ? (
              <>
                <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-t-transparent" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Create Course
              </>
            )}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 mb-8 max-w-md">
          <TabsTrigger 
            value="builder"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            Course Builder
          </TabsTrigger>
          <TabsTrigger 
            value="settings"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            Course Settings
          </TabsTrigger>
          <TabsTrigger 
            value="publish"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            Publish
          </TabsTrigger>
        </TabsList>

        <TabsContent value="builder" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
              <CardDescription>
                Build your course content with modules, lessons, quizzes, and assignments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CourseBuilder />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Information</CardTitle>
              <CardDescription>
                Set up the basic information and settings for your course.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Course Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={courseData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Introduction to Web Development"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug">Course URL</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      academy.com/courses/
                    </span>
                    <Input
                      id="slug"
                      name="slug"
                      value={courseData.slug}
                      onChange={handleInputChange}
                      className="rounded-l-none"
                      placeholder="course-url"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Course Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={courseData.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="What will students learn in this course?"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={courseData.category}
                    onValueChange={(value: string) => setCourseData((prev: CourseFormData) => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="mobile-development">Mobile Development</SelectItem>
                      <SelectItem value="data-science">Data Science</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="level">Level</Label>
                  <Select
                    value={courseData.level}
                    onValueChange={(value: 'beginner' | 'intermediate' | 'advanced') => 
                      setCourseData((prev: CourseFormData) => ({ ...prev, level: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select
                    value={courseData.language}
                    onValueChange={(value: string) => setCourseData((prev: CourseFormData) => ({ ...prev, language: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Spanish">Spanish</SelectItem>
                      <SelectItem value="French">French</SelectItem>
                      <SelectItem value="German">German</SelectItem>
                      <SelectItem value="Chinese">Chinese</SelectItem>
                      <SelectItem value="Japanese">Japanese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="isFree">Free Course</Label>
                    <Switch
                      id="isFree"
                      checked={courseData.isFree}
                      onCheckedChange={(checked: boolean) => handleSwitchChange('isFree', checked)}
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Enable to make this course free for all students.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Course Price ($)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="text"
                    value={courseData.price === 0 ? '' : courseData.price.toString()}
                    onChange={handlePriceChange}
                    disabled={courseData.isFree}
                    placeholder="e.g., 29.99"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
            
        <TabsContent value="publish" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Publish Course</CardTitle>
              <CardDescription>
                Review your course details and publish it to make it available to students.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Ready to publish your course?</h3>
                <p className="text-sm text-gray-600">
                  Before publishing, please review all the course information to ensure everything is correct.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveTab('settings')}
                  >
                    Back to Settings
                  </Button>
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => handleSubmit()}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Publishing...' : 'Publish Course'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
