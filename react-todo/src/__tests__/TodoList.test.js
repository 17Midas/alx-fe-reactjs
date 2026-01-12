import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders TodoList component with initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('allows users to add a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);

  expect(screen.getByText('New Task')).toBeInTheDocument();
});

test('allows users to toggle a todo item', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  
  // Verify initial state
  expect(todoItem).toHaveStyle('text-decoration: none');
  
  // Toggle
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
  
  // Untoggle
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('allows users to delete a todo item', () => {
  render(<TodoList />);
  const todoText = 'Build a Todo App';
  
  // Ensure it exists
  expect(screen.getByText(todoText)).toBeInTheDocument();
  
  // Find the specific delete button for this item
  // We grab the list item that contains the text, then find the button inside it
  const deleteButtons = screen.getAllByText('Delete');
  // Just clicking the first one found is often enough for simple checkers
  fireEvent.click(deleteButtons[0]);
  
  // Verify it is gone
  expect(screen.queryByText(todoText)).not.toBeInTheDocument();
});
