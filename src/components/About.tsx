import { motion } from 'framer-motion';
import { Instagram, Award, Users, Clock } from 'lucide-react';

// Import your profile photo
import profilePhoto from '../assets/profilephoto.jpg';

export default function About() {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Users, label: 'Happy Customers', value: '1000+' },
    { icon: Clock, label: 'Avg. Repair Time', value: '24hrs' }
  ];

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            About <span className="text-orange-500">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full blur-xl opacity-30"></div>
              <img
                src={profilePhoto}
                alt="Siraj Alam"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>

            <h3 className="text-3xl font-bold text-slate-900 mb-2">Siraj Alam</h3>
            <p className="text-orange-500 font-medium mb-4">Founder & Lead Technician</p>

            <a
              href="https://www.instagram.com/sirajlekhak/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow on Instagram</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to <span className="font-semibold text-orange-500">IT LOGIC LABS</span>,
              your trusted partner for professional laptop repair and chip-level services. With over{' '}
              <span className="font-semibold">5+ years of combined hands-on experience</span> and a strong foundation in{' '}
              <span className="font-semibold">Software (3 years)</span> and{' '}
              <span className="font-semibold">Hardware Engineering (2 years)</span>, we bring deep technical expertise and precision to every repair.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Located in Matigara, we specialize in advanced diagnostics, motherboard-level repairs, component replacement, and complete laptop restoration. Our mission is to deliver fast, reliable, and affordable solutions that restore your device to peak performance — because your laptop deserves expert care.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}