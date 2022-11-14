import Footer from './footer';
import './globals.css'
import Header from './header';


export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
