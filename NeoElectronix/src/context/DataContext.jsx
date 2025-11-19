/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    // IMAGE VALIDATION FUNCTION
    const validateImage = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;

            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
        });
    };

    // FETCHING ALL PRODUCTS
    const fetchAllProducts = async () => {
        try {
            const res = await axios.get(
                "https://grsdfdqqyaqayzjlqxcx.supabase.co/functions/v1/products?limit=800"
            );

            let productsData = res.data;

            // FILTER VALID IMAGE PRODUCTS
            const validatedProducts = [];

            for (let product of productsData) {
                const isValid = await validateImage(product.thumbnail);
                if (isValid) {
                    validatedProducts.push(product);
                }
            }

            setData(validatedProducts);

        } catch (error) {
            console.log(error);
        }
    };

    const getUniqueCategory = (data, property) => {
        let newVal = data?.map((curElem) => {
            return curElem[property];
        });
        newVal = ["All", ...new Set(newVal)];
        return newVal;
    };

    const categoryOnlyData = getUniqueCategory(data, "category");
    const brandOnlyData = getUniqueCategory(data, "brand");

    return (
        <DataContext.Provider
            value={{
                data,
                setData,
                fetchAllProducts,
                categoryOnlyData,
                brandOnlyData,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const getData = () => useContext(DataContext);
