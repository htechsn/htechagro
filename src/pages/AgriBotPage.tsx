import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Mic, Camera, MapPin, Thermometer } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export const AgriBotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Salaam aleikum ! Je suis votre assistant agricole intelligent. Je connais parfaitement l\'agriculture sénégalaise : cultures (mil, arachide, riz), conditions climatiques, sols (Dior, Deck), et pratiques locales. Comment puis-je vous aider aujourd\'hui ?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    { text: 'Quand planter le mil dans la région de Thiès ?', icon: '🌾' },
    { text: 'Comment traiter la rouille de l\'arachide ?', icon: '🥜' },
    { text: 'Quel engrais pour le riz en zone de Casamance ?', icon: '🌾' },
    { text: 'Prévisions météo pour cette semaine', icon: '🌤️' }
  ];

  const contextInfo = [
    { label: 'Région', value: 'Thiès', icon: MapPin },
    { label: 'Saison', value: 'Hivernage', icon: Thermometer },
    { label: 'Culture', value: 'Mil, Arachide', icon: Bot }
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const generateBotResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('mil') && lowerQuestion.includes('thiès')) {
      return `🌾 **Plantation du mil à Thiès :**

La période optimale pour semer le mil dans la région de Thiès est de **mi-juin à mi-juillet**, selon les premières pluies.

**Conseils spécifiques :**
• **Sol Dior** : Attendre 20-30mm de pluie cumulée
• **Variétés recommandées** : Souna 3, IBV 8004 (cycle court 90-100 jours)
• **Écartement** : 80cm x 40cm pour optimiser l'espace
• **Densité** : 3-4 grains par poquet

**⚠️ Attention météo** : Les prévisions annoncent de bonnes pluies cette semaine. C'est le moment idéal !

Voulez-vous des conseils sur la préparation du sol ou les engrais à utiliser ?`;
    }
    
    if (lowerQuestion.includes('rouille') && lowerQuestion.includes('arachide')) {
      return `🥜 **Traitement de la rouille de l'arachide :**

La rouille (Puccinia arachidis) est un fléau majeur. Voici le protocole de traitement :

**🔬 Diagnostic confirmé** : Taches orange sur feuilles
**💊 Traitement recommandé :**
• **Fongicide** : Mancozèbe 80% (2kg/ha) ou Propiconazole
• **Fréquence** : Tous les 15 jours, 3 applications
• **Timing** : Tôt le matin ou en fin de journée

**🌿 Alternative bio locale :**
• Décoction de feuilles de neem (20g/L)
• Purin d'ail et piment (répulsif naturel)

**Prévention** : Rotation avec légumineuses, variétés résistantes (55-437, GH119-20)

Avez-vous déjà observé les premiers symptômes sur vos plants ?`;
    }

    if (lowerQuestion.includes('météo') || lowerQuestion.includes('prévision')) {
      return `🌤️ **Prévisions météo - Semaine du ${new Date().toLocaleDateString('fr-FR')} :**

**Aujourd'hui** : 32°C, ensoleillé, vent 15km/h NO
**Demain** : 29°C, nuageux, possibles averses (40%)
**Mercredi** : 31°C, orageux, pluie probable (70%)
**Jeudi-Vendredi** : 28-30°C, pluies modérées

**💧 Cumul prévu** : 25-40mm cette semaine
**🌱 Recommandations** :
• Parfait pour semis de mil et sorgho
• Reporter les traitements phytosanitaires
• Préparer les canaux de drainage

**📍 Données station Thiès** - Mise à jour il y a 2h
Souhaitez-vous des alertes personnalisées pour vos parcelles ?`;
    }

    return `Merci pour votre question sur "${question}". 

En tant qu'expert agronome sénégalais, je peux vous aider avec :
• **Calendrier cultural** adapté à votre région
• **Diagnostic de maladies** par analyse de photos
• **Conseils d'irrigation** selon votre type de sol
• **Recommandations d'intrants** locaux et accessibles
• **Prévisions de rendements** basées sur l'IA

Pouvez-vous me donner plus de détails sur votre situation : région, culture concernée, type de problème rencontré ?`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AgriBot IA</h1>
              <p className="text-gray-600">Assistant agricole intelligent pour le Sénégal</p>
            </div>
          </div>

          {/* Context Info */}
          <div className="flex flex-wrap gap-4 mb-6">
            {contextInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                  <Icon className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">{info.label}:</span>
                  <span className="text-sm text-gray-900">{info.value}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Chat Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col h-[600px]">
              {/* Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex items-start space-x-3 ${message.type === 'user' ? 'justify-end' : ''}`}>
                    {message.type === 'bot' && (
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Bot className="h-5 w-5 text-blue-600" />
                      </div>
                    )}
                    <div className={`max-w-[80%] p-4 rounded-xl ${
                      message.type === 'user' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                      <div className={`text-xs mt-2 opacity-70 ${message.type === 'user' ? 'text-green-100' : 'text-gray-500'}`}>
                        {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                    {message.type === 'user' && (
                      <div className="p-2 bg-green-100 rounded-lg">
                        <User className="h-5 w-5 text-green-600" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Bot className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="flex-1 relative">
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Posez votre question agricole..."
                      className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      rows={1}
                      disabled={isLoading}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Mic className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isLoading}
                    className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Questions fréquentes</h3>
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question.text)}
                    className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <span className="mr-2">{question.icon}</span>
                    {question.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Capacités</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Diagnostic par photo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Conseils météo locaux</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Support multilingue</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Calendrier personnalisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};