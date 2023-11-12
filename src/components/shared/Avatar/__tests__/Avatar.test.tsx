import { render } from '@testing-library/react';

import Avatar from '../Avatar';

const imgSrc = 'https://nationaltoday.com/wp-content/uploads/2022/09/Emma-Stone.jpg';

describe('Avatar', () => {
  it('should render', () => {
    const { container } = render(<Avatar />);

    const avatarElement = container.querySelector('.avatar');

    expect(avatarElement).toBeInTheDocument();
  });

  it('should render svg element properly', () => {
    const { container } = render(<Avatar />);

    const svgElement = container.querySelector('svg');

    expect(svgElement).toBeInTheDocument();
  });

  it('should render img element properly', () => {
    const { container } = render(<Avatar src={imgSrc} />);

    const imgElement = container.querySelector('img');

    expect(imgElement).toBeInTheDocument();
  });

  it('should render imageSize properly', () => {
    const imageSize = 200;

    const { container } = render(<Avatar src={imgSrc} imageSize={imageSize} />);

    const imgElement = container.querySelector('img');

    expect(imgElement?.width).toEqual(imageSize);
    expect(imgElement?.height).toEqual(imageSize);
  });

  it('should render size properly', () => {
    const { container } = render(<Avatar src={imgSrc} size="md" />);

    const avatarElement = container.querySelector('.avatar--md');

    expect(avatarElement).toBeInTheDocument();
  });

  it('should accept className properly', () => {
    const { container } = render(<Avatar src={imgSrc} className="test-avatar" />);

    const avatarElement = container.querySelector('.test-avatar');

    expect(avatarElement).toBeInTheDocument();
  });
});
