import Link from 'next/link'

function Content() {
    return (
        <main className="container">
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