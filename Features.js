import { motion } from "framer-motion";

export default function Features() {
    const features = [
        { title: "AI Speech Therapy", description: "Practice pronunciation & fluency with real-time AI feedback.", icon: "🗣️" },
        { title: "Social Skills Coach", description: "Interactive chatbot to develop communication & confidence.", icon: "💬" },
        { title: "Math Learning Assistant", description: "Step-by-step math guidance with interactive exercises.", icon: "📊" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 * index }}
                        className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg"
                    >
                        <span className="text-4xl">{feature.icon}</span>
                        <h3 className="text-lg font-bold mt-3">{feature.title}</h3>
                        <p className="text-gray-600 mt-2">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

