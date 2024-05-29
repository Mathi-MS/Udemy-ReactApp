import recone from '../assests/rec (1).jpg'
import rectwo from '../assests/rec (2).jpg'
import recthree from '../assests/rec (3).jpg'
import recfour from '../assests/rec (4).jpg'

function Recommended() {
    return(
        <>
        <div className="recommended">
            <h2 className="recommended__title">Recommended for you</h2>
            <p className="recommended__para">Pick the best fit</p>
            <div className="container">
                <div className="course-card">
                    <img className="recommended__img" src={recone} alt="image" loading="lazy"/>
                    <h3 className="recommended__course">2023 Python Data Visualisation Masterclass</h3>
                    <p className="recommended__author">Col steele</p>
                    <p className="recommended__rating">4.9⭐⭐⭐⭐</p>
                    <p className="recommended__price">₹399 <del>1499</del></p>                               
                </div>
                <div className="course-card">
                    <img className="recommended__img" src={rectwo} alt="image" loading="lazy"/>
                    <h3 className="recommended__course">2023 Master UI/UX designing with Photoshop</h3>
                    <p className="recommended__author">Steve Harvey</p>
                    <p className="recommended__rating">2.9⭐⭐</p>
                    <p className="recommended__price">₹649 <del>2999</del></p>                               
                </div>
                <div className="course-card">
                    <img className="recommended__img" src={recthree} alt="image" loading="lazy"/>
                    <h3 className="recommended__course">Web Developement Bootcamp 2024</h3>
                    <p className="recommended__author">John deere</p>
                    <p className="recommended__rating">4.3⭐⭐⭐⭐</p>
                    <p className="recommended__price">₹999 <del>5999</del></p>                               
                </div>
                <div className="course-card">
                    <img className="recommended__img" src={recfour} alt="image" loading="lazy"/>
                    <h3 className="recommended__course">Basic to Advance Programming In Java</h3>
                    <p className="recommended__author">Adam Smith</p>
                    <p className="recommended__rating">3.9⭐⭐⭐</p>
                    <p className="recommended__price">₹759 <del>3499</del></p>                               
                </div>
            </div>
        </div>
        </>
    )
}

export default Recommended