"use server";
import { url } from "./request";

interface Phones {
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

export const getPhones = async (): Promise<Phones[]> => {
  try {
    const res = await fetch(`${url}/phones`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
