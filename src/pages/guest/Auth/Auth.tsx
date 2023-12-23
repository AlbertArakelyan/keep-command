import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FieldErrors } from 'react-hook-form';

import { Input, Button } from 'components';

import { IAuthProps } from './types';
import { IUserSignUpData } from 'types';

const Auth: FC<IAuthProps> = ({
  isSignUp,
  register,
  handleSubmit,
  handleFormSubmit,
  errors,
  values,
  isLoading,
  isVerificationEmailSent,
}) => {
  return (
    <form className="auth-form" onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className="auth-form__title">Sign {isSignUp ? 'Up' : 'In'}</h2>
      <div className="auth-form__inputs">
        {isSignUp && (
          <Input
            wrapperClassName="auth-form__inputs"
            labelClassName="auth-form__input-label"
            label="Name"
            type="text"
            isDirty={!!(values as IUserSignUpData).name}
            error={(errors as FieldErrors<IUserSignUpData>).name?.message}
            {...register('name')}
          />
        )}
        <Input
          wrapperClassName="auth-form__inputs"
          labelClassName="auth-form__input-label"
          label="Email"
          type="email"
          isDirty={!!values.email}
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          wrapperClassName="auth-form__inputs"
          labelClassName="auth-form__input-label"
          label="Password"
          type="password"
          isDirty={!!values.password}
          error={errors.password?.message}
          {...register('password')}
        />
        {isSignUp && (
          <Input
            wrapperClassName="auth-form__inputs"
            labelClassName="auth-form__input-label"
            label="Confirm Password"
            type="password"
            isDirty={!!(values as IUserSignUpData).confirmPassword}
            error={(errors as FieldErrors<IUserSignUpData>).confirmPassword?.message}
            {...register('confirmPassword')}
          />
        )}
      </div>
      {isVerificationEmailSent && (
        <span className="auth-from__verification-message">
          Verification email has been sent, please check your email.
        </span>
      )}
      <div className="auth-from__controls">
        <div className="auth-from__controls-main">
          <Button className="auth-form__btn" btnColor="primary" isLoading={isLoading}>
            Sign {isSignUp ? 'Up' : 'In'}
          </Button>
          <Link className="auth-form__link" to={`?authmode=${isSignUp ? 'signin' : 'signup'}`}>
            {isSignUp ? 'Log In' : 'Create an account'}
          </Link>
        </div>
        {!isSignUp && (
          <Link className="auth-form__link auth-form__link--small auth-from__forgot" to="/forgot-password">
            Forgot Password
          </Link>
        )}
      </div>
    </form>
  );
};

export default Auth;
