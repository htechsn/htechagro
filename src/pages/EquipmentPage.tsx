import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Calendar, 
  Clock,
  Star,
  Shield,
  Search,
  Filter,
  Wifi,
  Battery,
  Gauge
} from 'lucide-react';

export const EquipmentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rent' | 'track' | 'maintenance'>('rent');

  const equipment = [
    {
      id: 1,
      name: 'Tracteur John Deere 5075E',
      type: 'Tracteur',
      power: '75 CV',
      owner: 'Coopérative de Thiès',
      location: 'Thiès, Sénégal',
      distance: 5,
      pricePerDay: 45000,
      pricePerHour: 6000,
      rating: 4.8,
      reviews: 32,
      available: true,
      features: ['GPS', 'IoT', 'Climatisation'],
      image: 'https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=800&auto=format&fit=crop&q=80',
      nextAvailable: null
    },
    {
      id: 2,
      name: 'Moissonneuse-batteuse New Holland',
      type: 'Récolte',
      power: '150 CV',
      owner: 'SAED Saint-Louis',
      location: 'Saint-Louis, Sénégal',
      distance: 78,
      pricePerDay: 125000,
      pricePerHour: 15000,
      rating: 4.9,
      reviews: 18,
      available: false,
      features: ['GPS', 'Capteurs rendement', 'Automatique'],
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=80',
      nextAvailable: '2024-11-20'
    },
    {
      id: 3,
      name: 'Semoir de précision Massey Ferguson',
      type: 'Semis',
      power: '45 CV',
      owner: 'GIE Kaolack Agriculture',
      location: 'Kaolack, Sénégal',
      distance: 45,
      pricePerDay: 35000,
      pricePerHour: 4500,
      rating: 4.6,
      reviews: 24,
      available: true,
      features: ['GPS', 'Dosage variable', 'Compact'],
      image: 'https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=800',
      nextAvailable: null
    },
    {
      id: 4,
      name: 'Pulvérisateur Case IH',
      type: 'Traitement',
      power: '120 CV',
      owner: 'Ferme moderne de Louga',
      location: 'Louga, Sénégal',
      distance: 120,
      pricePerDay: 55000,
      pricePerHour: 7500,
      rating: 4.7,
      reviews: 15,
      available: true,
      features: ['GPS', 'Coupure de section', 'IoT'],
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop&q=80',
      nextAvailable: null
    },
    {
      id: 5,
      name: 'Charrue réversible Kuhn',
      type: 'Labour',
      power: '80 CV requis',
      owner: 'Centre agricole de Diourbel',
      location: 'Diourbel, Sénégal',
      distance: 65,
      pricePerDay: 25000,
      pricePerHour: 3500,
      rating: 4.5,
      reviews: 28,
      available: true,
      features: ['Réversible', 'Réglage hydraulique', 'Robuste'],
      image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=800',
      nextAvailable: null
    },
    {
      id: 6,
      name: 'Remorque agricole 10 tonnes',
      type: 'Transport',
      power: 'N/A',
      owner: 'Transport agricole Fatick',
      location: 'Fatick, Sénégal',
      distance: 90,
      pricePerDay: 20000,
      pricePerHour: 3000,
      rating: 4.4,
      reviews: 41,
      available: false,
      features: ['Benne basculante', 'Freinage hydraulique', 'GPS tracker'],
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80',
      nextAvailable: '2024-11-22'
    },
    {
      id: 7,
      name: 'Cultivateur rotatif Lemken',
      type: 'Préparation du sol',
      power: '60 CV requis',
      owner: 'SODEFITEX Tambacounda',
      location: 'Tambacounda, Sénégal',
      distance: 250,
      pricePerDay: 30000,
      pricePerHour: 4000,
      rating: 4.6,
      reviews: 19,
      available: true,
      features: ['Largeur variable', 'Dents renforcées', 'Compact'],
      image: 'https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=800',
      nextAvailable: null
    },
    {
      id: 8,
      name: 'Faucheuse-conditionneuse Claas',
      type: 'Fenaison',
      power: '90 CV requis',
      owner: 'Éleveurs Unis de Kolda',
      location: 'Kolda, Sénégal',
      distance: 180,
      pricePerDay: 40000,
      pricePerHour: 5500,
      rating: 4.8,
      reviews: 12,
      available: true,
      features: ['Conditionneur à rouleaux', 'Largeur 3m', 'Protection'],
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&auto=format&fit=crop&q=80',
      nextAvailable: null
    },
    {
      id: 9,
      name: 'Épandeur d\'engrais Amazone',
      type: 'Fertilisation',
      power: '50 CV requis',
      owner: 'Agro-Service Ziguinchor',
      location: 'Ziguinchor, Sénégal',
      distance: 300,
      pricePerDay: 28000,
      pricePerHour: 3800,
      rating: 4.5,
      reviews: 22,
      available: false,
      features: ['Dosage électronique', 'Largeur 24m', 'Capacité 2000L'],
      image: 'https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=800',
      nextAvailable: '2024-11-21'
    }
  ];

  const myBookings = [
    {
      id: 1,
      equipment: 'Tracteur John Deere 5075E',
      date: '2024-11-18',
      time: '08:00 - 16:00',
      status: 'confirmed',
      location: 'Parcelle A1, Thiès',
      cost: 45000,
      tracking: { lat: 14.7167, lng: -16.9500, online: true, fuel: 75 }
    },
    {
      id: 2,
      equipment: 'Semoir de précision',
      date: '2024-11-22',
      time: '06:00 - 12:00',
      status: 'pending',
      location: 'Parcelle B2, Kaolack',
      cost: 27000,
      tracking: null
    }
  ];

  const maintenanceAlerts = [
    {
      id: 1,
      equipment: 'Tracteur John Deere 5075E',
      type: 'Maintenance préventive',
      priority: 'medium',
      dueDate: '2024-11-25',
      description: 'Vidange et contrôle général à 500h',
      cost: 85000
    },
    {
      id: 2,
      equipment: 'Moissonneuse-batteuse',
      type: 'Réparation urgente',
      priority: 'high',
      dueDate: '2024-11-19',
      description: 'Problème détecté sur le système de battage',
      cost: 150000
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-600 bg-green-50';
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      case 'cancelled': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Location de Matériel Agricole</h1>
          <p className="text-lg text-gray-600">Matériel moderne connecté avec tracking IoT et maintenance prédictive</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-white/50 backdrop-blur-sm p-1 rounded-lg w-fit shadow-sm">
          {[
            { key: 'rent', label: 'Louer du matériel', icon: Truck },
            { key: 'track', label: 'Mes réservations', icon: MapPin },
            { key: 'maintenance', label: 'Maintenance', icon: Gauge }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === key
                  ? 'bg-white text-green-700 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/30'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Rent Tab */}
        {activeTab === 'rent' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Rechercher</h3>
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Type d'équipement..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Ville ou région..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date souhaitée</label>
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Filtres</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type d'équipement</label>
                    <div className="space-y-2">
                      {['Tracteur', 'Récolte', 'Semis', 'Traitement', 'Transport', 'Labour', 'Fenaison'].map(type => (
                        <label key={type} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                          <span className="text-sm text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prix par jour (FCFA)</label>
                    <div className="flex space-x-2">
                      <input type="number" placeholder="Min" className="w-full p-2 border border-gray-300 rounded-md text-sm" />
                      <input type="number" placeholder="Max" className="w-full p-2 border border-gray-300 rounded-md text-sm" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-sm text-gray-700">Équipement connecté IoT</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Equipment List */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">{equipment.length} équipements disponibles</p>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                    <Filter className="h-4 w-4" />
                    <span>Trier</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {equipment.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-64 h-48 lg:h-auto">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.name}</h3>
                            <p className="text-sm text-gray-600">{item.type} • {item.power}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {item.available ? (
                              <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                                Disponible
                              </span>
                            ) : (
                              <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-medium">
                                Occupé
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.features.map((feature, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-medium">
                              {feature === 'GPS' && <MapPin className="inline h-3 w-3 mr-1" />}
                              {feature === 'IoT' && <Wifi className="inline h-3 w-3 mr-1" />}
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600">{item.location} • {item.distance}km</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-gray-600">{item.rating} ({item.reviews} avis)</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Shield className="h-4 w-4 text-green-500" />
                            <span className="text-gray-600">Assurance incluse</span>
                          </div>
                        </div>
                        
                        <div className="border-t pt-4 flex items-center justify-between">
                          <div className="space-y-1">
                            <div>
                              <span className="text-2xl font-bold text-gray-900">{item.pricePerDay.toLocaleString()}</span>
                              <span className="text-gray-600 ml-1">FCFA/jour</span>
                            </div>
                            <div>
                              <span className="text-lg font-semibold text-gray-700">{item.pricePerHour.toLocaleString()}</span>
                              <span className="text-gray-500 ml-1">FCFA/heure</span>
                            </div>
                          </div>
                          
                          <div className="flex space-x-3">
                            <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded-lg font-medium transition-colors">
                              Détails
                            </button>
                            <button 
                              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                                item.available 
                                  ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-md' 
                                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              }`}
                              disabled={!item.available}
                            >
                              {item.available ? 'Réserver' : `Libre le ${item.nextAvailable}`}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tracking Tab */}
        {activeTab === 'track' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Mes Réservations</h2>
              <div className="space-y-4">
                {myBookings.map((booking) => (
                  <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">{booking.equipment}</h3>
                        <p className="text-sm text-gray-600">{booking.location}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{booking.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{booking.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{booking.cost.toLocaleString()} FCFA</span>
                      </div>
                    </div>
                    
                    {booking.tracking && (
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
                          <Wifi className="h-4 w-4 text-green-500" />
                          <span>Tracking en temps réel</span>
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Statut connexion</span>
                            <span className={`flex items-center space-x-1 ${booking.tracking.online ? 'text-green-600' : 'text-red-600'}`}>
                              <div className={`w-2 h-2 rounded-full ${booking.tracking.online ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                              <span>{booking.tracking.online ? 'En ligne' : 'Hors ligne'}</span>
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Niveau carburant</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300" 
                                  style={{ width: `${booking.tracking.fuel}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium">{booking.tracking.fuel}%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Position GPS</span>
                            <button className="text-green-600 hover:text-green-700 font-medium">
                              Voir sur carte
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Maintenance Tab */}
        {activeTab === 'maintenance' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Maintenance Prédictive</h2>
              <div className="space-y-4">
                {maintenanceAlerts.map((alert) => (
                  <div key={alert.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{alert.equipment}</h3>
                        <p className="text-sm text-gray-600">{alert.type}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(alert.priority)}`}>
                        {alert.priority === 'high' ? 'Urgent' : alert.priority === 'medium' ? 'Modéré' : 'Faible'}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{alert.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Échéance: {alert.dueDate}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Coût estimé: {alert.cost.toLocaleString()} FCFA</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Reporter
                        </button>
                        <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-md">
                          Planifier
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Maintenance History */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Historique de maintenance</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-gray-200">
                      <th className="pb-3 font-medium text-gray-900">Équipement</th>
                      <th className="pb-3 font-medium text-gray-900">Type</th>
                      <th className="pb-3 font-medium text-gray-900">Date</th>
                      <th className="pb-3 font-medium text-gray-900">Coût</th>
                      <th className="pb-3 font-medium text-gray-900">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 font-medium text-gray-900">Tracteur John Deere</td>
                      <td className="py-3 text-gray-600">Vidange complète</td>
                      <td className="py-3 text-gray-600">2024-10-15</td>
                      <td className="py-3 text-gray-600">75,000 FCFA</td>
                      <td className="py-3">
                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                          Terminé
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-gray-900">Semoir précision</td>
                      <td className="py-3 text-gray-600">Calibrage capteurs</td>
                      <td className="py-3 text-gray-600">2024-10-08</td>
                      <td className="py-3 text-gray-600">25,000 FCFA</td>
                      <td className="py-3">
                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                          Terminé
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
