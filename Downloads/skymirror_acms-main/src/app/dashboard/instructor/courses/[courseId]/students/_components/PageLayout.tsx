import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  courseId: string;
}

export function PageLayout({ children, title, courseId }: PageLayoutProps) {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href={`/dashboard/instructor/courses/${courseId}`}>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </div>
      <Card className="p-6">
        {children}
      </Card>
    </div>
  );
}
