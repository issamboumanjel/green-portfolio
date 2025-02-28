import './About.css';

const About = () => {
  return (
    <div className="container1" >
      <div className="about">
        <h2>About Me</h2>
        <p>
          <span>Hello! I am Isame Boumanjel, a Web Developer and Software Engineer.</span> <br />
          I am passionate about technology and always looking for new ways to learn and grow. 
          I enjoy collaborating with others to solve problems and am confident in my skills to succeed in this field. 
          <a href="#more" className="learn-more">Learn More</a>
        </p>
      </div>
      <div className="basic-info">
        <h2>Basic Information</h2>
        <ul>
          <li><span>Age:</span>25</li>
          <li><span>Email:</span>isameboumanjel@gmail.com</li>
          <li><span>Phone:</span>+212640298482</li>
          <li><span>Address:</span>Agadir, Lkliaa Ait Melloul</li>
          <li><span>Languages:</span>Arabic | French | English</li>
        </ul>
      </div>
    </div>
  );
};

export default About;