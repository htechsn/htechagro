import React, { useState, useMemo } from 'react';
import {
  Search, MapPin, Star, Filter, ShoppingCart, Heart, Truck, Shield, Users, TrendingUp,
  Phone, MessageCircle, X, CheckCircle, Leaf, Tractor, Droplets, Building, Sprout,
  Package, Clock, Award, Globe, ChevronRight, Info, BadgeCheck, TreePine
} from 'lucide-react';

// Données structurées avec la nouvelle catégorie Pépinière
const categoriesData = {
  'Récoltes à vendre': {
    icon: Leaf,
    color: 'bg-gradient-to-r from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    subcategories: ['Céréales', 'Légumes', 'Fruits', 'Tubercules', 'Oléagineux'],
    products: [
      {
        id: 1,
        name: 'Mil Souna 3 - Récolte 2024',
        price: 420,
        unit: 'kg',
        seller: 'Coopérative Ndame Lo',
        sellerPhone: '+221 77 123 45 67',
        location: 'Thiès, Sénégal',
        distance: 12,
        rating: 4.8,
        reviews: 24,
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&w=800&q=80',
        subcategory: 'Céréales',
        verified: true,
        bio: true,
        quantity: 500,
        stockUnit: 'tonnes',
        description: 'Mil Souna 3 de qualité supérieure, cultivé sans pesticides. Cycle court de 90 jours, idéal pour les zones sahéliennes.',
        certifications: ['Agriculture Biologique', 'Commerce Équitable'],
        harvestDate: 'Novembre 2024',
        minOrder: '100 kg'
      },
      {
        id: 2,
        name: 'Arachides 55-437 décortiquées',
        price: 780,
        unit: 'kg',
        seller: 'GIE Bamba Diagne',
        sellerPhone: '+221 70 234 56 78',
        location: 'Kaolack, Sénégal',
        distance: 45,
        rating: 4.9,
        reviews: 18,
        image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&w=800',
        subcategory: 'Oléagineux',
        verified: true,
        bio: false,
        quantity: 200,
        stockUnit: 'tonnes',
        description: 'Arachides de variété 55-437, taux d\'huile 50%, calibre 40/50. Parfaites pour la transformation en huile ou beurre d\'arachide.',
        certifications: ['ISRA Certifié'],
        harvestDate: 'Décembre 2024',
        minOrder: '50 kg'
      },
      {
        id: 3,
        name: 'Riz Parfumé Sahel 108',
        price: 380,
        unit: 'kg',
        seller: 'SAED Saint-Louis',
        sellerPhone: '+221 76 345 67 89',
        location: 'Saint-Louis, Sénégal',
        distance: 78,
        rating: 4.6,
        reviews: 31,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&w=800&q=80',
        subcategory: 'Céréales',
        verified: true,
        bio: false,
        quantity: 1000,
        stockUnit: 'tonnes',
        description: 'Riz long grain de la vallée du fleuve Sénégal. Parfumé et idéal pour le thiébou dieune traditionnel.',
        certifications: ['Label Vallée du Fleuve'],
        harvestDate: 'Janvier 2025',
        minOrder: '25 kg'
      },
      {
        id: 4,
        name: 'Tomates Roma des Niayes',
        price: 320,
        unit: 'kg',
        seller: 'Ferme Moderne Niayes',
        sellerPhone: '+221 78 456 78 90',
        location: 'Niayes, Sénégal',
        distance: 25,
        rating: 4.7,
        reviews: 42,
        image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&w=800',
        subcategory: 'Légumes',
        verified: true,
        bio: true,
        quantity: 50,
        stockUnit: 'tonnes',
        description: 'Tomates Roma fraîches, calibre AA. Cultivées en agriculture biologique, idéales pour la conserve et la consommation fraîche.',
        certifications: ['Bio Sénégal', 'Sans Pesticides'],
        harvestDate: 'Production continue',
        minOrder: '10 kg'
      },
      {
        id: 8,
        name: 'Mangues Kent Bio Export',
        price: 650,
        unit: 'kg',
        seller: 'Verger de Casamance',
        sellerPhone: '+221 78 678 90 12',
        location: 'Ziguinchor, Sénégal',
        distance: 156,
        rating: 4.6,
        reviews: 23,
        image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&w=800&q=80',
        subcategory: 'Fruits',
        verified: true,
        bio: true,
        quantity: 100,
        stockUnit: 'tonnes',
        description: 'Mangues Kent bio de qualité export. Calibre 8-12, sucrées et parfumées. Certification GlobalGAP.',
        certifications: ['GlobalGAP', 'Bio EU', 'Fair Trade'],
        harvestDate: 'Mai - Juillet 2025',
        minOrder: '5 kg'
      }
    ]
  },
  'Vente Pépinière': {
    icon: TreePine,
    color: 'bg-gradient-to-r from-lime-500 to-green-600',
    bgColor: 'bg-lime-50',
    subcategories: ['Plants fruitiers', 'Plants forestiers', 'Plants ornementaux', 'Plants maraîchers', 'Arbustes'],
    products: [
      {
        id: 16,
        name: 'Plants de Manguiers Kent',
        price: 2500,
        unit: 'plant',
        seller: 'Pépinière Casamance',
        sellerPhone: '+221 77 890 12 34',
        location: 'Ziguinchor, Sénégal',
        distance: 156,
        rating: 4.9,
        reviews: 67,
        image: 'https://images.unsplash.com/photo-1615671524827-c1fe3973b648?ixlib=rb-4.0.3&w=800&q=80',
        subcategory: 'Plants fruitiers',
        verified: true,
        bio: true,
        quantity: 500,
        stockUnit: 'plants',
        description: 'Plants de manguiers Kent greffés, âgés de 2 ans. Hauteur 1,5m. Première production attendue dans 3-4 ans.',
        certifications: ['Plants Certifiés ISRA', 'Greffage Professionnel'],
        harvestDate: 'Disponible toute l\'année',
        minOrder: '10 plants'
      },
      {
        id: 17,
        name: 'Plants de Citronniers',
        price: 1800,
        unit: 'plant',
        seller: 'Pépinière des Niayes',
        sellerPhone: '+221 70 456 78 90',
        location: 'Niayes, Sénégal',
        distance: 25,
        rating: 4.7,
        reviews: 43,
        image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?ixlib=rb-4.0.3&w=800&q=80',
        subcategory: 'Plants fruitiers',
        verified: true,
        bio: false,
        quantity: 300,
        stockUnit: 'plants',
        description: 'Citronniers Eureka greffés, plants de 18 mois en pot. Production de citrons toute l\'année.',
        certifications: ['Qualité Garantie'],
        harvestDate: 'Disponible maintenant',
        minOrder: '5 plants'
      },
      {
        id: 18,
        name: 'Plants de Baobab',
        price: 5000,
        unit: 'plant',
        seller: 'Pépinière Sahel Vert',
        sellerPhone: '+221 76 567 89 01',
        location: 'Louga, Sénégal',
        distance: 67,
        rating: 4.8,
        reviews: 32,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=800&q=80',
        subcategory: 'Plants forestiers',
        verified: true,
        bio: true,
        quantity: 100,
        stockUnit: 'plants',
        description: 'Jeunes baobabs de 3 ans, hauteur 80cm. Arbre emblématique du Sénégal, résistant à la sécheresse.',
        certifications: ['Espèce Protégée', 'Plantation Responsable'],
        harvestDate: 'Saison sèche recommandée',
        minOrder: '1 plant'
      },
      {
        id: 19,
        name: 'Plants de Moringa',
        price: 800,
        unit: 'plant',
        seller: 'Green Life Pépinière',
        sellerPhone: '+221 78 234 56 78',
        location: 'Thiès, Sénégal',
        distance: 12,
        rating: 4.9,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1609012307103-046d7b52e4c6?ixlib=rb-4.0.3&w=800&q=80',
        subcategory: 'Plants forestiers',
        verified: true,
        bio: true,
        quantity: 1000,
        stockUnit: 'plants',
        description: 'Plants de Moringa oleifera, 6 mois. Croissance rapide, feuilles comestibles riches en vitamines.',
        certifications: ['Bio Certifié', 'Superfood'],
        harvestDate: 'Disponible toute l\'année',
        minOrder: '10 plants'
      },
      {
        id: 20,
        name: 'Plants de Tomates Cerises',
        price: 350,
        unit: 'plant',
        seller: 'Maraîchage Bio Sénégal',
        sellerPhone: '+221 70 345 67 89',
        location: 'Dakar, Sénégal',
        distance: 15,
        rating: 4.6,
        reviews: 124,
        image: 'https://images.unsplash.com/photo-1592841200221-4e11d7eb3c5b?ixlib=rb-4.0.3&w=800&q=80',
        subcategory: 'Plants maraîchers',
        verified: true,
        bio: true,
        quantity: 2000,
        stockUnit: 'plants',
        description: 'Plants de tomates cerises bio, variété précoce. Production abondante de petites tomates sucrées.',
        certifications: ['Bio Sénégal', 'Semences Non-OGM'],
        harvestDate: 'Saison fraîche',
        minOrder: '20 plants'
      },
      {
        id: 21,
        name: 'Rosiers du Sénégal',
        price: 1200,
        unit: 'plant',
        seller: 'Pépinière Ornementale Dakar',
        sellerPhone: '+221 77 678 90 12',
        location: 'Dakar, Sénégal',
        distance: 20,
        rating: 4.5,
        reviews: 58,
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&w=800&q=80',
        subcategory: 'Plants ornementaux',
        verified: true,
        bio: false,
        quantity: 150,
        stockUnit: 'plants',
        description: 'Rosiers adaptés au climat tropical, floraison continue. Parfaits pour jardins et espaces verts.',
        certifications: ['Résistant Climat Tropical'],
        harvestDate: 'Plantation en saison des pluies',
        minOrder: '3 plants'
      },
      {
        id: 22,
        name: 'Bougainvilliers Multicolores',
        price: 900,
        unit: 'plant',
        seller: 'Jardin Tropical Saint-Louis',
        sellerPhone: '+221 76 789 01 23',
        location: 'Saint-Louis, Sénégal',
        distance: 78,
        rating: 4.7,
        reviews: 41,
        image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&w=800&q=80',
        subcategory: 'Arbustes',
        verified: true,
        bio: false,
        quantity: 200,
        stockUnit: 'plants',
        description: 'Bougainvilliers en plusieurs coloris : rose, rouge, blanc, violet. Floraison spectaculaire toute l\'année.',
        certifications: ['Plante Rustique'],
        harvestDate: 'Toute l\'année',
        minOrder: '2 plants'
      }
    ]
  },
  'Intrants Agricoles': {
    icon: Sprout,
    color: 'bg-gradient-to-r from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    subcategories: ['Engrais', 'Semences', 'Pesticides', 'Amendements'],
    products: [
      {
        id: 5,
        name: 'Engrais NPK 15-15-15',
        price: 18500,
        unit: 'sac 50kg',
        seller: 'SEDAB Agro',
        sellerPhone: '+221 33 867 45 12',
        location: 'Dakar, Sénégal',
        distance: 35,
        rating: 4.5,
        reviews: 67,
        image: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3&w=800&q=80',
        subcategory: 'Engrais',
        verified: true,
        bio: false,
        quantity: 500,
        stockUnit: 'sacs',
        description: 'Engrais complet NPK 15-15-15. Idéal pour céréales et légumineuses. Améliore la croissance et le rendement.',
        certifications: ['Norme UEMOA', 'ISO 9001'],
        harvestDate: '',
        minOrder: '10 sacs'
      },
      {
        id: 6,
        name: 'Semences Mil Souna 3 Certifiées',
        price: 1200,
        unit: 'kg',
        seller: 'ISRA Bambey',
        sellerPhone: '+221 33 973 60 60',
        location: 'Bambey, Sénégal',
        distance: 28,
        rating: 4.9,
        reviews: 89,
        image: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&w=800',
        subcategory: 'Semences',
        verified: true,
        bio: false,
        quantity: 100,
        stockUnit: 'tonnes',
        description: 'Semences certifiées mil Souna 3. Taux de germination 95%, résistantes à la sécheresse. Production ISRA.',
        certifications: ['ISRA', 'CERAAS', 'Label R1'],
        harvestDate: '',
        minOrder: '5 kg'
      }
    ]
  },
  'Équipements à louer': {
    icon: Tractor,
    color: 'bg-gradient-to-r from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
    subcategories: ['Tracteurs', 'Motoculteurs', 'Pompes', 'Outils'],
    products: [
      {
        id: 7,
        name: 'Tracteur Massey Ferguson 385',
        price: 45000,
        unit: 'jour',
        seller: 'CUMA Thiès',
        sellerPhone: '+221 77 567 89 01',
        location: 'Thiès, Sénégal',
        distance: 8,
        rating: 4.8,
        reviews: 34,
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&w=800&q=80',
        subcategory: 'Tracteurs',
        verified: true,
        bio: false,
        quantity: 3,
        stockUnit: 'unités',
        description: 'Tracteur MF 385, 85CV. Livré avec charrue, herse et chauffeur expérimenté. Assurance incluse.',
        certifications: ['Assurance Complète', 'Entretien Régulier'],
        harvestDate: '',
        minOrder: '1 jour minimum'
      }
    ]
  }
};

