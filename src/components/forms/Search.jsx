import "./Search.css";

const Search = (props) => {
    return (
        <form id="form-search" className="d-md-flex" >
            <input className="form-control me-2" type="search" placeholder={props.placeholder} />
            <button style={{ backgroundColor: "#ff6b21", outlineColor: "orange", border: "none" }} className="btn btn-success">{props.titleButton}</button>
        </form >
    )
}

export default Search;