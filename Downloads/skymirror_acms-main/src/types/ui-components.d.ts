declare module '@/components/ui/button' {
  import { ButtonHTMLAttributes, ReactNode } from 'react';

  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    asChild?: boolean;
    className?: string;
    children?: ReactNode;
    onClick?: (e: any) => void;
    disabled?: boolean | any;
  }

  export const Button: React.FC<ButtonProps>;
}

declare module '@/components/ui/input' {
  import { InputHTMLAttributes } from 'react';

  export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    id?: string;
    name?: string;
    value?: any;
    placeholder?: string;
    type?: string;
    min?: string;
    step?: string;
    disabled?: boolean;
    onChange?: (e: any) => void;
  }

  export const Input: React.FC<InputProps>;
}

declare module '@/components/ui/label' {
  import React from 'react';

  export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    htmlFor?: string;
    className?: string;
  }

  export const Label: React.FC<LabelProps>;
}

declare module '@/components/ui/textarea' {
  import { TextareaHTMLAttributes } from 'react';

  export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    id?: string;
    name?: string;
    value?: any;
    rows?: number;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (e: any) => void;
  }

  export const Textarea: React.FC<TextareaProps>;
}

declare module '@/components/ui/switch' {
  import React from 'react';

  export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    className?: string;
  }

  export const Switch: React.FC<SwitchProps>;
}

declare module '@/components/ui/tabs' {
  import React from 'react';

  export interface TabsProps {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
    children: React.ReactNode;
  }

  export interface TabsListProps {
    className?: string;
    children: React.ReactNode;
  }

  export interface TabsTriggerProps {
    value: string;
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
  }

  export interface TabsContentProps {
    value: string;
    className?: string;
    children: React.ReactNode;
  }

  export const Tabs: React.FC<TabsProps>;
  export const TabsList: React.FC<TabsListProps>;
  export const TabsTrigger: React.FC<TabsTriggerProps>;
  export const TabsContent: React.FC<TabsContentProps>;
}

declare module '@/components/ui/card' {
  import React from 'react';

  export interface CardProps {
    className?: string;
    children: React.ReactNode;
  }

  export interface CardHeaderProps {
    className?: string;
    children: React.ReactNode;
  }

  export interface CardTitleProps {
    className?: string;
    children: React.ReactNode;
  }

  export interface CardDescriptionProps {
    className?: string;
    children: React.ReactNode;
  }

  export interface CardContentProps {
    className?: string;
    children: React.ReactNode;
  }

  export const Card: React.FC<CardProps>;
  export const CardHeader: React.FC<CardHeaderProps>;
  export const CardTitle: React.FC<CardTitleProps>;
  export const CardDescription: React.FC<CardDescriptionProps>;
  export const CardContent: React.FC<CardContentProps>;
}
