/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState()

    // fetching all products from api
    const fetchAllProducts = async () => {
        try {
           const res = await axios.get('https://fakestoreapi.com/products?limit=150')
           console.log(res);
           const productsData = res.data.products
           setData(productsData)
           
        } catch (error) {
            console.log(error);

        }
    }

    const getUniqueCategory = (data, property) =>{
        let newVal = data?.map((curElem) =>{
            return curElem[property]
        })
        newVal = ["All",...new Set(newVal)]
        return newVal
      }
    
      const categoryOnlyData = getUniqueCategory(data, "category")
      const brandOnlyData = getUniqueCategory(data, "brand")
    return <DataContext.Provider value={{ data, setData,fetchAllProducts, categoryOnlyData, brandOnlyData }}>
        {children}
    </DataContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const getData = ()=> useContext(DataContext)
