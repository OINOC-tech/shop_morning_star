import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData, productagricoli }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Products</h2>
      <p>There are different products</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    {/* <div className='productAgricoli-heading'>
      <h2>Product Agricoli</h2>
    </div>
    <div className="productAgricoli-container">
      {productagricoli?.map((product) => <Product key={product._id} product={product} />)}
    </div> */}

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const productagricoliQuery = '*[_type == "productagricoli"]';
  const productagricoli = await client.fetch(productagricoliQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData, productagricoli }
  }
}

export default Home;
