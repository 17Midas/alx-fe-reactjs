import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check for title
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check for initial static todos
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    // Simulate user typing "New Task"
    fireEvent.change(input, { target: { value: 'New Task' } });
    
    // Simulate form submission
    fireEvent.click(button);

    // Verify "New Task" appears in the list
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('toggles a todo item', () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText('Learn React');
    
    // Check initial state (not completed)
    expect(todoItem).toHaveStyle('text-decoration: none');
    
    // Click to toggle
    fireEvent.click(todoItem);
    
    // Check new state (completed)
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    // Click again to untoggle
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    
    // Verify item exists initially
    const todoText = 'Build a Todo App';
    expect(screen.getByText(todoText)).toBeInTheDocument();
    
    // Find the delete button associated with this item
    // We look for the "Delete" button closest to the specific todo text
    const todoItem = screen.getByText(todoText).closest('li');
    const deleteButton = within(todoItem).getByText('Delete');
    
    // Click delete
    fireEvent.click(deleteButton);
    
    // Verify item is removed
    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});
