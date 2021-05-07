import { useEffect, useState } from "react";
import PortfolioList from "../portfoliolist/PortfolioList";
import "./portfolio.scss";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    uiPortfolio,
    graphicPortfolio
} from "../../data"

export default function Portfolio() {

            const[selected, setSelected] = useState("featured");
            const[data, setData] = useState([])
            const list=[
            {
                id:"featured",
                title:"Featured",
            },
            {
                id:"web",
                title:"Web Development",
            },
            {
                id:"mobile",
                title:"Mobile Development",
            },
            {
                id:"ui",
                title:"UI/UX",
            },
            {
                id:"graphic",
                title:"Graphic Design",
            },
        ]

useEffect(() => {

    switch(selected){
        case "featured":
            setData(featuredPortfolio);
            break;
        case "web":
            setData(webPortfolio);
            break;
        case "mobile":
            setData(mobilePortfolio);
            break;
        case "ui":
            setData(uiPortfolio);
            break;    
        case "graphic":
            setData(graphicPortfolio);
            break; 
        default:
            setData(featuredPortfolio); 
    }

},[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) =>(
                  <PortfolioList 
                  title={item.title} 
                  active={selected === item.id} 
                  setSelected = {setSelected}
                  id= {item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map(d=>(
                    <div className="item">
                    <img src = {d.img} 
                    alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}
               
                
            </div>

        </div>
    )
}


