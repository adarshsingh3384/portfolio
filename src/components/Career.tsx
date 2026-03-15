import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech. CSE – 7.1 CGPA</h4>
                <h5>ABES Institute of Technology</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Pursuing computer science engineering. Core coursework: Operating Systems,
              Database Management Systems, Object Oriented Programming, and Data
              Structures & Algorithms. Location: Ghaziabad, UP.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>Divine Public School</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed intermediate education from Gorakhpur.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Achievements & Certifications</h4>
                <h5>Hackathons & Problem Solving</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Participated in Smart India Hackathon 2025 and various others. 
              Certified in Data Structures by CodeChef and Database Management System Part - 2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
