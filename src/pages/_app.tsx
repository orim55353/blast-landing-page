import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Blast - Ignite Your Night!</title>
        <meta
          name="description"
          content="Discover Blast, the ultimate app for revolutionizing your nightlife experience. Connect with new friends, book tables, purchase tickets, and personalize your party journey, all in one place. Dive into a world of vibrant events and unforgettable nights out with Blast – your passport to the best of nightlife"
        />
        <meta
          name="keywords"
          content="Nightlife social app, Clubbing connection app, Party-goer networking, Nightclub social network, Social media for clubbers, Nightlife community app, Nightclub table booking, Bottle service app, Club tickets online, VIP table reservation app, Party planning social network, Nightclub events app, Exclusive club access app, Connect with club-goers, Party people networking, Clubbing lifestyle community, Find party friends app, Nightlife enthusiast network, Social platform for dancers, DJ events app, Live music clubs app, Exclusive party invites app, Club event finder, Nightclub calendar app, Best clubbing experience, Book nightclub tables online, Nightlife party planning, Best bottle service clubs, Party groups in nightclubs, Apps like Tabler, Apps like Discotech, Apps like Ticketmaster, Alternative to Tabler, Alternative to Discotech, Las Vegas nightclub guide, Miami nightclub guide, New York nightclub guide, Los Angeles nightclub guide, Ibiza nightclub guide, Best clubs in Las Vegas, Best clubs in Miami, Best clubs in New York, Best clubs in Los Angeles, Best clubs in Ibiza, Nightlife in Las Vegas, Nightlife in Miami, Nightlife in New York, Nightlife in Los Angeles, Nightlife in Ibiza, Las Vegas clubbing app, Miami clubbing app, New York clubbing app, Los Angeles clubbing app, Ibiza clubbing app, Las Vegas party scene app, Miami party scene app, New York party scene app, Los Angeles party scene app, Ibiza party scene app"
        />
        <meta property="og:title" content="Blast - Ignite Your Night" />
        <meta
          property="og:description"
          content="Join the party with Blast! Connect, socialize, and experience nightlife like never before. Find your crowd, book exclusive tables, and access top events seamlessly. Ready for an unforgettable night out? Blast is your key to the city's best nightlife."
        />
        <meta name="og:url" content="https://www.blastit.app" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta
          name="google-site-verification"
          content="YqiDehOEK9B7Pfd3DQoLdIuoQp7474yGi_-9SwwU79I"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
