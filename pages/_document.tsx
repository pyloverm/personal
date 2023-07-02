import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const MyDocument = () => {
  return (
    <Html className={"scroll-smooth"}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800;900&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="beforeInteractive"
          src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
        />
      </body>
    </Html>
  );
};

export default MyDocument;
