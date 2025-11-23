import { motion } from 'framer-motion';
import { Instagram, Youtube, Award, Users, Clock, Star, CheckCircle } from 'lucide-react';

// Import your profile photo
import profilePhoto from '../assets/profilephoto.jpg';

export default function About() {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+', description: 'Industry Expertise' },
    { icon: Users, label: 'Happy Customers', value: '1000+', description: 'Satisfied Clients' },
    { icon: Clock, label: 'Avg. Repair Time', value: '24hrs', description: 'Quick Service' },
    { icon: Star, label: 'Success Rate', value: '98%', description: 'Repair Success' }
  ];

  const expertise = [
    'Advanced Chip-Level Repairs',
    'Motherboard Diagnostics & Repair',
    'Data Recovery Services',
    'Screen & Display Replacements',
    'Software Optimization',
    'Hardware Upgrades'
  ];

  return (
    <section id="about-us" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Award className="w-4 h-4" />
            <span>Trusted Since 2019</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            About <span className="text-orange-500">Our Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the expert behind the technical excellence and customer satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-8 group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Main Profile Image */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                >
                  <img
                    src={profilePhoto}
                    alt="Siraj Alam - Founder & Lead Technician"
                    className="w-80 h-80 object-cover relative z-10"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-20"></div>
                </motion.div>
                
                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl shadow-2xl z-30"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-xs font-medium">Years Exp</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center lg:text-left mb-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">Siraj Alam</h3>
              <p className="text-orange-500 font-semibold text-lg mb-3">Founder & Lead Technician</p>
              <p className="text-gray-600 max-w-md">
                Software & Hardware Engineering Specialist with passion for technology and innovation
              </p>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full max-w-sm"
            >
              <a
                href="https://www.instagram.com/sirajlekhak/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex-1"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm sm:text-base">Instagram</span>
                <motion.div
                  className="w-4 h-4"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Instagram className="w-full h-full" />
                </motion.div>
              </a>

              <a
                href="https://www.youtube.com/@itlogiclabs"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex-1"
              >
                <Youtube className="w-5 h-5" />
                <span className="text-sm sm:text-base">YouTube</span>
                <motion.div
                  className="w-4 h-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Youtube className="w-full h-full" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                Welcome to <span className="text-orange-500">IT LOGIC LABS</span>
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200">
                Your trusted partner for professional laptop repair and chip-level services. With over{' '}
                <span className="font-semibold text-orange-500">5+ years of combined hands-on experience</span> and a strong foundation in{' '}
                <span className="font-semibold text-blue-500">Software (3 years)</span> and{' '}
                <span className="font-semibold text-green-500">Hardware Engineering (2 years)</span>, we bring deep technical expertise and precision to every repair.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200">
                Located in Matigara, we specialize in advanced diagnostics, motherboard-level repairs, component replacement, and complete laptop restoration. Our mission is to deliver fast, reliable, and affordable solutions that restore your device to peak performance.
              </p>
            </div>

            {/* Expertise List */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Our Expertise</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Get Your Device Fixed?
            </h3>
            <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their valuable devices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://www.youtube.com/@itlogiclabs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg"
              >
                <Youtube className="w-5 h-5" />
                <span>Visit Our YouTube Channel</span>
              </motion.a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}