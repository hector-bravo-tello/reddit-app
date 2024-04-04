import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Post from '../components/Post';

describe('Post component', () => {
  it('renders without crashing', () => {
    const post = {
      id: '1',
      title: 'Test Post',
      author: 'Test Author',
      // Add other necessary post properties
    };
    render(<Post post={post} />);
    expect(screen.getByText('Test Post')).toBeInTheDocument();
  });

  it('displays the post title', () => {
    const post = {
      id: '1',
      title: 'Test Post',
      author: 'Test Author',
      // Add other necessary post properties
    };
    render(<Post post={post} />);
    expect(screen.getByText('Test Post')).toBeInTheDocument();
  });

  // Add more test cases as needed
});