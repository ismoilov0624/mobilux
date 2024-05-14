"use server";
import { url } from "./request";

interface Accessories {
  id: number;
  title: string;
  brand: string;
  type: string;
  price: string;
  img: string;
  discount: string;
  color: string;
  description: string;
}

export const getAccessories = async (): Promise<Accessories[]> => {
  try {
    const res = await fetch(`${url}/accessories`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
