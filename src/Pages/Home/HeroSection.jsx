export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
        <div className="hero--section--sontent--box">
            <div className="hero--section-content">
                <p className="section--title">Hi I'm Grace</p>
                <h1 className="hero--section--title">
                    <span className="hero--section-title--color">Full stack</span>{" "}
                    <br />
                    Developer
                </h1>
                <p className="hero--section-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />  Quod quisquam animi quibusdam officiis fugiat.
                </p>
            </div>
            <button className="btn btn-primamry">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />  
        </div>
    </section>
  );
}