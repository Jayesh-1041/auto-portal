import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function DeleteCarCategory() {
  const [data, setData] = useState("");
  const [flash, setFlash] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.delete(`http://localhost:3000/addcarcategores/${id}`).then(() => {
      setFlash(true);
    });

    navigate("/admin-login/managecar-category");
  }, [data]);
  return <div></div>;
}
