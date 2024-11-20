"use client"; // Marca este componente como un componente del cliente
import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function BootstrapInitializer() {
  useEffect(() => {
    // Esta es una forma de asegurarte de que el script de Bootstrap se cargue solo en el navegador
  }, []);

  return null; // Este componente solo ejecuta el script y no tiene contenido visual
}
