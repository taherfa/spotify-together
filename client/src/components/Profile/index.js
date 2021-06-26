import Avatar from "../../images/avatar.png"

import "./index.css"

const Profile = () => {

  return (
    <div className="profile">
      <div className="content">
        <div className="title">
          <img src={Avatar} alt="avatar placeholder"></img>
          <p>----- -----</p>
        </div>
        <div className="info">
          <div className="artists">
            <h3>Top Artists</h3>
            <div className="top-item">
              <img src={Avatar} alt="artist placeholder"></img>
              <p>----- -----</p>
            </div>
            <div className="top-item">
              <img src={Avatar} alt="artist placeholder"></img>
              <p>----- -----</p>
            </div>
            <div className="top-item">
              <img src={Avatar} alt="artist placeholder"></img>
              <p>----- -----</p>
            </div>
          </div>
          <div className="tracks">
            <h3>Top Tracks</h3>
            <div className="top-item">
              <img src={Avatar} alt="track placeholder"></img>
              <div>
                <p>----- -----</p>
                <p>----- ----- -----</p>
              </div>
            </div>
            <div className="top-item">
              <img src={Avatar} alt="track placeholder"></img>
              <div>
                <p>----- -----</p>
                <p>----- ----- -----</p>
              </div>
            </div>
            <div className="top-item">
              <img src={Avatar} alt="track placeholder"></img>
              <div>
                <p>----- -----</p>
                <p>----- ----- -----</p>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <button className="btn">Log In</button>
        </div>
      </div>
    </div>
  )
}

export default Profile