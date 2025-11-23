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

                    {/* FORM DESKTOP */}
                    <form className="d-none d-md-flex form-inline">
                        <input className="form-control me-2" type="search" placeholder={placeholder} />
                        <button style={{backgroundColor:"#ff6b21", outlineColor:"orange", border:"none"}} className="btn btn-success">{titleButton}</button>
                    </form> 

                </div>
            </nav>

 
        </>
    );
};

export default Navbar;
