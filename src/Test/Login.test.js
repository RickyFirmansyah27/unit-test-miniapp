import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginTest from './LoginTest';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/action/login';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('LoginTest component', () => {
    it('Apakah Komponen Memiliki form Username, Password, dan Submit?', () => {
        const { getByLabelText, getByText } = render(<LoginTest />);

        expect(getByLabelText(/username/i)).toBeInTheDocument();
        expect(getByLabelText(/password/i)).toBeInTheDocument();
        expect(getByText(/submit/i)).toBeInTheDocument();

    });

  it('Apakah state berubah jika mengisi form username?', () => {
    const { getByLabelText } = render(<LoginTest />);
    const usernameInput = getByLabelText(/username/i);

    fireEvent.change(usernameInput, { target: { value: 'test-username' } });

    expect(usernameInput.value).toBe('test-username');
  });

  it('apakah form login akan di dispacth dengan value yang sesuai?', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByLabelText, getByText } = render(<LoginTest />);

    const usernameInput = getByLabelText(/username/i);
    const passwordInput = getByLabelText(/password/i);
    const submitBtn = getByText(/submit/i);

    fireEvent.change(usernameInput, { target: { value: 'test-username' } });
    fireEvent.change(passwordInput, { target: { value: 'test-password' } });
    fireEvent.click(submitBtn);

    expect(dispatch).toHaveBeenCalledWith(login('test-username', 'test-password'));
  });
});
