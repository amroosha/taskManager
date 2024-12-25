function UtilityNav(props) {
    return (
        <div id="utility-container">
            <input type="button" value="Create" id="create-button" />
            <img src="https://www.svgrepo.com/show/33236/bell.svg" id="notification-bell" />
            <img src ={props.profile} id="user-profile"/>
        </div>
    )
}

export default UtilityNav