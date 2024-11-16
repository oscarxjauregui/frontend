import "bootstrap/dist/css/bootstrap.css";

export default function Page() {
  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
  };

  return (
    <main
      className="contPrincipal container d-flex justify-content-center align-items-center"
      style={{ margin: "0 auto", maxWidth: "800px", height: "90vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h1 className="mb-4">Iniciar Sesion</h1>
        <form className="p-3">
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="correo"
              name="email"
              placeholder="Ingresa tu correo"
              required
              onChange={handleChange}
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
              name="password"
              placeholder="Ingresa tu contraseña"
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Iniciar Sesion
          </button>
        </form>
      </div>
    </main>
  );
}
