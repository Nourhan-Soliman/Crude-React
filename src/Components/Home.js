import React, { useState, useEffect } from 'react';
import img1 from '../Assets/s1.jpg';
import img2 from '../Assets/s2.jpg';
import img3 from '../Assets/s3.jpg';
import { Link } from 'react-router-dom';
function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

   
    
    const images = [img1, img2, img3];
    

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 1000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    return (
        <>
            <div className="">
                <div className="home-screen">
                    <div>
                        <h1>Your Boutique</h1>
                        <p>
                            At Fashion Essence, we believe that every woman deserves to feel beautiful,
                            confident, and unique. Our store offers a carefully curated collection of high-quality,
                            trendy, and elegant clothing.
                        </p>
                        <button className="pro_button">
                            <Link to="/product">PRODUCTS</Link>
                        </button>
                    </div>

                    <div className="slider">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                className={`slide ${index === activeSlide ? "active" : ""}`}
                                src={image}
                                alt={``}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
