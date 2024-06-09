import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="ja" prefix="og: http://ogp.me/ns#">
      <Head>
      <script
          data-ad-client="ca-pub-5584222931737430"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>
      <body className='bg-gradient-to-r from-cyan-100 to-sky-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}