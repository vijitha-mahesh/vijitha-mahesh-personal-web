import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 120,
      backDelay: 1600,
      backSpeed: 50,
      strings: ["Developer", "Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
        <video
        className="videoBG"
          autoPlay="autoplay"
          loop="loop"
          muted>
          {/* TODO make it accept multiple media types */}
          <source src="assets/background_video.mp4" type="video/mp4" />
      </video>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="social">
            <a
              className="links"
              href="https://www.linkedin.com/in/vijitha-mahesh/"
              target="blank"
            >
              <img src="assets/linkedin.png" alt="" />
            </a>
            <a
              className="links"
              href="https://www.hackerrank.com/vijitha_mahesh"
              target="blank"
            >
              <img src="assets/hackerrank.png" alt="" />
            </a>
            <a
              className="links"
              href="https://mahesh-madurasinghe.medium.com/"
              target="blank"
            >
              <img src="assets/medium.png" alt="" />
            </a>
            <a
              className="links"
              href="https://stackoverflow.com/users/12093497/vijitha-mahesh"
              target="blank"
            >
              <img src="assets/stack_overflow.png" alt="" />
            </a>
            <a
              className="links"
              href="https://www.facebook.com/vijitha.madurasingha/"
              target="blank"
            >
              <img src="assets/fb.png" alt="" />
            </a>
          </div>
          <h2>Hi There, I'm</h2>
          <h1>Vijitha Mahesh</h1>
          <h3>
            Professional <span ref={textRef} />
          </h3>
        </div>
        <a className="bottomArrow" href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
