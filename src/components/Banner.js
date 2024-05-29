import banner from '../assests/bannerimage.png'

function Banner() {
    return(
        <>
        <div className="banner">
            <div className="banner__image">
                <img  src={banner}/>
                <div className="banner__offer">
                    <h2>Udemy Flash Sale! 24 hours to save.</h2>
                    <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn</p>
                </div>
            </div>   
        </div>
        </>
    )
}

export default Banner