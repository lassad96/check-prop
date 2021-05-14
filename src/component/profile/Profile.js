import React from 'react'
import PropTypes from "prop-types";


const Profile = ({ fullName, bio, profession, hundleName, children }) => {
    return (
        <div>
            <div style={{ color: "red", width: "100%" }}>
                {fullName}
            </div>
            <br />
            <div className="Bio">
                {bio}
            </div>
            <br />
            <div className="profession">
                {profession}
            </div>
            <br />
            {children}
            <button onClick={() => hundleName(fullName)}  >Check Me</button>          <br />
        </div>
    )
}

  
 
Profile.defaultProps={
    fullName:"lassaad Tajouri",
}
Profile.propTypes={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    children:PropTypes.element.isRequired,
    hundleName: PropTypes.func, 
  
}
    
;

export default Profile;