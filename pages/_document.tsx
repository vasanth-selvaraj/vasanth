import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <title>Vasanth Portfolio</title> */}
        <meta name="description" content="I am a passionate and creative web developer, specializing in crafting elegant and responsive websites. With a keen eye for design and a deep understanding of user experience, I strive to create engaging and user-friendly digital experiences. Explore my portfolio to see a diverse range of projects that showcase my skills in front-end development, back-end programming, and more." />
        <meta property="og:image" content="https://drive.google.com/uc?export=download&id=17qaAtosdLf9lcWWk3rjIKYVeKfJDO8Pp" />
        <meta name="google-site-verification" content="x31vTQvK7B2Ral8L2f3C5o3yqslTwke_m8uhpSCeipw" />
        <meta property="og:url" content="https://vasanth.tech" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="https://drive.google.com/uc?export=download&id=1VmcKtY39_jFUtUB_pcSjFj5VYHaPitHJ" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
