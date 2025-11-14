import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Video, 
  Camera, 
  FileImage, 
  Zap, 
  TrendingUp, 
  Gift, 
  Users,
  ArrowRight,
  Star,
  Award,
  Target
} from 'lucide-react';
import Footer from '../component/Footer';
import Header from '../component/Header';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "GRAPHIC DESIGN",
      description: "Creating visually stunning designs that communicate your brand message effectively."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "VIDEO PRODUCTION",
      description: "Professional video content that engages and converts your audience."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "PHOTOGRAPHY",
      description: "Capturing moments and creating visual stories that resonate with your brand."
    },
    {
      icon: <FileImage className="w-8 h-8" />,
      title: "PRINT DESIGN",
      description: "High-quality print materials that make lasting impressions."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "BRANDING",
      description: "Building powerful brand identities that stand out in the marketplace."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "DIGITAL MARKETING",
      description: "Strategic digital campaigns that drive growth and engagement."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "CUSTOMISED GIFTING",
      description: "Personalized gifting solutions that strengthen business relationships."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CONSULTING",
      description: "Expert guidance to help your business reach its full potential."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-400/5 mb-6">
              <Star className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Premium Creative Agency</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
              BE INDUSTRIOUS.
              <br />
              <span className="text-white">BE EXEMPLARY.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We specialize in providing a wide array of creative and marketing services to help businesses like yours stand out.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
              Explore Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300">
              Get in Touch
            </button>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-3 h-3 bg-purple-400/50 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our offerings include the following, but not limited to:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl backdrop-blur-sm hover:border-blue-400/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-400/20 transition-colors duration-300">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-transparent to-blue-400/5"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 lg:py-32 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-400/5 mb-8">
            <Target className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            NEED OUR SERVICES?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Feel free to initiate a conversation with our team of experts.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-12 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-bold rounded-full hover:from-gray-100 hover:to-white transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg shadow-white/20"
          >
            CONTACT US
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              <span>Award-Winning Agency</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-white" />
              <span>Results-Driven</span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
    <Footer/>
    </>
  );
};

export default Services;