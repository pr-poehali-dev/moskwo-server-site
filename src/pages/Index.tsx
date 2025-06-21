import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const [onlinePlayers, setOnlinePlayers] = useState(142);
  const [serverStatus, setServerStatus] = useState<
    "online" | "offline" | "maintenance"
  >("online");

  useEffect(() => {
    // Симуляция изменения онлайна
    const interval = setInterval(() => {
      setOnlinePlayers((prev) => prev + Math.floor(Math.random() * 6) - 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "Users",
      title: "Ролевая игра",
      description: "Погрузитесь в мир RP с уникальными персонажами и историями",
    },
    {
      icon: "Shield",
      title: "Честная игра",
      description: "Строгая модерация и система жалоб для комфортной игры",
    },
    {
      icon: "Zap",
      title: "Стабильность",
      description: "Сервер работает 24/7 без лагов и перебоев",
    },
  ];

  const quickLinks = [
    {
      to: "/rules",
      title: "Правила сервера",
      icon: "Book",
      color: "bg-blue-600",
    },
    {
      to: "/complaints",
      title: "Подать жалобу",
      icon: "AlertTriangle",
      color: "bg-red-600",
    },
    {
      to: "/faq",
      title: "Информация",
      icon: "HelpCircle",
      color: "bg-green-600",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <Badge
                variant="outline"
                className="mb-4 border-purple-500 text-purple-400"
              >
                <Icon name="Gamepad2" size={16} className="mr-1" />
                Minecraft RP Server
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                MoskwoRp
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Погрузитесь в захватывающий мир ролевой игры на лучшем Minecraft
                сервере России
              </p>
            </div>

            {/* Server Status */}
            <Card className="bg-slate-800/50 border-slate-700 mb-8 max-w-md mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        serverStatus === "online"
                          ? "bg-green-500 animate-pulse"
                          : serverStatus === "maintenance"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                    ></div>
                    <span className="font-semibold">
                      {serverStatus === "online"
                        ? "Сервер онлайн"
                        : serverStatus === "maintenance"
                          ? "Тех. работы"
                          : "Сервер офлайн"}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">
                      {onlinePlayers}
                    </div>
                    <div className="text-sm text-gray-400">игроков</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-slate-700/50 rounded-lg">
                  <div className="text-sm text-gray-400">IP сервера:</div>
                  <div className="font-mono text-purple-400 text-lg">
                    play.moskworp.ru
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {quickLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all hover:scale-105">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}
                      >
                        <Icon
                          name={link.icon as any}
                          size={24}
                          className="text-white"
                        />
                      </div>
                      <h3 className="font-semibold text-center">
                        {link.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Почему выбирают нас?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon
                        name={feature.icon as any}
                        size={24}
                        className="text-white"
                      />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">
                  Готов начать приключение?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Присоединяйся к тысячам игроков в захватывающем мире MoskwoRp
                </p>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать играть
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
