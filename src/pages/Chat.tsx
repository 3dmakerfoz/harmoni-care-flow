import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Paperclip, Image, Video, FileText } from "lucide-react";
import { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Ana Silva",
      lastMessage: "Ótimo! Nos vemos amanhã então",
      time: "10:30",
      unread: 2,
      online: true,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Carlos Mendes",
      lastMessage: "Obrigado pelo material enviado",
      time: "Ontem",
      unread: 0,
      online: false,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      name: "Mariana Costa",
      lastMessage: "Que bom que está se sentindo melhor!",
      time: "15/11",
      unread: 0,
      online: true,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "therapist",
      text: "Olá! Como você está se sentindo hoje?",
      time: "10:15",
    },
    {
      id: 2,
      sender: "user",
      text: "Oi! Estou bem melhor depois da última sessão, obrigado por perguntar!",
      time: "10:18",
    },
    {
      id: 3,
      sender: "therapist",
      text: "Que maravilha! Fico muito feliz em saber. Vamos continuar com os exercícios que combinamos?",
      time: "10:20",
    },
    {
      id: 4,
      sender: "user",
      text: "Sim, claro! Tenho praticado diariamente.",
      time: "10:22",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container mx-auto h-[calc(100vh-200px)]">
          <div className="text-center mb-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-harmonize bg-clip-text text-transparent">Chat</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Converse com seus terapeutas de forma segura e privada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 h-[600px]">
            {/* Conversas */}
            <Card className="md:col-span-1 overflow-hidden">
              <CardHeader className="border-b">
                <CardTitle>Conversas</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {conversations.map((conv) => (
                    <div
                      key={conv.id}
                      className="p-4 hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={conv.avatar} alt={conv.name} />
                            <AvatarFallback>{conv.name[0]}</AvatarFallback>
                          </Avatar>
                          {conv.online && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-background"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-sm truncate">{conv.name}</h3>
                            <span className="text-xs text-muted-foreground">{conv.time}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground truncate">
                              {conv.lastMessage}
                            </p>
                            {conv.unread > 0 && (
                              <Badge className="ml-2 bg-accent">{conv.unread}</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mensagens */}
            <Card className="md:col-span-2 flex flex-col overflow-hidden">
              <CardHeader className="border-b flex-shrink-0">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={conversations[0].avatar} alt={conversations[0].name} />
                    <AvatarFallback>{conversations[0].name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{conversations[0].name}</CardTitle>
                    <p className="text-sm text-muted-foreground">Online</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl p-3 ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-primary to-harmonize text-white"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <span
                        className={`text-xs mt-1 block ${
                          msg.sender === "user" ? "text-white/70" : "text-muted-foreground"
                        }`}
                      >
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>

              <div className="border-t p-4 flex-shrink-0">
                <div className="flex gap-2 mb-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Image className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <FileText className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Digite sua mensagem..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="bg-gradient-to-r from-primary to-harmonize hover:opacity-90">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chat;
