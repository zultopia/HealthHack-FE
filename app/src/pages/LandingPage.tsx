import Button from "../components/ui/Button";
import { FaHeartbeat, FaLaptopMedical, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const HealthHackLanding = () => {
  return (
    <div className="min-h-screen justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      {/* Hero Section */}
      <section className="text-center py-24 px-6 text-white">
        <motion.h1
          className="text-5xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to HealthHack
        </motion.h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Your ultimate health companion powered by AI and innovation.
        </p>
        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition">
            Get Started
          </Button>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white drop-shadow-lg mx-auto">Why Choose HealthHack?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
          {[
            { icon: FaHeartbeat, color: "text-red-500", title: "Real-time Health Monitoring", desc: "Track your vitals and health metrics in real-time." },
            { icon: FaLaptopMedical, color: "text-green-500", title: "AI-Powered Diagnosis", desc: "Get accurate AI-driven health insights and recommendations." },
            { icon: FaShieldAlt, color: "text-blue-500", title: "Secure & Private", desc: "Your health data is safe with our top-tier security measures." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/80 backdrop-blur-lg shadow-xl rounded-xl hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <feature.icon className={`${feature.color} text-5xl mx-auto`} />
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; 2025 HealthHack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HealthHackLanding;