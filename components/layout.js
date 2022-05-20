import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Squaddo";
export const siteTitle = "Squaddo Demo";

export default function Layout({ children, home }) {
  return (
    <div className="my-8 p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Squaddy in Next.js" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className="flex flex-col items-center space-y-4">
        {home ? (
          <>
            <Image
              priority
              src="/images/circular512.png"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="text-3xl font-semibold">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/circular512.png"
                  height={80}
                  width={80}
                  alt={name}
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
