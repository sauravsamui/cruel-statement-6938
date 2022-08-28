import Item from "./item.jsx";
import style from "./cartdraw.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cartdraw = ({ cartflag, setcartflag }) => {
  const { removeItemCart,getItemCart, cartData: data } = useSelector((state) => state.cart);
const navigate =useNavigate();
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum = sum + +data[i].payload.price * data[i].payload.quantity;
  }

let goCheckout=()=>{
   navigate("/checkoutpage");
}

  return (
    <div className={style.cdf}>
      <div className={style.mcd}>
        <div>
          <div className={style.txtflx}>
            <h1 className={style.ic}>My Cart ({data.length} items)</h1>
            <h3 onClick={() => setcartflag(!cartflag)}>X</h3>
          </div>
          {getItemCart.loading && (
            <div className="container">
              <div className="spinner-grow text-primary" role="status">
                <span className="sr-only"></span>
              </div>
              <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only"></span>
              </div>
              <div className="spinner-grow text-success" role="status">
                <span className="sr-only"></span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                <span className="sr-only"></span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                <span className="sr-only"></span>
              </div>
              <div className="spinner-grow text-info" role="status">
                <span className="sr-only"></span>
              </div>
              <div className="spinner-grow text-light" role="status">
                <span className="sr-only"></span>
              </div>
              <div className="spinner-grow text-dark" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          )}
           {removeItemCart.loading && (
            <div className="container">
              <div className="spinner-grow text-primary" role="status">
                <span className="sr-only"></span>
              </div>
              <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only"></span>
              </div>
              <div className="spinner-grow text-success" role="status">
                <span className="sr-only"></span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                <span className="sr-only"></span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                <span className="sr-only"></span>
              </div>
              <div className="spinner-grow text-info" role="status">
                <span className="sr-only"></span>
              </div>
              <div className="spinner-grow text-light" role="status">
                <span className="sr-only"></span>
              </div>
              <div className="spinner-grow text-dark" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          )}
          {getItemCart.error && (
            <div style={{ alignItems: "center" }} className="container">
              <h2 className="h2">Something went wrong.....</h2>
            </div>
          )}
          {data.map((e) => (
            <Item e={e} key={e._id} />
          ))}
        </div>
        <div className={style.cdbotm}>
          <div>
            <p>{data.length} items</p>
            <p className={style.txtorange}>
              <i class="fa-solid fa-indian-rupee-sign"></i> {sum}
            </p>
          </div>
          <div>
            <button disabled={data.length==0} className={style.cdbtn} onClick={()=>{goCheckout()}}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartdraw;
