import ExternalLinkWithIcon from "../util/ExternalLinkWithIcon"
import ExternalSocialLinks from "./ExternalLinks"

const Footer = () => {

    return (
        <div className="footer-block">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>scroll to top ^</button>
            <ExternalSocialLinks />
        </div>
    )
}

export default Footer