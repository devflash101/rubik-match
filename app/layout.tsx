import "./globals.css"

export default function RootLayout({
    children,
    profile,
} : {
    children: React.ReactNode,
    profile: React.ReactNode
}) {
    return (
        <html lang="en">
          <body>
            {/* Layout UI */}
            {/* Place children where you want to render a page or nested layout */}
            <main>
              {children}
              {profile}
            </main>
          </body>
        </html>
    )
}