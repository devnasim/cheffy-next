import React from 'react';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';

export default function SEO({ title, description, image }) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical="https://www.canonicalurl.ie/"
      openGraph={{
        url: 'https://www.canonicalurl.ie/',
        title,
        description,
        images: [
          {
            url: image,
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: image,
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: image },
        ],
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
        image,
        title,
        description,
      }}
    />
  );
}

SEO.defaultProps = {
  title: '',
  description: '',
  image: '',
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
