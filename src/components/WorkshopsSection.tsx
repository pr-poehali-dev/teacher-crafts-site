import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Workshop {
  title: string;
  date: string;
  level: string;
  spots: number;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  workshop: string;
  message: string;
}

interface WorkshopsSectionProps {
  workshops: Workshop[];
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const WorkshopsSection = ({ workshops, formData, setFormData, handleSubmit }: WorkshopsSectionProps) => {
  return (
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
  );
};

export default WorkshopsSection;
