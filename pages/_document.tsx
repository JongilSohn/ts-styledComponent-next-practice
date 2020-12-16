// import Document from 'next/document'
// import { ServerStyleSheet } from 'styled-components'

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     // 1.  ServerStyleSheet의 인스턴스 생성
//     const sheet = new ServerStyleSheet()
//     const originalRenderPage = ctx.renderPage

//     try {
//       // 하기 코드는 Next js에서 제공하는 샘플 코드입니다.


//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) =>
//             sheet.collectStyles(<App {...props} />),
//         })

//       // Documents의 initial props
//       const initialProps = await Document.getInitialProps(ctx)

//       // props와 styles를 반환
//       return {
//         ...initialProps,
//         styles: (
//           <>
//             {initialProps.styles}
//             {sheet.getStyleElement()}
//           </>
//         ),
//       }
//     } finally {
//       sheet.seal()
//     }
//   }
// }


import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components'

// import { ServerStyleSheet } from '../styles/themed-components';

interface StyledProps {
  styleTags: Array<React.ReactElement<{}>>;
}

export default class MyDocument extends Document<StyledProps> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Sohns</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </html>
    );
  }
}