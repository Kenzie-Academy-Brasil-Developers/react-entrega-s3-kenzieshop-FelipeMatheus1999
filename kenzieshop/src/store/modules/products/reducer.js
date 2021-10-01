import { PRODUCTS } from "./actionsTypes";

const products = [
    { id: 1, product: "Caneca Coffee Progressing" , price: 39.90, img: "../../../assets/caneca-desenvolvedor-programador-coffee-processing-unit-processador-porcelana-preta1-bad1d2f83db88db73c16253440694764-480-0.jpg"},
    { id: 2, product: "Caneca programador tiozão" , price: 49.90, img: "../../../assets/caneca_de_cafe_grande_programador_de_computador_jumbo_mug-r4185518e7076477e84e4f4cf1f6bf80e_2wnlh_8byvr_540.jpg"},
    { id: 3, product: "Caneca programador", price: 30.99, img: "../../../assets/caneca_programacao_c_nome_2263_1_20200622110356.jpg"},
    { id: 4, product: "Caneca", price: 30.90, img: "../../../assets/caneca_programador__a__codigo_1567065881_0ac4_600x600.jpg"},
    { id: 5, product: "Caneca Seu Nome", price: 40.89, img: "../../../assets/D_NQ_NP_683251-MLB42318992763_062020-O.jpg"},
    { id: 6, product: "Caneca While True",  price: 59.99, img: "../../../assets/D_NQ_NP_801204-MLB46352785187_062021-O.jpg"},
    { id: 7, product: "Caneca PHP",  price: 50.99, img: "../../../assets/e91e86341a.jpg"},
];

const productsReducer = (state = products, action) => {
  switch (action.type) {
    case PRODUCTS:
      return state;

    default:
      return state;
  }
};

export default productsReducer;
