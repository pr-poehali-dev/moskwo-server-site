import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/rules", label: "Правила", icon: "Book" },
    { path: "/complaints", label: "Жалобы", icon: "AlertTriangle" },
    { path: "/faq", label: "FAQ", icon: "HelpCircle" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-800/90 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">MoskwoRp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-slate-700"
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Admin Login Button */}
          <div className="flex items-center space-x-4">
            <Link to="/admin/login">
              <Button
                variant="outline"
                className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
              >
                <Icon name="Shield" size={16} className="mr-2" />
                Вход для админов
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-slate-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon name={item.icon as any} size={16} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
