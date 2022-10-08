import Link from 'next/link'
import MenuBar from '../../components/MenuBar'
import ImageHeader from '../../components/ImageHeader'
import SideBar from '../../components/SideBar'
import ServiceDetails from '../../components/ServiceDetails'
import Footer from '../../components/Footer'

function Content() {
    return (
        <>
            <div className="container my-5 py-5">
                <MenuBar />
                <div className="row">
                    <div className="col-6">
                        <h1>Content Page</h1>
                        <Link href="/">
                            <a className="btn btn-outline-primary">&raquo; Back to Index</a>
                        </Link>
                    </div>
                </div>
                <ImageHeader />
            </div>
            <div className="container">
                <div className="row mt-3">
                    <ServiceDetails />
                    <SideBar />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Content