import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Shield, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white py-20" id='about'>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About LifeStyle Concierge</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dedicated to simplifying your life, we provide premium personal assistance services to over 50,000 members worldwide.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600">
              At LifeStyle Concierge, we strive to make life easier for our members by offering personalized, high-quality assistance for every aspect of their busy lives. From managing appointments to planning dream vacations, we’re here to handle the details so you can focus on what matters most.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
              Join Us Today
            </button>
          </motion.div>

          {/* Right Side - Key Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">50,000+ Members</h4>
                <p className="text-gray-600">
                  Trusted by a growing community of premium subscribers worldwide.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Global Presence</h4>
                <p className="text-gray-600">
                  Serving clients in 10 countries with plans to expand further.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Trusted & Reliable</h4>
                <p className="text-gray-600">
                  Your privacy and satisfaction are our top priorities.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Personalized Care</h4>
                <p className="text-gray-600">
                  Tailored services designed to meet your unique needs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;