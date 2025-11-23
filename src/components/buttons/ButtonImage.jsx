

const ButtonImage = (props) => {
    return(
        <button className="btn btn-light d-flex align-items-center gap-2" style={{margin:"0px 10px"}}>
            {props.text}
            <img 
                src={props.icon} 
                alt="Ícone" 
                style={{ width: "24px", height: "24px" }} 
            />
        </button>
    )
}

export default ButtonImage;