export default function LocationMap() {
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <h3>How To Find Our Office</h3>
        <a
          href="https://goo.gl/maps/Z1t3bdQncd1HciNBA"
          target="_blank"
          className="btn btn-outline-primary btn-sm m-1"
        >
          Open Location on Google Maps
        </a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10634.13040816924!2d16.3563511!3d48.2156181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62ff9e1f2e37ff30!2sProfireiniger%20Estera%20GmbH!5e0!3m2!1sde!2sat!4v1663682118345!5m2!1sde!2sat"
          width="100%"
          height="500"
          allowFullScreen=""
          loading="lazy"
          id="google-maps"
          className="border-top border-bottom border-secondary"
        ></iframe>
      </div>
    </div>
  );
}
