import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AuthLayout from '../AuthLayout';

describe('AuthLayout', () => {
  it('should render', () => {
    const { container } = render(
      <MemoryRouter>
        <AuthLayout />
      </MemoryRouter>
    );
    const authLayoutComponent = container.querySelector('.auth-layout');
    expect(authLayoutComponent).toBeInTheDocument();
  });
});
