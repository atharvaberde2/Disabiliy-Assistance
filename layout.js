export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-blue-50 text-gray-900">
            {children}
        </div>
    );
}
