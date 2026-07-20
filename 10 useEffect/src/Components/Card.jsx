const Card = (props) => {
    return (
        <div className="card">
            <div>
                <div className="top">
                    <span><b>Id : </b>{props.id}</span>
                </div>
                <div className="center">
                    <h3><b>Name : </b>{props.name}</h3>
                    <h2><b>Username : </b>{props.username}</h2>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3><b>Email : </b>{props.email}</h3>
                    <h3><b>Phone : </b>{props.phone}</h3>
                    <h3><b>Website : </b>{props.website}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card