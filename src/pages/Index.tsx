import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: 'Wrench',
      title: 'Спуск обсадных колонн',
      description: 'Профессиональные услуги по спуску обсадных колонн с использованием современного оборудования'
    },
    {
      icon: 'Settings',
      title: 'Спуск НКТ',
      description: 'Качественный спуск насосно-компрессорных труб с соблюдением всех технологических требований'
    },
    {
      icon: 'Shield',
      title: 'Контроль качества',
      description: 'Строгий контроль качества выполняемых работ и соблюдение промышленной безопасности'
    },
    {
      icon: 'Users',
      title: 'Опытная команда',
      description: 'Высококвалифицированные специалисты с многолетним опытом в нефтегазовой отрасли'
    }
  ];

  const projects = [
    {
      title: 'Месторождение "Северное"',
      description: 'Спуск обсадных колонн диаметром 324мм на глубину 2800м с применением централизаторов',
      details: ['Глубина: 2800м', 'Диаметр: 324мм', 'Срок: 5 дней']
    },
    {
      title: 'Скважина №47',
      description: 'Спуск НКТ с установкой пакера и глубинного насоса на Западно-Сибирском месторождении',
      details: ['НКТ: 73мм', 'Глубина: 1950м', 'Оборудование: ЭЦН']
    },
    {
      title: 'Ремонт скважины',
      description: 'Капремонт с заменой обсадной колонны и восстановлением герметичности ствола',
      details: ['Тип работ: КРС', 'Замена: 219мм', 'Результат: +40% дебит']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              NOVATEQ
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Проекты</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:block">
              Связаться с нами
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Услуги спуска
              <span className="text-primary block mt-2">обсадных колонн и НКТ</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Профессиональные сервисы для нефтегазовой отрасли с применением 
              современных технологий и строгим соблюдением стандартов безопасности
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                <Icon name="ArrowRight" className="ml-2" size={20} />
                Начать проект
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Icon name="Play" className="mr-2" size={20} />
                Посмотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для нефтегазовых компаний с гарантией качества и безопасности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl font-bold text-foreground mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                NOVATEQ Group — специализированная сервисная компания, предоставляющая услуги 
                по спуску обсадных колонн и НКТ в нефтегазовой отрасли. Мы обеспечиваем высокое 
                качество работ и строго соблюдаем требования промышленной безопасности.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-muted-foreground">Скважин</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">12+</div>
                  <div className="text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted-foreground">Специалистов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
                  <div className="text-muted-foreground">Успешных работ</div>
                </div>
              </div>
              
              <Button size="lg">
                Узнать больше
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-primary">
                  <Icon name="HardHat" size={120} className="mx-auto mb-4 opacity-20" fallback="Shield" />
                  <p className="text-lg font-semibold">Безопасность превыше всего</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры успешно выполненных работ на различных месторождениях
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Monitor" size={64} className="text-primary opacity-50" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.details.map((detail, detailIndex) => (
                      <span 
                        key={detailIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Мы всегда открыты для новых вызовов
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@novateq-group.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Офис</h3>
                <p className="text-muted-foreground">Москва, ул. Тверская, 1</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-4">
              <Icon name="MessageSquare" className="mr-2" size={20} />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">NOVATEQ</h3>
              <p className="text-primary-foreground/80 mb-4">
                Профессиональные сервисы для нефтегазовой отрасли
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Спуск обсадных колонн</li>
                <li>Спуск НКТ</li>
                <li>Контроль качества</li>
                <li>Техническое сопровождение</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>О нас</li>
                <li>Команда</li>
                <li>Карьера</li>
                <li>Новости</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>info@novateq-group.com</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, ул. Тверская, 1</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 NOVATEQ Group. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;