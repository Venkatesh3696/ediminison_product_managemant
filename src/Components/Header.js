import React, { useState } from "react";
import { searchProduct } from "../redux/productSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchProduct(search));
  };

  return (
    <div>
      <input
        value={search}
        placeholder="search products"
        onChange={onChangeSearch}
      />
    </div>
  );
};

export default Header;
