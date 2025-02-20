import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Plane, Clock, Coffee, Hotel, Car, Icon as LucideIcon } from 'lucide-react';

// Define the props for the ServiceCard component
interface ServiceCardProps {
  icon: typeof LucideIcon; // Use typeof to refer to the type of the icon component
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
        {/* <Icon className="w-8 h-8 text-blue-600" /> */}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

// Define the shape of a service object
interface Service {
  icon: typeof LucideIcon; // Use typeof to refer to the type of the icon component
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: Calendar,
      title: "Appointment Management",
      description: "Let us handle your schedule. From business meetings to personal appointments, we've got you covered."
    },
    {
      icon: Plane,
      title: "Travel Planning",
      description: "Comprehensive travel arrangements including flights, accommodations, and exclusive experiences."
    },
    {
      icon: Coffee,
      title: "Lifestyle Services",
      description: "Restaurant reservations, event tickets, and personal shopping - all just a message away."
    },
    {
      icon: Clock,
      title: "24/7 Assistance",
      description: "Round-the-clock support in multiple languages for all your needs and requests."
    },
    {
      icon: Hotel,
      title: "Premium Bookings",
      description: "Access to exclusive hotels, restaurants, and events with our premium partnerships."
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Luxury car services, airport transfers, and special vehicle arrangements."
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience unparalleled convenience with our comprehensive range of concierge services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;