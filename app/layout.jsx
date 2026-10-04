import "./styles/base.css";
import "./styles/sections.css";
import "./styles/responsive.css";
import "./styles/gallery.css";
import "./styles/editorial.css";

export const metadata = {
  title: "Avelith Studio — Ideas impossible to ignore.",
  description:
    "Avelith Studio — branding, websites, motion, social media, interior design, exterior design and graphic design.",
};

export const viewport = {
  themeColor: "#F8F3EB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
