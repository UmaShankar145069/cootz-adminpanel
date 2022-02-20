import React, { useState } from "react";
import "./Profile.css";
import profile from "../../assets/images/profile-img.png";
import pencil from "../../assets/images/pencil.png";

const Profile = () => {
  const [profileImg, setProfileImg] = useState(profile);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      {/* < Main section  */}
      <div id="main">
        <form id="profile-form" className="profile-form">
          <div class="image-container">
            <div class="image">
              <img src={profileImg} alt="profile-img" />
            </div>
            <div class="pencil-icon">
              <label htmlFor="img-file">
                <img src={pencil} alt="pencil-icon" />
              </label>
              <input
                type="file"
                id="img-file"
                onChange={imageHandler}
                accept="image/*"
              />
            </div>
            <div class="name">Ritu Sharma</div>
          </div>

          <div class="detail-container">
            <div class="detail-field">
              <label htmlFor="name">Name</label>
              <br />
              <input type="text" name="name" value="" id="name" />
            </div>
            <div class="detail-field">
              <label htmlFor="phone">Phone Number</label>
              <br />
              <input type="tel" name="phone" value="" id="phone" />
            </div>
            <div class="detail-field">
              <label htmlFor="referal-id">Referal Id</label>
              <br />
              <input
                type="text"
                name="referal-id"
                value=""
                id="referal-id"
                disabled
              />
            </div>
            <div class="detail-field">
              <label htmlFor="email">Email ID</label>
              <br />
              <input type="email" name="email" value="" id="email" />
            </div>
          </div>
          <input type="submit" value="Edit" id="edit" />
        </form>
      </div>
    </>
  );
};

export default Profile;
