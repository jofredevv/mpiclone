import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturedProfiles from './components/FeaturedProfiles';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Index from './components/Index';
import Pricing from './components/Pricing';
import PublicProfile from './components/PublicProfile';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage('index');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'index':
        return <Index initialSearchTerm={searchQuery} />;
      case 'pricing':
        return <Pricing />;
      case 'public-profile':
        return <PublicProfile />;
      case 'login':
        return <Login onNavigate={setCurrentPage} />;
      case 'signup':
        return <Signup onNavigate={setCurrentPage} />;
      default:
        return (
          <main>
            <Hero onSearch={handleSearch} />
            <Features />
            <FeaturedProfiles />
            <HowItWorks onNavigate={setCurrentPage} />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;