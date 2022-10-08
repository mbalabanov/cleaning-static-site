export default function SideBar() {
  return (
    <div className="col-md-4">
      <div className="alert alert-success" role="alert">
        <img
          src="/logos/profireiniger-full-logo.svg"
          alt="Profireiniger"
          className="img-fluid mx-5"
        />
        <hr />
        <h4>Services</h4>
        <ul>
          <li>
            <a href="#">Service Name</a>
          </li>
          <li>
            <a href="#">Service Name</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
