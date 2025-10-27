import { useState } from "react";
import { Send, Bot } from "lucide-react";
import { Button } from "./ui/button";

interface Message {
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm Allan's AI assistant. Ask me anything about him!", isBot: true }
  ]);
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const predefinedQA: Record<string, string> = {
    "who are you?": "I am Allan C. Godinez, a dedicated public school teacher specializing in Computer Programming with a major in Mathematics. I'm passionate about education and technology.",
    "What are your skills?": "I have strong skills in Programming Languages (90%), Web Development (90%), Software Tools (95%), IT Support (80%), Lesson Planning (95%), Classroom Management (70%), Communication (89%), and Leadership & Teamwork (90%).",
    "What projects have you worked on?": "I've developed an E-Learning Website for online education and the LLCC School Website for La Castellana Community College. Both projects showcase my web development and educational technology skills.",
    "What is your motto?": "My motto is: 'Be humble, stay kind, and never stop improving.' This philosophy guides my personal and professional life.",
    "How can I contact you?": "You can reach me via email at allancgodinez@gmail.com or godinez.allan@llcc.edu.ph, call me at 09260816065, or connect on social media platforms like Facebook, TikTok, YouTube, Instagram, and GitHub."
  };

  const questions = Object.keys(predefinedQA);

  const handleQuestionClick = (question: string) => {
    setSelectedQuestion(question);
    setMessages([...messages, 
      { text: question, isBot: false },
      { text: predefinedQA[question], isBot: true }
    ]);
    setTimeout(() => setSelectedQuestion(""), 100);
  };

  return (
    <section id="chatbot" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-dark to-space-darker" />
      
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary text-glow">
          Ask Me Anything
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="glass-morphism rounded-lg overflow-hidden glow-purple">
            {/* Chat header */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 border-b border-primary/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">AI Assistant</h3>
                  <p className="text-sm text-muted-foreground">Always online</p>
                </div>
              </div>
            </div>

            {/* Chat messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.isBot
                        ? 'bg-primary/10 border border-primary/30 text-foreground'
                        : 'bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 text-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick questions */}
            <div className="p-4 border-t border-primary/30">
              <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {questions.map((question, index) => (
                  <Button
                    key={index}
                    onClick={() => handleQuestionClick(question)}
                    variant="outline"
                    size="sm"
                    className="bg-primary/5 border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-primary text-xs"
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
