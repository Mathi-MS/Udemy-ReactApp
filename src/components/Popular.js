import popone from '../assests/pop (1).jpg'
import poptwo from '../assests/pop (2).jpg'
import popthree from '../assests/pop (3).jpg'
import popfour from '../assests/pop (4).jpg'
import popfive from '../assests/pop (5).jpg'
import popsix from '../assests/pop (6).jpg'
import popseven from '../assests/pop (7).jpg'
import popeight from '../assests/pop (8).jpg'


function Popular() {
    return(
        <>
            <div className="popular">
                <h2 className="popular__title">Most Popular</h2>
                <p className="popular__para">Pick the best fit</p>
                <div className="container">
                    <div className="course-card">
                        <img className="popular__img" src={popone} alt="images" loading="lazy" />
                        <h3 className="popular__course">2023 Python Data Visualisation Masterclass</h3>
                        <p className="popular__author">Col steele</p>
                        <p className="popular__rating">4.9⭐⭐⭐⭐</p>
                        <p className="popular__price">₹399 <del>1499</del></p>                               
                    </div>
                    <div className="course-card">
                        <img className="popular__img" src={poptwo} alt="images" loading="lazy"/>
                        <h3 className="popular__course">2023 Master UI/UX designing with Photoshop</h3>
                        <p className="popular__author">Steve Harvey</p>
                        <p className="popular__rating">2.9⭐⭐</p>
                        <p className="popular__price">₹649 <del>2999</del></p>                               
                    </div>
                    <div className="course-card">
                        <img className="popular__img" src={popthree} alt="images" loading="lazy"/>
                        <h3 className="popular__course">Web Developement Bootcamp 2024</h3>
                        <p className="popular__author">John deere</p>
                        <p className="popular__rating">4.3⭐⭐⭐⭐</p>
                        <p className="popular__price">₹999 <del>5999</del></p>                               
                    </div>
                    <div className="course-card">
                        <img className="popular__img" src={popfour} alt="images" loading="lazy"/>
                        <h3 className="popular__course">Basic to Advance Programming In Java</h3>
                        <p className="popular__author">Adam Smith</p>
                        <p className="popular__rating">3.9⭐⭐⭐</p>
                        <p className="popular__price">₹759 <del>3499</del></p>                               
                    </div>
                    <div className="course-card">
                        <img className="popular__img" src={popfive} alt="images" loading="lazy"/>
                        <h3 className="popular__course">2023 Python Data Visualisation Masterclass</h3>
                        <p className="popular__author">Col steele</p>
                        <p className="popular__rating">4.9⭐⭐⭐⭐</p>
                        <p className="popular__price">₹399 <del>1499</del></p>                               
                    </div>
                    <div className="course-card">
                        <img className="popular__img" src={popeight} alt="images" loading="lazy"/>
                        <h3 className="popular__course">Basic to Advance Programming In Java</h3>
                        <p className="popular__author">Adam Smith</p>
                        <p className="popular__rating">3.9⭐⭐⭐</p>
                        <p className="popular__price">₹759 <del>3499</del></p>                               
                    </div>
                    <div className="course-card">
                        <img className="popular__img" src={popseven} alt="images" loading="lazy"/>
                        <h3 className="popular__course">Web Developement Bootcamp 2024</h3>
                        <p className="popular__author">John deere</p>
                        <p className="popular__rating">4.3⭐⭐⭐⭐</p>
                        <p className="popular__price">₹999 <del>5999</del></p>                               
                    </div>
                    <div className="course-card">
                        <img className="popular__img" src={popsix} alt="images" loading="lazy"/>
                        <h3 className="popular__course">2023 Master UI/UX designing with Photoshop</h3>
                        <p className="popular__author">Steve Harvey</p>
                        <p className="popular__rating">2.9⭐⭐</p>
                        <p className="popular__price">₹649 <del>2999</del></p>                               
                    </div>    
                </div>
            </div>

        </>
    )
}

export default Popular