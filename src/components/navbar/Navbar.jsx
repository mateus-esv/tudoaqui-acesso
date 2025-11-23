import "./Navbar.css";

const Navbar = ({ image, imageWidth, imageHeight, placeholder, titleButton, backgroundColor }) => {

    return (
        <>
            <nav className="navbar navbar-light px-3 nav-container" style={{ backgroundColor }}>
                <div className="d-flex align-items-center w-100 justify-content-between">

                    {/* LOGO */}
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img
                            src={image}
                            width={imageWidth}
                            height={imageHeight}
                            alt="logo"
                        />
                    </a>

                </div>
            </nav>

 
        </>
    );
};

export default Navbar;
