import { useState } from "react"
import "./works.scss"

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id:"1",
            title:"Mobile development",
            icon:"assets/mobile.png",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat iusto maiores, animi, aliquam quis porro doloribus, quae aperiam illum dignissimos cumque commodi voluptate optio fugiat nulla totam! Et, quia!" ,
            img:"https://wpuploads.appadvice.com/wp-content/uploads/2014/05/IMG_8035-576x1024.jpeg"
        },
         {
            id:"2",
            title:"Web development",
            icon:"assets/globe.png",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat iusto maiores, animi, aliquam quis porro doloribus, quae aperiam illum dignissimos cumque commodi voluptate optio fugiat nulla totam! Et, quia!" ,
            img:"https://wallpapercave.com/wp/wp6784626.jpg"
        },
         {
            id:"3",
            title:"Graphic and Video",
            icon:"assets/writing.png",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat iusto maiores, animi, aliquam quis porro doloribus, quae aperiam illum dignissimos cumque commodi voluptate optio fugiat nulla totam! Et, quia!" ,
            img:"https://image.freepik.com/free-photo/wired-computer-mouse-laptop-are-isolated-yellow-background-flat-lay-template-design_245974-1398.jpg"
        }
    ]

    const handleClick=(way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0? currentSlide -1: 2):
        setCurrentSlide(currentSlide<data.length -1? currentSlide +1 : 0)
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
                {data.map(d=>(
                 <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
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
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    )
}
