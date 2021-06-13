import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ariella Garcia",
      title: "Technical Solutions Specialist at IBM",
      img:
        "assets/ariella.jpg",
      icon: "assets/linkedin.png",
      link:"https://www.linkedin.com/in/ariella-garcia/",
      desc:
        "I am so thankful for having the opportunity to work with and manage Vijitha these past several months on an application for my company. His precision and passion became one of the pivotal driving forces of the team and our success. Having such a diverse set of skills Vijitha was able to adapt and develop many different aspects of the application effortlessly. Even when things got difficult his positivity and persistence carried us through.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials and recommendations</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <a href={d.link}>
              <img className="right" src={d.icon} alt="" />
              </a>
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
