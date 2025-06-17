'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreVertical, Plus, Search, Filter, BarChart2, Users, Clock, BookOpen, CheckCircle, Eye, Pencil, Trash2, FileText } from 'lucide-react';

type CourseStatus = 'draft' | 'published' | 'archived';

interface Course {
  id: string;
  title: string;
  description: string;
  status: CourseStatus;
  imageUrl?: string;
  students: number;
  rating: number;
  lessons: number;
  duration: number; // in minutes
  lastUpdated: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export default function InstructorCoursesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  // Mock data - replace with API call in production
  useEffect(() => {
    const fetchCourses = async () => {
      // Simulate API call
      setIsLoading(true);
      try {
        // In a real app, you would fetch this from your API
        const mockCourses: Course[] = [
          {
            id: '1',
            title: 'Introduction to Web Development',
            description: 'Learn the basics of web development with HTML, CSS, and JavaScript.',
            status: 'published',
            imageUrl: '/placeholder-course.jpg',
            students: 1245,
            rating: 4.7,
            lessons: 24,
            duration: 360,
            lastUpdated: '2023-10-15',
            category: 'Web Development',
            level: 'beginner'
          },
          {
            id: '2',
            title: 'Advanced React Patterns',
            description: 'Master advanced React patterns and best practices for building scalable applications.',
            status: 'published',
            imageUrl: '/placeholder-course-2.jpg',
            students: 845,
            rating: 4.9,
            lessons: 18,
            duration: 480,
            lastUpdated: '2023-11-02',
            category: 'Web Development',
            level: 'advanced'
          },
          {
            id: '3',
            title: 'Mobile App Design with Figma',
            description: 'Learn how to design beautiful mobile apps using Figma from scratch.',
            status: 'draft',
            imageUrl: '/placeholder-course-3.jpg',
            students: 0,
            rating: 0,
            lessons: 12,
            duration: 240,
            lastUpdated: '2023-11-10',
            category: 'Design',
            level: 'intermediate'
          },
          {
            id: '4',
            title: 'Data Science Fundamentals',
            description: 'Learn the fundamentals of data science with Python and popular libraries.',
            status: 'published',
            imageUrl: '/placeholder-course-4.jpg',
            students: 2103,
            rating: 4.8,
            lessons: 30,
            duration: 720,
            lastUpdated: '2023-09-28',
            category: 'Data Science',
            level: 'beginner'
          },
          {
            id: '5',
            title: 'Advanced Machine Learning',
            description: 'Dive deep into advanced machine learning algorithms and techniques.',
            status: 'published',
            imageUrl: '/placeholder-course-5.jpg',
            students: 932,
            rating: 4.9,
            lessons: 28,
            duration: 840,
            lastUpdated: '2023-10-20',
            category: 'Data Science',
            level: 'advanced'
          },
          {
            id: '6',
            title: 'DevOps and CI/CD',
            description: 'Master DevOps practices and implement CI/CD pipelines like a pro.',
            status: 'published',
            imageUrl: '/placeholder-course-6.jpg',
            students: 567,
            rating: 4.6,
            lessons: 20,
            duration: 600,
            lastUpdated: '2023-11-05',
            category: 'DevOps',
            level: 'intermediate'
          }
        ];

        setCourses(mockCourses);
        setFilteredCourses(mockCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Filter courses based on search query and active tab
  useEffect(() => {
    let result = [...courses];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        course =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.category.toLowerCase().includes(query)
      );
    }
    
    // Apply status filter
    if (activeTab !== 'all') {
      result = result.filter(course => course.status === activeTab);
    }
    
    setFilteredCourses(result);
  }, [searchQuery, activeTab, courses]);

  const getStatusBadge = (status: CourseStatus) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-800">Published</Badge>;
      case 'draft':
        return <Badge variant="outline">Draft</Badge>;
      case 'archived':
        return <Badge variant="secondary">Archived</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'beginner':
        return <Badge variant="secondary">Beginner</Badge>;
      case 'intermediate':
        return <Badge variant="secondary">Intermediate</Badge>;
      case 'advanced':
        return <Badge variant="secondary">Advanced</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const handleDeleteCourse = (courseId: string) => {
    // In a real app, you would make an API call to delete the course
    console.log('Deleting course:', courseId);
    setCourses(courses.filter(course => course.id !== courseId));
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
          <p className="text-muted-foreground">
            Create and manage your courses
          </p>
        </div>
        <Button onClick={() => router.push('/dashboard/instructor/courses/new')}>
          <Plus className="h-4 w-4 mr-2" />
          New Course
        </Button>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <TabsList>
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <TabsContent value={activeTab} className="space-y-6">
          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden animate-pulse">
                  <div className="h-40 bg-gray-200 dark:bg-gray-700" />
                  <CardHeader>
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredCourses.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden transition-all hover:shadow-md">
                  <div className="relative h-40 bg-gray-100 dark:bg-gray-800">
                    {course.imageUrl ? (
                      <img
                        src={course.imageUrl}
                        alt={course.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800">
                        <BookOpen className="h-12 w-12 text-blue-400 dark:text-blue-500" />
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      {getStatusBadge(course.status)}
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg line-clamp-2">
                        <Link href={`/dashboard/instructor/courses/${course.id}`} className="hover:underline">
                          {course.title}
                        </Link>
                      </CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Pencil className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            <span onClick={() => handleDeleteCourse(course.id)}>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <CardDescription className="line-clamp-2">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline">{course.category}</Badge>
                      {getLevelBadge(course.level)}
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1.5" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1.5" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1.5" />
                        <span>{formatDuration(course.duration)}</span>
                      </div>
                      <div className="flex items-center">
                        <BarChart2 className="h-4 w-4 mr-1.5" />
                        <span>{course.rating > 0 ? `${course.rating}/5.0` : 'No ratings'}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex justify-between w-full items-center">
                      <span className="text-xs text-muted-foreground">
                        Updated {formatDate(course.lastUpdated)}
                      </span>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/dashboard/instructor/courses/${course.id}`}>
                          Manage
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-1">No courses found</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {searchQuery
                  ? 'No courses match your search. Try a different term.'
                  : activeTab === 'all'
                  ? 'You haven\'t created any courses yet.'
                  : `You don't have any ${activeTab} courses.`}
              </p>
              <Button onClick={() => router.push('/dashboard/instructor/courses/new')}>
                <Plus className="h-4 w-4 mr-2" />
                Create Course
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
