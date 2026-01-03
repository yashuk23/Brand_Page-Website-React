import "./Hero.css";

export default function Hero()
{

    return (
        <div className='Hero'>
            <div className="Hero-content">
                <h1>
                    Your Feet Deserves <br></br>The
                    Best
                </h1>
                <a href="https://www.nike.com/in/w/mens-shoes-nik1zy7ok"> <img src="cartshop.png"  alt="cart"/> </a>
            </div>
            <div className="Hero-img">
                <img src='./shoe_image.png' alt="shoe"></img>
            </div>
        </div>
    )
}