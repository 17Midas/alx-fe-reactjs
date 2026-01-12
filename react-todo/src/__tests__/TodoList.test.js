// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('toggles a todo item', () => {
    render(<TodoList />);
    // Click the text specifically
    const todoText = screen.getByText('Learn React');
    const listItem = todoText.closest('li');

    // Initially not completed
    expect(listItem).toHaveStyle('text-decoration: none');
    
    // Toggle
    fireEvent.click(listItem);
    expect(listItem).toHaveStyle('text-decoration: line-through');
    
    // Untoggle
    fireEvent.click(listItem);
    expect(listItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const todoText = 'Master Tests';
    
    // Confirm it exists first
    expect(screen.getByText(todoText)).toBeInTheDocument();
    
    // Find all delete buttons and click the last one (closest to Master Tests)
    const deleteButtons = screen.getAllByText('Delete');
    const lastDeleteBtn = deleteButtons[deleteButtons.length - 1];
    
    fireEvent.click(lastDeleteBtn);
    
    // Confirm it is gone
    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});
