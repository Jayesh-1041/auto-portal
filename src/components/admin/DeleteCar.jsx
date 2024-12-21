import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function DeleteCar() {
  // destracuring of data
  const [data, setData] = useState([]);
  const [flash, setFlash] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect() for delet data
  useEffect(() => {
    // call api to delete data axios.delete(``)
    axios.delete(`http://localhost:3000/addcars/${id}`).then(() => {
      setFlash(true);
    });
    navigate("/admin-login/manage-car");
  }, []);

  return <div></div>;
}
