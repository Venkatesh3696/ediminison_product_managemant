import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProduct, editProduct } from "../redux/productSlice";
import { Modal, Button } from "antd";

const Product = ({ details }) => {
  const { id, title, price, description } = details;
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editPrice, setEditPrice] = useState(price);
  const [editDescription, setEditDescription] = useState(description);

  const onDeleteProduct = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(removeProduct(id));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleEditOk = () => {
    setIsEditModalOpen(false);
    const details = {
      id: id,
      title: editTitle,
      price: editPrice,
      description: editDescription,
    };
    dispatch(editProduct(details));
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);
  };

  const onChangeEditTitle = (e) => {
    setEditTitle(e.target.value);
  };

  const onChangeEditPrice = (e) => {
    setEditPrice(e.target.value);
  };

  const onChangeEditDescription = (e) => {
    setEditDescription(e.target.value);
  };

  return (
    <div className="product-container">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>price: ₹ {price}</p>
      <div className="buttons-container">
        <Button type="default" onClick={handleEdit}>
          Edit
        </Button>
        <Button type="primary" onClick={onDeleteProduct}>
          Delete
        </Button>
      </div>

      <Modal
        title="Are you sure? you want to delete the following product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{title}</p>
        <p>{description}</p>
      </Modal>
      <Modal
        title="Edit the following data to edit the product"
        open={isEditModalOpen}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        <form className="edit-form">
          <label>Title</label>
          <input onChange={onChangeEditTitle} type="text" value={editTitle} />
          <label>Price</label>
          <input onChange={onChangeEditPrice} type="text" value={editPrice} />
          <label>Description</label>
          <textarea
            onChange={onChangeEditDescription}
            value={editDescription}
          ></textarea>
        </form>
      </Modal>
    </div>
  );
};

export default Product;
