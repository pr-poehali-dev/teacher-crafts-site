import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Icon name="Sparkles" className="mr-2" size={20} />
                Творчество • Мастерство • Инновации
              </Badge>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              Создаём
              <span className="text-primary block">с душой</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Научу работать с деревом и металлом, раскрою творческий потенциал, помогу создать уникальные проекты своими руками
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" onClick={() => scrollToSection('workshops')} className="text-lg px-8">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на занятие
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('projects')} className="text-lg px-8">
                <Icon name="Folder" className="mr-2" size={20} />
                Посмотреть проекты
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl animate-float"></div>
            <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border">
              <img
                src="https://cdn.poehali.dev/projects/c78a7030-c3b7-495c-baee-9aa7d56964cb/files/ba432c4a-746a-4bc1-857e-5c71d1ce6250.jpg"
                alt="Мастерская"
                className="rounded-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
