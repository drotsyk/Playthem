import React from 'react'
import { Content } from '../Content/Content'
import { Head } from '../Head/Head'
export const Main = () => {
  const listImg1 = ['shopify', 'amazon', 'castcom_yahoo', 'Zencart', '1280px-EBay_logo', 'ProStores-Logo-Ebay-ShopTab', '3eedf88a670a9ffa751ee35e088bc716', 'volusion']
  const listImg2 = ['cart', 'cart', 'cart', 'cart']
  return (
    <>
      <Head />
      <Content 
        title="Integrate PLAYTHEM with your favorite ecommerce stack"
        listImg={listImg1}
        padding="150px 30px 50px 30px"
      />
      <Content 
        title="PLAYTHEM Games"
        subtitle="Duis aute irure dolor in 
        reprehenderit in voluptate velit esse 
        cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident"
        listImg={listImg2}
        padding="150px 30px "
        imgTitle='PLAYTHEM Games'
        button="Preview game"
      />
    </>
  )
}
