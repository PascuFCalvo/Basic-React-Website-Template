import "./About.css";


const About = () => {
  return (
    <div className = "body1">
      <header>
        <div className="title">
          <h3>The creative crew</h3>
        </div>
        <div className="content">
          <h5>who we are</h5>
          <p>We are a team of creatively diverse, driven, innovative individuals working in various locations from around the world.</p>
        </div>
      </header>

      <div className="main1">
        <div className="profile">
          <figure data-value="product owner">
            <img src="https://rvs-team-page.onrender.com/photo1.png" alt="bill mahoney" />
            <figcaption>bill mahoney</figcaption>
          </figure>
        </div>

        <div className="profile">
          <figure data-value="art director">
            <img src="https://rvs-team-page.onrender.com/photo2.png" alt="saba cabrera" />
            <figcaption>saba cabrera</figcaption>
          </figure>
        </div>

        <div className="profile">
          <figure data-value="tech lead">
            <img src="https://rvs-team-page.onrender.com/photo3.png" alt="shae le" />
            <figcaption>shae le</figcaption>
          </figure>
        </div>

        <div className="profile">
          <figure data-value="ux designer">
            <img src="https://rvs-team-page.onrender.com/photo4.png" alt="skylah lu" />
            <figcaption>skylah lu</figcaption>
          </figure>
        </div>

        <div className="profile">
          <figure data-value="developer">
            <img src="https://rvs-team-page.onrender.com/photo5.png" alt="griff richards" />
            <figcaption>griff richards</figcaption>
          </figure>
        </div>

        <div className="profile">
          <figure data-value="developer">
            <img src="https://rvs-team-page.onrender.com/photo6.png" alt="stan john" />
            <figcaption>stan john</figcaption>
          </figure>
        </div>
      </div>

      <div className = "footer1">
        <p>
          Created by - <a href="https://vetri-suriya.web.app/"><span>Vetri Suriya</span></a>
        </p>
      </div>
    </div>
  );
};

export default About;
