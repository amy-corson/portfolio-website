import { CASE_STUDY } from "../util/constants";

// import dtSelectorGif from "../assets/case-study/dt-selector.gif";
import modeSelectorGif from "../assets/case-study/mode-hover.gif";
import dartSettings from "../assets/case-study/research/dart-settings.png";
import googleSettings from "../assets/case-study/research/google-settings.png";
import metroTransitSettings from "../assets/case-study/research/metro-transit-settings.png";
import STdesigns from "../assets/case-study/STdesigns.png";
import figmaDesigns from "../assets/case-study/figmaDesigns.png";

const quotes = [
  "Not intuitive how to interact with the mode selector",
  "As compared to [apps like] Google, this app is not easy to use",
  "Don't like the interface. clunky and layout looks very primitive and not attractive.",
  "Confusion on whether a mode is selected or not",
];

const researchImages = [
  { img: dartSettings, caption: "DART Transit Planner" },
  { img: metroTransitSettings, caption: "METRO Transit Planner" },
  { img: googleSettings, caption: "Google Maps" },
];

const quoteBlock = (quote: string) => {
  return (
    <div className="quote-block">
      <p>{`"${quote}"`}</p>
    </div>
  );
};

const AdvancedSettingsCase = () => {
  const { myRole, team, duration } = CASE_STUDY.details;
  return (
    <div className="page-container case-study">
      <h1>
        <span className="subtitle">Case Study:</span>
        <span>advanced trip form</span>
      </h1>
      <p className="overview">
        In 2024 we realized users were struggling to plan trips on our transit
        trip planner. With external designers and stakeholders, as well as my
        colleagues on the Transit Data Team, we refreshed the outdated trip form
        to be more in line with industry standards.
      </p>
      <div className="img-hero">
        <img className="desktop-img" src={CASE_STUDY.desktopImage} />
        <img className="mobile-img" src={CASE_STUDY.mobileImage} />
      </div>
      <div className="details">
        <div className="my-role">
          <span className="header">my role</span>

          <ul>
            {myRole.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="border" />
        <div>
          <span className="header">the team</span>
          <ul>
            {team.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="border" />
        <div>
          <span className="header">duration</span>
          <div>{duration}</div>
        </div>
      </div>
      <section>
        <h2>background and problem</h2>
        <h3>What is OTP?</h3>
        <p>
          OpenTripPlanner is a multimodal open source trip planner that uses
          agency data to help users plan their public transit trips. Put simply,
          we do what Google maps and Transit App do, but we’re working closely
          with your local transit agency to do it, meaning the trips we suggest
          are more likely to be accurate.
        </p>
        <h3>So what’s the trip form?</h3>
        <p>
          If the goal of OTP is to plan trips, the trip form is the most
          important component in the application. It’s how we find out where the
          user is going, and how they want to get there.
        </p>
        <h3>So what’s the issue?</h3>
        <div className="problem-statement">
          <p className="statement-block">
            In early 2024, our client Sound Transit conducted a usability study
            for our Digital Assistant Project, and found that users felt that
            trip settings such as walk reluctance and accessible routing were
            difficult to discover. Additionally, the hover effect wasn’t easy to
            use on mobile.
            <p>
              <strong>
                Our application was re-inventing the wheel rather than using
                common industry standards in UX. This was a problem because
                users were struggling to use the application’s main trip
                planning functionality.
              </strong>
            </p>
          </p>
          <div className="design-gif">
            <img
              src={modeSelectorGif}
              alt="Animation of previous trip form design, with hoverable subsettings"
              title="Animation of previous trip form design, with hoverable subsettings"
            />
            <p className="caption">Mode selector with on-hover subsettings</p>
          </div>
        </div>
      </section>
      <section>
        <h2>my role</h2>
        <p>
          I took the research and designs provided by Sound Transit’s UX team
          and the development considerations provided by my team, and combined
          those two perspectives into one set of designs that would suit the
          requests made by Sound Transit while also improving the trip form
          across all of our client instances of OTP. Once those designs were
          approved by all the stakeholders, I led two other engineers in
          implementing the designs and wrote most of the code myself.
        </p>
      </section>
      <section>
        <h2>Methodology</h2>
        <div className="quotes">
          <div className="quote-container">
            {quotes.map((q) => quoteBlock(q))}
          </div>
          <p className="caption">Selected quotes from the usability study</p>
        </div>
        <p></p>
        <h3>KPIs</h3>
        <p>
          Without a dedicated UX researcher on the Transit Data Team, we rely on
          our clients to pass along feedback from their end users. In this case,
          we figured success could be determined by a marked improvement in the
          users who reported they were able to successfully plan trips on our
          application.
        </p>
        <h3>The research</h3>

        <p>
          We spent a lot of time looking at other transit trip planners. We
          started to notice a common theme: most applications had some sort of
          “advanced settings” option that hid the more granular trip details
          from the main form.
        </p>
        <div className="research-block">
          {researchImages.map((x) => (
            <div key={x.caption}>
              <img src={x.img} />
              <p className="caption">{x.caption}</p>
            </div>
          ))}
        </div>
        <p>
          Our application deviated from the norm. It was becoming clear that as
          a team without a dedicated UX researcher, we lacked the resources to
          break the mold.{" "}
          <strong>
            If we didn’t have the ability to thoroughly test a UX approach that
            users were unfamiliar with, then we owed it to our users to match
            what they had come to expect from other applications.
          </strong>
        </p>
        <p>
          This meant:
          <ul>
            <li>
              Adding an “Advanced Settings” page to the trip form instead of
              using an on-hover approach to discovering trip settings.
            </li>
            <li>
              Grouping general trip settings (walk reluctance, accessibility
              routing, walk speed) in a more discoverable place, rather than
              expecting users to associate those with a specific mode.
            </li>
          </ul>
        </p>
        <h3>the designs</h3>
        <img src={STdesigns} className="fullscreen-design" />
        <p className="caption">Intial designs proposed by ST UX team</p>
        <p>
          The first round of designs for the advanced settings panel came from
          the UX team at sound transit, and many aspects of this design were
          incorporated into the final product. However the OTP team felt there
          were a few opportunities for improvement:
        </p>
        <ol>
          <li>
            The ST designs used several custom colors and design conventions.
            While we can make design customizations, OTP is an open source
            library and it made sense to have a set of default designs.
          </li>
          <li>
            The ST designs made reference to settings that weren&apos;t quite
            technically correct.
          </li>
          <li>
            It felt important to be able to see and select modes from the
            advanced settings page. After all, it would be a waste of time to
            meticulously select which transit subsettings you wanted on your
            trip, only to discover later you didn’t have transit selected as a
            mode.
          </li>
          <li>
            Since the required fields for the trip form were primarily located
            on the main page, we felt it made more sense for the action button
            in this advanced settings form to return users to the main trip
            form, rather than planning the trip.
          </li>
        </ol>
        <p>
          With this feedback in mind, I came up with two designs for the
          advanced settings page: one was a default out-of-the-box approach to
          trip settings that anyone using OpenTripPlanner, including our other
          clients, would receive by default. The second was a stylized version
          of the advanced settings page using custom CSS overrides that more
          closely matched the Sound Transit designs.
        </p>
        <a href="">
          <img src={figmaDesigns} className="fullscreen-design" />
          <p className="caption">Click to see figma designs</p>
        </a>
      </section>
    </div>
  );
};

export default AdvancedSettingsCase;
