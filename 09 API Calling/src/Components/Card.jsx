const Card = (props) => {
    return (
        <div className="card">
            <div>
                <div className="top">
                    <span>{props.id}</span>
                </div>
                <div className="center">
                    <h3>{props.name}</h3>
                    <h2>{props.username}</h2>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{props.email}</h3>
                    <h3>{props.phone}</h3>
                    <h3>{props.website}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card