import { render, fireEvent } from '@testing-library/react';

import Button from '../Button';

describe('Button', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Button>Hello World</Button>);
    const buttonElement = getByText('Hello World');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should apply click events', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Hello World</Button>);
    fireEvent.click(getByText('Hello World'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should apply classNames correctly', () => {
    const { container } = render(<Button className="custom-class">Hello World</Button>);
    const buttonElement = container.querySelector('.base-button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should apply variant correctly', () => {
    const { container } = render(<Button variant="default">Hello World</Button>);
    const buttonElement = container.querySelector('.base-button--default');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should apply color correctly', () => {
    const { container } = render(<Button btnColor="primary">Hello World</Button>);
    const buttonElement = container.querySelector('.base-button--primary');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should apply tabIndex correctly', () => {
    const tabIndex = -``;

    const { getByRole } = render(<Button tabIndex={tabIndex}>Hello World</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement.getAttribute('tabindex')).toBe(tabIndex.toString());
  });

  it('should apply isLoading correctly', () => {
    const { container, getByRole } = render(<Button isLoading>Hello World</Button>);
    const buttonElement = getByRole('button');
    const loaderElement = container.querySelector('.base-button__loader');

    expect(buttonElement.getAttribute('disabled')).not.toBeNull();
    expect(buttonElement.getAttribute('tabindex')).toBe('-1');
    expect(buttonElement.className.includes('button--loading')).toBeTruthy();
    expect(loaderElement).toBeInTheDocument();
  });
});
