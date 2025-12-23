// src/Routes.tsx
import { Routes, Route } from 'react-router-dom';
import CRM from './pages/CRM';
import TermsAndConditions from './pages/TermsAndConditions';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/crm" element={<CRM />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;