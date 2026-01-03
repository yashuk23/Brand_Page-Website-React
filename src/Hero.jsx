import "./Hero.css";
import shoeImage from "./shoe_image.png"; 
import cartIcon from "./cartshop.png";

export default function Hero() {
    return (
        <div className='Hero'>
            <div className="Hero-content">
                <h1> Your Feet Deserves <br /> The Best </h1>
                <a href="https://www.nike.com/in/w/mens-shoes-nik1zy7ok"> 
                    <img src={cartIcon} alt="cart"/> 
                </a>
            </div>
            <div className="Hero-img">
                <img src={shoeImage} alt="shoe" />
            </div>
        </div>
    );
}