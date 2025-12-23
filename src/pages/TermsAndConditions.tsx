// src/pages/TermsAndConditions.tsx
import { Shield, FileText, Clock, Phone, MapPin, Mail, AlertCircle, CheckCircle, Settings, Package, Cpu, Wrench, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  // Replace these with your actual shop details
  const shopInfo = {
    name: "Your PC Shop",
    address: "123 Tech Street, Electronics City, Bengaluru - 560100",
    phone: "+91 9876543210",
    email: "support@yourpcshop.com",
    website: "www.yourpcshop.com",
    gstin: "29ABCDE1234F1Z5",
    timings: "10:00 AM - 8:00 PM (Monday to Saturday)",
    established: "2015"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* Back Button */}
      <div className="container mx-auto mb-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-8 h-8" />
                <h1 className="text-3xl font-bold">{shopInfo.name}</h1>
              </div>
              <p className="text-blue-100 text-lg">Terms & Conditions | Policies | Service Agreement</p>
            </div>
            <div className="mt-4 md:mt-0 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm font-medium">Established: {shopInfo.established}</p>
              <p className="text-sm">GSTIN: {shopInfo.gstin}</p>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="bg-gray-100 p-4 border-b">
          <div className="flex flex-wrap justify-center gap-6 text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>{shopInfo.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-600" />
              <a href={`tel:${shopInfo.phone}`} className="hover:text-blue-600 transition-colors">
                {shopInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-600" />
              <a href={`mailto:${shopInfo.email}`} className="hover:text-blue-600 transition-colors">
                {shopInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-600" />
              <span>{shopInfo.timings}</span>
            </div>
          </div>
        </div>

        {/* Main Content - Keep your existing content here */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Your existing Terms & Conditions content */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Welcome to {shopInfo.name}
            </h2>
            <p className="text-gray-700">
              These Terms & Conditions govern all services provided by {shopInfo.name}. By availing our services, 
              you agree to comply with and be bound by these terms. Please read them carefully.
            </p>
          </div>

          {/* ... Rest of your Terms content ... */}

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-gray-200 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-600" />
                <a href={`tel:${shopInfo.phone}`} className="font-medium text-gray-700 hover:text-blue-600">
                  {shopInfo.phone}
                </a>
              </div>
              <p className="text-gray-600 text-sm">
                Last Updated: {new Date().toLocaleDateString('en-IN', { 
                  day: '2-digit', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </p>
              <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} {shopInfo.name}. All rights reserved.
              </p>
              <div className="flex gap-4 mt-2">
                <button 
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                >
                  Print Terms
                </button>
                <Link
                  to="/"
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;