import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import BootstrapInitializer from "./BootstrapInitializer";

export default function Page() {
  return (
    <>
      <BootstrapInitializer />
      <main className="contPrincipal">
        <ul
          className="nav justify-content-end contPrincipal pt-3 pb-1 pe-2 text-bg-dark"
          style={{ marginTop: "64px" }}
        >
          <li className="nav-item">
            <div className="row text-bg-dark">
              <label
                htmlFor="inputPrecio"
                className="col col-form-label text-end"
              >
                Precio máximo
              </label>
              <div className="col">
                <input className="form-control" id="inputPrecio" />
              </div>
            </div>
          </li>
        </ul>
        <div className="container mt-5 mb-5">
          <h2>Articulos (9)</h2>
          <div className="grid">
            <div className="row mt-3">
              <div className="col-8">
                <div className="d-flex p-2 flex-wrap justify-content-between">
                  {[...Array(9)].map((_, index) => (
                    <div
                      className="card mb-2"
                      style={{ width: "15rem" }}
                      key={index}
                    >
                      <Image
                        src="/img/foto0.jpg"
                        className="card-img-top p-4"
                        alt="imagen"
                        width={240}
                        height={250}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Articulo</h5>
                        <p className="card-text text-truncate">Descripcion</p>
                        <a href="#" className="btn btn-primary">
                          Más Info
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Top</h4>
                    <h6>Xbox Series X</h6>
                    <h6>PlayStation 5</h6>
                    <h6>Xbox Series S</h6>
                  </div>
                  <ul className="list-group list-group-flush"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
