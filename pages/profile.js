import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Profile() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <container>
          <h1>JoshTheNerd's Profile</h1>
        </container>
      </div>

    </Layout>
  )
}