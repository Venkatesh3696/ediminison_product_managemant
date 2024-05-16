import { createSlice, nanoid } from "@reduxjs/toolkit";
import Search from "antd/es/transfer/search";

const initialState = {
  products: [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 4,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 5,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
  ],
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = {
        id: nanoid(),
        title: action.payload.title,
        price: action.payload.price,
      };
      state.products.push(product);
    },

    removeProduct: (state, action) => {
      console.log("removing product!", action.payload);

      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },

    editProduct: (state, action) => {
      console.log("editing product!", action.payload);

      const edit = state.products.find(
        (product) => product.id === action.payload.id
      );
      edit.title = action.payload.title;
      edit.price = action.payload.price;
      edit.description = action.payload.description;

      const rest = state.products.filter(
        (product) => product.id !== action.payload.id
      );

      state.products = [...rest, edit];
    },
    searchProduct: (state, action) => {
      console.log("searching product!", action.payload);

      state.products = state.products.filter((product) =>
        product.title.includes(action.payload)
      );
    },
  },
});

export const { addProduct, removeProduct, editProduct, searchProduct } =
  productSlice.actions;

export default productSlice.reducer;
