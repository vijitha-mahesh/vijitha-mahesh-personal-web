import "./works.scss"

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="" />
                                </div>
                                <h2>Title</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Reiciendis debitis autem sint animi numquam sed repellat.
                                </p>
                                <span>Project</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://wpuploads.appadvice.com/wp-content/uploads/2014/05/IMG_8035-576x1024.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" />
            <img src="assets/arrow.png" className="arrow right" alt="" />
        </div>
    )
}
