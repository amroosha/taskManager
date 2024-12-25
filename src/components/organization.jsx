function Organization(props) {

    return (
        <div className="org-container">
            <img src={props.logo} id="org-logo" />
            <div className="org-info">
                <h3 id="org-name">{props.name}</h3>
                <p id="org-description">{props.description}</p>
            </div>
        </div>
    )
}

export default Organization