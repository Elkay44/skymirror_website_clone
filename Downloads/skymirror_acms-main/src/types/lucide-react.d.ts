declare module 'lucide-react' {
  import { ComponentType } from 'react';

  export interface LucideProps {
    color?: string;
    size?: string | number;
    strokeWidth?: string | number;
    className?: string;
    'aria-hidden'?: boolean | string;
  }

  // Export all icon components
  export const ArrowLeft: ComponentType<LucideProps>;
  export const Plus: ComponentType<LucideProps>;
  export const Save: ComponentType<LucideProps>;
  export const Eye: ComponentType<LucideProps>;
  export const Bell: ComponentType<LucideProps>;
  export const Check: ComponentType<LucideProps>;
  export const Star: ComponentType<LucideProps>;
  export const MessageSquare: ComponentType<LucideProps>;
  export const MessageSquareText: ComponentType<LucideProps>;
  export const FileCheck: ComponentType<LucideProps>;
  export const Users: ComponentType<LucideProps>;
  export const Search: ComponentType<LucideProps>;
  export const Filter: ComponentType<LucideProps>;
  export const UserPlus: ComponentType<LucideProps>;
  export const MoreVertical: ComponentType<LucideProps>;
  export const BarChart2: ComponentType<LucideProps>;
  export const Clock: ComponentType<LucideProps>;
  export const BookOpen: ComponentType<LucideProps>;
  export const CheckCircle: ComponentType<LucideProps>;
  export const Pencil: ComponentType<LucideProps>;
  export const Trash2: ComponentType<LucideProps>;
  export const FileText: ComponentType<LucideProps>;
  
  // Add other icon types as needed
}
