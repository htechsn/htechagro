import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header';

// Lazy loading des pages pour optimiser le chargement initial
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const MarketplacePage = lazy(() => import('./pages/MarketplacePage').then(module => ({ default: module.MarketplacePage })));
const AgriBotPage = lazy(() => import('./pages/AgriBotPage').then(module => ({ default: module.AgriBotPage })));
const WeatherPage = lazy(() => import('./pages/WeatherPage').then(module => ({ default: module.WeatherPage })));
const EquipmentPage = lazy(() => import('./pages/EquipmentPage').then(module => ({ default: module.EquipmentPage })));
const InvestmentPage = lazy(() => import('./pages/InvestmentPage').then(module => ({ default: module.InvestmentPage })));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage').then(module => ({ default: module.AnalyticsPage })));

// Composant de chargement
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
  </div>
);

const AppLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </main>
    {/* You can add a Footer component here later */}
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="agribot" element={<AgriBotPage />} />
          <Route path="weather" element={<WeatherPage />} />
          <Route path="equipment" element={<EquipmentPage />} />
          <Route path="investment" element={<InvestmentPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
