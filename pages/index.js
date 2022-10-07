import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <h1>Index Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ducimus commodi corporis id facilis ad, iure ipsa repellat fugit itaque illo animi. Obcaecati quos eius impedit error qui quibusdam quis.
      </p>
      <Link href="/content">
      <a className="btn btn-outline-primary">&raquo; Content Page</a>
      </Link>
    </div>
  )
}
