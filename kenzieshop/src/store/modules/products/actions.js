import { PRODUCTS } from "./actionsTypes";

export const products = (products) => {
  return {
    type: PRODUCTS,
    products,
  };
};
