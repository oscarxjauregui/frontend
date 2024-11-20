"use client";

import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Para redirigir al usuario

export default function Page() {
  const router = useRouter(); // Hook para manejar navegación
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Permite que la cookie sea enviada y recibida
        }
      );

      // Mensaje de éxito
      setMessage("Inicio de sesión exitoso");

      // Redirigir al usuario a la página principal
      setTimeout(() => {
        router.push("/"); // Navegar a la ruta principal
      }, 1500);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error al iniciar sesión";
      setError(errorMessage);
    }
  };

  return (
    <main
      className="contPrincipal container d-flex justify-content-center align-items-center"
      style={{ margin: "0 auto", maxWidth: "800px", height: "90vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h1 className="mb-4">Iniciar Sesión</h1>
        <form className="p-3" onSubmit={handleSubmit}>
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
            Iniciar Sesión
          </button>
        </form>
        {error && <div className="mt-3 alert alert-danger">{error}</div>}
        {message && <div className="mt-3 alert alert-success">{message}</div>}
      </div>
    </main>
  );
}
