import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteContact() {
  // destrucured data
  const [data, setData] = useState("");
  const [flash, setFlash] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  //
  useEffect(() => {
    axios.delete(`http://localhost:3000/contact-us/${id}`).then(() => {
      setFlash(true);
    });
    navigate(`/admin-login/manage-contacts`);
  });
  return <div></div>;
}
