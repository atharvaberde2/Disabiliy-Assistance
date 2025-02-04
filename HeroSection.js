import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center h-[80vh] bg-gradient-to-br from-blue-400 to-indigo-600 text-white text-center px-6">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl font-extrabold tracking-tight"
            >
                Empowering Lives with AI Assistance
            </motion.h2>
            <p className="max-w-2xl mt-4 text-lg opacity-90">
                AI-powered tools for **speech therapy, learning, and communication**.
            </p>
            <button className="mt-6 px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
                Get Started 🚀
            </button>
        </section>
    );
}
