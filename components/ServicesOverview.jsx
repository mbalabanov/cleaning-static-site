export default function ServicesOverview() {
  return (
    <div className="album py-2" id="services">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 text-center mt-5">
            <h2>Our Services</h2>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <a href="grundreinigung.html">
                <img
                  src="/photos/cleaning-counter.jpg"
                  alt="Grundreinigung"
                  className="img-fluid rounded-top"
                />
              </a>
              <div className="card-body">
                <h3 className="cart-text">Apartment Cleaning</h3>
                <p className="card-text">
                  We clean your AirBnB property, short-term rental or
                  Booking.com apartment. Have your apartment or house cleaned
                  regularly by our specialist staff.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a className="btn btn-sm btn-primary" href="/services/content">
                      More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
