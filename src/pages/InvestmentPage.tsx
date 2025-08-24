import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Calendar,
  MapPin,
  Target,
  Clock,
  Shield,
  Star,
  ArrowRight,
  PieChart,
  BarChart3,
  Award,
  CheckCircle,
  AlertCircle,
  Percent,
  Camera,
  Upload
} from 'lucide-react';

export const InvestmentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'portfolio' | 'create'>('projects');

  const projects = [
    {
      id: 1,
      title: 'Culture Bio d\'Arachides Premium - Kaolack',
      category: 'Agriculture Biologique',
      location: 'Kaolack, Sénégal',
      target: 5000000,
      raised: 4250000,
      investors: 32,
      daysLeft: 8,
      roi: 18,
      duration: 8,
      farmer: 'Amadou Diagne',
      farmerRating: 4.9,
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop&q=80',
      description: 'Extension de culture d\'arachides biologiques certifiées sur 15 hectares avec techniques modernes et certification internationale bio.',
      riskLevel: 'Modéré',
      status: 'funding',
      highlights: ['Certification bio', 'Contrat d\'achat garanti', 'Irrigation moderne']
    },
    {
      id: 2,
      title: 'Serres Maraîchères Connectées - Niayes',
      category: 'Agriculture Smart',
      location: 'Niayes, Sénégal',
      target: 8500000,
      raised: 8500000,
      investors: 28,
      daysLeft: 0,
      roi: 22,
      duration: 6,
      farmer: 'Fatou Sarr',
      farmerRating: 5.0,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80',
      description: 'Serres modernes équipées de capteurs IoT pour production optimisée de légumes premium destinés à l\'export.',
      riskLevel: 'Faible',
      status: 'active',
      highlights: ['Technologie IoT', 'Export garanti', 'Rendement 3x supérieur']
    },
    {
      id: 3,
      title: 'Riziculture Mécanisée - Vallée du Fleuve',
      category: 'Riziculture',
      location: 'Saint-Louis, Sénégal',
      target: 12000000,
      raised: 3600000,
      investors: 15,
      daysLeft: 35,
      roi: 20,
      duration: 12,
      farmer: 'Ousmane Ba',
      farmerRating: 4.7,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop&q=80',
      description: 'Modernisation complète avec tracteurs, moissonneuses et système d\'irrigation pour 50 hectares de rizières.',
      riskLevel: 'Élevé',
      status: 'funding',
      highlights: ['Mécanisation complète', 'Variétés haut rendement', 'Formation incluse']
    },
    {
      id: 4,
      title: 'Ferme Avicole Moderne - Thiès',
      category: 'Élevage',
      location: 'Thiès, Sénégal',
      target: 6500000,
      raised: 5200000,
      investors: 24,
      daysLeft: 18,
      roi: 25,
      duration: 10,
      farmer: 'Mariama Diouf',
      farmerRating: 4.8,
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&auto=format&fit=crop&q=80',
      description: 'Élevage de 5000 poules pondeuses avec bâtiments climatisés et système automatisé de collecte.',
      riskLevel: 'Modéré',
      status: 'funding',
      highlights: ['Système automatisé', 'Poules de race', 'Débouchés sécurisés']
    },
    {
      id: 5,
      title: 'Transformation Mangues Bio - Casamance',
      category: 'Transformation',
      location: 'Ziguinchor, Sénégal',
      target: 7200000,
      raised: 2160000,
      investors: 11,
      daysLeft: 42,
      roi: 19,
      duration: 9,
      farmer: 'Ibrahima Camara',
      farmerRating: 4.6,
      image: 'https://images.unsplash.com/photo-1553279123-946b5029be7e?w=800&auto=format&fit=crop&q=80',
      description: 'Unité de transformation de mangues bio en jus, confitures et fruits séchés pour les marchés locaux et export.',
      riskLevel: 'Modéré',
      status: 'funding',
      highlights: ['Certification bio', 'Export Europe', 'Création d\'emplois']
    },
    {
      id: 6,
      title: 'Élevage Bovin Amélioré - Ferlo',
      category: 'Élevage',
      location: 'Linguère, Sénégal',
      target: 9800000,
      raised: 9800000,
      investors: 22,
      daysLeft: 0,
      roi: 16,
      duration: 18,
      farmer: 'Mamadou Diallo',
      farmerRating: 4.9,
      image: 'https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=800&auto=format&fit=crop&q=80',
      description: 'Élevage moderne de 200 têtes de bétail avec amélioration génétique et système de suivi sanitaire.',
      riskLevel: 'Élevé',
      status: 'active',
      highlights: ['Races améliorées', 'Suivi vétérinaire', 'Marché garanti']
    }
  ];

  const portfolioStats = [
    { label: 'Investissement total', value: '2,850,000', unit: 'FCFA', icon: DollarSign, change: '+12.5%', trend: 'up' },
    { label: 'Projets actifs', value: '12', unit: '', icon: Target, change: '+3', trend: 'up' },
    { label: 'Rendement moyen', value: '19.4', unit: '%', icon: TrendingUp, change: '+2.1%', trend: 'up' },
    { label: 'Revenus générés', value: '553,800', unit: 'FCFA', icon: PieChart, change: '+15.2%', trend: 'up' }
  ];

  const myInvestments = [
    { project: 'Culture Bio d\'Arachides', invested: 250000, current: 295000, roi: 18, status: 'active', duration: 3 },
    { project: 'Serres Maraîchères', invested: 180000, current: 219600, roi: 22, status: 'completed', duration: 6 },
    { project: 'Élevage Poules Pondeuses', invested: 120000, current: 150000, roi: 25, status: 'active', duration: 7 },
    { project: 'Transformation Mangues', invested: 200000, current: 238000, roi: 19, status: 'active', duration: 4 },
    { project: 'Riziculture Moderne', invested: 150000, current: 174000, roi: 16, status: 'active', duration: 8 }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Faible': return 'text-emerald-700 bg-emerald-100 border-emerald-200';
      case 'Modéré': return 'text-amber-700 bg-amber-100 border-amber-200';
      case 'Élevé': return 'text-red-700 bg-red-100 border-red-200';
      default: return 'text-gray-700 bg-gray-100 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'funding': return 'text-blue-700 bg-blue-100 border-blue-200';
      case 'active': return 'text-green-700 bg-green-100 border-green-200';
      case 'completed': return 'text-gray-700 bg-gray-100 border-gray-200';
      default: return 'text-gray-700 bg-gray-100 border-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'funding': return 'Financement';
      case 'active': return 'En cours';
      case 'completed': return 'Terminé';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Investissement Participatif
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Investissez dans l'agriculture sénégalaise et générez des revenus durables tout en soutenant le développement rural
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white shadow-lg">
            <div className="text-3xl font-bold text-green-600">147</div>
            <div className="text-sm text-gray-600 mt-1">Projets financés</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white shadow-lg">
            <div className="text-3xl font-bold text-blue-600">2.8M</div>
            <div className="text-sm text-gray-600 mt-1">Investis (FCFA)</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white shadow-lg">
            <div className="text-3xl font-bold text-purple-600">94%</div>
            <div className="text-sm text-gray-600 mt-1">Taux de réussite</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white shadow-lg">
            <div className="text-3xl font-bold text-orange-600">19.2%</div>
            <div className="text-sm text-gray-600 mt-1">ROI moyen</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/70 backdrop-blur-sm p-1 rounded-2xl shadow-lg border border-white">
            {[
              { key: 'projects', label: 'Projets disponibles', icon: Target },
              { key: 'portfolio', label: 'Mon portefeuille', icon: PieChart },
              { key: 'create', label: 'Créer un projet', icon: BarChart3 }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            <div className="xl:col-span-3 space-y-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-80 h-64 lg:h-auto relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getRiskColor(project.riskLevel)}`}>
                          Risque {project.riskLevel}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                          {getStatusLabel(project.status)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                          <p className="text-sm text-gray-600 mb-1">{project.category}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <MapPin className="h-4 w-4" />
                            <span>{project.location}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="font-medium text-gray-900">{project.farmerRating}</span>
                          </div>
                          <p className="text-sm text-gray-600">{project.farmer}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.highlights.map((highlight, index) => (
                          <span key={index} className="px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-medium">
                            <CheckCircle className="inline h-3 w-3 mr-1" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <div className="text-center">
                          <TrendingUp className="h-6 w-6 text-green-500 mx-auto mb-2" />
                          <div className="font-bold text-lg text-gray-900">{project.roi}%</div>
                          <div className="text-xs text-gray-600">ROI estimé</div>
                        </div>
                        <div className="text-center">
                          <Clock className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                          <div className="font-bold text-lg text-gray-900">{project.duration}</div>
                          <div className="text-xs text-gray-600">mois</div>
                        </div>
                        <div className="text-center">
                          <Users className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                          <div className="font-bold text-lg text-gray-900">{project.investors}</div>
                          <div className="text-xs text-gray-600">investisseurs</div>
                        </div>
                        <div className="text-center">
                          <Calendar className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                          <div className="font-bold text-lg text-gray-900">{project.daysLeft || 'Complet'}</div>
                          <div className="text-xs text-gray-600">{project.daysLeft ? 'jours restants' : ''}</div>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-3">
                          <span className="font-medium text-gray-700">Financement</span>
                          <span className="font-bold text-green-600">{Math.round((project.raised / project.target) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-1000 shadow-sm" 
                            style={{ width: `${Math.min((project.raised / project.target) * 100, 100)}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm mt-3">
                          <span className="font-bold text-green-600">{(project.raised / 1000000).toFixed(1)}M FCFA collectés</span>
                          <span className="text-gray-600">Objectif: {(project.target / 1000000).toFixed(1)}M FCFA</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          {project.daysLeft > 0 ? (
                            <span className="flex items-center space-x-1">
                              <AlertCircle className="h-4 w-4 text-orange-500" />
                              <span>{project.daysLeft} jours restants</span>
                            </span>
                          ) : (
                            <span className="flex items-center space-x-1 text-green-600">
                              <CheckCircle className="h-4 w-4" />
                              <span>Financement terminé</span>
                            </span>
                          )}
                        </div>
                        <div className="flex space-x-3">
                          <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl font-semibold transition-colors">
                            Détails
                          </button>
                          <button 
                            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                              project.daysLeft > 0
                                ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={project.daysLeft === 0}
                          >
                            <span>{project.daysLeft > 0 ? 'Investir' : 'Complet'}</span>
                            {project.daysLeft > 0 && <ArrowRight className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              {/* Investment Tips */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>💡 Conseils d'expert</span>
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800">Diversifiez vos investissements sur plusieurs projets et régions</span>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Star className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800">Privilégiez les agriculteurs avec un excellent historique (4.5+ étoiles)</span>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-800">Considérez la saisonnalité et les cycles de production</span>
                  </div>
                </div>
              </div>

              {/* Featured Farmer */}
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 shadow-lg border border-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                  <h3 className="font-bold text-gray-900">Agriculteur du mois</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
                    FS
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Fatou Sarr</h4>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-medium">5.0</span>
                    <span className="text-gray-600 text-sm">(28 avis)</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Spécialiste en agriculture connectée avec 15 ans d'expérience</p>
                  <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                    Voir ses projets →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <div className="space-y-8">
            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <Icon className="h-8 w-8 text-green-600" />
                      <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                        stat.trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                    <div className="flex items-baseline space-x-1">
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-lg text-gray-600">{stat.unit}</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* My Investments */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <PieChart className="h-6 w-6 text-green-600" />
                <span>Mes Investissements</span>
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-100">
                      <th className="text-left pb-4 font-semibold text-gray-900">Projet</th>
                      <th className="text-right pb-4 font-semibold text-gray-900">Investi</th>
                      <th className="text-right pb-4 font-semibold text-gray-900">Valeur actuelle</th>
                      <th className="text-center pb-4 font-semibold text-gray-900">ROI</th>
                      <th className="text-center pb-4 font-semibold text-gray-900">Durée</th>
                      <th className="text-center pb-4 font-semibold text-gray-900">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {myInvestments.map((investment, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="py-4 font-medium text-gray-900">{investment.project}</td>
                        <td className="py-4 text-right text-gray-600">{investment.invested.toLocaleString()} FCFA</td>
                        <td className="py-4 text-right font-semibold text-gray-900">{investment.current.toLocaleString()} FCFA</td>
                        <td className="py-4 text-center">
                          <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-semibold text-green-700 bg-green-100">
                            <Percent className="h-3 w-3" />
                            <span>+{investment.roi}</span>
                          </span>
                        </td>
                        <td className="py-4 text-center text-gray-600">{investment.duration} mois</td>
                        <td className="py-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            investment.status === 'active' ? 'text-green-700 bg-green-100' : 'text-gray-700 bg-gray-100'
                          }`}>
                            {investment.status === 'active' ? 'Actif' : 'Terminé'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Create Tab */}
        {activeTab === 'create' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Créer votre projet d'investissement</h2>
              <p className="text-gray-600 text-center mb-8">Présentez votre projet agricole à notre communauté d'investisseurs</p>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Titre du projet *</label>
                    <input 
                      type="text" 
                      placeholder="Ex: Culture de mil bio certifié - Région de Thiès"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Catégorie *</label>
                    <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option>Agriculture Biologique</option>
                      <option>Agriculture Smart</option>
                      <option>Maraîchage</option>
                      <option>Riziculture</option>
                      <option>Élevage</option>
                      <option>Transformation</option>
                      <option>Aquaculture</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Localisation *</label>
                    <input 
                      type="text" 
                      placeholder="Ex: Thiès, Sénégal"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Description détaillée *</label>
                  <textarea 
                    rows={6}
                    placeholder="Décrivez votre projet en détail : objectifs, méthodes, utilisation des fonds, impact attendu..."
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none" 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Montant cible (FCFA) *</label>
                    <input 
                      type="number" 
                      placeholder="5000000"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">ROI estimé (%) *</label>
                    <input 
                      type="number" 
                      placeholder="18"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Durée (mois) *</label>
                    <input 
                      type="number" 
                      placeholder="8"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Photos du projet *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-500 transition-colors">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 mb-2">Glissez vos images ici ou cliquez pour sélectionner</p>
                    <p className="text-sm text-gray-400 mb-4">PNG, JPG jusqu'à 10MB (max 5 images)</p>
                    <button type="button" className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                      <Upload className="h-4 w-4" />
                      <span>Choisir des fichiers</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox" 
                    id="terms"
                    className="mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500" 
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    J'accepte les <a href="#" className="text-green-600 hover:underline">conditions d'utilisation</a> et certifie l'exactitude des informations fournies. Je comprends que mon projet sera soumis à validation avant publication.
                  </label>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Soumettre le projet pour validation
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
