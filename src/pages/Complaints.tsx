import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Send } from "lucide-react";
import { useState } from "react";

const Complaints = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    complaint: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки жалобы
    console.log("Жалоба отправлена:", formData);
    alert("Жалоба отправлена! Мы рассмотрим её в ближайшее время.");
    setFormData({ name: "", email: "", complaint: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-orange-500 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">
              Жалобы и предложения
            </h1>
          </div>
          <p className="text-gray-600">
            Если у вас есть жалобы или предложения по улучшению нашего сервиса,
            пожалуйста, заполните форму ниже.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Форма обратной связи</CardTitle>
            <CardDescription>
              Все обращения рассматриваются в течение 24 часов
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ваше имя"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="complaint">Сообщение</Label>
                <Textarea
                  id="complaint"
                  name="complaint"
                  value={formData.complaint}
                  onChange={handleChange}
                  required
                  placeholder="Опишите вашу жалобу или предложение..."
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Отправить
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Также вы можете связаться с нами напрямую:
            <a
              href="mailto:support@example.com"
              className="text-blue-600 hover:underline ml-1"
            >
              support@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
