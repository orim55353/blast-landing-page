import Head from "next/head";
import TopSection from "@/components/layout/TopSection";
import MiddleSection from "@/components/layout/MiddleSection";
import FeaturesSection from "../components/layout/FeaturesSection";
import localFont from "next/font/local";

export default function Home() {
  return (
    <>
      <main className={`${sf.className}`}>
        <TopSection />
        <MiddleSection />
        <FeaturesSection />
        {/* <BottomSection /> */}
      </main>
    </>
  );
}

export const sf = localFont({
  src: [
    {
      path: "../styles/fonts/SFUIDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../styles/fonts/SFUIDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/SFUIDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../styles/fonts/SFUIDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/SFUIDisplay-Heavy.otf",
      weight: "900",
      style: "normal",
    },
  ],
});
