export default function LegalNotice() {
  return (
    <div className="container my-5" id="legal-notice">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>Legal Notice</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 p-4">
          <img
            src="/logos/profireiniger-full-logo.svg"
            alt="Profireiniger Estera GmbH"
            width="180px"
          />
          <p>
            <strong>Estera GmbH - Profireiniger</strong>
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:office@profireiniger.at">office@profireiniger.at</a>
            <br />
            <strong>Office Address:</strong> Frankgasse 6/2a, 1090 Vienna
            <br />
          </p>
        </div>
        <div className="col-md-8 p-4">
          <p>
            <strong>Company Name:</strong> Estera GmbH
            <br />
            <strong>Company Number:</strong> FN 578149 w<br />
            <strong>UID:</strong> ATU 78536826
            <br />
            <strong>Place of Registration:</strong> Heiligenstädter Straße
            111/3, 1190 Vienna
            <br />
            <strong>Company Type:</strong> GmbH
            <br />
            <strong>Company Register Court:</strong> Handelsgericht Wien
            <br />
            <strong>Managing Director:</strong> Estera-Sinziana Gordea
            <br />
            <strong>Trade Regulations:</strong>{" "}
            <a href="http://www.ris.bka.gv.at">www.ris.bka.gv.at</a>
            <br />
            <strong>Phone: </strong>+43 676 672 74 72
            <br />
            <strong>Terms and Condigions:</strong>{" "}
            <a href="agb.html" target="_blank">
              profireiniger.at/agb.html
            </a>
            <br />
            <strong>Images:</strong>&nbsp;
            <a href="https://unsplash.com" target="_blank">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
