"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Page() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col min-h-[100vh] bg-blue-50 text-gray-900">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="container space-y-10 px-4 sm:px-6 md:space-y-16 md:px-10"
                    >
                        <div className="flex flex-col items-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">
                                    AI-Powered Support for Every Journey
                                </div>
                                <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
                                    Empowering Lives with AI Assistance
                                </h2>
                                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                                    A dedicated platform to support individuals with Down Syndrome through AI-driven **speech therapy, social skill development, learning tools, and reading assistance**.
                                </p>
                            </div>
                        </div>

                        {/* Images Section */}
                        <div className="mx-auto grid max-w-5xl items-start gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                { src: "speech.png", alt: "AI Speech Therapy" },
                                { src: "social.png", alt: "AI Social Skills Coach" },
                                { src: "learning.png", alt: "Personalized Learning Assistant" },
                            ].map((image, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="mx-auto flex w-full items-center justify-center p-4 sm:p-8"
                                >
                                    <img 
                                        alt={image.alt} 
                                        className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                                        src={image.src}
                                        width="550"
                                        height="400"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Features Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">
                                    AI-Powered Features
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Personalized AI Support for Growth & Development
                                </h2>
                                <p className="max-w-[900px] text-gray-600 md:text-xl">
                                    Designed for accessibility, engagement, and learning through interactive AI tools.
                                </p>
                            </motion.div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid gap-6 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                            {[
                                { title: "AI Speech Therapy", description: "Practice pronunciation & fluency with real-time AI feedback." },
                                { title: "Social Skills Coach", description: "Interactive chatbot to develop communication & confidence." },
                                { title: "Math Learning Assistant", description: "Step-by-step math guidance with interactive exercises." },
                                { title: "Reading Helper", description: "Read aloud & get pronunciation corrections from AI." },
                                { title: "Gamified Learning", description: "Engaging activities to enhance cognitive skills & focus." },
                                { title: "Personalized Feedback", description: "AI-driven insights to track learning progress over time." },
                            ].map((feature, index) => (
                                <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, y: 10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 0.6, delay: 0.2 * index }}
                                    className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg"
                                >
                                    <h3 className="text-lg font-bold">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Signup Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                                Join Us in Transforming Learning & Communication
                            </h2>
                            <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                                Sign up to stay informed about new features and updates!
                            </p>
                        </motion.div>

                        <div className="mx-auto w-full max-w-sm space-y-2">
                            {submitted ? (
                                <p className="text-green-500 font-medium">✅ Thank you for signing up!</p>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex space-x-2">
                                    <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" required />
                                    <Button type="submit">Sign Up</Button>
                                </form>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t bg-white">
                <p className="text-xs text-gray-500">© 2025 AI Down Syndrome Assistant. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline" href="#">Terms of Service</Link>
                    <Link className="text-xs hover:underline" href="#">Privacy</Link>
                </nav>
            </footer>
        </div>
    );
}

