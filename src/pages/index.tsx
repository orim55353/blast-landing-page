import Head from "next/head";

import Header from "@/pages/Header";
import TopSection from "@/pages/TopSection";
import MiddleSection from "@/pages/MiddleSection";
import FeaturesSection from "./FeaturesSection";
import Footer from "@/pages/Footer";

import localFont from "next/font/local";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blast - Ignite Your Night!</title>
        <meta
          name="description"
          content="Discover Blast, the ultimate app for revolutionizing your nightlife experience. Connect with new friends, book tables, purchase tickets, and personalize your party journey, all in one place. Dive into a world of vibrant events and unforgettable nights out with Blast – your passport to the best of nightlife"
        />
        <meta property="og:title" content="Blast - Ignite Your Night" />
        <meta
          property="og:description"
          content="Join the party with Blast! Connect, socialize, and experience nightlife like never before. Find your crowd, book exclusive tables, and access top events seamlessly. Ready for an unforgettable night out? Blast is your key to the city's best nightlife."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${sf.className}`}>
        <Header />
        <TopSection />
        <MiddleSection />
        <FeaturesSection />
        {/* <BottomSection /> */}

        <Footer />
      </main>
    </>
  );
}

const sf = localFont({
  src: [
    {
      path: "./fonts/SFUIDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SFUIDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SFUIDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SFUIDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SFUIDisplay-Heavy.otf",
      weight: "900",
      style: "normal",
    },
  ],
});
