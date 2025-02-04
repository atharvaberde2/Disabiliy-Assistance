import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full p-4 bg-gray-800 text-white text-center mt-12">
            <p>© 2025 AI Down Syndrome Assistant. All rights reserved.</p>
            <nav className="flex justify-center space-x-4 mt-2">
                <Link href="#" className="text-sm hover:underline">Terms of Service</Link>
                <Link href="#" className="text-sm hover:underline">Privacy Policy</Link>
            </nav>
        </footer>
    );
}
