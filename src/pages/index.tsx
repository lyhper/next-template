import Head from 'next/head';
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Layout, { siteTitle } from '../components/layout';
import { useRecoilState } from 'recoil';
import { globalStateAtom } from '../states/index';
import utilStyles from '../styles/utils.module.less';

interface HomeInterface {
  text: string;
}

export default function Home({ text }: HomeInterface): JSX.Element {
  const [globalState, setGlobalState] = useRecoilState(globalStateAtom);

  function onClick() {
    setGlobalState(globalState + ' click');
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[{text}]</p>
        <p onClick={onClick}>{globalState}</p>
        <p>(This is a next template - you’ll be building a site like this)</p>
      </section>
    </Layout>
  );
}

export const getServerSideProps : GetServerSideProps = async (context: GetServerSidePropsContext) => {
  console.log(context);
  return {
    props: {
      text: 'hello world',
    },
  };
}
