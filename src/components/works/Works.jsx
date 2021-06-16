// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import "./works.scss";
import { green } from "@material-ui/core/colors";

export default function Works() {
    
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
        id: "1",
        title: "Backend",
        icon: "assets/mobile.png",
        progress: [
          { name: "Asp .net core", value: "50%" ,color:"#005779"},
        ],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat iusto maiores, animi, aliquam quis porro doloribus, quae aperiam illum dignissimos cumque commodi voluptate optio fugiat nulla totam! Et, quia!",
        img: "assets/Portfolio/Backend/Backend.png",
      },
    {
      id: "2",
      title: "Mobile development",
      icon: "assets/mobile.png",
      progress: [
        { name: "Xamarin Forms", value: "50%" ,color:"#005779"},
        { name: "Flutter", value: "20%" ,color:"#005779"},
      ],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat iusto maiores, animi, aliquam quis porro doloribus, quae aperiam illum dignissimos cumque commodi voluptate optio fugiat nulla totam! Et, quia!",
      img: "https://wpuploads.appadvice.com/wp-content/uploads/2014/05/IMG_8035-576x1024.jpeg",
    },
    {
      id: "3",
      title: "Web development",
      icon: "assets/globe.png",
      progress: [
        { name: "ReactJS", value: "40%",color:"#005779" },
        { name: "HTML5", value: "60%",color:"#005779" },
        { name: "CSS3", value: "60%" ,color:"#005779"},
        { name: "Bootstrap", value: "60%" ,color:"#005779"},
        { name: "Java Script", value: "50%",color:"#005779" },

      ],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat iusto maiores, animi, aliquam quis porro doloribus, quae aperiam illum dignissimos cumque commodi voluptate optio fugiat nulla totam! Et, quia!",
      img: "https://wallpapercave.com/wp/wp6784626.jpg",
    },
    {
        id: "4",
        title: "Version Controlling",
        icon: "assets/globe.png",
        progress: [
          { name: "Git", value: "80%",color:"#005779" },  
        ],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat iusto maiores, animi, aliquam quis porro doloribus, quae aperiam illum dignissimos cumque commodi voluptate optio fugiat nulla totam! Et, quia!",
        img: "assets/Portfolio/versionControll/versionControl.jpg",
      },
    {
      id: "5",
      title: "Graphic and Video",
      icon: "assets/writing.png",
      progress: [
        { name: "Premire Pro", value: "80%",color:"#005779" },
        { name: "Photoshop", value: "80%",color:"#005779" },
        { name: "Adobe XD", value: "70%",color:"#005779" },
        { name: "Blender", value: "60%",color:"#005779" },
      ],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat iusto maiores, animi, aliquam quis porro doloribus, quae aperiam illum dignissimos cumque commodi voluptate optio fugiat nulla totam! Et, quia!",
      img: "assets/Portfolio/Graphic/Graphic.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  {d.progress.map((item) => (
                      
                    <li>
                      <div className="name">{item.name}</div>
                      <div className="myProgress">
                        <div className="myBar" style={{width:item.value,color:green}}></div>
                      </div>
                    </li>
                  ))}
                  <span>Project</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
