import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="MessageCircle" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold">МессенджерРФ</span>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2">
            <Icon name="Globe" size={18} />
            Русский
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Общайся
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> свободно</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Российский мессенджер нового поколения. Быстро, безопасно и удобно. Все данные хранятся в России.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 gap-2">
                  <Icon name="Download" size={20} />
                  Скачать для Windows
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 gap-2">
                  <Icon name="Smartphone" size={20} />
                  Мобильное приложение
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} className="text-primary" />
                  <span>Шифрование</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={16} className="text-secondary" />
                  <span>Высокая скорость</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-primary" />
                  <span>10М+ пользователей</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl animate-float"></div>
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20 backdrop-blur-sm">
                <div className="bg-card rounded-2xl shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-white/30 rounded w-32 mb-2"></div>
                      <div className="h-2 bg-white/20 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-2 bg-muted rounded w-20"></div>
                          <div className="bg-primary/10 rounded-2xl p-3">
                            <div className="h-2 bg-muted rounded w-full mb-2"></div>
                            <div className="h-2 bg-muted rounded w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Lock",
                title: "Защита данных",
                description: "Сквозное шифрование всех сообщений. Ваши данные под надёжной защитой.",
                color: "from-primary to-blue-500"
              },
              {
                icon: "Rocket",
                title: "Молниеносная скорость",
                description: "Облачная синхронизация и мгновенная доставка сообщений на всех устройствах.",
                color: "from-secondary to-purple-500"
              },
              {
                icon: "Heart",
                title: "Простота использования",
                description: "Интуитивный интерфейс, знакомый каждому. Никаких сложностей.",
                color: "from-pink-500 to-red-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon name={feature.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Доступно на всех платформах
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "Monitor", name: "Windows", color: "bg-blue-500" },
              { icon: "Apple", name: "macOS", color: "bg-gray-700" },
              { icon: "Smartphone", name: "iOS", color: "bg-primary" },
              { icon: "Smartphone", name: "Android", color: "bg-green-500" }
            ].map((platform, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-all hover:scale-105 cursor-pointer border-2 border-transparent hover:border-primary">
                <div className={`w-16 h-16 ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={platform.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg">{platform.name}</h3>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg h-14 px-12 gap-2">
              <Icon name="Download" size={20} />
              Скачать сейчас
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Бесплатно для всех платформ
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="MessageCircle" size={18} className="text-white" />
                </div>
                <span className="font-bold text-lg">МессенджерРФ</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Современный российский мессенджер для безопасного общения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для бизнеса</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Мы в соцсетях</h4>
              <div className="flex gap-3">
                {["Phone", "Mail", "Globe"].map((icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Icon name={icon as any} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 МессенджерРФ. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
