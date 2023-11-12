import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import BaseLayout from '../BaseLayout';

describe('BaseLayout', () => {
  it('should render', () => {
    const { container } = render(
      <MemoryRouter>
        <BaseLayout />
      </MemoryRouter>
    );

    const baseLayoutComponent = container.querySelector('.base-layout');
    expect(baseLayoutComponent).toBeInTheDocument();
  });

  it('should have exactly 1 header, aside and main elements inside', () => {
    const { container } = render(
      <MemoryRouter>
        <BaseLayout />
      </MemoryRouter>
    );

    const headerElement = container.querySelector('header');
    const asideElement = container.querySelector('aside');
    const mainElement = container.querySelector('main');
    
    expect(headerElement).toBeInTheDocument();
    expect(asideElement).toBeInTheDocument();
    expect(mainElement).toBeInTheDocument();
  });

  describe('BaseLayout > aside', () => {
    it('should have logo', () => {
      const { container } = render(
        <MemoryRouter>
          <BaseLayout />
        </MemoryRouter>
      );

      const logoElement = container.querySelector('.aside__logo');

      expect(logoElement).toBeInTheDocument();
    });

    it('should have exactly link and img inside of the logo', () => {
      const { container } = render(
        <MemoryRouter>
          <BaseLayout />
        </MemoryRouter>
      );

      const logoElement = container.querySelector('.aside__logo');
      const linkElement = logoElement?.querySelector('a');
      const imgElement = logoElement?.querySelector('img');

      expect(linkElement).toBeInTheDocument();
      expect(imgElement).toBeInTheDocument();
    });

    it('should have a button with content "Add Command"', () => {
      const buttonContent = 'Add Command';

      const { getByRole } = render(
        <MemoryRouter>
          <BaseLayout />
        </MemoryRouter>
      );

      const buttonElement = getByRole('button');

      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement.innerHTML).toContain(buttonContent);
    });

    it('should have 3 nav links', () => {
      const { container } = render(
        <MemoryRouter>
          <BaseLayout />
        </MemoryRouter>
      );

      const navLinkElements = container.querySelectorAll('li');

      expect(navLinkElements.length).toBe(3);
    });
  });
});