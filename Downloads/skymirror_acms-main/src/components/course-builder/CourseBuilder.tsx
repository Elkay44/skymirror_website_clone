'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2, GripVertical, Video, FileText, MessageSquare, File, ChevronDown, ChevronUp, Edit, Eye, Clock } from 'lucide-react';

interface ContentBlock {
  id: string;
  title: string;
  type: 'video' | 'text' | 'quiz' | 'assignment' | 'resource';
  content: string;
  duration?: number; // in minutes
  isVisible: boolean;
  isPrerequisite: boolean;
}

interface Module {
  id: string;
  title: string;
  description: string;
  content: ContentBlock[];
  isExpanded: boolean;
  isVisible: boolean;
}

interface CourseBuilderProps {
  initialModules?: Module[];
  onChange?: (modules: Module[]) => void;
}

export function CourseBuilder({ initialModules, onChange }: CourseBuilderProps) {
  const [modules, setModules] = useState<Module[]>(initialModules || []);
  const [editingModuleId, setEditingModuleId] = useState<string | null>(null);
  const [editingContentId, setEditingContentId] = useState<string | null>(null);
  const [currentModule, setCurrentModule] = useState<Module | null>(null);
  const [currentContent, setCurrentContent] = useState<ContentBlock | null>(null);

  useEffect(() => {
    if (onChange) {
      onChange(modules);
    }
  }, [modules, onChange]);

  const generateId = () => Math.random().toString(36).substring(2, 9);

  const addNewModule = () => {
    const newModule: Module = {
      id: generateId(),
      title: 'New Module',
      description: '',
      content: [],
      isExpanded: true,
      isVisible: true,
    };
    setModules([...modules, newModule]);
    setEditingModuleId(newModule.id);
  };

  const updateModule = (moduleId: string, updates: Partial<Module>) => {
    const updatedModules = modules.map(module => 
      module.id === moduleId ? { ...module, ...updates } : module
    );
    setModules(updatedModules);
  };

  const deleteModule = (moduleId: string) => {
    const updatedModules = modules.filter(module => module.id !== moduleId);
    setModules(updatedModules);
  };

  const addContentToModule = (moduleId: string, contentType: ContentBlock['type']) => {
    const newContent: ContentBlock = {
      id: generateId(),
      title: `New ${contentType.charAt(0).toUpperCase() + contentType.slice(1)}`,
      type: contentType,
      content: '',
      duration: contentType === 'video' ? 10 : 5,
      isVisible: true,
      isPrerequisite: false,
    };

    const updatedModules = modules.map(module => {
      if (module.id === moduleId) {
        return {
          ...module,
          content: [...module.content, newContent]
        };
      }
      return module;
    });

    setModules(updatedModules);
    setEditingContentId(newContent.id);
    setCurrentModule(modules.find(m => m.id === moduleId) || null);
    setCurrentContent(newContent);
  };

  const updateContent = (moduleId: string, contentId: string, updates: Partial<ContentBlock>) => {
    const updatedModules = modules.map(module => {
      if (module.id === moduleId) {
        const updatedContent = module.content.map(content => 
          content.id === contentId ? { ...content, ...updates } : content
        );
        return { ...module, content: updatedContent };
      }
      return module;
    });
    setModules(updatedModules);
  };

  const deleteContent = (moduleId: string, contentId: string) => {
    const updatedModules = modules.map(module => {
      if (module.id === moduleId) {
        const updatedContent = module.content.filter(content => content.id !== contentId);
        return { ...module, content: updatedContent };
      }
      return module;
    });
    setModules(updatedModules);
  };

  const toggleModuleExpansion = (moduleId: string) => {
    updateModule(moduleId, { isExpanded: !modules.find(m => m.id === moduleId)?.isExpanded });
  };

  const getContentIcon = (type: ContentBlock['type']) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'text': return <FileText className="w-4 h-4" />;
      case 'quiz': return <MessageSquare className="w-4 h-4" />;
      case 'assignment': return <File className="w-4 h-4" />;
      case 'resource': return <File className="w-4 h-4" />;
      default: return <File className="w-4 h-4" />;
    }
  };

  const getTotalDuration = () => {
    let total = 0;
    modules.forEach(module => {
      module.content.forEach(content => {
        if (content.duration) {
          total += content.duration;
        }
      });
    });
    return total;
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-medium">Course Outline</h2>
          <p className="text-sm text-muted-foreground">
            {modules.length} modules, {modules.reduce((sum, module) => sum + module.content.length, 0)} lessons, 
            <span className="ml-1 flex items-center"><Clock className="w-4 h-4 mr-1" /> {formatDuration(getTotalDuration())}</span>
          </p>
        </div>
        <Button onClick={addNewModule}>
          <Plus className="w-4 h-4 mr-2" /> Add Module
        </Button>
      </div>

      <div className="space-y-4">
        {modules.map((module, moduleIndex) => (
          <Card key={module.id} className="relative">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  {editingModuleId === module.id ? (
                    <Input
                      value={module.title}
                      onChange={(e) => updateModule(module.id, { title: e.target.value })}
                      onBlur={() => setEditingModuleId(null)}
                      autoFocus
                      className="font-medium text-lg"
                    />
                  ) : (
                    <div 
                      className="flex items-center cursor-pointer" 
                      onClick={() => toggleModuleExpansion(module.id)}
                    >
                      {module.isExpanded ? (
                        <ChevronDown className="w-5 h-5 mr-2" />
                      ) : (
                        <ChevronUp className="w-5 h-5 mr-2" />
                      )}
                      <CardTitle 
                        className="text-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingModuleId(module.id);
                        }}
                      >
                        {module.title}
                      </CardTitle>
                      <span className="ml-2 text-xs text-muted-foreground">
                        ({module.content.length} items)
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => setEditingModuleId(module.id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => deleteModule(module.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {module.isExpanded && (
              <CardContent>
                <div className="space-y-4 py-2">
                  {/* Module content items */}
                  {module.content.map((content, contentIndex) => (
                    <div 
                      key={content.id} 
                      className="flex items-start gap-3 py-2 px-3 rounded-md hover:bg-muted/50 group"
                    >
                      <div className="mt-1 text-muted-foreground">
                        <GripVertical className="w-4 h-4 cursor-grab" />
                      </div>
                      <div className="mt-1 text-muted-foreground">
                        {getContentIcon(content.type)}
                      </div>
                      <div className="flex-1">
                        {editingContentId === content.id ? (
                          <Input
                            value={content.title}
                            onChange={(e) => updateContent(module.id, content.id, { title: e.target.value })}
                            onBlur={() => setEditingContentId(null)}
                            autoFocus
                            className="font-medium"
                          />
                        ) : (
                          <div 
                            className="font-medium cursor-pointer"
                            onClick={() => setEditingContentId(content.id)}
                          >
                            {content.title}
                          </div>
                        )}
                        
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <span className="capitalize">{content.type}</span>
                          {content.duration && (
                            <span className="ml-2 flex items-center">
                              <Clock className="w-3 h-3 mr-1" /> 
                              {content.duration}m
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => {
                            setEditingContentId(content.id);
                            setCurrentModule(module);
                            setCurrentContent(content);
                          }}
                        >
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => deleteContent(module.id, content.id)}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}

                  {/* Add content options */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addContentToModule(module.id, 'video')}
                    >
                      <Video className="w-3 h-3 mr-1" /> Add Video
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addContentToModule(module.id, 'text')}
                    >
                      <FileText className="w-3 h-3 mr-1" /> Add Lesson
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addContentToModule(module.id, 'quiz')}
                    >
                      <MessageSquare className="w-3 h-3 mr-1" /> Add Quiz
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addContentToModule(module.id, 'assignment')}
                    >
                      <File className="w-3 h-3 mr-1" /> Add Assignment
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addContentToModule(module.id, 'resource')}
                    >
                      <File className="w-3 h-3 mr-1" /> Add Resource
                    </Button>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}

        {modules.length === 0 && (
          <div className="text-center py-10 border border-dashed rounded-md">
            <h3 className="font-medium">No modules yet</h3>
            <p className="text-muted-foreground text-sm mb-4">Add your first module to get started</p>
            <Button onClick={addNewModule}>
              <Plus className="w-4 h-4 mr-2" /> Add Module
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
