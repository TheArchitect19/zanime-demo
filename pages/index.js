
import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client'


export const getServerSideProps = async () => {
    const q = '*[_type == "product"]'
    const products = await client.fetch(q);
    // console.log(products)

    const banner = '*[_type == "banner"]'
    const banners = await client.fetch(banner);

    return {
        props:{products , banners}
    }
}



const page = ({products , banners}) => {
  return (
   <div>
    {console.log(products)}
      <HeroBanner herobanner={banners.length && banners[0]}/>
      
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker there are many variations passages</p>
      </div>
      <div className="products-container">
        {
          products?.map((product)=><Product key={product._id} product={product}/>)
        }
      </div>
      <FooterBanner footerBanner={banners && banners[0]} />
   </div>
  )
}



export default page