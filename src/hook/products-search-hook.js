import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getAllProductsSearch,getProduct} from '../store/productReducer'
import { useNavigate } from 'react-router-dom';
 
const ProductsSearchHook = () => {
    const dispatch = useDispatch();

    const [searchWord, setSearchWord] = useState('')
    const navigate = useNavigate();

    

    
const searchHandle= async(e) =>{
   
   setSearchWord()
  const searchTerm =e.target.value
   if (searchTerm.length === 0) {
    navigate("/home");

 }else{
   navigate("/shop");

  }
    setTimeout(() => {
      dispatch(getAllProductsSearch(e.target.value))
    
      }, 1000)
  
  

}


 

      
    return [searchHandle,searchWord]
}

export default ProductsSearchHook