
const Footer = () => {

    return (
        <div className="footer-block">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>scroll to top ^</button>
        </div>
    )
}

export default Footer