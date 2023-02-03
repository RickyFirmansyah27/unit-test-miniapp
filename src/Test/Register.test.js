import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegisterTest from './RegisterTest';

describe('RegisterTest component', () => {
  it('Apakah Komponen Memiliki form username, email, password, dan submit?', () => {
    const { getByLabelText, getByText } = render(<RegisterTest />);

    expect(getByLabelText(/username/i)).toBeInTheDocument();
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
    expect(getByText(/submit/i)).toBeInTheDocument();
  });

  it('Apakah state berubah jika mengisi form username?', () => {
    const { getByLabelText } = render(<RegisterTest />);
    const usernameInput = getByLabelText(/username/i);

    fireEvent.change(usernameInput, { target: { value: 'Ricky' } });

    expect(usernameInput.value).toBe('Ricky');
  });

  it('Apakah state berubah jika mengisi form email?', () => {
    const { getByLabelText } = render(<RegisterTest />);
    const emailInput = getByLabelText(/email/i);

    fireEvent.change(emailInput, { target: { value: 'admin@react.com' } });

    expect(emailInput.value).toBe('admin@react.com');
  });

  it('Apakah state berubah jika mengisi form password?', () => {
    const { getByLabelText } = render(<RegisterTest />);
    const passwordInput = getByLabelText(/password/i);

    fireEvent.change(passwordInput, { target: { value: 'admin123' } });

    expect(passwordInput.value).toBe('admin123');
  });

  it('Apakah submit form memunculkan hasil dalam log console?', () => {
    const spy = jest.spyOn(console, 'log');
    const { getByLabelText, getByText } = render(<RegisterTest />);
    
    
    const usernameInput = getByLabelText(/username/i);
    const emailInput = getByLabelText(/email/i);
    const passwordInput = getByLabelText(/password/i);
    const submitBtn = getByText(/submit/i);
    
    fireEvent.change(usernameInput, { target: { value: 'Ricky' } });
    fireEvent.change(emailInput, { target: { value: 'admin@react.com' } });
    fireEvent.change(passwordInput, { target: { value: 'admin123' } });
    fireEvent.click(submitBtn);
    
    // expect(spy).toHaveBeenCalledWith('\n Nama : Ricky\n Email: admin@react.com\n Password: admin123');
    expect(spy).toHaveBeenCalled();
    });

});