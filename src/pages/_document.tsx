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
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/ClashDisplay-Varibale.ttf'
            as='font'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/Outfit-Varibale.ttf'
            as='font'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/Satoshi-Varibale.ttf'
            as='font'
            crossOrigin='anonymous'
          />
          <meta name='theme-color' content='#0F0F0F' />
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
