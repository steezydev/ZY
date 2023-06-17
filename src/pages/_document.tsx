import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en' className='bg-dark'>
        <Head>
          <link
            rel='preload'
            href='/fonts/clashgrotesk_variable.ttf'
            as='font'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/outfit.ttf'
            as='font'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/satoshi.ttf'
            as='font'
            crossOrigin='anonymous'
          />
          <meta
            name='theme-color'
            content='#0F0F0F'
            media='(prefers-color-scheme: light)'
          />
          <meta
            name='theme-color'
            content='#0F0F0F'
            media='(prefers-color-scheme: dark)'
          />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='black-translucent'
          />
          <meta name='color-scheme' content='dark'></meta>
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='theme-color' content='#000000' />
        </Head>
        <body className='body-app'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
