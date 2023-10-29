import { render } from '@testing-library/react';

import Loader from '../Loader';

import { LoaderSizeType } from 'types';

describe('Loader', () => {
  it('should render', () => {
    const { getByRole } = render(<Loader />);
    const lodaerElement = getByRole('alert');
    expect(lodaerElement).toBeInTheDocument();
  });

  it('should apply className', () => {
    const { container } = render(<Loader className="some-class" />);
    const loaderElement = container.querySelector('.some-class');
    expect(loaderElement).toBeInTheDocument();
  });

  it('should apply size', () => {
    const size: LoaderSizeType = 'small';
    const { getByRole } = render(<Loader size={size} />);
    const loaderElement = getByRole('alert');
    expect(loaderElement.className.includes(size)).toBeTruthy();
  });
});
