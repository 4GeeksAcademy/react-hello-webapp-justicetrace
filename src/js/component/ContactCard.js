import React, { useContext } from "react";
import { Context } from "../store/appContext";
import UpdateContact from "../views/update";

export const ContactCard = (props) => {

    const { store, actions } = useContext(Context);
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="rigo-baby.jpg" className="card-img-top" alt="a picture" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    <p>{props.email}</p>
                    <p>{props.phone}</p>
                    <p>{props.address}</p>
                </p>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Update
                </button>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <UpdateContact id={props.id} />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-danger" onClick={() => actions.deleteContact(props.id)}>Delete</button>
        </div>

    );
};