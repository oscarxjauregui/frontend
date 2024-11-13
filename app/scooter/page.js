import "bootstrap/dist/css/bootstrap.css";
import Image from 'next/image';
import BootstrapInitializer from '../BootstrapInitializer';

export default function Page() {
  return (
    <>
      <BootstrapInitializer />
      <main className="contPrincipal">
        <ul className="nav justify-content-end contPrincipal pt-3 pb-1 pe-2 text-bg-dark" style={{ marginTop: '64px' }}>
          <li className="nav-item">
            <div className="row text-bg-dark">
              <label htmlFor="inputPrecio" className="col col-form-label text-end">Precio máximo</label>
              <div className="col">
                <input className="form-control" id="inputPrecio" />
              </div>
            </div>
          </li>
        </ul>
        <div className="container mt-5 mb-5">
          <h2>Scooters (9)</h2>
          <div className="grid">
            <div className="row mt-3">
              <div className="col-8">
                <div className="d-flex p-2 flex-wrap justify-content-between">
                  {[...Array(9)].map((_, index) => (
                    <div className="card mb-2" style={{ width: '15rem' }} key={index}>
                      <Image src="/img/foto01.jpg" className="card-img-top p-4" alt="Patinete" width={240} height={250} />
                      <div className="card-body">
                        <h5 className="card-title">Patinete</h5>
                        <p className="card-text text-truncate">
                          La estructura del nuevo patinete Xiaomi Pro es plegable y resistente ...
                        </p>
                        <a href="#" className="btn btn-primary">Más Info</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Top</h4>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Xiaomi Mi Electric Scooter Pro <span className="badge text-bg-dark float-end">546 €</span>
                    </li>
                    <li className="list-group-item">
                      Bongo Serie S <span className="badge text-bg-dark float-end">375 €</span>
                    </li>
                    <li className="list-group-item">
                      Xiaomi Mi Electric Scooter <span className="badge text-bg-dark float-end">250 €</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
