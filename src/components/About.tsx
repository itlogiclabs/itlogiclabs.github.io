import { motion } from 'framer-motion';
import { Instagram, Youtube, Award, Users, Clock, Star, CheckCircle, Quote, Calendar, Heart } from 'lucide-react';

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

  const reviews = [
    {
      id: 1,
      name: 'Sohel Janu',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Excellent Service! IT Logic Labs is one of the best laptop service centers I have visited. They provide high-quality repair work and handle both hardware and software issues very professionally.',
      likes: 1,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sohel',
      reviewCount: '1 review'
    },
    {
      id: 2,
      name: 'JustDoIt 69',
      rating: 5,
      date: '2 weeks ago',
      comment: 'My laptop GPU was malfunctioning and not recognizing any usage. This service fixed it for a very low cost! Where other shops charge minimum 4000 to 5000 for GPU repair while having a risk of your system dying, but here at IT Logic Labs they did it perfectly.',
      likes: 2,
      photos: 3,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JustDoIt',
      reviewCount: '1 review'
    },
    {
      id: 3,
      name: 'Peer Mohammad',
      rating: 5,
      date: '1 week ago',
      comment: 'Best place to get your laptop fixed by experts at IT LOGIC LABS in Matigara. They fixed my laptop in one hour. Thanks for the best work done by IT LOGIC LABS.',
      likes: 0,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Peer',
      reviewCount: '1 review'
    },
    {
      id: 4,
      name: 'Jainal Abedin',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Best service here at IT Logic Labs! He fixed my dead laptop. Best recommendation for any customer visiting here in Matigara.',
      likes: 1,
      photos: 3,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jainal',
      reviewCount: '4 reviews'
    },
    {
      id: 5,
      name: 'Yuvraj',
      rating: 5,
      date: '1 week ago',
      comment: 'Very fantastic shop! I have repaired my laptops as well as MacBooks with cheap as well as quality service.',
      likes: 0,
      photos: 4,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yuvraj',
      reviewCount: '7 reviews'
    },
    {
      id: 6,
      name: 'Avinash Prasad',
      rating: 5,
      date: '1 week ago',
      comment: 'Best place to get your computers fixed 10/10 👍 The staff was very professional and resolved my issues in no time.',
      likes: 1,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Avinash',
      reviewCount: '1 review'
    },
    {
      id: 7,
      name: 'Phung Hang Limbu',
      rating: 5,
      date: '1 day ago',
      comment: 'After searching so much shop in Siliguri I found the right one at Matigara. Repaired my laptop in very less time with full satisfactory quality. Do visit this store!',
      likes: 1,
      photos: 2,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phung',
      reviewCount: '4 reviews'
    },
    {
      id: 8,
      name: 'Aryan Gurung',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Excellent service and professional work. Highly recommended for all laptop repairs in Siliguri.',
      likes: 0,
      photos: 14,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aryan',
      reviewCount: '2 reviews'
    }
  ];

  const featuredReviews = reviews.slice(0, 3);
  const moreReviews = reviews.slice(3, 8);

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

        {/* Google Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-8 lg:p-12 border border-orange-100 shadow-2xl">
            {/* Reviews Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12">
              <div className="mb-8 lg:mb-0">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl mr-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
                      Customer Reviews
                    </h3>
                    <div className="flex items-center mt-2">
                      <span className="text-gray-600">Rated</span>
                      <span className="mx-2 font-bold text-slate-900">5.0</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">on Google</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-6 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-900">8+</div>
                    <div className="text-gray-600">Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">100%</div>
                    <div className="text-gray-600">5 Star Reviews</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4">
                <a
                  href="https://share.google/P4wEfD20Q128rc6vk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Star className="w-5 h-5" />
                  <span>Write a Review on Google</span>
                </a>
                <a
                  href="https://share.google/P4wEfD20Q128rc6vk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 text-orange-500 hover:text-orange-600 font-medium"
                >
                  <span>View all 8+ reviews on Google</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Featured Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredReviews.map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-slate-900">{review.name}</h4>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-3 h-3 mr-1" />
                          {review.date}
                          {review.photos && (
                            <span className="ml-3 flex items-center">
                              📸 {review.photos} photos
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{review.reviewCount}</div>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-orange-100" />
                    <p className="text-gray-700 leading-relaxed pl-4 pt-2 min-h-[100px]">
                      "{review.comment}"
                    </p>
                  </div>

                  {/* Likes and Google Badge */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <img
                        src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                        alt="Google"
                        className="w-5 h-5 mr-2"
                      />
                      <span className="text-sm text-gray-500 font-medium">Google Review</span>
                    </div>
                    {review.likes > 0 && (
                      <div className="flex items-center text-pink-500">
                        <Heart className="w-4 h-4 fill-current mr-1" />
                        <span className="text-sm">{review.likes}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* More Reviews */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-slate-900 mb-6">More 5-Star Reviews</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {moreReviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white/80 rounded-xl p-5 border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm">{review.name}</h5>
                          <div className="flex items-center text-gray-500 text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            {review.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">"{review.comment}"</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{review.reviewCount}</span>
                      {review.photos && (
                        <span className="text-xs text-blue-500">📸 {review.photos} photos</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">5.0</div>
                <div className="text-lg font-medium">Average Rating</div>
                <p className="text-orange-100 text-sm mt-2">Perfect 5-star reviews</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">1-24hrs</div>
                <div className="text-lg font-medium">Service Time</div>
                <p className="text-blue-100 text-sm mt-2">Quick laptop repairs</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">8+</div>
                <div className="text-lg font-medium">Verified Reviews</div>
                <p className="text-green-100 text-sm mt-2">Real customer feedback</p>
              </div>
            </div>

            {/* Location Info */}
            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                <span className="font-semibold text-slate-900">IT LOGIC LABS</span>
                <span className="mx-2">•</span>
                Matigara, Siliguri, West Bengal 734010, India
              </p>
              <a
                href="https://maps.app.goo.gl/xCdpmazHx2uYr2y18"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
              >
                📍 Get directions to our store
              </a>
            </div>
          </div>
        </motion.div>

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
              Join our satisfied customers who trust us with their laptop repairs
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
              <a
                href="#contact"
                className="inline-flex items-center space-x-3 bg-white text-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg"
              >
                <span>📞 Contact Us Now</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}