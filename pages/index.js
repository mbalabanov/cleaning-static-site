import Link from 'next/link'
import MenuBar from '../components/MenuBar'
import HeroCarousel from '../components/HeroCarousel'
import ServicesOverview from '../components/ServicesOverview'
import LocationMap from '../components/LocationMap'
import LegalNotice from '../components/LegalNotice'
import Footer from '../components/Footer'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Home({contentItems}) {
  return (
    <>
    <div className="container my-5 py-5">
      <MenuBar />
      <HeroCarousel />
      <h1>Index Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ducimus commodi corporis id facilis ad, iure ipsa repellat fugit itaque illo animi. Obcaecati quos eius impedit error qui quibusdam quis.
      </p>
      <Link href="/services/content">
        <a className="btn btn-outline-primary">&raquo; Content Page</a>
      </Link>
      <div className="album py-2" id="services">
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 text-center mt-5">
              <h2>Our Services</h2>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
            {contentItems.map((contentItem, index) => (
              <ServicesOverview key={index} contentItem={contentItem}/>
            ))}
          </div>
        </div>
      </div>
    </div>
    <LocationMap/>
    <LegalNotice/>
    <Footer />
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('content'))

  const tempContent = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(
      path.join('content', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    if (frontmatter.draft === false) {
      return {
        slug,
        frontmatter,
      }
    } else { return null }
  })

  const contentItems = tempContent.filter(
    contentItem => {
      return contentItem && contentItem
    }
  )

  return {
    props: {
      contentItems: contentItems
    }
  }
}
