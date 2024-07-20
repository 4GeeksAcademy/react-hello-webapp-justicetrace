import React, { useContext, useState }from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export default function AddContact () {
    //variables to hold the user information
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const{store, actions} = useContext(Context);
    let navigate = useNavigate();
    
    const handleSubmit = () => {
        actions.createContact(name, email, phone, address);
        navigate("/");
    };
    return (
        <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Name
        </span>
        <input
          onChange={(e) => setName(e.target.value)} //updates the variable as the user types
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Email
        </span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Phone
        </span>
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Address
        </span>
        <input
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <button className="btn btn-success" onClick={() => handleSubmit()}>
        Submit
      </button>
      </div>
    );
}













/*export const AddContact = () => {
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
}; */