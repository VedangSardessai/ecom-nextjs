"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import DisplayProducts from "../productcomponent/page";
import getProductsBasedOnCategory from "@/helpers/getProductsBasedOnCategory";
import axios from "axios";

// ("smartphones");
// ("laptops");

// ("fragrances");
// ("skincare");

// ("groceries");
// ("home-decoration");
// ("furniture");

// ("tops");
// ("womens-dresses");
// ("womens-shoes");
// ("womens-watches");
// ("womens-bags");
// ("womens-jewellery");

// ("mens-shirts");
// ("mens-shoes");
// ("mens-watches");
// ("sunglasses");

export default function ProductCategory(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const category = pathname.split("/products/")[1];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsBasedOnCategory(category);
        setProducts(data);

        if (data.length == 0) {
          router.push("/products/categorynotfound");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [category, router]);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{category} </h1>
        <DisplayProducts products={products} />
        <hr />
      </div>
    </>
  );
}
