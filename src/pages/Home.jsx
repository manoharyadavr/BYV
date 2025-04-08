import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { FaWhatsapp } from "react-icons/fa";
import "swiper/css";



// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const testimonials = [
  {
    name: "John Doe",
    designation: "CEO",
    company: "TechSolutions Inc.",
    logo: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    message: "BYV transformed our online presence with a sleek and modern website!",
    rating: 5,
  },
  {
    name: "Sarah Lee",
    designation: "Marketing Head",
    company: "BrandBoost",
    logo: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
    message: "Highly professional team! They delivered exactly what we needed.",
    rating: 4.5,
  },
  {
    name: "Michael Smith",
    designation: "Founder",
    company: "InnovateX",
    logo: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600",
    message: "BYV's web development services are Amazing. Highly recommended!",
    rating: 5,
  },
];

const Home = () => {
  const testimonialRef = useRef(null);

  const scrollLeft = () => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollBy({ left: -350, behavior: "smooth" });
      if (testimonialRef.current.scrollLeft === 0) {
        testimonialRef.current.scrollLeft = testimonialRef.current.scrollWidth;
      }
    }
  };

  const scrollRight = () => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollBy({ left: 350, behavior: "smooth" });
      if (
        testimonialRef.current.scrollLeft + testimonialRef.current.clientWidth >=
        testimonialRef.current.scrollWidth
      ) {
        testimonialRef.current.scrollLeft = 0;
      }
    }
  };

  return (
    <div className="bg-black text-white font-sans">

      {/* ✅ Hero Section */}
      <motion.div
        className="relative w-full h-[500px] flex items-center justify-center text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        
      >
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Hero"
          className="absolute w-full h-full object-cover opacity-70"
        />
{/*          <img
          src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?t=st=1744001505~exp=1744005105~hmac=db6a777e1463d6ee413558d593f289d5dbc97346e801473244d5a7993edb5605&w=1380"
          alt="Hero"
          className="absolute w-full h-full object-cover opacity-90"
        /> */}
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold tracking-wide text-white">
            Build Your Vision.
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            We will build your vision from the scratch.
          </p>
{/*           <Link to="/services">
            <motion.button
              className="mt-6 px-8 py-3 bg-gray-900 text-white font-semibold rounded-md shadow-lg hover:bg-gray-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Services
            </motion.button>
          </Link> */}
{/*           <a href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer">
            <motion.button
              className="mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 transition flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp className="text-2xl" />
              Enquire Now..!
            </motion.button>
          </a> */}
            <div className="flex justify-center">
            <a
            href="https://wa.me/919398776311"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="mt-6 px-8 py-3 bg-green-900 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 transition flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M380.9 97.1C339 55.2 283.1 32 224.5 32 120.4 32 32 120.6 32 224.7c0 39.6 10.3 78.3 29.8 112.4L32 480l146.2-38.5c32.7 17.8 69.3 27.3 106.3 27.3h.1c104.1 0 192.5-88.6 192.5-192.7 0-58.6-23.2-114.5-65.1-156.4zM224.5 426c-31 0-61.4-8.4-87.8-24.2l-6.3-3.7-86.6 22.8 23-84.2-4.1-6.6c-18.7-30.5-28.6-65.6-28.6-101.5 0-102.4 83.3-185.7 185.7-185.7 49.6 0 96.2 19.3 131.2 54.4 34.9 35 54.2 81.6 54.1 131.1 0 102.5-83.3 185.6-185.6 185.6zm101.1-138.5c-5.5-2.8-32.6-16.1-37.7-17.9-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 17.9-17.5 21.6c-3.2 3.7-6.5 4.2-12 .9-5.5-2.8-23.2-8.6-44.2-27.4-16.3-14.6-27.3-32.6-30.5-38.1s-.3-8.5 2.4-11.3c2.5-2.6 5.5-6.8 8.2-10.2 2.7-3.4 3.6-5.7 5.5-9.5 1.8-3.7.9-7-0.4-9.9s-12.5-30.1-17.1-41.2c-4.5-10.9-9.2-9.4-12.5-9.6-3.2-.2-7-.2-10.8-.2s-9.9 1.4-15 7c-5.1 5.6-19.6 19.1-19.6 46.5s20.1 53.9 22.9 57.7c2.8 3.7 39.5 60.4 95.8 84.6 13.4 5.8 23.8 9.2 31.9 11.8 13.4 4.2 25.6 3.6 35.3 2.2 10.8-1.6 32.6-13.3 37.2-26.2 4.6-12.8 4.6-23.7 3.2-26.2-1.3-2.5-5-4-10.5-6.9z" />
              </svg>
              Enquire Now
            </motion.button>
          </a>

          </div>
        </div>
      </motion.div>

      {/* ✅ About Section */}
      <motion.div
        className="bg-[#1A1A1A] px-6 md:px-20 py-12 rounded-lg shadow-md border border-gray-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">About Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Text */}
          <div className="text-gray-300 text-base leading-relaxed md:text text-justify">
            <p>
              <strong>At BYV – Build Your Vision</strong>, we specialize in crafting exceptional digital experiences
              that empower businesses to thrive online. As a premium website solutions provider, we go beyond just
              design — we deliver strategically built, high-performance websites tailored to your unique goals.
            </p>
            <br />
            <p>
              With a team of passionate developers, creative designers, and strategic thinkers, BYV helps businesses
              build a strong online presence that reflects their brand, engages their audience, and drives real results.
              Whether you're launching your first website or scaling your digital footprint, we're here to bring your
              vision to life with precision, creativity, and care.
            </p>
          </div>

          {/* Right - Image */}
          <motion.img
            src="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Who We Are"
            className="w-full h-80 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />
        </div>
      </motion.div>

      {/* ✅ Services Section */}
      <div className="bg-gray-900 py-16 text-center px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              title: "Website Development",
              description: "Responsive, fast, and custom-built websites tailored to your brand and business goals.",
            },
            {
              title: "E-commerce Solutions",
              description: "Fully functional online stores with payment integration, product management & order tracking.",
            },
            {
              title: "Website Maintenance",
              description: "Regular updates, security patches, and performance enhancements to keep your site running smoothly.",
            },
            {
              title: "Website Redesign",
              description: "Give your outdated website a fresh, modern look with improved functionality and UX.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-black text-white p-8 rounded-lg shadow-md w-80 text-left border border-gray-700 hover:bg-gray-800 transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Testimonials Section 
      <motion.div
        className="py-16 bg-black text-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>

        <div className="relative max-w-7xl mx-auto px-4 flex items-center">
          <button
            className="absolute left-0 z-10 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-600 transition"
            onClick={scrollLeft}
          >
            ◀
          </button>

          <div
            ref={testimonialRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-12 w-full justify-start md:justify-center"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-md min-w-[280px] max-w-[320px] text-center flex flex-col items-center flex-shrink-0 mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <div className="mb-4">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                </div>
                <p className="italic text-gray-400 text-base leading-relaxed mb-4 px-2">
                  "{testimonial.message}"
                </p>
                <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">
                  {testimonial.designation}, {testimonial.company}
                </p>
                <div className="mt-2 text-yellow-500 text-lg">
                  {"⭐".repeat(Math.floor(testimonial.rating))}
                  {testimonial.rating % 1 !== 0 && "⭐"}
                </div>
              </motion.div>
            ))}
          </div>

          <button
            className="absolute right-0 z-10 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-600 transition"
            onClick={scrollRight}
          >
            ▶
          </button>
        </div>
      </motion.div>
*/}
      {/* ✅ Contact Section */}
      <motion.div
        className="bg-neutral-900 px-6 md:px-20 py-12 rounded-lg shadow-md border border-gray-700 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl  font-bold">Get in Touch</h2>
        <p className="mt-4  text-gray-400 text-lg max-w-xl text-justify mx-auto">
          Have a project in mind? Let's build something great together. Whether you're launching a new brand,
          upgrading your website, or creating something totally custom — we’re here to turn your ideas into
          impact.
        </p>
        <Link to="/contact">
          <motion.button
            className="mt-6 px-8 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
