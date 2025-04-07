import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const services = [
  {
    title: "Web Development",
    points: [
      "Custom Websites for Your Business",
      "SEO-Friendly & Mobile-Optimized",
      "Fast, Secure & Scalable",
    ],
    image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
  },
  {
    title: "E-commerce Development",
    points: [
      "User-Friendly Online Stores",
      "Payment Gateway Integration",
      "Product & Order Management",
    ],
    image: "/images/ecommerce.jpg",
  },
  {
    title: "Graphic Designing",
    points: [
      "Branding & Logo Design",
      "Marketing Materials & UI Graphics",
      "Creative & Engaging Visuals",
    ],
    image: "/images/graphicdesigning.jpg",
  },
  {
    title: "Existing Website Updation",
    points: [
      "Speed & Security Improvements",
      "Modern UI Redesign",
      "New Features & Bug Fixes",
    ],
    image: "/images/webredesign.jpg",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <motion.div 
        className="relative w-full h-[400px] flex items-center justify-center text-center overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Background Image */}
        <div className="absolute w-full h-full bg-gradient-to-t from-[#6c6c6c] via-[#a09b9b] to-transparent">
          <img 
            src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"  
            alt="Services Background"
            className="w-full h-full object-cover mix-blend-overlay transition-opacity duration-700 ease-in-out"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="text-lg text-gray-300 mt-3">
            Tailored solutions to grow your business online.
          </p>

          {/* Breadcrumb */}
          <div className="mt-4 bg-white bg-opacity-10 px-4 py-2 inline-block rounded-lg">
            <nav className="text-sm text-gray-300">
              <Link to="/" className="hover:text-gray-400 font-semibold">Home</Link> 
              <span className="mx-2">/</span> 
              <span className="text-gray-400">Services</span> 
            </nav>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg border border-gray-700 transition-all duration-500 ease-in-out hover:bg-[#222222]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >
              {/* Service Image with Smooth Transition */}
              <motion.img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover rounded-md transition-opacity duration-700 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />

              {/* Service Title */}
              <h2 className="text-2xl font-bold text-center mt-4">{service.title}</h2>

              {/* Service Points with Green Check Icons */}
              <div className="mt-4 space-y-2">
                {service.points.map((point, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-center space-x-2 opacity-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-green-500 w-6 h-6" />
                    <p className="text-gray-300">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Services;
