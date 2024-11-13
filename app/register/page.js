import "bootstrap/dist/css/bootstrap.css";

export default function Page() {
  return (
    <main
      className="contPrincipal container d-flex justify-content-center align-items-center"
      style={{ margin: "0 auto", maxWidth: "800px", height: "90vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h1 className="mb-4">Registrarse</h1>
        <form className="p-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              placeholder="Ingresa tu apellido"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="correo"
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="contrasena"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </form>
      </div>
    </main>
  );
}
