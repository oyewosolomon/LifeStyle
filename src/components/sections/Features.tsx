import React from 'react';
import { useState } from 'react';
import { 
  Stethoscope, 
  Clock, 
  ChartBar, 
  Users, 
  Shield, 
  MessageSquare 
} from 'lucide-react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "AI-Powered Diagnosis",
      description: "Leverage machine learning algorithms to assist in accurate diagnosis and treatment recommendations.",
      stats: "35% improvement in diagnosis accuracy"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "Optimize patient flow and reduce wait times through intelligent resource allocation.",
      stats: "40% reduction in patient wait times"
    },
    {
      icon: <ChartBar className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Real-time insights into hospital performance and patient outcomes.",
      stats: "500,000+ daily interactions analyzed"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Patient Management",
      description: "Comprehensive patient profiles and history tracking for better care coordination.",
      stats: "200+ hospitals served"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security ensuring patient data privacy and regulatory compliance.",
      stats: "100% HIPAA compliant"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Communication Hub",
      description: "Streamlined communication between healthcare providers and patients.",
      stats: "90% patient satisfaction rate"
    }
  ];

  return (
    <div className="bg-gray-50 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Healthcare
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of tools helps healthcare providers deliver better patient care
            while improving operational efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-300 cursor-pointer
                ${activeFeature === index ? 'scale-105 border-2 border-blue-500' : 'hover:scale-105'}
              `}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-sm font-semibold text-blue-600 bg-blue-50 py-2 px-4 rounded-full inline-block">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;