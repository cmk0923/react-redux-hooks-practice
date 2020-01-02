import React from 'react';
import allActions from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from './TodoList';

const TodoListContainer = () => {
	const dispatch = useDispatch();
	const { input, todos } = useSelector((state) => state.todos);

	return (
		<TodoList
			input={input}
			todos={todos}
			onChange={(e) =>
				dispatch(allActions.todoActions.changeInput(e.target.value))
			}
			onSubmit={(e) => {
				e.preventDefault();
				dispatch(allActions.todoActions.insert(input));
				dispatch(allActions.todoActions.changeInput(''));
			}}
			onToggle={allActions.todoActions.toggleCheck}
			onRemove={allActions.todoActions.remove}
		/>
	);
};

export default TodoListContainer;
