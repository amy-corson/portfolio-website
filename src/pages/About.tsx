import Footer from "../components/Footer";
import aboutMe from "../assets/about-me/SCR-20260202-jqne.jpeg";

const About = () => {
  return (
    <div className="about-page">
      <div className="page-container">
        <h1>about me</h1>
        <div className="img-container">
          <img src={aboutMe} />
          <p className="caption">me</p>
        </div>
        <p>
          I&apos;m a software engineer and UX designer based in Chicago. A few
          years ago, I learned to code because I wanted more of a challenge in
          my career. These days, I work at Arcadis as part of their Transit Data
          team; designing and building front end components for open-source
          transit trip planners.
        </p>
        <p>
          It feels like hyperbole to say &quot;I&apos;m very passionate about
          bridging the gap between complex data and real-world user
          experience&quot; but it&apos;s true! I feel lucky to get to work with
          a lot of chaotic and messy GTFS data and carefully prune it into a
          shape that helps users catch their bus on time.
        </p>
        <p>
          I also care deeply about making sure the internet is accessible for
          everyone, which means taking the time to build components that are
          WCAG AA accessible and finding creative solutions to accessibility
          issues. Web accessibility is not just about running automated
          accessibility tests! Sometimes it&apos;s about embarrassing yourself
          in a coffee shop by booting up Voiceover, only to realize your
          headphones aren&apos;t plugged in and your volume is on high.
        </p>
        <p>
          Outside of work I do a lot of comedy writing and performance. I
          perform improv with my friends, sketch with my sketch comedy duo
          Mr.Man, and storytelling by myself. Chicago has an incredible indie
          comedy scene so feel free to ask me for show recommendations, I have
          strong opinions and I&apos;m not afraid to make enemies!
        </p>
        <p>
          More than anything, I love Chicago. I think it&apos;s the most perfect
          city in the world. I love the buses and the trains. I love the lake. I
          love the people. Long term, I would love to use my skillset to give
          back to a city that has given so much to me.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
