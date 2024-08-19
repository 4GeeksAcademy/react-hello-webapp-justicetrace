import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";
import { Link } from "react-router-dom";
import AddContact from "./addContact";

export const Home = () => {
	const {store, actions} = useContext(Context);

	useEffect(() => {
		// actions.createAgenda();
		actions.getContacts();

	}, []);
	return (
		<div className="text-center mt-5">
			{store.contacts?.map((contact, index) => (
				<ContactCard
				key ={index}
				name={contact.name}
				email={contact.email}
				phone={contact.phone}
				address={contact.address}
				id={contact.id} />
			))}
			<button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      >
        Create Contact
      </button>
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel1">
                Create a Contact
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <AddContact />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
		</div>
		
	);
};
