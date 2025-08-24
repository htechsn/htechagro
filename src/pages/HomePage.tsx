import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, TrendingUp, Users, ShieldCheck, Leaf, 
  BarChart3, Bot, Cloud, DollarSign, Package, Tractor 
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: "Assistant IA Agricole",
      description: "Conseils personnalisés 24/7 pour optimiser vos cultures",
      color: "bg-blue-500"
    },
    {
      icon: Package,
      title: "Marketplace Intégré",
      description: "Achetez et vendez directement avec d'autres agriculteurs",
      color: "bg-green-500"
    },
    {
      icon: Cloud,
      title: "Météo Précise",
      description: "Prévisions locales et alertes pour protéger vos récoltes",
      color: "bg-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Financement Participatif",
      description: "Accédez à des investissements pour développer votre exploitation",
      color: "bg-purple-500"
    },
    {
      icon: Tractor,
      title: "Location d'Équipements",
      description: "Louez du matériel agricole avec suivi GPS en temps réel",
      color: "bg-orange-500"
    },
    {
      icon: BarChart3,
      title: "Analytics Avancés",
      description: "Tableaux de bord pour analyser et améliorer vos rendements",
      color: "bg-indigo-500"
    }
  ];

  const stats = [
    { value: "2,450+", label: "Agriculteurs actifs" },
    { value: "850+", label: "Produits disponibles" },
    { value: "98%", label: "Satisfaction client" },
    { value: "1.2M", label: "Transactions/mois" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Révolutionnez votre{' '}
              <span className="text-green-600">agriculture au Sénégal</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              La première plateforme all-in-one qui digitalise toute votre chaîne de valeur agricole 
              : semence, culture, financement, vente et logistique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/marketplace"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
              >
                Commencer maintenant
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-all">
                Voir la démo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tout ce dont vous avez besoin pour réussir
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une plateforme complète conçue spécialement pour les agriculteurs sénégalais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à transformer votre exploitation ?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Rejoignez des milliers d'agriculteurs qui ont déjà digitalisé leur activité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/marketplace"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-lg"
            >
              Créer un compte gratuit
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/agribot"
              className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-all"
            >
              Parler à l'AgriBot
              <Bot className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Nos Partenaires</h3>
            <p className="text-gray-600">Soutenus par les leaders de l'agriculture au Sénégal</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">ISRA</div>
            <div className="text-2xl font-bold text-gray-400">ANCAR</div>
            <div className="text-2xl font-bold text-gray-400">SAED</div>
            <div className="text-2xl font-bold text-gray-400">CNCAS</div>
            <div className="text-2xl font-bold text-gray-400">SEDAB</div>
          </div>
        </div>
      </section>
    </div>
  );
};
