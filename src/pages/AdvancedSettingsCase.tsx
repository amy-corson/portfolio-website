import { CASE_STUDY } from "../util/constants";

const AdvancedSettingsCase = () => {
  const { myRole, team, duration } = CASE_STUDY.details;
  return (
    <div className="page-container case-study">
      <h1>
        <span className="subtitle">Case Study:</span>
        <span>advanced trip form</span>
      </h1>
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
    </div>
  );
};

export default AdvancedSettingsCase;
