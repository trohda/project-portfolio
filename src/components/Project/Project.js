import "./ProjectStyles.css";
const Project = ({ children, title, projectLink, projectText }) => {
  console.log(projectLink);
  return (
    <div className="singleProject">
      <div className="singleProjectHeaderBox">
        <div className="singleProjectTopStripe"></div>

        <h2>{title}</h2>
        <div className="projectScreenshots">{children}</div>
      </div>

      <div className="singleProjectInfos">
        <a href={projectLink} target="_blank" rel="noreferrer">
          {projectLink}
        </a>
        <div className="singleProjectInfosBlackCard">
          <p>
            {projectText}
            <br />
            <br />
          </p>
          <span>See more info...</span>
        </div>
      </div>

      <div className="spanWrapper">
        <div className="moreInfoLine2"></div>
        <div className="moreInfoLine1"></div>
        <span>
          Click
          <br />
          for
          <br />
          More
          <br />
          Info
        </span>
      </div>
    </div>
  );
};

export default Project;