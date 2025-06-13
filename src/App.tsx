import { Routes, Route } from 'react-router-dom';
// import { userAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ScholarshipsPage from './pages/ScholarshipsPage';
import ScholarshipDetailPage from './pages/ScholarshipDetailPage';
import HowToApplyPage from './pages/HowToApplyPage';
import ApplicationHelpPage from './pages/ApplicationHelpPage';
import FinancialAidPage from './pages/FinancialAidPage';
import StudentServicesPage from './pages/StudentServicesPage';
import EligibilityPage from './pages/EligibilityPage';
import TimelinePage from './pages/TimelinePage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  // const { user, isAdmin } = userAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scholarships" element={<ScholarshipsPage />} />
          <Route path="/scholarship/:id" element={<ScholarshipDetailPage />} />
          <Route path="/how-to-apply" element={<HowToApplyPage />} />
          <Route path="/application-help" element={<ApplicationHelpPage />} />
          <Route path="/financial-aid" element={<FinancialAidPage />} />
          <Route path="/student-services" element={<StudentServicesPage />} />
          <Route path="/eligibility" element={<EligibilityPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Admin Routes */}
      
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;