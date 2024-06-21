import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';

interface ISeo {
  title: string;
  description?: string;
  image?: string;
}

export const titleMerge = (title: string) => `${title} | 'Fresh Food Shop'`;

const MetaData: FC<PropsWithChildren<ISeo>> = ({ title, description, image, children }) => {
  const pathname = usePathname();
  const currentUrl = `${process.env.CLIENT_URL}${pathname}`;

  const siteName = 'Fresh Food';

  return (
    <>
      <Head>
        <title itemProp="headline">{titleMerge(title)}</title>
        {description ? (
          <>
            <meta itemProp="description" name="description" content={description} />
            <link rel="canonical" href={currentUrl} />
            <meta property="og:locale" content="en" />
            <meta property="og:title" content={titleMerge(title)} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={image || '/favicon.ico'} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteName} />
          </>
        ) : (
          <>
            <meta name="robots" content="noindex, nofollow" />
          </>
        )}
      </Head>
      {children}
    </>
  );
};

export default MetaData;
