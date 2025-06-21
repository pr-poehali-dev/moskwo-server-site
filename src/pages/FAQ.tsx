import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function FAQ() {
  const serverInfo = {
    name: "MoskwoRp",
    version: "1.20.1",
    ip: "play.moskworp.ru",
    port: "25565",
    players: "150/300",
    mode: "Survival RP",
  };

  const faqData = [
    {
      question: "Как зайти на сервер?",
      answer:
        "Для входа на сервер используйте IP: play.moskworp.ru или play.moskworp.ru:25565. Убедитесь, что у вас установлена версия Minecraft 1.20.1.",
    },
    {
      question: "Нужна ли регистрация?",
      answer:
        "Да, для игры на сервере необходимо зарегистрироваться. После входа используйте команду /register <пароль> <повтор_пароля> для создания аккаунта.",
    },
    {
      question: "Какие правила на сервере?",
      answer:
        "Основные правила: запрещен читерский софт, грифинг, оскорбления других игроков. Подробные правила можно найти на нашем сайте или в Discord.",
    },
    {
      question: "Как получить донат привилегии?",
      answer:
        "Донат привилегии можно приобрести на нашем сайте. Доступны различные категории: VIP, Premium, Deluxe с разными возможностями и преимуществами.",
    },
    {
      question: "Есть ли экономика на сервере?",
      answer:
        "Да, на сервере действует развитая экономическая система. Вы можете торговать с другими игроками, создавать магазины, участвовать в аукционах.",
    },
    {
      question: "Можно ли создать свой город?",
      answer:
        "Конечно! Для создания города вам нужно накопить определенную сумму денег и подать заявку администрации. Подробности уточняйте у модераторов.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h1>
          <p className="text-slate-300 text-lg">
            Ответы на самые популярные вопросы о сервере MoskwoRp
          </p>
        </div>

        {/* Server Info Card */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-emerald-400 flex items-center gap-2">
              <Icon name="Server" size={24} />
              Информация о сервере
            </CardTitle>
            <CardDescription className="text-slate-300">
              Основные данные сервера {serverInfo.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Icon name="Globe" size={18} className="text-cyan-400" />
                <span className="text-slate-300">IP:</span>
                <Badge variant="secondary" className="bg-slate-700 text-white">
                  {serverInfo.ip}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={18} className="text-green-400" />
                <span className="text-slate-300">Онлайн:</span>
                <Badge variant="secondary" className="bg-slate-700 text-white">
                  {serverInfo.players}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Gamepad2" size={18} className="text-purple-400" />
                <span className="text-slate-300">Режим:</span>
                <Badge variant="secondary" className="bg-slate-700 text-white">
                  {serverInfo.mode}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Accordion */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Icon name="HelpCircle" size={24} />
              Вопросы и ответы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-slate-700"
                >
                  <AccordionTrigger className="text-left text-white hover:text-emerald-400 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-slate-800/50 border-slate-700 mt-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Icon name="MessageCircle" size={24} />
              Не нашли ответ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 mb-4">
              Если вы не нашли ответ на свой вопрос, обратитесь к нашей команде
              поддержки
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <Icon name="MessageSquare" size={16} className="mr-1" />
                Discord
              </Badge>
              <Badge
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <Icon name="Send" size={16} className="mr-1" />
                Telegram
              </Badge>
              <Badge
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <Icon name="Globe" size={16} className="mr-1" />
                Форум
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
