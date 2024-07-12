import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getProduct} from '../store/productReducer'
 
const ProductsDetalisHook = (prodID) => {

    const dispatch = useDispatch();

    useEffect(() => {
      const get= async() =>{
       await dispatch(getProduct(prodID))

      }
      get();
    }, [])

    const product = useSelector((state) => state.products.product);

    //to show products item
    let item = [];
    if (product)
        item = product;
    else
        item = []

   


    // //to view images gallery
    // let images = []
    // if (item.images)
    //     images = item.images.map((img) => { return { original: img } })
    // else {
    //     images = [{ original: `${mobile}` }]
    // }


      
    return [item]
}

export default ProductsDetalisHook