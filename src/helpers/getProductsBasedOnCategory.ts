"use client"
import axios from "axios";
import { NextResponse } from "next/server";

const getProductsBasedOnCategory = async (category: string) => {
    const apiUrl = "https://dummyjson.com/products/category/" + category;

    try {
        const response = await axios.get(apiUrl);        
        return response.data.products;
    } catch (error) {
        console.log(error);
    }
};


export default getProductsBasedOnCategory;

