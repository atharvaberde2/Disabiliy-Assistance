import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full p-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">AI Assist</h1>
                <nav className="space-x-4">
                    <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
                    <Link href="/about" className="text-gray-600 hover:text-blue-500">About</Link>
                    <Link href="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
