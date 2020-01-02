import React from 'react';
import { useDispatch } from 'react-redux';

const TodoItem = React.memo(({ todo, onRemove, onToggle }) => {
	const dispatch = useDispatch();
	const { id, text, done } = todo;
	return (
		<li
			style={{
				textDecoration: done ? 'line-through' : 'none',
			}}
		>
			<span onClick={() => dispatch(onToggle(id))}>{text}</span>{' '}
			<button onClick={() => dispatch(onRemove(id))}>삭제</button>
		</li>
	);
});

const TodoItems = React.memo(({ todos, onRemove, onToggle }) => {
	return todos.map((todo) => (
		<TodoItem
			todo={todo}
			key={todo.id}
			onRemove={onRemove}
			onToggle={onToggle}
		/>
	));
});

const TodoList = ({ todos, onRemove, onToggle, input, onChange, onSubmit }) => {
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input onChange={onChange} value={input} />
				<button type="submit">추가</button>
			</form>
			<ul>
				<TodoItems todos={todos} onRemove={onRemove} onToggle={onToggle} />
			</ul>
		</div>
	);
};

export default TodoList;
