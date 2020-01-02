const initialState = {
	input: '',
	todos: [],
};

const todos = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return {
				...state,
				input: action.payload,
			};
		case 'INSERT':
			return {
				...state,
				todos: state.todos.concat({
					...action.payload,
					done: false,
				}),
			};
		case 'TOGGLE_CHECK':
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload ? { ...todo, done: !todo.done } : todo
				),
			};
		case 'REMOVE':
			console.log(action);
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		default:
			return state;
	}
};

export default todos;
