import './globals.css'
import Header from './header'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <head />
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}
