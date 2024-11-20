"use client";

import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import axios from "axios";

export default function Page() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

    if (!emailRegex.test(formData.email)) {
      setError("El correo no es válido.");
      return false;
    }

    if (!passwordRegex.test(formData.password)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres y una letra mayúscula."
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!validateForm()) return;

    try {
      const response = await axios.post("http://localhost:5000/api/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMessage("Registro exitoso");
      
    } catch (error) {
      const errorMessage =
        error.response?.data[0] || error.response?.data?.message || "Error al registrar el usuario";
      setError(errorMessage);
    }
  };

  return (
    <main
      className="contPrincipal container d-flex justify-content-center align-items-center"
      style={{ margin: "0 auto", maxWidth: "800px", height: "90vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h1 className="mb-4">Registrarse</h1>
        <form className="p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Ingresa tu usuario"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Ingresa tu correo"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </form>
        {error && <div className="mt-3 alert alert-danger">{error}</div>}
        {message && <div className="mt-3 alert alert-success">{message}</div>}
      </div>
    </main>
  );
}
