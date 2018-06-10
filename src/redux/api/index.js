const axios = require('axios');

export const getDemo = params => {
	const URL = 'https://reactjsteachingproj.herokuapp.com/users';

	return axios.get(URL).then(response => {
		return response.data;
	});
};
