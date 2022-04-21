import React from "react";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <div>
            <h6>
                Profile
            </h6>
            {user!==null?
            <div>
                Name: {user.fullName}
                symbolLists: 
                <ul>
                    {user?.symbolLists.map((item, i) => {
                        return (<li key={i}>{item}</li>)
                    })}
                </ul>
            </div>:''
            }
            
        </div>
    )
}

export default Profile