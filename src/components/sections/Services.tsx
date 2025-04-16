import React, { useEffect, useState } from 'react';
import { Calendar, Plane, Clock, Coffee, Hotel, Car } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

const StackedServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  
  const services = [
    {
      icon: Calendar,
      title: "Appointment Management",
      description: "Let us handle your schedule. From business meetings to personal appointments, we've got you covered.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop",
      textColor: "text-blue-50"
    },
    {
      icon: Plane,
      title: "Travel Planning",
      description: "Comprehensive travel arrangements including flights, accommodations, and exclusive experiences.",
      color: "bg-gradient-to-br from-emerald-500 to-emerald-700",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2670&auto=format&fit=crop",
      textColor: "text-emerald-50"
    },
    {
      icon: Coffee,
      title: "Lifestyle Services",
      description: "Restaurant reservations, event tickets, and personal shopping - all just a message away.",
      color: "bg-gradient-to-br from-amber-500 to-amber-700",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop",
      textColor: "text-amber-50"
    },
    {
      icon: Clock,
      title: "24/7 Assistance",
      description: "Round-the-clock support in multiple languages for all your needs and requests.",
      color: "bg-gradient-to-br from-purple-600 to-purple-800",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
      textColor: "text-purple-50"
    },
    {
      icon: Hotel,
      title: "Premium Bookings",
      description: "Access to exclusive hotels, restaurants, and events with our premium partnerships.",
      color: "bg-gradient-to-br from-rose-500 to-rose-700",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop",
      textColor: "text-rose-50"
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Luxury car services, airport transfers, and special vehicle arrangements.",
      color: "bg-gradient-to-br from-indigo-600 to-indigo-800",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2683&auto=format&fit=crop",
      textColor: "text-indigo-50"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const cardHeight = windowHeight * 0.7;
      
      const newActiveIndex = Math.min(
        Math.floor(scrollPosition / (cardHeight / 2)),
        services.length - 1
      );
      
      setActiveIndex(newActiveIndex);
      controls.start({
        y: -scrollPosition * 0.2,
        transition: { type: "spring", stiffness: 100 }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services.length, controls]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200" id='services'>
      {/* Header Section */}
      <div className="text-center py-20 bg-gradient-to-r from-gray-900 to-gray-800 top-0 z-0 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6 text-white">Our Premium Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience unparalleled convenience with our comprehensive range of concierge services
          </p>
        </motion.div>
      </div>
      
      {/* Cards Container */}
      <div className="relative">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isActive = index === activeIndex;
          
          return (
            <motion.div 
              key={index}
              className={`min-h-[100vh] flex items-center justify-center sticky top-0 p-8 transition-all duration-500 ${
                index <= activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                zIndex: 40 + index,
                top: `${index * 10}px`
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: index <= activeIndex ? 1 : 0,
                y: isActive ? 0 : 20
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`h-[600px] rounded-2xl shadow-2xl p-8 w-full max-w-5xl transform transition-all duration-500 overflow-hidden relative group ${service.color}`}>
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-black/30"
                    animate={controls}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
                  <motion.div 
                    className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm bg-white/20 ${isActive ? 'scale-110' : 'scale-100'}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className={`w-12 h-12 ${service.textColor}`} />
                  </motion.div>
                  
                  <motion.h3 
                    className={`text-4xl font-bold mb-6 ${service.textColor} ${isActive ? 'translate-y-0' : 'translate-y-4'}`}
                    transition={{ delay: 0.1 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    className={`text-xl max-w-2xl ${service.textColor} opacity-90 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    transition={{ delay: 0.2 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.button
                    className={`mt-10 px-8 py-3 rounded-full font-medium ${service.textColor} bg-white/20 backdrop-blur-md border-2 border-white/30 hover:bg-white/30 transition-all duration-300 ${isActive ? 'scale-100' : 'scale-90'}`}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.4)' }}
                    transition={{ delay: 0.3 }}
                  >
                    Learn More
                  </motion.button>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:opacity-50 opacity-30 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Space at the bottom */}
      <div className="h-scren"></div>
    </div>
  );
};

export default StackedServicesSection;