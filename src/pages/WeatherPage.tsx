import React from 'react';
import { Sun, Cloud, CloudRain, Wind, Droplets, Thermometer, Eye, ArrowDown, ArrowUp, MapPin, Calendar, BadgeAlert as Alert } from 'lucide-react';

export const WeatherPage: React.FC = () => {
  const currentWeather = {
    location: 'Thiès, Sénégal',
    temperature: 32,
    condition: 'Ensoleillé',
    humidity: 65,
    windSpeed: 12,
    pressure: 1013,
    visibility: 10,
    uvIndex: 8,
    icon: Sun
  };

  const hourlyForecast = [
    { time: '14:00', temp: 32, condition: 'sunny', precipitation: 0 },
    { time: '15:00', temp: 33, condition: 'sunny', precipitation: 0 },
    { time: '16:00', temp: 31, condition: 'cloudy', precipitation: 10 },
    { time: '17:00', temp: 29, condition: 'rain', precipitation: 70 },
    { time: '18:00', temp: 27, condition: 'rain', precipitation: 60 },
    { time: '19:00', temp: 26, condition: 'cloudy', precipitation: 20 },
    { time: '20:00', temp: 25, condition: 'cloudy', precipitation: 5 },
    { time: '21:00', temp: 24, condition: 'clear', precipitation: 0 }
  ];

  const weeklyForecast = [
    { day: 'Aujourd\'hui', date: '15 Nov', high: 33, low: 24, condition: 'sunny', precipitation: 0 },
    { day: 'Demain', date: '16 Nov', high: 29, low: 22, condition: 'rain', precipitation: 75 },
    { day: 'Mercredi', date: '17 Nov', high: 31, low: 23, condition: 'rain', precipitation: 60 },
    { day: 'Jeudi', date: '18 Nov', high: 28, low: 21, condition: 'cloudy', precipitation: 30 },
    { day: 'Vendredi', date: '19 Nov', high: 30, low: 22, condition: 'sunny', precipitation: 10 },
    { day: 'Samedi', date: '20 Nov', high: 32, low: 24, condition: 'sunny', precipitation: 0 },
    { day: 'Dimanche', date: '21 Nov', high: 31, low: 23, condition: 'cloudy', precipitation: 20 }
  ];

  const alerts = [
    {
      type: 'warning',
      title: 'Alerte Pluie',
      message: 'Fortes averses prévues demain après-midi (40-60mm)',
      recommendation: 'Reporter les traitements phytosanitaires'
    },
    {
      type: 'info',
      title: 'Conditions Favorables',
      message: 'Excellentes conditions pour semis de mil cette semaine',
      recommendation: 'Période optimale : Mercredi-Vendredi'
    }
  ];

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return Sun;
      case 'cloudy':
        return Cloud;
      case 'rain':
        return CloudRain;
      default:
        return Sun;
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return 'text-yellow-500';
      case 'cloudy':
        return 'text-gray-500';
      case 'rain':
        return 'text-blue-500';
      default:
        return 'text-yellow-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Station Météo Intelligente</h1>
          <p className="text-gray-600">Prévisions hyperlocales et conseils agricoles personnalisés</p>
        </div>

        {/* Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {alerts.map((alert, index) => (
            <div key={index} className={`p-4 rounded-xl border-l-4 ${
              alert.type === 'warning' ? 'bg-amber-50 border-amber-400' : 'bg-blue-50 border-blue-400'
            }`}>
              <div className="flex items-start space-x-3">
                <Alert className={`h-5 w-5 mt-0.5 ${
                  alert.type === 'warning' ? 'text-amber-600' : 'text-blue-600'
                }`} />
                <div>
                  <h3 className={`font-semibold ${
                    alert.type === 'warning' ? 'text-amber-800' : 'text-blue-800'
                  }`}>
                    {alert.title}
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">{alert.message}</p>
                  <p className="text-sm font-medium text-gray-800 mt-2">
                    💡 {alert.recommendation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Weather */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-5 w-5" />
                    <span className="text-lg font-medium">{currentWeather.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-100">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date().toLocaleDateString('fr-FR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-blue-100">Mise à jour</p>
                  <p className="font-medium">Il y a 10 min</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <currentWeather.icon className="h-16 w-16" />
                  <div>
                    <p className="text-5xl font-bold">{currentWeather.temperature}°C</p>
                    <p className="text-xl text-blue-100">{currentWeather.condition}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Droplets className="h-6 w-6 mx-auto mb-1" />
                    <p className="text-sm text-blue-100">Humidité</p>
                    <p className="font-semibold">{currentWeather.humidity}%</p>
                  </div>
                  <div className="text-center">
                    <Wind className="h-6 w-6 mx-auto mb-1" />
                    <p className="text-sm text-blue-100">Vent</p>
                    <p className="font-semibold">{currentWeather.windSpeed} km/h</p>
                  </div>
                  <div className="text-center">
                    <Thermometer className="h-6 w-6 mx-auto mb-1" />
                    <p className="text-sm text-blue-100">Pression</p>
                    <p className="font-semibold">{currentWeather.pressure} mb</p>
                  </div>
                  <div className="text-center">
                    <Eye className="h-6 w-6 mx-auto mb-1" />
                    <p className="text-sm text-blue-100">Visibilité</p>
                    <p className="font-semibold">{currentWeather.visibility} km</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hourly Forecast */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Prévisions par heure</h3>
              <div className="overflow-x-auto">
                <div className="flex space-x-6 min-w-max pb-2">
                  {hourlyForecast.map((hour, index) => {
                    const Icon = getWeatherIcon(hour.condition);
                    return (
                      <div key={index} className="text-center flex-shrink-0">
                        <p className="text-sm text-gray-600 mb-2">{hour.time}</p>
                        <Icon className={`h-8 w-8 mx-auto mb-2 ${getConditionColor(hour.condition)}`} />
                        <p className="font-semibold text-gray-900 mb-1">{hour.temp}°C</p>
                        <div className="flex items-center space-x-1">
                          <Droplets className="h-3 w-3 text-blue-500" />
                          <span className="text-xs text-gray-600">{hour.precipitation}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 7-Day Forecast */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Prévisions 7 jours</h3>
              <div className="space-y-4">
                {weeklyForecast.map((day, index) => {
                  const Icon = getWeatherIcon(day.condition);
                  return (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-20">
                          <p className="font-medium text-gray-900">{day.day}</p>
                          <p className="text-sm text-gray-600">{day.date}</p>
                        </div>
                        <Icon className={`h-6 w-6 ${getConditionColor(day.condition)}`} />
                        <div className="flex items-center space-x-2">
                          <Droplets className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-gray-600">{day.precipitation}%</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <ArrowUp className="h-4 w-4 text-red-500" />
                          <span className="font-medium">{day.high}°</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ArrowDown className="h-4 w-4 text-blue-500" />
                          <span className="text-gray-600">{day.low}°</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agricultural Recommendations */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Conseils Agricoles</h3>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-1">🌱 Semis</h4>
                  <p className="text-sm text-green-700">Conditions idéales pour semer le mil demain matin</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">💧 Irrigation</h4>
                  <p className="text-sm text-blue-700">Réduire l'arrosage avec les pluies prévues</p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg">
                  <h4 className="font-medium text-amber-800 mb-1">🚫 Traitements</h4>
                  <p className="text-sm text-amber-700">Reporter les pulvérisations (vent fort)</p>
                </div>
              </div>
            </div>

            {/* Location Settings */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mes Locations</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-green-800">Parcelle A1</p>
                    <p className="text-sm text-green-600">Thiès - Mil</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-800">32°C</p>
                    <Sun className="h-4 w-4 text-yellow-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">Parcelle B2</p>
                    <p className="text-sm text-gray-600">Kaolack - Arachide</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-800">29°C</p>
                    <Cloud className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 text-green-600 font-medium text-sm hover:text-green-700">
                + Ajouter une location
              </button>
            </div>

            {/* Alerts Settings */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Alertes</h3>
              <div className="space-y-3">
                {[
                  { label: 'Risque de pluie', enabled: true },
                  { label: 'Température extrême', enabled: true },
                  { label: 'Vent fort', enabled: false },
                  { label: 'Gel possible', enabled: true }
                ].map((alert, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{alert.label}</span>
                    <input
                      type="checkbox"
                      checked={alert.enabled}
                      onChange={() => {}}
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};