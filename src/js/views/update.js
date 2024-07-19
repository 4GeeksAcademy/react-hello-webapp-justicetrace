import React, { useContext, useState, useEffect }from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export default function UpdateContact (props) {
    //variables to hold the user information
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const {store, actions} = useContext(Context);
    let navigate = useNavigate();

    useEffect(() => {
        let thisContact = store.contacts.find((contact) => contact.id == props.id);
        setName(thisContact.name);
        setEmail(thisContact.email);
        setPhone(thisContact.phone);
        setAddress(thisContact.address);
    }, []);
    
    const handleSubmit = () => {
        actions.updateContact(name, email, phone, address, props.id);
        actions.getContact();
        navigate("/");
    };
    return (
        <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Name
        </span>
        <input
        value={name}
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
        value={email}
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
        value={phone}
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
        value={address}
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