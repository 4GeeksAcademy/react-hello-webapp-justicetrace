const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
			],
			contacts:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			createAgenda: async () => { 
				let response = await fetch('https://playground.4geeks.com/contact/agendas/justicetrace', 
				{ method: "POST",
				headers: { "Content-type": "application/json" },
				});
				let data = await response.json();
				console.log(data);
			},
			createContact: async (name, email, phone, address) => {
				let response = await fetch('https://playground.4geeks.com/contact/agendas/justicetrace/contacts',
					{
						method: "POST",
						headers: {"Content-type": "application/json"},
						body: JSON.stringify({
							name: name,
							phone: phone,
							email: email,
							address: address
						}),
					}
				);
				let data = await response.json();
				window.location.reload();
				console.log(data);
			},
			getContacts: async () => {
				let response = await fetch('https://playground.4geeks.com/contact/agendas/justicetrace/contacts');
				let data = await response.json();
				setStore({
					contacts: data.contacts
				});
			},
			updateContact: async (name, email, phone, address, id) => {
                let response = await fetch(
                    'https://playground.4geeks.com/contact/agendas/justicetrace/contacts/' + id,
                    {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            name: name,
                            phone: phone,
                            email: email,
                            address: address
                        }),
                    });
                let data = await response.json();
                window.location.reload();
                console.log(data);
		},
		deleteContact: async (id) => {
			let response = await fetch('https://playground.4geeks.com/contact/agendas/justicetrace/contacts/' + id,
				{
					method: "DELETE",
				}
			);
			let data = response.json();
			console.log(data);
			window.location.reload();
		},
		},
	};
};

export default getState;
