import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";

export const Home = () => {
	const contacts = [{
		id: 3,
		name: "Amy",
		phone: 1111111,
		address: "hello",
		email: "justicerivera13@outlook.com"
	},{
		id: 6,
		name: "Billy",
		phone: 1111111,
		address: "hello",
		email: "justicerivera13@outlook.com"
	}]

	return (
		<div className="text-center mt-5">
			{contacts.map((contact) => {
				return <ContactCard contact={contact} key={contact.id} />
			})}
		</div>
	);
};
