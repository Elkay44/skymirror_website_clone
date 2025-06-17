'use client';

// Workaround for React type issues
import React from 'react';

// Import hooks directly to avoid namespace issues
import { useState, useEffect } from 'react';

// Event type aliases
type BaseSyntheticEvent = {
  preventDefault: () => void;
  target: any;
};

type FormEventType = BaseSyntheticEvent & {};
type ChangeEventType<T = Element> = BaseSyntheticEvent & {
  target: T & {
    name: string;
    value: string;
  };
};
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, ArrowLeft, Save, Eye } from 'lucide-react';
import { CourseBuilder } from '@/components/course-builder/CourseBuilder';

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

export default function CreateCoursePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('builder');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [courseData, setCourseData] = useState<CourseFormData>({
    title: 'Untitled Course',
    description: '',
    slug: '',
    price: 0,
    isFree: true,
    status: 'draft' as CourseStatus,
    category: '',
    level: 'beginner' as 'beginner' | 'intermediate' | 'advanced',
    language: 'English',
    imageUrl: '',
    welcomeMessage: '',
    congratulationsMessage: '',
  });

  // Generate slug from title
  useEffect(() => {
    const slug = courseData.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
    setCourseData((prev: CourseFormData) => ({ ...prev, slug }));
  }, [courseData.title]);

  const handleInputChange = (e: ChangeEventType<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCourseData((prev: CourseFormData) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setCourseData((prev: CourseFormData) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: FormEventType) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Implement API call to save course
      console.log('Submitting course:', courseData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to courses list or edit page
      router.push('/dashboard/instructor/courses');
    } catch (error) {
      console.error('Error creating course:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled={isSubmitting}>
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button size="sm" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Course'}
            <Save className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="builder">Course Builder</TabsTrigger>
          <TabsTrigger value="settings">Course Settings</TabsTrigger>
          <TabsTrigger value="publish">Publish</TabsTrigger>
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
                  <select
                    id="category"
                    name="category"
                    value={courseData.category}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a category</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="level">Level</Label>
                  <select
                    id="level"
                    name="level"
                    value={courseData.level}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <select
                    id="language"
                    name="language"
                    value={courseData.language}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Japanese">Japanese</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="isFree" className="font-medium">Pricing</Label>
                    <p className="text-sm text-gray-500">Set the price for your course</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-700">Free</span>
                    <Switch
                      id="isFree"
                      checked={!courseData.isFree}
                      onCheckedChange={(checked: boolean) => handleSwitchChange('isFree', !checked)}
                    />
                    <span className="text-sm text-gray-700">Paid</span>
                  </div>
                </div>

                {!courseData.isFree && (
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (USD)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        value={courseData.price}
                        onChange={handleInputChange}
                        className="pl-8"
                        min="0"
                        step="0.01"
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Messages</CardTitle>
              <CardDescription>
                Customize the messages students will see when they enroll in and complete your course.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="welcomeMessage">Welcome Message</Label>
                <Textarea
                  id="welcomeMessage"
                  name="welcomeMessage"
                  value={courseData.welcomeMessage}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Welcome to [Course Name]! We're excited to have you here..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="congratulationsMessage">Congratulations Message</Label>
                <Textarea
                  id="congratulationsMessage"
                  name="congratulationsMessage"
                  value={courseData.congratulationsMessage}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Congratulations on completing [Course Name]! You've done an amazing job..."
                />
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
                <h3 className="font-medium">Course Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="draft"
                      name="status"
                      value="draft"
                      checked={courseData.status === 'draft'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <div>
                      <Label htmlFor="draft" className="font-normal">Draft</Label>
                      <p className="text-sm text-gray-500">Save as draft (not visible to students)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="published"
                      name="status"
                      value="published"
                      checked={courseData.status === 'published'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <div>
                      <Label htmlFor="published" className="font-normal">Published</Label>
                      <p className="text-sm text-gray-500">Publish course (visible to students)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Saving...' : 'Save & Publish Course'}
                </Button>
                <p className="mt-2 text-sm text-gray-500">
                  {courseData.status === 'published' 
                    ? 'Your course will be published and visible to students.' 
                    : 'Your course will be saved as a draft.'}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
