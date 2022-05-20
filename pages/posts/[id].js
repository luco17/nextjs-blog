import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{postData.title}</h1>
        <p className="text-slate-500">
          <Date dateString={postData.date} />
        </p>
        <hr />
      </div>
      <article className="prose prose-stone">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Link href="/">
        <button className="px-4 py-1 text-sm text-blue-700 font-medium rounded-full border border-slate-200 hover:text-white hover:bg-blue-700">
          Go back
        </button>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
