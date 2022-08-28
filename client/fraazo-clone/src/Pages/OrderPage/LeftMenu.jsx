import React from "react";
import { useDispatch} from "react-redux";
import { logout } from "../../Store/auth/auth.action";
import { removeItemLocalCart } from "../../Store/Cart/cart.actions";
import styles from "./order.module.css";

const LeftMenu = () => {
  
  var UserStoredDataFraazo = JSON.parse(localStorage.getItem('UserStoredDataFraazo')) || {};
  const dispatch = useDispatch();
  // console.log(signup.UserStoredDataFraazo.newSavedNo.mobile)
  let mob = 6289568573; // need to get from local storage;
  if(UserStoredDataFraazo.newSavedNo.mobile){
    mob = UserStoredDataFraazo.newSavedNo.mobile;
  }
  
  return (
    <div id={styles.leftDiv} className="container">
      <div id={styles.innerLeftDiv} className="container">

        <img
          id={styles.img1}
          src="https://webasset.fraazo.com/production/pomegranate.745c8fe5035674e9dfdc.png"
          alt="img"
          className="img-fluid img-thumbnail"
        />

      </div>
      <p style={{ backgroundColor: "whitesmoke", textAlign: "center" }}><small>{`+91${mob}`}</small></p>
      <div id={styles.detailsDiv}>
        <div style={{ backgroundColor: "white" }} className="container-sm"><p className="h6">My Orders</p></div>
        <div className="container-sm"><p className="h6">My Credits</p></div>
        <div className="container-sm"><p className="h6">Invite a Friend</p></div>
        <div className="container-sm"><p className="h6">Help & Support</p></div>
        <div className="container-sm"><p className="h6"  onClick={() =>{ dispatch(logout())
        removeItemLocalCart()
        }}>Logout</p></div>
      </div>
    </div>
  );
};

export default LeftMenu;
