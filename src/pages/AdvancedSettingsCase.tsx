import { CASE_STUDY } from "../util/constants";

// import dtSelectorGif from "../assets/case-study/dt-selector.gif";
import modeSelectorGif from "../assets/case-study/mode-hover.gif";
import dtSelectorGif from "../assets/case-study/dt-selector.gif";
import dartSettings from "../assets/case-study/research/dart-settings.png";
import googleSettings from "../assets/case-study/research/google-settings.png";
import metroTransitSettings from "../assets/case-study/research/metro-transit-settings.png";
import STdesigns from "../assets/case-study/STdesigns.png";
import figmaDesigns from "../assets/case-study/figmaDesigns.png";
import ExternalLinkWithIcon from "../util/ExternalLinkWithIcon";

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

const notableLinks: Array<{ name: string; url: string }> = [
  {
    name: "Figma designs",
    url: "https://www.figma.com/design/YcpqCA9isJphQWarS9FEVv/Trip-Plan?node-id=0-229&t=SiqFd7D4A0I6zjgG-1",
  },
  {
    name: "Pull Request: Mode Subsettings Panel in Component Library",
    url: "https://github.com/opentripplanner/otp-ui/pull/749",
  },
  {
    name: "Pull Request: Advanced Settings Panel",
    url: "https://github.com/opentripplanner/otp-react-redux/pull/1249",
  },
  { name: "Live Deployment", url: "https://soundrideguide.com/#/" },
];