// Composant Modal amélioré
const ProductModal = ({ product, onClose }) => {
  if (!product) return null;
  
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-grow overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Images Section */}
            <div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-96 object-cover rounded-xl shadow-lg mb-4" 
              />
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i} 
                    src={`${product.image}&sig=${i}`} 
                    alt={`${product.name} ${i}`} 
                    className="w-full h-24 object-cover rounded-lg opacity-70 hover:opacity-100 cursor-pointer transition-opacity"
                  />
                ))}
              </div>
            </div>
            
            {/* Details Section */}
            <div className="flex flex-col">
              <div className="flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {product.subcategory}
                  </span>
                  {product.bio && (
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium flex items-center gap-1">
                      <Leaf className="h-4 w-4" />
                      Bio
                    </span>
                  )}
                  {product.verified && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium flex items-center gap-1">
                      <BadgeCheck className="h-4 w-4" />
                      Vérifié
                    </span>
                  )}
                </div>
                
                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                
                {/* Certifications */}
                {product.certifications && product.certifications.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="h-5 w-5 text-green-600" />
                      Certifications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.certifications.map((cert, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Product Info Grid */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-500 text-sm">Vendeur</span>
                      <p className="font-semibold text-gray-900 flex items-center gap-2">
                        {product.seller}
                        {product.verified && <Shield className="h-4 w-4 text-green-600" />}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Localisation</span>
                      <p className="font-semibold text-gray-900 flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        {product.location}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Stock disponible</span>
                      <p className="font-semibold text-gray-900">
                        {product.quantity} {product.stockUnit}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Commande minimum</span>
                      <p className="font-semibold text-gray-900">{product.minOrder}</p>
                    </div>
                  </div>
                  
                  {product.harvestDate && (
                    <div className="pt-3 border-t">
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Disponibilité
                      </span>
                      <p className="font-semibold text-gray-900">{product.harvestDate}</p>
                    </div>
                  )}
                  
                  <div className="pt-3 border-t flex items-center justify-between">
                    <div>
                      <span className="text-gray-500 text-sm">Évaluation</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="font-semibold">{product.rating}</span>
                        <span className="text-gray-500">({product.reviews} avis)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Price and Actions */}
              <div className="mt-6 border-t pt-6">
                <div className="text-3xl font-bold text-green-600 mb-4">
                  {product.price.toLocaleString()} FCFA
                  <span className="text-base font-normal text-gray-500 ml-2">/ {product.unit}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5" />
                      Appeler
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-white border-2 border-green-600 text-green-600 font-semibold py-3 px-4 rounded-xl hover:bg-green-50 transition-colors">
                      <MessageCircle className="h-5 w-5" />
                      Message
                    </button>
                  </div>
                  
                  <button className="w-full bg-gray-100 text-gray-800 font-semibold py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Demander un devis personnalisé
                  </button>
                </div>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  Vendeur joignable au: <span className="font-semibold">{product.sellerPhone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant Card amélioré
const ProductCard = ({ product, onSelect }) => (
  <div 
    className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer group"
    onClick={() => onSelect(product)}
  >
    <div className="relative h-56 overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
      />
      
      {/* Badges */}
      <div className="absolute top-3 left-3 flex flex-col gap-2">
        {product.verified && (
          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="text-xs font-medium">Vérifié</span>
          </div>
        )}
        {product.bio && (
          <div className="bg-green-600 text-white px-2 py-1 rounded-full flex items-center gap-1">
            <Leaf className="h-4 w-4" />
            <span className="text-xs font-medium">Bio</span>
          </div>
        )}
      </div>
      
      {/* Favorite Button */}
      <button 
        className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          // Add to favorites logic
        }}
      >
        <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
      </button>
      
      {/* Stock Status */}
      <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-xs font-medium">
        {product.quantity} {product.stockUnit}
      </div>
    </div>
    
    <div className="p-5">
      <div className="mb-3">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          {product.subcategory}
        </span>
        <h3 className="font-semibold text-gray-900 text-lg mt-1 line-clamp-1">
          {product.name}
        </h3>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span>{product.location.split(',')[0]}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="font-medium">{product.rating}</span>
        </div>
      </div>
      
      <div className="pt-3 border-t flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-green-600">
            {product.price.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">FCFA/{product.unit}</p>
        </div>
        <button 
          className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
        >
          <Info className="h-4 w-4" />
          Détails
        </button>
      </div>
    </div>
  </div>
);

// Composant principal Marketplace
export const MarketplacePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(categoriesData)[0]);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filtrage des produits
  const filteredProducts = useMemo(() => {
    let products = categoriesData[activeCategory]?.products || [];
    
    // Filtre par sous-catégorie
    if (activeSubcategory) {
      products = products.filter(p => p.subcategory === activeSubcategory);
    }
    
    // Filtre par recherche
    if (searchTerm) {
      products = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.seller.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return products;
  }, [activeCategory, activeSubcategory, searchTerm]);
  
  // Stats du marketplace
  const marketplaceStats = [
    { icon: Package, label: 'Produits actifs', value: '2,450+', color: 'text-blue-600' },
    { icon: Users, label: 'Vendeurs vérifiés', value: '850+', color: 'text-green-600' },
    { icon: TreePine, label: 'Plants disponibles', value: '4,350+', color: 'text-lime-600' },
    { icon: TrendingUp, label: 'Transactions/mois', value: '12K+', color: 'text-orange-600' }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
              Marketplace Agricole SenAgri
            </h1>
            <p className="text-xl text-gray-600">
              Le plus grand marché digital pour l'agriculture au Sénégal
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {marketplaceStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                  <Icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
          
          {/* Search Bar */}
          <div className="bg-gray-100 rounded-2xl p-1 flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full lg:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher des produits, plants, équipements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full lg:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-gray-50 rounded-xl font-medium transition-colors"
            >
              <Filter className="h-5 w-5" />
              Filtres avancés
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-80 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Catégories</h3>
              <div className="space-y-2">
                {Object.entries(categoriesData).map(([category, data]) => {
                  const Icon = data.icon;
                  return (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveCategory(category);
                        setActiveSubcategory(null);
                      }}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl text-left font-medium transition-all ${
                        activeCategory === category
                          ? `${data.bgColor} ${data.color.replace('bg-gradient-to-r', 'text')} bg-opacity-10`
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${activeCategory === category ? data.color : 'bg-gray-100'}`}>
                        <Icon className={`h-5 w-5 ${activeCategory === category ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <span>{category}</span>
                      <ChevronRight className="h-4 w-4 ml-auto opacity-50" />
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Subcategories */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sous-catégories</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveSubcategory(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    !activeSubcategory
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Toutes
                </button>
                {categoriesData[activeCategory]?.subcategories.map(sub => (
                  <button
                    key={sub}
                    onClick={() => setActiveSubcategory(sub)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeSubcategory === sub
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Vendez vos produits</h3>
              <p className="text-green-100 mb-4">
                Rejoignez des centaines de vendeurs et touchez des milliers d'acheteurs
              </p>
              <button className="w-full bg-white text-green-600 font-semibold py-3 px-4 rounded-lg hover:bg-green-50 transition-colors">
                Commencer à vendre
              </button>
            </div>
          </aside>
          
          {/* Main Content */}
          <main className="flex-grow">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">{filteredProducts.length}</span> produits trouvés
                {activeSubcategory && (
                  <span> dans <span className="font-medium text-green-600">{activeSubcategory}</span></span>
                )}
              </p>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Trier par: Pertinence</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Mieux notés</option>
                <option>Plus récents</option>
                <option>Plus proches</option>
              </select>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onSelect={setSelectedProduct} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl">
                <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl font-medium text-gray-700 mb-2">Aucun produit trouvé</p>
                <p className="text-gray-500">
                  Essayez de modifier vos filtres ou votre recherche
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
