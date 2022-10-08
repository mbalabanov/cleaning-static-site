import Link from 'next/link'
import MenuBar from '../../components/MenuBar'

function Content() {
    return (
        <main className="container my-5 py-5">
            <MenuBar/>
            <div className="row">
                <div className="col-6">
                    <h1>Content Page</h1>
                    <Link href="/">
                        <a className="btn btn-outline-primary">&raquo; Back to Index</a>
                    </Link>
                </div>
            </div>

        </main>
    )
}

export default Content