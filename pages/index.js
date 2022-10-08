import Image from 'next/image'
import Link from 'next/link'
import MenuBar from '../components/MenuBar'
import ServicesOverview from '../components/ServicesOverview'

export default function Home() {
  return (
    <div className="container my-5 py-5">
      <MenuBar />
      <h1>Index Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ducimus commodi corporis id facilis ad, iure ipsa repellat fugit itaque illo animi. Obcaecati quos eius impedit error qui quibusdam quis.
      </p>
      <Link href="/services/content">
        <a className="btn btn-outline-primary">&raquo; Content Page</a>
      </Link>
      <ServicesOverview />
    </div>
  )
}
