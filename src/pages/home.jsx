import { useEffect } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    useEffect(() => {
        document.title = "Home"
    })
    return (
        <section className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#2779e2" }}>
            <div className="container text-white text-center">
                <h1 className="display-4">Welcome to YourHR</h1>
                <p className="lead">Find your ideal job role based on your qualifications and preferences</p>
                <Link to={"signup"} className="btn btn-light btn-lg mt-3">Get Started</Link>
            </div>
        </section>
    )
}

export default Home