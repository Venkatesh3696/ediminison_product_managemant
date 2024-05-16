import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";
import { Button, Descriptions } from "antd";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(title, price);
    if (title !== "" && price !== "" && description !== "") {
      dispatch(addProduct({ title, price, description }));
    }
  };
  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form className="add-product-form" onSubmit={onSubmitForm}>
        <label htmlFor="title">Title</label>
        <input id="title" value={title} type="text" onChange={onChangeTitle} />
        <label htmlFor="price">Title</label>
        <input id="price" value={price} type="text" onChange={onChangePrice} />
        <label>Description</label>
        <textarea onChange={onChangeDescription}>{description}</textarea>
        <Button type="primary">Add Product</Button>
      </form>
    </div>
  );
};

export default AddProduct;
