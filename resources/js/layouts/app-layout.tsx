import { ReactNode } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

interface AppLayoutProps {
    children: ReactNode;
}

export default ({ children, ...props }: AppLayoutProps) => {

    return (
        <>
            <Header />

            <div className="container m-auto min-h-80vh">
                { children }
            </div>

            <Footer />
        </>
    );
}
