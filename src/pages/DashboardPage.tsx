import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Sprout, 
  Droplets, 
  Sun,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  MapPin,
  Calendar
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const metrics = [
    {
      title: 'Revenus du mois',
      value: '2,450,000',
      unit: 'FCFA',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Superficie cultivée',
      value: '15.6',
      unit: 'hectares',
      change: '+2.1 ha',
      trend: 'up',
      icon: Sprout,
      color: 'text-emerald-600'
    },
    {
      title: 'Consommation eau',
      value: '45.2%',
      unit: 'optimisée',
      change: '-8.3%',
      trend: 'down',
      icon: Droplets,
      color: 'text-blue-600'
    },
    {
      title: 'Prédiction récolte',
      value: '95%',
      unit: 'confiance',
      change: '+3.2%',
      trend: 'up',
      icon: BarChart3,
      color: 'text-purple-600'
    }
  ];

  const alerts = [
    {
      type: 'warning',
      title: 'Risque de maladie détecté',
      description: 'Parcelle A3 - Mil: Possible attaque de chenilles',
      time: 'Il y a 2h',
      location: 'Thiès, Sénégal'
    },
    {
      type: 'success',
      title: 'Irrigation automatique activée',
      description: 'Parcelle B1 - Tomates: Système lancé avec succès',
      time: 'Il y a 4h',
      location: 'Saint-Louis, Sénégal'
    },
    {
      type: 'info',
      title: 'Nouvelle offre marketplace',
      description: 'Acheteur intéressé par votre récolte d\'arachides',
      time: 'Il y a 6h',
      location: 'Kaolack, Sénégal'
    }
  ];

  const tasks = [
    { id: 1, title: 'Traitement antifongique parcelle A2', due: 'Aujourd\'hui', priority: 'high', completed: false },
    { id: 2, title: 'Inspection équipement irrigation', due: 'Demain', priority: 'medium', completed: false },
    { id: 3, title: 'Livraison semences de mil', due: '2 jours', priority: 'high', completed: false },
    { id: 4, title: 'Formation utilisation drone', due: '3 jours', priority: 'low', completed: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord</h1>
          <p className="text-gray-600 mt-2">Vue d'ensemble de votre exploitation agricole</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-gray-50`}>
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                  <div className={`flex items-center text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendIcon className="h-4 w-4 mr-1" />
                    {metric.change}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">
                    {metric.value} <span className="text-sm font-normal text-gray-500">{metric.unit}</span>
                  </p>
                  <p className="text-sm text-gray-600">{metric.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Alerts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Alertes & Notifications</h2>
              <div className="space-y-4">
                {alerts.map((alert, index) => {
                  const alertIcons = {
                    warning: AlertTriangle,
                    success: CheckCircle,
                    info: Clock
                  };
                  const alertColors = {
                    warning: 'text-amber-600 bg-amber-50',
                    success: 'text-green-600 bg-green-50',
                    info: 'text-blue-600 bg-blue-50'
                  };
                  const Icon = alertIcons[alert.type as keyof typeof alertIcons];
                  return (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                      <div className={`p-2 rounded-lg ${alertColors[alert.type as keyof typeof alertColors]}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {alert.time}
                          <MapPin className="h-3 w-3 ml-3 mr-1" />
                          {alert.location}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tasks */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Tâches à faire</h2>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div key={task.id} className={`p-3 rounded-lg border transition-colors ${task.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => {}}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                          {task.title}
                        </p>
                        <div className="flex items-center mt-1">
                          <Calendar className="h-3 w-3 text-gray-400 mr-1" />
                          <span className="text-xs text-gray-500">{task.due}</span>
                          <span className={`ml-2 inline-block w-2 h-2 rounded-full ${
                            task.priority === 'high' ? 'bg-red-400' : 
                            task.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                          }`}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Weather Widget */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Conditions Météo - Thiès</h3>
              <div className="flex items-center space-x-4">
                <Sun className="h-8 w-8" />
                <div>
                  <p className="text-3xl font-bold">32°C</p>
                  <p className="text-blue-100">Ensoleillé</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-blue-100 mb-1">Humidité: 65%</p>
              <p className="text-blue-100 mb-1">Vent: 12 km/h</p>
              <p className="text-blue-100">Précipitations: 0mm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};