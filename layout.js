
import {Inter} from "next/font/google";
import "./globals.css";
import AuthWrapper from "@/providers/AuthProvider";
import Navbar from "@/components/Navbar";
import {Toaster} from "react-hot-toast";
import TanStackQuery from "@/providers/TanStack";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Disability Insurance",
    description: "A tool to help individuals with disabilities",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <TanStackQuery>
                <AuthWrapper>
                    <body className={inter.className}>
                    <Navbar />
                    <div>
                        {children}
                    </div>
                    <Toaster position="bottom-right"/>
                    </body>
                </AuthWrapper>
            </TanStackQuery>
        </html>
    );
}