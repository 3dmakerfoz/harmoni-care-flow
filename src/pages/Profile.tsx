import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Mail, Phone, Edit2, ShoppingBag, MessageCircle } from "lucide-react";

const Profile = () => {
  const stats = [
    { label: "Sessões Realizadas", value: "12", icon: Calendar },
    { label: "Mensagens", value: "48", icon: MessageCircle },
    { label: "Compras", value: "5", icon: ShoppingBag },
  ];

  const appointments = [
    {
      id: 1,
      therapist: "Ana Silva",
      therapy: "Reiki",
      date: "18 Nov 2024",
      time: "14:00",
      status: "confirmed",
    },
    {
      id: 2,
      therapist: "Carlos Mendes",
      therapy: "Acupuntura",
      date: "20 Nov 2024",
      time: "10:30",
      status: "pending",
    },
  ];

  const purchases = [
    {
      id: 1,
      name: "Curso Online de Meditação",
      date: "10 Nov 2024",
      price: 297,
    },
    {
      id: 2,
      name: "Kit de Óleos Essenciais",
      date: "05 Nov 2024",
      price: 89,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Meu <span className="bg-gradient-to-r from-primary to-harmonize bg-clip-text text-transparent">Perfil</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-semibold mb-1">João Silva</h2>
                    <p className="text-muted-foreground mb-4">Paciente</p>
                    <Button variant="outline" size="sm">
                      <Edit2 className="w-4 h-4 mr-2" />
                      Editar Perfil
                    </Button>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>joao.silva@email.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>+55 (11) 98765-4321</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>São Paulo, SP</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Estatísticas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-harmonize/20 flex items-center justify-center">
                          <stat.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                      </div>
                      <span className="text-lg font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="info" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="info">Informações</TabsTrigger>
                  <TabsTrigger value="appointments">Agendamentos</TabsTrigger>
                  <TabsTrigger value="purchases">Compras</TabsTrigger>
                </TabsList>

                <TabsContent value="info">
                  <Card>
                    <CardHeader>
                      <CardTitle>Informações Pessoais</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Nome</Label>
                            <Input id="firstName" defaultValue="João" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Sobrenome</Label>
                            <Input id="lastName" defaultValue="Silva" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input id="email" type="email" defaultValue="joao.silva@email.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input id="phone" defaultValue="+55 (11) 98765-4321" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Localização</Label>
                          <Input id="location" defaultValue="São Paulo, SP" />
                        </div>
                        <Button className="bg-gradient-to-r from-primary to-harmonize hover:opacity-90">
                          Salvar Alterações
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="appointments">
                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <Card key={appointment.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{appointment.therapy}</h3>
                              <p className="text-sm text-muted-foreground">
                                com {appointment.therapist}
                              </p>
                            </div>
                            <Badge
                              variant={
                                appointment.status === "confirmed" ? "default" : "secondary"
                              }
                            >
                              {appointment.status === "confirmed" ? "Confirmado" : "Pendente"}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{appointment.date}</span>
                            </div>
                            <span>•</span>
                            <span>{appointment.time}</span>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button variant="outline" size="sm">
                              Reagendar
                            </Button>
                            <Button variant="outline" size="sm">
                              Cancelar
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="purchases">
                  <div className="space-y-4">
                    {purchases.map((purchase) => (
                      <Card key={purchase.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{purchase.name}</h3>
                              <p className="text-sm text-muted-foreground">{purchase.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-semibold text-primary">
                                R$ {purchase.price}
                              </p>
                              <Button variant="link" size="sm" className="p-0 h-auto">
                                Ver detalhes
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
