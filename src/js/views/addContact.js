import React, { useContext, useState }from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const AddContact = () => {
    const {actions, store} = useContext(Context);
    const navigate = useNavigate();

    const [contactData, setContactData] = useState({
        agenda_slug: "justicetrace",
        
    });

    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await actions.addContacts(contactData);
            await actions.getContacts();
            navigate("/");
        } catch (error) {
            console.error("Error ADDING contact", error);
        }
    };

    return (
        <div className="container">
            <h1 className="text-center">Add New Contact</h1>
            <form>
                <div className="row border solid p-3 my-2">
                    <div className="col-3">
                        <img src="rigo-baby.jpg"></img>
                    </div>
                    <div className="col-7">
                        Rocky
                    </div>
                    <div className="col-2">
                       Put your trash and editing images here
                    </div>
                </div>
                <div className="row border solid p-3 my-2">
                    <div className="col-3">
                        <img src="rigo-baby.jpg"></img>
                    </div>
                    <div className="col-7">
                        Rocky
                    </div>
                    <div className="col-2">
                       Put your trash and editing images here
                    </div>
                </div>
                <div className="row border solid p-3 my-2">
                     <div className="col-3">
                         <img src="rigo-baby.jpg"></img>
                    </div>
                    <div className="col-7">
                        Rocky
                    </div>
                    <div className="col-2">
                       Put your trash and editing images here
                    </div>
                </div>
                <div className="row border solid p-3 my-2">
                    <div className="col-3">
                        <img src="rigo-baby.jpg"></img>
                    </div>
                    <div className="col-7">
                        Rocky
                    </div>
                    <div className="col-2">
                       Put your trash and editing images here
                    </div>
                </div>
            </form>
            <a href="/">Get Back To Contacts</a>
        </div>
    );
};