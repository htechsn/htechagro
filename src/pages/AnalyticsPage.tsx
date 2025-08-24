import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  DollarSign, 
  Sprout, 
  Droplets,
  Calendar,
  Download,
  RefreshCw,
  Target,
  Award,
  Users,
  MapPin
} from 'lucide-react';

export const AnalyticsPage: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const kpis = [
    {
      title: 'Chiffre d\'affaires',
      value: '12.4M',
      unit: 'FCFA',
      change: '+18.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Rendement moyen',
      value: '3.2',
      unit: 't/ha',
      change: '+12.5%',
      trend: 'up',
      icon: Sprout,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      title: 'Coût de production',
      value: '485K',
      unit: 'FCFA/ha',
      change: '-8.1%',
      trend: 'down',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Efficacité eau',
      value: '92%',
      unit: 'optimisation',
      change: '+5.3%',
      trend: 'up',
      icon: Droplets,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    }
  ];

  const predictions = [
    {
      crop: 'Mil',
      area: '5.2 ha',
      expectedYield: '16.8 t',
      confidence: 94,
      harvestDate: '2024-12-15',
      estimatedRevenue: '3.2M FCFA'
    },
    {
      crop: 'Arachide',
      area: '3.8 ha',
      expectedYield: '9.5 t',
      confidence: 89,
      harvestDate: '2024-12-28',
      estimatedRevenue: '4.8M FCFA'
    },
    {
      crop: 'Riz',
      area: '2.1 ha',
      expectedYield: '12.6 t',
      confidence: 96,
      harvestDate: '2025-01-10',
      estimatedRevenue: '2.1M FCFA'
    }
  ];

  const benchmarks = [
    {
      metric: 'Rendement Mil',
      myValue: 3.2,
      regionAvg: 2.8,
      nationalAvg: 2.5,
      unit: 't/ha',
      performance: 'excellent'
    },
    {
      metric: 'Coût production',
      myValue: 485,
      regionAvg: 520,
      nationalAvg: 580,
      unit: 'K FCFA/ha',
      performance: 'bon'
    },
    {
      metric: 'Efficacité eau',
      myValue: 92,
      regionAvg: 78,
      nationalAvg: 72,
      unit: '%',
      performance: 'excellent'
    },
    {
      metric: 'ROI moyen',
      myValue: 18.5,
      regionAvg: 15.2,
      nationalAvg: 13.8,
      unit: '%',
      performance: 'bon'
    }
  ];

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'excellent': return 'text-green-600 bg-green-50';
      case 'bon': return 'text-blue-600 bg-blue-50';
      case 'moyen': return 'text-yellow-600 bg-yellow-50';
      case 'faible': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600 bg-green-50';
    if (confidence >= 75) return 'text-blue-600 bg-blue-50';
    if (confidence >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics & Business Intelligence</h1>
            <p className="text-gray-600">Tableau de bord avancé avec prédictions IA et benchmarking</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
            >
              <option value="1month">1 mois</option>
              <option value="3months">3 mois</option>
              <option value="6months">6 mois</option>
              <option value="1year">1 an</option>
            </select>
            
            <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Exporter</span>
            </button>
            
            <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              <RefreshCw className="h-4 w-4" />
              <span>Actualiser</span>
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            const TrendIcon = kpi.trend === 'up' ? TrendingUp : TrendingDown;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${kpi.bgColor}`}>
                    <Icon className={`h-6 w-6 ${kpi.color}`} />
                  </div>
                  <div className={`flex items-center text-sm font-medium ${
                    kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendIcon className="h-4 w-4 mr-1" />
                    {kpi.change}
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">
                    {kpi.value} <span className="text-sm font-normal text-gray-500">{kpi.unit}</span>
                  </p>
                  <p className="text-sm text-gray-600">{kpi.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Yield Predictions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Prédictions de Rendement IA</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>Mise à jour: Aujourd'hui</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {predictions.map((prediction, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Sprout className="h-5 w-5 text-green-600" />
                      <div>
                        <h3 className="font-medium text-gray-900">{prediction.crop}</h3>
                        <p className="text-sm text-gray-600">{prediction.area}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConfidenceColor(prediction.confidence)}`}>
                      {prediction.confidence}% confiance
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Rendement prévu</p>
                      <p className="font-medium text-gray-900">{prediction.expectedYield}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Récolte prévue</p>
                      <p className="font-medium text-gray-900">{prediction.harvestDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Revenus estimés</p>
                      <p className="font-medium text-green-600">{prediction.estimatedRevenue}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Chart Placeholder */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Évolution des Performances</h2>
            <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <p className="text-gray-600">Graphique interactif</p>
                <p className="text-sm text-gray-500">Rendements, coûts, revenus par période</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benchmarking */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Benchmarking Régional</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Award className="h-4 w-4" />
              <span>Comparaison avec 1,200+ exploitations</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="pb-3 font-medium text-gray-900">Métrique</th>
                  <th className="pb-3 font-medium text-gray-900">Ma performance</th>
                  <th className="pb-3 font-medium text-gray-900">Moyenne régionale</th>
                  <th className="pb-3 font-medium text-gray-900">Moyenne nationale</th>
                  <th className="pb-3 font-medium text-gray-900">Évaluation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {benchmarks.map((benchmark, index) => (
                  <tr key={index}>
                    <td className="py-4 font-medium text-gray-900">{benchmark.metric}</td>
                    <td className="py-4">
                      <span className="text-lg font-semibold text-green-600">
                        {benchmark.myValue} {benchmark.unit}
                      </span>
                    </td>
                    <td className="py-4 text-gray-600">{benchmark.regionAvg} {benchmark.unit}</td>
                    <td className="py-4 text-gray-600">{benchmark.nationalAvg} {benchmark.unit}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPerformanceColor(benchmark.performance)}`}>
                        {benchmark.performance}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regional Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Insights Régionaux</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-800">Région de Thiès</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      Vos rendements en mil dépassent de 14% la moyenne régionale. 
                      Excellente performance sur l'efficacité hydrique.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-800">Opportunités d'amélioration</h4>
                    <p className="text-sm text-green-700 mt-1">
                      L'adoption de variétés améliorées pourrait augmenter 
                      vos rendements de 15-20% supplémentaires.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-amber-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-800">Recommandation</h4>
                    <p className="text-sm text-amber-700 mt-1">
                      Rejoignez le groupe des 10 meilleurs producteurs 
                      de votre région pour partager les meilleures pratiques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Rapports Automatisés</h3>
            <div className="space-y-3">
              {[
                { name: 'Rapport mensuel de performance', status: 'Prêt', date: '15 Nov 2024' },
                { name: 'Analyse comparative Q4', status: 'Programmé', date: '30 Nov 2024' },
                { name: 'Prévisions saison sèche', status: 'En cours', date: '5 Déc 2024' },
                { name: 'Bilan annuel 2024', status: 'Programmé', date: '31 Déc 2024' }
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{report.name}</p>
                    <p className="text-sm text-gray-600">{report.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    report.status === 'Prêt' ? 'text-green-600 bg-green-50' :
                    report.status === 'En cours' ? 'text-blue-600 bg-blue-50' :
                    'text-gray-600 bg-gray-50'
                  }`}>
                    {report.status}
                  </span>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 text-green-600 hover:text-green-700 font-medium text-sm border border-green-600 hover:bg-green-50 py-2 rounded-lg transition-colors">
              Configurer nouveaux rapports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};