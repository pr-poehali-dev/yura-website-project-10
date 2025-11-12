import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const videos = [
    { id: 1, title: "Как создать канал на YouTube в 2024", views: "1.2М", time: "2 недели назад", duration: "12:45" },
    { id: 2, title: "10 секретов успешного видео", views: "856К", time: "1 месяц назад", duration: "15:30" },
    { id: 3, title: "Монтаж для начинающих", views: "2.1М", time: "3 дня назад", duration: "20:15" },
    { id: 4, title: "Лучшее оборудование для блогера", views: "543К", time: "1 неделя назад", duration: "18:20" },
    { id: 5, title: "Как раскрутить канал без бюджета", views: "3.5М", time: "2 месяца назад", duration: "25:40" },
    { id: 6, title: "Тренды YouTube 2024", views: "920К", time: "5 дней назад", duration: "14:55" },
    { id: 7, title: "Заработок на YouTube: полный гайд", views: "1.8М", time: "3 недели назад", duration: "30:12" },
    { id: 8, title: "Идеи для видео контента", views: "670К", time: "1 день назад", duration: "10:30" },
  ];

  const categories = ["Все", "Музыка", "Игры", "Новости", "Спорт", "Технологии", "Образование", "Развлечения"];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Icon name="Menu" size={24} />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Play" size={20} className="text-white fill-white ml-0.5" />
              </div>
              <span className="text-xl font-bold hidden sm:block">YouTube</span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl">
            <div className="flex gap-2">
              <div className="flex-1 flex items-center border border-border rounded-full overflow-hidden">
                <Input 
                  placeholder="Поиск" 
                  className="border-0 focus-visible:ring-0 rounded-none"
                />
                <Button variant="ghost" size="icon" className="rounded-none px-6">
                  <Icon name="Search" size={20} />
                </Button>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full hidden md:flex">
                <Icon name="Mic" size={20} />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full hidden sm:flex">
              <Icon name="Video" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hidden sm:flex">
              <Icon name="Bell" size={20} />
            </Button>
            <Avatar className="w-8 h-8 cursor-pointer">
              <AvatarFallback className="bg-primary text-white text-sm font-semibold">А</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex pt-14">
        <aside className={`fixed left-0 top-14 bottom-0 bg-background border-r border-border overflow-y-auto transition-all duration-300 ${sidebarOpen ? 'w-60' : 'w-0 -ml-60'} z-40`}>
          <div className="p-3 space-y-1">
            {[
              { icon: "Home", label: "Главная" },
              { icon: "Compass", label: "Shorts" },
              { icon: "Video", label: "Подписки" },
            ].map((item, i) => (
              <Button key={i} variant="ghost" className="w-full justify-start gap-6 h-10 hover:bg-muted">
                <Icon name={item.icon as any} size={20} />
                <span className="font-medium">{item.label}</span>
              </Button>
            ))}
          </div>

          <div className="border-t border-border my-2"></div>

          <div className="p-3 space-y-1">
            {[
              { icon: "History", label: "История" },
              { icon: "PlaySquare", label: "Ваши видео" },
              { icon: "Clock", label: "Смотреть позже" },
              { icon: "ThumbsUp", label: "Понравившиеся" },
            ].map((item, i) => (
              <Button key={i} variant="ghost" className="w-full justify-start gap-6 h-10 hover:bg-muted">
                <Icon name={item.icon as any} size={20} />
                <span className="font-medium">{item.label}</span>
              </Button>
            ))}
          </div>

          <div className="border-t border-border my-2"></div>

          <div className="p-3">
            <h3 className="font-semibold mb-3 px-3">Подписки</h3>
            <div className="space-y-1">
              {["Канал 1", "Канал 2", "Канал 3", "Канал 4"].map((channel, i) => (
                <Button key={i} variant="ghost" className="w-full justify-start gap-3 h-10 hover:bg-muted">
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="text-xs">{channel[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{channel}</span>
                </Button>
              ))}
            </div>
          </div>
        </aside>

        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-0'}`}>
          <div className="sticky top-14 bg-background border-b border-border z-30">
            <div className="flex gap-3 px-6 py-3 overflow-x-auto">
              {categories.map((cat, i) => (
                <Button 
                  key={i} 
                  variant={i === 0 ? "default" : "secondary"} 
                  size="sm"
                  className={`rounded-lg whitespace-nowrap ${i === 0 ? 'bg-secondary text-white hover:bg-secondary/90' : ''}`}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {videos.map((video) => (
                <Card key={video.id} className="border-0 shadow-none cursor-pointer group">
                  <div className="relative aspect-video bg-muted rounded-xl overflow-hidden mb-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-black/80 rounded-full flex items-center justify-center">
                        <Icon name="Play" size={32} className="text-white fill-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Avatar className="w-9 h-9 flex-shrink-0">
                      <AvatarFallback className="text-xs">К{video.id}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">Канал автора</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <span>{video.views} просмотров</span>
                        <span>•</span>
                        <span>{video.time}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
