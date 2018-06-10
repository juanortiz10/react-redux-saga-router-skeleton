import React from 'react';

const User = ({ age, facebook, id, last_name, name, phone }) => {
	return (
		<div>
			<h2>{`${id} - ${name} ${last_name}`}</h2>
			<h3>{`Facebook: ${facebook}`}</h3>
			<h3>{`Age: ${age}`}</h3>
			<h3>{`Phone: ${phone}`}</h3>
		</div>
	);
};

export default User;
