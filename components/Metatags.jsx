import Head from "next/head";

import React from "react";

const MetaTags = ({ title, name, content }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={name} content={content} />
    </Head>
  );
};

export default MetaTags;
