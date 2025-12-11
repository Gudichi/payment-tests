import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";
import "flag-icons/css/flag-icons.min.css";
import { PostHogProvider } from "./providers";
import { MetaPixelProvider } from "@/components/MetaPixelProvider";

const title = "Formula od 6 Riječi | Transformirajte svoj odnos večeras";
const description =
  "Otkrijte rečenicu od 6 riječi koja čini da se muškarac ludo zaljubi. Pridružite se 3.432+ žena koje su transformirale svoje odnose u 24 sata.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `https://recenicestrasti.com`,
  },
  openGraph: {
    title: title,
    description: description,
    type: "website",
    images: {
      url: "https://recenicestrasti.com/og-image.jpg",
      alt: "recenicestrasti.com",
    },
  },
};

const poppinsBody = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const poppinsHeading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const AppProvider = ({
  children,
}: {
  children: React.ReactNode;
}) =>
  clerkPublishableKey ? (
    <ClerkProvider publishableKey={clerkPublishableKey}>{children}</ClerkProvider>
  ) : (
    <>{children}</>
  );

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <meta
            name="facebook-domain-verification"
            content="z77heunv7fkzpbwsny9rhsq9cmayr5"
          />
          <Script src="https://fast.wistia.com/assets/external/E-v1.js" async />
          {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EC23D3L1TP"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EC23D3L1TP', {'send_page_view': true});
          `}
        </Script> */}
        </head>
        <body className={`${poppinsBody.variable} ${poppinsHeading.variable}`}>
          <MetaPixelProvider />
          <PostHogProvider>
            <NuqsAdapter>{children}</NuqsAdapter>
          </PostHogProvider>
        </body>
      </html>
    </AppProvider>
  );
}
