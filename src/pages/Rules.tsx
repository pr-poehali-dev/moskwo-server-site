import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Rules = () => {
  const rulesSections = [
    {
      id: "general",
      title: "Общие правила",
      icon: "Shield",
      rules: [
        "Уважайте других игроков и администрацию",
        "Запрещены оскорбления, мат и токсичное поведение",
        "Не используйте читы, моды и программы для получения преимуществ",
        "Запрещен спам в чате и голосовых каналах",
        "Не разглашайте личную информацию других игроков",
      ],
    },
    {
      id: "rp",
      title: "Правила ролевой игры",
      icon: "Users",
      rules: [
        "Всегда играйте в рамках своего персонажа (IC - In Character)",
        "Не смешивайте OOC (Out of Character) информацию с IC",
        "Запрещен PowerGaming - принуждение к действиям без согласия",
        "Не используйте MetaGaming - информацию, полученную вне игры",
        "Соблюдайте реалистичность действий вашего персонажа",
      ],
    },
    {
      id: "building",
      title: "Правила строительства",
      icon: "Home",
      rules: [
        "Стройте только в разрешенных зонах",
        "Не портите чужие постройки без разрешения",
        "Соблюдайте архитектурный стиль региона",
        "Не создавайте лагающие механизмы",
        "Уборка территории после строительства обязательна",
      ],
    },
    {
      id: "economy",
      title: "Экономические правила",
      icon: "DollarSign",
      rules: [
        "Честная торговля между игроками",
        "Запрещены дюпы и эксплойты экономики",
        "Не манипулируйте ценами на рынке",
        "Соблюдайте договоренности при сделках",
        "Штрафы за нарушение торговых соглашений",
      ],
    },
    {
      id: "pvp",
      title: "Правила PvP",
      icon: "Sword",
      rules: [
        "PvP разрешен только в специальных зонах",
        "Не убивайте новичков без причины",
        "Соблюдайте RP причины для конфликтов",
        "Запрещен RandomDeathMatch (RDM)",
        "После смерти действует правило забывчивости",
      ],
    },
  ];

  const penalties = [
    {
      violation: "Первое нарушение",
      punishment: "Предупреждение",
      duration: "-",
    },
    {
      violation: "Повторное нарушение",
      punishment: "Мут на 1 час",
      duration: "1 час",
    },
    {
      violation: "Серьезное нарушение",
      punishment: "Бан на 1 день",
      duration: "24 часа",
    },
    {
      violation: "Грубое нарушение",
      punishment: "Бан на неделю",
      duration: "7 дней",
    },
    {
      violation: "Критическое нарушение",
      punishment: "Перманентный бан",
      duration: "Навсегда",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-blue-500 text-blue-400"
            >
              <Icon name="BookOpen" size={16} className="mr-1" />
              Официальные правила
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Правила сервера
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ознакомьтесь с правилами сервера MoskwoRp перед началом игры.
              Незнание правил не освобождает от ответственности.
            </p>
          </div>

          {/* Rules Sections */}
          <div className="mb-12">
            <Accordion type="single" collapsible className="space-y-4">
              {rulesSections.map((section) => (
                <AccordionItem key={section.id} value={section.id}>
                  <Card className="bg-slate-800/50 border-slate-700">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                          <Icon
                            name={section.icon as any}
                            size={20}
                            className="text-white"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-left">
                          {section.title}
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-3">
                        {section.rules.map((rule, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-white">
                                {index + 1}
                              </span>
                            </div>
                            <p className="text-gray-300">{rule}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Penalties Table */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon
                  name="AlertTriangle"
                  size={24}
                  className="text-yellow-500"
                />
                <span>Система наказаний</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-300">
                        Тип нарушения
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-300">
                        Наказание
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-300">
                        Длительность
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {penalties.map((penalty, index) => (
                      <tr key={index} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-gray-300">
                          {penalty.violation}
                        </td>
                        <td className="py-3 px-4">
                          <Badge
                            variant="outline"
                            className="border-red-500 text-red-400"
                          >
                            {penalty.punishment}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-gray-400">
                          {penalty.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/50 mt-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Icon
                  name="AlertCircle"
                  size={24}
                  className="text-yellow-500 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="font-semibold text-yellow-400 mb-2">
                    Важное уведомление
                  </h3>
                  <p className="text-gray-300">
                    Правила могут изменяться и дополняться администрацией
                    сервера. Все изменения публикуются на официальных ресурсах
                    сервера. Следите за обновлениями и уведомлениями в игре.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Rules;
