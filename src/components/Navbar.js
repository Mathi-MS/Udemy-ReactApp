function Navbar() {
    return(
        <>
        <div className="navbar">
            <div className="navbar__row1">
                <h2 className="navbar__row1__title">Udemy</h2>
            </div>
            <div className="navbar__row2">
                <i className="fa-solid fa-magnifying-glass navbar__row2__icon"></i>
                <input type="text" className="navbar__row2__input" placeholder="Search for anything here. Tech,Business,Art ..."/>
            </div>
            <div className="navbar__row3">
                <p className="navbar__row3__courses">Courses</p>
                <div className="navbar__row__3__learning">
                    <p className="navbar__row3__learning-para">My Learning</p>
                    <div className="navbar__row__3__learning-popup">
                        <p>You did not purchase anything yet</p>
                    </div>
                </div>
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-solid fa-bell"></i>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
        </>
    )
}

export default Navbar