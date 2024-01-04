import { render } from '@testing-library/react';

import Modal from '../Modal';

const title = 'Modal';

describe('Modal', () => {
  it('should ', () => {
    const { container } = render(<Modal title={title} />);

    const modalElement = container.querySelector('.modal');

    expect(modalElement).toBeInTheDocument();
  });

  it('should render title correctly', () => {
    const { getByText } = render(<Modal title={title} />);

    const titleElement = getByText(title);

    expect(titleElement).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    const children = <div>Test</div>;
    const { getByText } = render(<Modal title={title}>{children}</Modal>);

    const childrenElement = getByText('Test');

    expect(childrenElement).toBeInTheDocument();
  });

  it('should close modal when close button is clicked', () => {
    const onClose = jest.fn();
    const { container } = render(<Modal title={title} onClose={onClose} />);

    const closeButton = container.querySelector('.modal-header__close') as HTMLButtonElement;
    closeButton?.click();

    expect(onClose).toHaveBeenCalled();
  });

  it('should close modal when overlay is clicked', () => {
    const onClose = jest.fn();
    const { container } = render(<Modal title={title} onClose={onClose} />);

    const overlay = container.querySelector('.modal-overlay') as HTMLDivElement;
    overlay?.click();

    expect(onClose).toHaveBeenCalled();
  });
});