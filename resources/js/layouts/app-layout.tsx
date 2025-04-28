import { ReactNode } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppHeader } from "@/components/app-header";

interface AppLayoutProps {
    children: ReactNode;
}

export default ({ children, ...props }: AppLayoutProps) => {

    return (
        <>
            <Header />
            <AppHeader />

            <div className="container m-auto p-6 sm:p-0">
                { children }
            </div>

            <Footer />
        </>
    );
}
