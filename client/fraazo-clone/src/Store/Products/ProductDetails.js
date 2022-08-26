import styles from "./Menu.module.css";
import React, { useState } from "react";

export const ProductDetails = () => {

    const [addedToCart, setAddedToCart] = useState(false);
    const [loader, setLoader] = useState(false);

    return (
        <div className={styles.PDcontainer}>
            <div className={styles.imgDiv}>
                <img src="https://imagemaster.fraazo.com/fraazo-master/products/FAVO21.png?width=512&height=512" alt="imag" />
            </div>
            <div className={styles.desDiv}>
                <div className={styles.desDiv1}>
                    <h3>Indian Avocado</h3>
                    <div
                        style={{
                            fontSize: "16px",
                            color: "lightslategray",
                            marginTop: "5px",
                        }}
                    >
                        1 pc
                    </div>
                    <div style={{ fontWeight: "490", color: "orange" }}>₹ 73</div>
                    <div>
                        {addedToCart ? (
                            <div
                                disable
                                className="group disabled:bg-opacity-40 hover:cursor-none w-20 h-[32px] cursor-pointer rounded-3xl flex justify-center items-center gap-1 text-[13px] text-[#4FBB90] border border-[#4FBB90] hover:bg-[#9de9cb] hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 fill-[#4FBB90] rotate-[360deg] duration-500 group-hover:fill-white"
                                    viewBox="0 0 8448 512"
                                >
                                    <path d="M182.6 246.6C170.1 259.1 149.9 259.1 137.4 246.6L57.37 166.6C44.88 154.1 44.88 133.9 57.37 121.4C69.87 108.9 90.13 108.9 102.6 121.4L159.1 178.7L297.4 41.37C309.9 28.88 330.1 28.88 342.6 41.37C355.1 53.87 355.1 74.13 342.6 86.63L182.6 246.6zM182.6 470.6C170.1 483.1 149.9 483.1 137.4 470.6L9.372 342.6C-3.124 330.1-3.124 309.9 9.372 297.4C21.87 284.9 42.13 284.9 54.63 297.4L159.1 402.7L393.4 169.4C405.9 156.9 426.1 156.9 438.6 169.4C451.1 181.9 451.1 202.1 438.6 214.6L182.6 470.6z" />
                                </svg>
                                <p
                                    style={{
                                        fontSize: "14px"
                                    }}
                                >Added</p>
                            </div>
                        ) : loader ? (
                            <svg
                                aria-hidden="true"
                                className="w-3 h-3 text-gray-200 animate-spin fill-blue-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                        ) : (
                            <div
                                onClick={() => {
                                    setLoader(true);
                                    setAddedToCart(true);
                                }}
                                className="group w-20 h-[32px] cursor-pointer rounded-3xl flex justify-center items-center gap-1 text-[13px] text-[#4FBB90] border border-[#4FBB90] hover:bg-[#4FBB90] hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 fill-[#4FBB90] group-hover:fill-white"
                                    viewBox="0 0 9276 512"
                                >
                                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM272 180H316V224C316 235 324.1 244 336 244C347 244 356 235 356 224V180H400C411 180 420 171 420 160C420 148.1 411 140 400 140H356V96C356 84.95 347 76 336 76C324.1 76 316 84.95 316 96V140H272C260.1 140 252 148.1 252 160C252 171 260.1 180 272 180zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                                </svg>
                                <p
                                    style={{
                                        fontSize: "12px",
                                        marginLeft: ".3vw"
                                    }}
                                >ADD</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.benefits}>
                    <h2>Benefits</h2>
                    <div className={styles.desDiv2}> 
                    <p>Fruits like avocados are incredibly nutrient-dense and a concentrated source of fibre, good fats, and a variety of vitamins and minerals. They are abundant in nutrients that are frequently missing from people's diets, including as folate, vitamin B6, vitamin C, and magnesium.</p>  
                    </div>
                </div>
            </div>
        </div>
    )
}