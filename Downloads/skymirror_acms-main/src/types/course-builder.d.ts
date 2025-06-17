declare module '@/components/course-builder/CourseBuilder' {
  export interface CourseBuilderProps {
    initialModules?: any[];
    onChange?: (modules: any[]) => void;
    readOnly?: boolean;
  }
  
  export const CourseBuilder: React.FC<CourseBuilderProps>;
}
