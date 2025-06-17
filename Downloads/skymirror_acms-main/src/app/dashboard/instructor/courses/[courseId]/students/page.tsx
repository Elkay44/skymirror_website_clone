'use client';

import { PageLayout } from './_components/PageLayout';
import { Search, Filter, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useParams } from 'next/navigation';

export default function StudentsPage({ searchParams }: { searchParams: { status?: string } }) {
  const params = useParams();
  const courseId = params.courseId as string;

  return (
    <PageLayout title="Course Students" courseId={courseId}>
      <div className="space-y-6">
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <div className="flex-1 min-w-[240px] relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search students..."
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Student
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          {/* Table would go here - simplified for this example */}
          <div className="p-8 text-center text-sm text-gray-500">
            No students enrolled in this course yet.
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
