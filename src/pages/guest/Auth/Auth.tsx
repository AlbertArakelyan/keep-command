import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Input, Button } from 'components';

import { IAuthProps } from './types';

const Auth: FC<IAuthProps> = ({
  isSignUp,
}) => {
  return (
    <form className="auth-form">
      <h2 className="auth-form__title">
        Sign {isSignUp ? 'Up' : 'In'}
      </h2>
      <div className="auth-form__inputs">
        <Input wrapperClassName="auth-form__inputs" label="Name" />
        <Input wrapperClassName="auth-form__inputs" label="Name" />
        <Input wrapperClassName="auth-form__inputs" label="Name" />
      </div>
      <div className="auth-from__controls">
        <div className="auth-from__controls-main">
          <Button className="auth-form__btn" btnColor="primary">
            Sign {isSignUp ? 'Up' : 'In'}
          </Button>
          <Link className="auth-form__link" to={`?authmode=${isSignUp ? 'signin' : 'signup'}`}>
            {isSignUp ? 'Log In' : 'Create an account'}
          </Link>
        </div>
        <Link className="auth-form__link auth-form__link--small auth-from__forgot" to="/forgot-password">
          Forgot Password
        </Link>
      </div>
    </form>
  );
};

export default Auth;