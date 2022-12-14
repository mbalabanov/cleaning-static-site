export default function ImageHeader() {
  return (
    <footer className="py-5 bg-success text-white">
      <div className="container">
        <p className="m-0 text-center">
          <img
            src="/logos/profireiniger-full-logo-white.svg"
            alt="Die Profireiniger - Estera GmbH"
            width="200px"
          />
        </p>
        <p className="m-0 text-center">&copy; Profireiniger - Estera GmbH</p>
        <p className="m-0 text-center">Designed by <a href="https://marincomics.com" className="link-light" target="_blank">MarinComics</a></p>
      </div>
    </footer>
  );
}
