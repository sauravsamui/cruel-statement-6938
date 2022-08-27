import React from 'react'
import style from "./checkaddress.module.css"

const Checkaddress = () => {
  const obj={des:"Friend",fd:"C-210",ad:"Arun Patios, Kenchenahalli, Yelahanka",bld:"Arun Patios",htr:"Call",pc:"560064",ct:"Bangalore"}
  return (
    <div className={style.cac}>
      <div>
        <div>
          <h1 className={style.calarge}>Address</h1>
        </div>
        <div className={style.cadtflx}>
          <p className={style.cadt}><i className="fa-solid fa-location-dot"></i> Delivery to: <span>{obj.des}-{obj.fd}, {obj.bld}</span></p>
          <p className={style.chng}>Change</p>
        </div>
        <div className={style.addflx}>
          <div className={style.caadd}>
            <p className={style.graysmall}><i className="fa-solid fa-location-dot"></i> Other</p>
            <p  className={style.graysmall}><span className={style.boldsmall}>Flat Details: </span>{obj.fd}</p>
            <span className={style.boldsmall}>Address:</span>
            <p className={style.graysmall}>{obj.ad}</p>
            <p className={style.graysmall}><span className={style.boldsmall}>Building: </span>{obj.bld}</p>
            <p className={style.graysmall}><span className={style.boldsmall}>How to Reach: </span>{obj.htr}</p>
            <p className={style.graysmall}><span className={style.boldsmall}>Pincode: {obj.pc}</span></p>
            <p className={style.graysmall}><span className={style.boldsmall}>City: </span>{obj.ct}</p>

          </div>
          <div className={style.newadd}>
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyIDI0LjM3NUMyMy44NjQgMjQuMzc1IDI1LjM3NSAyMi44NjQgMjUuMzc1IDIxQzI1LjM3NSAxOS4xMzYgMjMuODY0IDE3LjYyNSAyMiAxNy42MjVDMjAuMTM2IDE3LjYyNSAxOC42MjUgMTkuMTM2IDE4LjYyNSAyMUMxOC42MjUgMjIuODY0IDIwLjEzNiAyNC4zNzUgMjIgMjQuMzc1WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjguMzY0MSAyNy4zNjM4TDIzLjU5MDcgMzIuMTM3MkMyMy4xNjg5IDMyLjU1ODYgMjIuNTk2OSAzMi43OTU0IDIyLjAwMDYgMzIuNzk1NEMyMS40MDQyIDMyLjc5NTQgMjAuODMyMyAzMi41NTg2IDIwLjQxMDQgMzIuMTM3MkwxNS42MzU5IDI3LjM2MzhDMTQuMzc3MyAyNi4xMDUxIDEzLjUyMDEgMjQuNTAxNSAxMy4xNzI5IDIyLjc1NTZDMTIuODI1NyAyMS4wMDk4IDEzLjAwMzkgMTkuMjAwMiAxMy42ODUxIDE3LjU1NTdDMTQuMzY2MyAxNS45MTEyIDE1LjUxOTkgMTQuNTA1NyAxNi45OTk5IDEzLjUxNjdDMTguNDggMTIuNTI3OCAyMC4yMiAxMiAyMiAxMkMyMy43OCAxMiAyNS41MjAxIDEyLjUyNzggMjcuMDAwMSAxMy41MTY3QzI4LjQ4MDEgMTQuNTA1NyAyOS42MzM3IDE1LjkxMTIgMzAuMzE0OSAxNy41NTU3QzMwLjk5NjEgMTkuMjAwMiAzMS4xNzQzIDIxLjAwOTggMzAuODI3MSAyMi43NTU2QzMwLjQ3OTkgMjQuNTAxNSAyOS42MjI3IDI2LjEwNTEgMjguMzY0MSAyNy4zNjM4VjI3LjM2MzhaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMC4wMjk0IDIuNTg5NzFDMjcuNTU1OCAxLjU2NTMyIDI0Ljg0MzkgMSAyMiAxQzEwLjQwMiAxIDEgMTAuNDAyIDEgMjJDMSAzMy41OTggMTAuNDAyIDQzIDIyIDQzQzMzLjU5OCA0MyA0MyAzMy41OTggNDMgMjJDNDMgMTkuODUwNSA0Mi42NzcgMTcuNzc2MyA0Mi4wNzcgMTUuODIzNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzIgOUg0MiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzcgNFYxNCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="" />
            <p className={style.chng}>Add New Address</p>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Checkaddress