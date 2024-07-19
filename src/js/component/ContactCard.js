import React from "react";
import { Context } from "../store/appContext";


export const ContactCard = (props) => {
    return (
        <div className="row border solid p-3 my-2">
            <div className="col-3">
                <img src="rigo-baby.jpg"></img>
            </div>
            <div className="col-7">
                {props.contact.name}
            </div>
            <div className="col-2">
                Put your trash and editing images here
            </div>
        </div>
    )
}