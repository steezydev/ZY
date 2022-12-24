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
            type='font/opentype'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/Outfit-Varibale.ttf'
            as='font'
            type='font/opentype'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/Satoshi-Varibale.ttf'
            as='font'
            type='font/opentype'
            crossOrigin='anonymous'
          />
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
