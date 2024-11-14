import React,{useContext} from 'react'
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/breadcrums/Breadcrums';
import { ShopContext } from '../context/ShopContext';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import DescriptionBox from '../components/descriptionBox/DescriptionBox';
import RelatedProducts from '../components/relatedProducts/RelatedProducts';

function Product() {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrums product = {product} />
      <ProductDisplay product ={product}/>

      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product