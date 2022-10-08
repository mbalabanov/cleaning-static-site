export default function ServicesOverview({ contentItem }) {
  console.log(contentItem);
  return (
    <div className="col">
      <div className="card shadow-sm">
        <a href={`/services/${contentItem.slug}`}>
          <img
            src={contentItem.frontmatter.image}
            alt={contentItem.title}
            className="img-fluid rounded-top"
          />
        </a>
        <div className="card-body">
          <h3 className="cart-text">{contentItem.frontmatter.title}</h3>
          <p className="card-text">{contentItem.frontmatter.summary}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a className="btn btn-sm btn-primary" href={`/services/${contentItem.slug}`}>
                Find out more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
