import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Page() {
    return (
        <div>
            <Header />
            <main>
                <HeroSection />
                <Features />
            </main>
            <Footer />
        </div>
    );
}