const AdvancedSettingsCase = () => {
  const { myRole, team, duration } = CASE_STUDY.details;
  return (
    <div className="case-study">
      <div className="page-container">
        <h1>
          <span className="subtitle">Case Study:</span>
          <span>advanced trip form</span>
        </h1>
        <p className="overview">
          In 2024 we realized users were struggling to plan trips on our transit
          trip planner. With external designers and stakeholders, as well as my
          colleagues on the Transit Data Team, we refreshed the outdated trip
          form to be more in line with industry standards.
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
          <h2>tl;dr</h2>
          <p>
            Our legacy trip-planning app wasn&apos;t working for users. With the
            help of our client&apos;s design team, we redesigned the main user
            flow. The result led to a{" "}
            <strong>ten point jump in System Usability Scale Score.</strong>
          </p>
          <h3>See the work:</h3>
          <ul>
            {notableLinks.map((link) => (
              <li key={link.name}>
                <ExternalLinkWithIcon
                  url={link.url}
                  string={link.name}
                  classNames="icon-on-hover"
                />
              </li>
            ))}
          </ul>

          <h2>background and problem</h2>
          <h3>What is OTP?</h3>
          <p>
            OpenTripPlanner is a multimodal open source trip planner that uses
            agency data to help users plan their public transit trips. Put
            simply, we do what Google maps and Transit App do, but we’re working
            closely with your local transit agency to do it, meaning the trips
            we suggest are more likely to be accurate.
          </p>
          <h3>So What’s the Trip Form?</h3>
          <p>
            If the goal of OTP is to plan trips, the trip form is the most
            important component in the application. It’s how we find out where
            the user is going, and how they want to get there.
          </p>
          <h3>So What’s the Issue?</h3>
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
          <div className="design-gifs">
            <div>
              <img
              src={modeSelectorGif}
              alt="Animation of previous trip form design, with hoverable subsettings"
              title="Animation of previous trip form design, with hoverable subsettings"
            />
            <p className="caption">Mode selector with on-hover subsettings</p>
            </div>
            <div>
              <img
              src={dtSelectorGif}
              alt="Animation of previous date time selector, with hoverable subsettings"
              title="Animation of previous date time selector, with hoverable subsettings"
            />
            <p className="caption">Date/Time selector with on-hover subsettings</p>
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
          <h2>methodology</h2>
          <div className="quotes">
            <div className="quote-container">
              {quotes.map((q) => quoteBlock(q))}
            </div>
            <p className="caption">Selected quotes from the usability study</p>
          </div>
          <p></p>
          <h3>KPIs</h3>
          <p>
            Without a dedicated UX researcher on the Transit Data Team, we rely
            on our clients to pass along feedback from their end users. In this
            case, we figured success could be determined by a marked improvement
            in the users who reported they were able to successfully plan trips
            on our application.
          </p>
          <h3>The Research</h3>
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
            Our application deviated from the norm. It was becoming clear that
            as a team without a dedicated UX researcher, we lacked the resources
            to break the mold.
            <strong>
              If we didn’t have the ability to thoroughly test a UX approach
              that users were unfamiliar with, then we owed it to our users to
              match what they had come to expect from other applications.
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
          <h3> The Designs</h3>
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
          <a
            href="https://www.figma.com/design/YcpqCA9isJphQWarS9FEVv/Trip-Plan?node-id=0-229&t=SiqFd7D4A0I6zjgG-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={figmaDesigns} className="fullscreen-design" />
            <ExternalLinkWithIcon
              url="https://www.figma.com/design/YcpqCA9isJphQWarS9FEVv/Trip-Plan?node-id=0-229&t=SiqFd7D4A0I6zjgG-1"
              string="Click to see figma designs"
              classNames="caption"
            />
          </a>
          <h3>Development</h3>
          At this time, there were five developers on the team. Two of them
          helped write code for this project (although the majority of the
          commits and code were mine). The other two helped with PR review.
          Overall, this effort was approved by everyone on the dev team.
          <p>
            Here’s where I created the advanced mode settings panel inside our
            custom component library:{" "}
            <ExternalLinkWithIcon
              url="https://github.com/opentripplanner/otp-ui/pull/749"
              string="view on github"
            />
          </p>
          <p>
            Here’s where I imported that panel into our application, wrapped in
            a brand new Advanced Settings panel for the trip form:{" "}
            <ExternalLinkWithIcon
              url="https://github.com/opentripplanner/otp-react-redux/pull/1249"
              string="view on github"
            />
          </p>
          <h3>Challenges</h3>
          <p>
            <strong>Open source:</strong> The open source nature of the OTP
            project proved a unique challenge. We had to design something that
            not only worked for Sound Transit (the client) but also all of our
            clients.
          </p>
          <p>
            <strong>Team buy in:</strong> To be blunt, some of the challenges
            for this project were internal. Since our team does not have a
            dedicated UI/UX team, the developers on my team are very involved in
            designing UI components. To many of the people who worked intently
            on the previous version of the trip form (and who saw it as a marked
            improvment from previous iterations) it seemed like a waste of time
            to redesign the trip form. We had many long internal conversations
            about the benefits and drawbacks of the redesign, and thankfully by
            the end of the process everyone felt good about the changes.
          </p>
          <p>
            <strong>Incorporating feedback:</strong> At this time, our team had
            no agreed upon design process, and since the entire team was
            developers often design feedback would happen during the PR review
            process. Some people felt we wasted a lot of time in this project
            reviewing design details after code was already written, when we
            could have solidified the designs before we touched the code. Others
            felt the design process had been unclear and their opinions were
            being overlooked. Ultimately we went back to the designs and agreed
            on a set of new changes that everyone was happy with before resuming
            work on the code. These conversaions, while frustrating in the
            moment, led to a clearer agreed-upon design process for future
            projects.
          </p>
        </section>
        <section>
          <h2>conclusions</h2>
          <h3>Results</h3>
          <p>
            The June 2025 Sound Transit open beta found a{" "}
            <strong>ten point jump in System Usability Scale Score</strong> from
            the closed beta in 12/2023, with over 40% of respondents saying they
            were “very satisfied” with the trip planning and a total of 75% of
            respondents reporting overall satisfaction with trip planning. We
            also saw anecdotally a few of our other transit agency clients
            expressing satisfaction with the changes and passing along approval
            from their users.
          </p>
          <h3>Takeaways</h3>
          <p>
            It’s hard to update a legacy application. It means overhauling old
            processes, consulting with users, and admitting past mistakes.
            However the results of committing to these steps speak for
            themselves. I learned a lot about the effectiveness of having a
            design methodology, and that led us to continuing to apply new
            designs to other parts of the UI. At the conclusion of this project
            I was proud to work on a team that cared deeply enough to argue and
            challenge one another’s perspectives. I think it led to a stronger
            product for our end users, and a stronger foundation for our team.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AdvancedSettingsCase;
