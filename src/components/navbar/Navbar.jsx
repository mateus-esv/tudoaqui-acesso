
const Navbar = (props) => {
    return (
        <nav class="navbar navbar-light justify-content-between" style={{backgroundColor:props.backgroundColor}}>
            <a class="navbar-brand">
                <img src={props.image} width={props.imageWidth} height={props.imageHeight}/>
            </a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder={props.placeholder} aria-label="Search"/>
                <button class="btn btn-success" type="submit">{props.titleButton}</button>
            </form>
        </nav>
    )
}

export default Navbar;