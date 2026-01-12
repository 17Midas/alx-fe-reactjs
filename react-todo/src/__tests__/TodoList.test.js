import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList with initial todos', () => {
  render(<TodoList />);
  
  // Check for the header
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  
  // Check for initial items
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('allows users to add a new todo', () => {
  render(<TodoList />);
  
  // Find input and button
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add Todo');

  // Simulate typing and clicking
  fireEvent.change(input, { target: { value: 'New Test Todo' } });
  fireEvent.click(button);

  // Check if new item is in the document
  expect(screen.getByText('New Test Todo')).toBeInTheDocument();
});

test('allows users to toggle a todo', () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText('Learn React');
  
  // Initially not completed (no line-through)
  expect(todoItem).toHaveStyle('text-decoration: none');

  // Click to toggle
  fireEvent.click(todoItem);

  // Should now be completed (line-through)
  expect(todoItem).toHaveStyle('text-decoration: line-through');
  
  // Click again to un-toggle
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('allows users to delete a todo', () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText('Master Tests');
  const deleteButton = todoItem.querySelector('button'); // Or find by text 'Delete' associated with this item

  // Verify it exists first
  expect(todoItem).toBeInTheDocument();

  // Click delete
  fireEvent.click(deleteButton);

  // Verify it is gone
  expect(screen.queryByText('Master Tests')).not.toBeInTheDocument();
});
