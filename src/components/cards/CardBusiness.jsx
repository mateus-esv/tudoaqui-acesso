
const CardBusiness = (props) => {
    return(
        <div className="card" style={{width: "15rem", margin:"20px 20px"}}>
            <img src={props.image} className="card-img-top" alt=""/>
            <div className="card-body">
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default CardBusiness;