import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import PostsList from './PostsList';
import userEvent from '@testing-library/user-event';

describe('PostsLists', () => {
  it('renders posts list', async () => {
    render(<PostsList />);

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    userEvent.type(screen.getByRole('textbox', { name: 'Title:' }), 'New post');
    userEvent.type(
      screen.getByRole('textbox', { name: 'Content:' }),
      'Zustand is awesome'
    );
    userEvent.click(screen.getByRole('button', { name: 'Save Post' }));

    await waitFor(() => expect(screen.getByText('New post')).toBeInTheDocument());
  });
});
