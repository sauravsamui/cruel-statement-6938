import React from "react";
import styles from "./order.module.css";
const LeftMenu = () => {
  let mob = 6289568573 // need to get from local storage;
  let handleLogout =()=>{

  }
  return (
    <div id={styles.leftDiv} className="container">
      <div id={styles.innerLeftDiv} className="container">
        
        <img
          id={styles.img1}
          src="https://webasset.fraazo.com/production/pomegranate.745c8fe5035674e9dfdc.png"
          alt="img"
          class="img-fluid img-thumbnail"
        />
        
     
     
      </div>
      <p style={{backgroundColor:"whitesmoke",textAlign:"center"}}><small>{`+91${mob}`}</small></p>
      <div id={styles.detailsDiv}>
      <div style={{backgroundColor:"white"}} className="container-sm"><p class="h6">My Orders</p></div>
      <div className="container-sm"><p class="h6">My Credits</p></div>
      <div className="container-sm"><p class="h6">Invite a Friend</p></div>
      <div className="container-sm"><p class="h6">Help & Support</p></div>
      <div className="container-sm" onClick={()=>handleLogout}><p class="h6">Logout</p></div>
      </div>
    </div>
  );
};

export default LeftMenu;
