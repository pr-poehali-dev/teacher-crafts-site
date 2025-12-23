import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workshop: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', workshop: '', message: '' });
  };

  const projects = [
    {
      title: 'Скворечник ручной работы',
      category: 'Деревообработка',
      image: 'https://cdn.poehali.dev/projects/c78a7030-c3b7-495c-baee-9aa7d56964cb/files/4f06b254-5af2-44a6-9219-a6f468625702.jpg',
      description: 'Уникальный дизайн с резьбой'
    },
    {
      title: 'Металлическая скульптура',
      category: 'Металлообработка',
      image: 'https://cdn.poehali.dev/projects/c78a7030-c3b7-495c-baee-9aa7d56964cb/files/69700b6f-77fb-4434-a3c1-628872d0b291.jpg',
      description: 'Декоративная сварная композиция'
    },
    {
      title: 'Деревянная шкатулка',
      category: 'Столярное дело',
      image: 'https://cdn.poehali.dev/projects/c78a7030-c3b7-495c-baee-9aa7d56964cb/files/ba432c4a-746a-4bc1-857e-5c71d1ce6250.jpg',
      description: 'Проект с резьбой и инкрустацией'
    }
  ];

  const workshops = [
    {
      title: 'Основы деревообработки',
      date: 'Понедельник, 15:00-17:00',
      level: 'Начальный',
      spots: 8
    },
    {
      title: 'Работа с металлом',
      date: 'Среда, 14:00-16:00',
      level: 'Средний',
      spots: 6
    },
    {
      title: 'Креативное проектирование',
      date: 'Пятница, 16:00-18:00',
      level: 'Продвинутый',
      spots: 5
    }
  ];

  const achievements = [
    { title: 'Учитель года', year: 2023, icon: 'Award' },
    { title: 'Лучший мастер-класс', year: 2022, icon: 'Trophy' },
    { title: '15 лет опыта', year: 2024, icon: 'Star' },
    { title: '500+ выпускников', year: 2024, icon: 'Users' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="Hammer" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">Мастерская Творчества</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'projects', 'achievements', 'workshops', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О мне'}
                  {section === 'projects' && 'Проекты'}
                  {section === 'achievements' && 'Достижения'}
                  {section === 'workshops' && 'Мастер-классы'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

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

      <section id="about" className="py-20 bg-muted/30 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">
                <Icon name="User" className="mr-2" size={16} />
                О мне
              </Badge>
              <h2 className="text-5xl font-bold mb-4">Александр Мастеров</h2>
              <p className="text-xl text-muted-foreground">Учитель технологии высшей категории</p>
            </div>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="GraduationCap" className="text-primary" size={32} />
                    </div>
                    <div className="font-bold text-2xl text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">выпускников</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Lightbulb" className="text-secondary" size={32} />
                    </div>
                    <div className="font-bold text-2xl text-secondary">200+</div>
                    <div className="text-sm text-muted-foreground">проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Award" className="text-primary" size={32} />
                    </div>
                    <div className="font-bold text-2xl text-primary">15</div>
                    <div className="text-sm text-muted-foreground">лет опыта</div>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 leading-relaxed">
                    Более 15 лет я помогаю детям и взрослым открывать мир ручного труда и творчества. 
                    Моя цель — не просто научить работать с инструментами, а вдохновить на создание 
                    уникальных проектов, развить креативное мышление и уверенность в своих силах.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    За годы работы мои ученики создали сотни удивительных проектов: от простых поделок 
                    до сложных инженерных конструкций. Многие из них связали свою жизнь с технологиями 
                    и дизайном, что делает меня невероятно гордым.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

      <section id="achievements" className="py-20 bg-muted/30 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">
              <Icon name="Trophy" className="mr-2" size={16} />
              Достижения
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Награды и признание</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all border-2 hover:border-primary group">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={achievement.icon as any} className="text-primary" size={40} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-primary font-semibold text-xl">{achievement.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="workshops" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">
              <Icon name="Calendar" className="mr-2" size={16} />
              Расписание
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Мастер-классы и занятия</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий курс и запишитесь на занятие
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {workshops.map((workshop, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all hover:border-primary">
                <CardHeader>
                  <CardTitle className="text-2xl">{workshop.title}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="flex items-center gap-2 mt-2">
                      <Icon name="Clock" size={16} />
                      {workshop.date}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Уровень:</span>
                      <Badge variant="secondary">{workshop.level}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Свободных мест:</span>
                      <Badge variant={workshop.spots > 3 ? "default" : "destructive"}>
                        {workshop.spots}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto border-2 border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl">
                <Icon name="UserPlus" className="inline mr-2" size={28} />
                Записаться на занятие
              </CardTitle>
              <CardDescription className="text-base">
                Заполните форму, и я свяжусь с вами для уточнения деталей
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="workshop">Выберите занятие *</Label>
                    <Input
                      id="workshop"
                      value={formData.workshop}
                      onChange={(e) => setFormData({ ...formData, workshop: e.target.value })}
                      placeholder="Например: Основы деревообработки"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="mt-1"
                    placeholder="Расскажите о вашем опыте или задайте вопросы"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">
              <Icon name="Mail" className="mr-2" size={16} />
              Контакты
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Свяжитесь со мной</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all border-2">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={28} />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">masterov@workshop.ru</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all border-2">
              <CardContent className="p-8">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-secondary" size={28} />
                </div>
                <h3 className="font-bold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all border-2">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={28} />
                </div>
                <h3 className="font-bold mb-2">Адрес</h3>
                <p className="text-muted-foreground">Школа №42, мастерская</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Hammer" className="text-primary" size={32} />
            <span className="text-2xl font-bold">Мастерская Творчества</span>
          </div>
          <p className="text-background/70 mb-4">Учим создавать шедевры своими руками</p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Mail" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Phone" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="MapPin" size={24} />
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-background/20">
            <p className="text-background/50">© 2024 Александр Мастеров. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
