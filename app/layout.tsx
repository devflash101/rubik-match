import "./globals.css"

export default function RootLayout( props:{
    children: React.ReactNode,
    profile: React.ReactNode
}) {
    return (
        <html lang="en">
          <body>
            {/* Layout UI */}
            {/* Place children where you want to render a page or nested layout */}
            <main>
              {props.children}
              {props.profile}
            </main>
          </body>
        </html>
    )
}