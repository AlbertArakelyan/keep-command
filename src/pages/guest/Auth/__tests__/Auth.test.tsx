import { render, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import Auth from '../Auth';

import { mockSignInData, mockSignUpData } from 'tests/constants';

const mockHandleSubmit = jest.fn();

const signInContent = (
  <MemoryRouter>
    <Auth
      isSignUp={false}
      isLoading={false}
      errors={{}}
      handleFormSubmit={jest.fn()}
      handleSubmit={mockHandleSubmit}
      isVerificationEmailSent={false}
      register={jest.fn()}
      values={mockSignInData}
    />
  </MemoryRouter>
);

const signUpContent = (
  <MemoryRouter>
    <Auth
      isSignUp={true}
      isLoading={false}
      errors={{}}
      handleFormSubmit={jest.fn()}
      handleSubmit={mockHandleSubmit}
      isVerificationEmailSent={false}
      register={jest.fn()}
      values={mockSignUpData}
    />
  </MemoryRouter>
);

describe('Auth', () => {
  it('should render', () => {
    const { container } = render(
      <MemoryRouter>
        <Auth
          isSignUp={false}
          isLoading={false}
          errors={{}}
          handleFormSubmit={jest.fn()}
          handleSubmit={jest.fn()}
          isVerificationEmailSent={false}
          register={jest.fn()}
          values={mockSignInData}
        />
      </MemoryRouter>
    );

    const authFormElement = container.querySelector('.auth-form');
    
    expect(authFormElement).toBeInTheDocument();
  });

  describe('Auth for Sign In', () => {
    it('should have "Sign In" button', () => {
      const signInButtonTextContent = 'Sign In';

      const { getByRole } = render(signInContent);

      const buttonElement = getByRole('button');

      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement.textContent).toEqual(signInButtonTextContent);
    });

    it('should have "Forgot password" link', () => {
      const forgotPasswordTextContent = 'Forgot Password';

      const { getByText } = render(signInContent);

      const forgotPasswordElement = getByText(forgotPasswordTextContent);

      expect(forgotPasswordElement).toBeInTheDocument();
      expect(forgotPasswordElement.textContent).toEqual(forgotPasswordTextContent);
    });

    it('should have "Create an account" link', () => {
      const createAccountTextContent = 'Create an account';

      const { getByText } = render(signInContent);

      const createAccountElement = getByText(createAccountTextContent);

      expect(createAccountElement).toBeInTheDocument();
      expect(createAccountElement.textContent).toEqual(createAccountTextContent);
    });

    it('should have 2 input elements', () => {
      const { container } = render(signInContent);

      const inputElements = container.querySelectorAll('input');

      expect(inputElements.length).toBe(2);
    });

    it('should work properly', async () => {
      const { getByText, getByRole } = render(signInContent);

      // Get input elements by their labels
      const emailInputElement = getByText('Email').previousElementSibling;
      const passwordInputElement = getByText('Password').previousElementSibling;
      const submitButton = getByRole('button');

      expect(emailInputElement).toBeInTheDocument();
      expect(passwordInputElement).toBeInTheDocument();

      // Change input fields values
      fireEvent.change(emailInputElement as Element, { target: { value: mockSignInData.email } });
      fireEvent.change(passwordInputElement as Element, { target: { value: mockSignInData.password } });

      // Submit the form
      await act(async () => {
        fireEvent.click(submitButton);
      });

      // Checking if form submit function has been called
      expect(mockHandleSubmit).toHaveBeenCalled();
    });
  });

  describe('Auth for Sign Up', () => {
    it('should have "Sign Up" button', () => {
      const signUpButtonTextContent = 'Sign Up';

      const { getByRole } = render(signUpContent);

      const buttonElement = getByRole('button');

      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement.textContent).toEqual(signUpButtonTextContent);
    });

    it('should have "Log in" link', () => {
      const logInTextContent = 'Log In';

      const { getByText } = render(signUpContent);

      const logInElement = getByText(logInTextContent);

      expect(logInElement).toBeInTheDocument();
      expect(logInElement.textContent).toEqual(logInTextContent);
    });

    it('should have 4 inputs', () => {
      const { container } = render(signUpContent);

      const inputElements = container.querySelectorAll('input');

      expect(inputElements.length).toBe(4);
    });

    it('should work properly', async () => {
      const { getByText, getByRole } = render(signUpContent);

      // Get input elements by their labels
      const nameInputElement = getByText('Name').previousElementSibling;
      const emailInputElement = getByText('Email').previousElementSibling;
      const passwordInputElement = getByText('Password').previousElementSibling;
      const confirmPasswordInputElement = getByText('Confirm Password').previousElementSibling;
      const submitButton = getByRole('button');

      expect(nameInputElement).toBeInTheDocument();
      expect(emailInputElement).toBeInTheDocument();
      expect(passwordInputElement).toBeInTheDocument();
      expect(confirmPasswordInputElement).toBeInTheDocument();

      // Change input fields values
      fireEvent.change(nameInputElement as Element, { target: { value: mockSignUpData.name } });
      fireEvent.change(emailInputElement as Element, { target: { value: mockSignUpData.email } });
      fireEvent.change(passwordInputElement as Element, { target: { value: mockSignUpData.password } });
      fireEvent.change(confirmPasswordInputElement as Element, { target: { value: mockSignUpData.confirmPassword } });

      // Submit the form
      await act(async () => {
        fireEvent.click(submitButton);
      });

      // Checking if form submit function has been called
      expect(mockHandleSubmit).toHaveBeenCalled();
    });
  });
});