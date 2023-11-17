"use client";
import React, { useEffect, useState } from "react";
import DisplayProducts from "../../productcomponent/page";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

export default function SearchResultsComponent() {
  const pathName = usePathname();
  const product = pathName.split("/products/search/")[1];
  const [products, setProducts] = useState([]);

  const router = useRouter();
  const getSearchResults = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/search?q=" + product
      );

    //   console.log(response.data.products);
      setProducts(response.data.products);
      //   setProducts(JSON.parse(response.data));
    //   console.log(Array.isArray(response.data.products));
    } catch (error) {
      router.push("/products/categorynotfound");
    }
  };

  useEffect(() => {
    getSearchResults();
  }, [product]);
  return <DisplayProducts products={products} />;
}
