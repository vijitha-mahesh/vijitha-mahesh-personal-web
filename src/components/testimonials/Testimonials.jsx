import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://image.freepik.com/free-photo/attractive-laughing-guy-having-fun-smiling-happy_176420-18839.jpg",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eosdebitis sed doloremque minus autem aut rem sunt ullam blanditiis.Fuga.",
    },
    {
      id: 2,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://image.freepik.com/free-photo/attractive-laughing-guy-having-fun-smiling-happy_176420-18839.jpg",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eosdebitis sed doloremque minus autem aut rem sunt ullam blanditiis.Fuga.",
      featured: true,
    },
    {
      id: 3,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://image.freepik.com/free-photo/attractive-laughing-guy-having-fun-smiling-happy_176420-18839.jpg",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eosdebitis sed doloremque minus autem aut rem sunt ullam blanditiis.Fuga.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
