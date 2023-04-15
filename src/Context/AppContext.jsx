import React, { createContext, useState, useEffect } from "react";
import { deleteData, getData, updateData } from "../API";
export const AppContext = createContext();

const initialValue = {
  name: "",
  email: "",
  number: "",
  age: "",
  gender: "",
  department: "",
  salary: "",
  image: "",
};

const AppContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [titleSortBy, settitleSortBy] = useState("asc");
  const [FilterByGender, setFilterByGender] = useState(null);
  const [FilterBy, setFilterBy] = useState(null);
  const [totalProduct, setTotalProduct] = useState(null);
  const [updateButton, setUpdateButton] = useState(false);
  const [editedId, setEditedId] = useState(null);
  const [formData, setFormData] = useState(initialValue);
  const [page, setPage] = useState(1);
  const limit = 4;

  useEffect(()=>{
    HandleEmotionData()
  },[page,titleSortBy,FilterBy,FilterByGender])
  const HandleEmotionData = async () => {
    try {
      setLoading(true);
      const res = await getData({
        FilterByGender,
        FilterBy,
        titleSortBy,
        page,
        setTotalProduct,
        limit,
      });
      setData(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    setLoading(true);
    deleteData(id)
      .then((res) => {
        HandleEmotionData();
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleEditData = (id) => {
    let selectedData = data.filter((el) => {
      return el.id === id;
    });
    setFormData({ ...selectedData[0] });
  };

  const updateToServer = () => {
    setLoading(true);
    updateData(editedId, formData)
      .then((res) => {
        HandleEmotionData();
        setUpdateButton(false);
        setLoading(true);
        console.log(res);
        setFormData(initialValue);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <AppContext.Provider
      value={{
        data,
        handleDelete,
        totalProduct,
        limit,
        page,
        setPage,
        handleEditData,
        setUpdateButton,
        updateButton,
        titleSortBy,
        settitleSortBy,
        setFilterByGender,
        setFilterBy,
        FilterBy,
        setEditedId,
        editedId,
        FormData,
        setFormData,
        updateToServer,
        loading,
      }}
    >{children}</AppContext.Provider>
  );
};

export default AppContextProvider
