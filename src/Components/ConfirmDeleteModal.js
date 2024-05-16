import React, { useState } from "react";
import { Button, Modal } from "antd";

import { useDispatch } from "react-redux";
import { removeProduct, editProduct } from "../redux/productSlice";

const ConfirmDeleteModal = ({ details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    dispatch(removeProduct(details.id));
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default ConfirmDeleteModal;
