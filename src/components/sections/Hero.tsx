import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, Globe, MessageSquare, PlayCircle, Sparkles, X } from 'lucide-react';

// Define types for the component
interface MousePosition {
  x: number;
  y: number;
}

interface StatItem {
  number: string;
  label: string;
}

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

// Define animation variants with proper types
const textReveal = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: 0.2 * i, duration: 0.8 }
  })
};

const featureCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i + 0.3, duration: 0.6, ease: "easeOut" }
  })
};

// Modal animation variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 25,
      delay: 0.1
    } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    y: 20,
    transition: { duration: 0.2 } 
  }
};

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);
  const youtubeVideoId = "dQw4w9WgXcQ"; // Replace with your actual YouTube video ID
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Add body lock when modal is open
  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setVideoPlaying(false); // Reset video playing state when modal closes
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showVideo]);

  const calculateTranslate = (x: number, y: number, factor: number = 20): { x: number; y: number } => {
    const moveX = (x - window.innerWidth / 2) / factor;
    const moveY = (y - window.innerHeight / 2) / factor;
    return { x: moveX, y: moveY };
  };

  const openVideoModal = (): void => {
    setShowVideo(true);
  };

  const closeVideoModal = (): void => {
    setShowVideo(false);
    setVideoPlaying(false);
  };

  const playVideo = (e: React.MouseEvent): void => {
    e.stopPropagation(); // Prevent event from bubbling up
    setVideoPlaying(true);
  };

  // Define static data with proper types
  const stats: StatItem[] = [
    { number: "50K+", label: "Premium Members" },
    { number: "24/7", label: "Support" },
    { number: "10", label: "Countries" }
  ];

  const features: FeatureItem[] = [
    { 
      icon: <Clock className="w-10 h-10" />, 
      title: "24/7 Availability", 
      desc: "Round-the-clock premium service at your fingertips" 
    },
    { 
      icon: <Globe className="w-10 h-10" />, 
      title: "Global Reach", 
      desc: "Seamless service available in 10 countries worldwide" 
    },
    { 
      icon: <MessageSquare className="w-10 h-10" />, 
      title: "Multilingual Support", 
      desc: "Communicate effortlessly in your preferred language" 
    },
    { 
      icon: <Sparkles className="w-10 h-10" />, 
      title: "Premium Experience", 
      desc: "Luxury concierge services tailored just for you" 
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-50 via-blue-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, rgba(255, 255, 255, 0) 50%)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-b from-blue-300 to-indigo-300 opacity-20"
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`,
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, i % 2 ? 10 : -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl"
            style={{
              transform: `translate(${calculateTranslate(mousePosition.x, mousePosition.y, 60).x}px, ${calculateTranslate(mousePosition.x, mousePosition.y, 60).y}px)`
            }}
          >
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-1 relative">
                  <motion.span
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={textReveal}
                    className="inline-block"
                  >
                    Your Personal
                  </motion.span>
                </h1>
                <h1 className="text-6xl lg:text-7xl font-bold mb-6 relative">
                  <motion.span
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={textReveal}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 inline-block"
                  >
                    Lifestyle Assistant
                  </motion.span>
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute -right-8 -top-8"
                  >
                    <Sparkles className="w-12 h-12 text-yellow-400" />
                  </motion.span>
                </h1>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed"
            >
              Experience premium concierge services tailored to your unique lifestyle. Available 24/7 across 10 countries, transforming your daily life one request at a time.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white backdrop-blur-sm bg-opacity-70 p-5 rounded-xl shadow-lg border border-blue-50 hover:border-blue-200 transition-all duration-300"
                >
                  <motion.p
                    whileHover={{ color: "#3B82F6" }}
                    transition={{ duration: 0.2 }}
                    className="text-3xl font-bold text-indigo-600"
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-medium transition duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(239, 246, 255, 0.8)"
                }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-medium transition duration-300 flex items-center gap-2"
                onClick={openVideoModal}
              >
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
            style={{
              transform: `translate(${calculateTranslate(mousePosition.x, mousePosition.y, -60).x}px, ${calculateTranslate(mousePosition.x, mousePosition.y, -60).y}px)`
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={featureCardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white backdrop-blur-sm bg-opacity-80 p-6 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300"
              >
                <motion.div 
                  className="text-blue-600 mb-4 bg-blue-50 p-3 inline-block rounded-xl"
                  whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href='/#services'
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        whileHover={{ scale: 1.2 }}
      >
        <motion.div 
          className="p-4 rounded-full bg-white shadow-lg"
          whileHover={{ backgroundColor: "#EFF6FF" }}
        >
          <ChevronDown className="w-6 h-6 text-blue-600" />
        </motion.div>
      </motion.a>

      {/* YouTube Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeVideoModal}
          >
            <motion.div 
              className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
            >
              <div className="aspect-w-16 aspect-h-9 w-full relative">
                {videoPlaying ? (
                  // YouTube Video Iframe - shown when playing
                  <div className="w-full h-full" style={{ paddingBottom: '56.25%', position: 'relative' }}>
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    
                    {/* Close button for video playing state */}
                    <motion.button 
                      className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={closeVideoModal}
                    >
                      <X className="w-6 h-6 text-gray-700" />
                    </motion.button>
                  </div>
                ) : (
                  // Video Thumbnail with Play Button Overlay
                  <>
                    <div className="w-full h-0" style={{ paddingBottom: '56.25%', position: 'relative' }}>
                      <img 
                        src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`} 
                        alt="Video thumbnail" 
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to medium quality thumbnail if maxres isn't available
                          const target = e.target as HTMLImageElement;
                          target.src = `https://img.youtube.com/vi/${youtubeVideoId}/mqdefault.jpg`;
                        }}
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <motion.button
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                          whileHover={{ 
                            scale: 1.1,
                            boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          onClick={playVideo}
                          className="bg-white bg-opacity-90 rounded-full p-5 cursor-pointer"
                        >
                          <PlayCircle className="w-16 h-16 text-blue-600" />
                        </motion.button>
                      </div>
                      
                      {/* Close button */}
                      <motion.button 
                        className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={closeVideoModal}
                      >
                        <X className="w-6 h-6 text-gray-700" />
                      </motion.button>
                    </div>
                  </>
                )}
              </div>
              
              {/* Video information - only show when video is not playing */}
              {!videoPlaying && (
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Lifestyle Assistant Demo</h3>
                  <p className="text-gray-600 mb-4">Experience how our premium concierge services can transform your daily routines and special occasions.</p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center mr-4">
                      <Clock className="w-4 h-4 mr-1" /> 3:45
                    </span>
                    <span className="flex items-center">
                      <Globe className="w-4 h-4 mr-1" /> English
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;