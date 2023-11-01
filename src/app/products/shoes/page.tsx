"use client";
import getProductsBasedOnCategory from "@/helpers/getProductsBasedOnCategory";
import React, { useEffect, useState } from "react";
import DisplayProducts from "../productcomponent/page";
import axios from "axios";

export default function ShoesComponent() {
  const [mensShoes, setMensShoes] = useState([]);
  const [womensShoes, setWomensShoes] = useState([]);
  const [bags, setBags] = useState([]);

  useEffect(() => {
    console.log(axios.get("https://api.escuelajs.co/api/v1/categories"));
    const fetchMensShoes = async () => {
      try {
        const data = await getProductsBasedOnCategory("mens-shoes");
        console.log(data);
        setMensShoes(data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchWomensShoes = async () => {
      try {
        const data = await getProductsBasedOnCategory("womens-shoes");
        console.log(data);
        setWomensShoes(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchBags = async () => {
      try {
        const data = await getProductsBasedOnCategory("womens-bags");
        console.log(data);
        setBags(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMensShoes();
    fetchWomensShoes();
    fetchBags();
  }, []);
  return (
    <div className="bg-gray-200 ">
      <h1>Shoes Component</h1>
      <DisplayProducts products={mensShoes} />
    </div>
  );
}
