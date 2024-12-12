import "./globals.css";

export const metadata = {
  title: "FAQ Accordion",
  description: "Intuitive and responsive accordion component",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen w-screen overflow-hidden">
      <body className="w-screen h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}
