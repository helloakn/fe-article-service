import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";
export default function Document() {
  return (
    <Html>
      <Head>
        <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
              integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
              crossOrigin="anonymous"
          />
        <meta
          name="format-detection"
          key="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <meta key="google-adsense-account" name="google-adsense-account" content="ca-pub-8018701717083970" />
        <link rel="icon" type="image/x-icon" href="/img/logo.svg" />
      </Head>
      <body>
        <Main />
        

        <NextScript />

        
      </body>
    </Html>
  )
}