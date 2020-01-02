let id = 0;

const changeInput = (input) => {
	return { type: 'CHANGE_INPUT', payload: input };
};
const insert = (text) => {
	return {
		type: 'INSERT',
		payload: {
			id: ++id,
			text,
		},
	};
};
const toggleCheck = (id) => {
	return {
		type: 'TOGGLE_CHECK',
		payload: id,
	};
};
const remove = (id) => {
	return {
		type: 'REMOVE',
		payload: id,
	};
};

export default {
	changeInput,
	insert,
	toggleCheck,
	remove,
};
