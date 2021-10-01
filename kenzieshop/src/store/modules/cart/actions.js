import { ADD_CART } from "./actionsTypes";

const addCard = (newProduct) => {
  return {
    type: ADD_CART,
    newProduct,
  };
};

export default addCard;
