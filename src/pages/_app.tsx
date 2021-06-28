import '../styles/global.less';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';

interface AppInterface {
  Component: FC;
  pageProps: anyObject;
}

export default function App({ Component, pageProps }: AppInterface): JSX.Element {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
