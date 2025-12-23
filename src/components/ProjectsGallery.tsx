import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectsGalleryProps {
  projects: Project[];
  uploading: boolean;
  onImageUpload: (index: number, file: File) => void;
}

const ProjectsGallery = ({ projects, uploading, onImageUpload }: ProjectsGalleryProps) => {
  const fileInputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4">
            <Icon name="Folder" className="mr-2" size={16} />
            Галерея
          </Badge>
          <h2 className="text-5xl font-bold mb-4">Проекты учеников</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Лучшие работы, созданные на наших занятиях
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-primary">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-white/90 text-foreground">
                  {project.category}
                </Badge>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="lg"
                    onClick={() => fileInputRefs.current[index]?.click()}
                    disabled={uploading}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Icon name="Upload" className="mr-2" size={20} />
                    {uploading ? 'Загрузка...' : 'Изменить фото'}
                  </Button>
                  <input
                    ref={(el) => (fileInputRefs.current[index] = el)}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) onImageUpload(index, file);
                    }}
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
