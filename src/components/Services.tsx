import { motion } from 'framer-motion';
import { Cpu, HardDrive, Monitor, Keyboard, Database } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Chip Level Repair',
    description: 'Advanced motherboard and component-level repairs for complex hardware issues'
  },
  {
    icon: HardDrive,
    title: 'OS Installation',
    description: 'Complete operating system installation and configuration services'
  },
  {
    icon: Monitor,
    title: 'Screen Replacement',
    description: 'Professional LCD/LED screen replacement with genuine parts'
  },
  {
    icon: Keyboard,
    title: 'Keyboard Fix',
    description: 'Keyboard repair and replacement for all laptop models'
  },
  {
    icon: Database,
    title: 'Data Recovery',
    description: 'Safe and secure data recovery from damaged or corrupted drives'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional laptop repair solutions with expert technicians
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
