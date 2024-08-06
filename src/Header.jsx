import goa from './assets/goa.png';

function Header() {
    return (
        <>
            <span className="blur"></span>
            <span className="blur"></span>
            <nav>
                <div className="nav-logo">
                    <a href="#"><img src={goa} alt="Logo"/></a>
                </div>
                <ul className="nav-links">
                    <li className="link"><a href="#">მთავარი</a></li>
                    <li id="link2" className="link"><a href="#cost">ფასები</a></li>
                    <li id="link3" className="link"><a href="#abt">ჩვენს შესახებ</a></li>
                </ul>
            </nav>
            <header className="container">
                <div className="content">
                    <h1>Hi, I'm Giorgi, Web Developer</h1>
                    <button className="btn"><a href="https://www.facebook.com/nika11keshelava">Get Started</a></button>
                </div>
                <div className="image">
                    <img src={goa} alt="Profile"/>
                </div>
            </header>
        </>
    );
}

export default Header;
