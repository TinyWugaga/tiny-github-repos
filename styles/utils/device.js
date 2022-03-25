import { css } from 'styled-components';

const DEVICE = {
  desktop: {
    XL: 2560,
    L: 1920,
    M: 1440,
    S: 1280
  },
  mobile: {
    L: 1024,
    M: 768,
    S: 412,
    XS: 360
  }
};

const getDeviceSize = (device, size) =>
  DEVICE[device][size] * 0.99999999999;

const mediaDesktopCss = ({ content, size }) => css`
  @media (max-width: ${getDeviceSize('desktop', size)}px) {
    ${content}
  }
`;
const mediaMobileCss = ({ content, size }) => css`
  @media (max-width: ${getDeviceSize('mobile', size)}px) {
    ${content}
  }
`;

export const mediaDesktopMixin = {
  XL: content => mediaDesktopCss({ content, size: 'XL' }),
  L: content => mediaDesktopCss({ content, size: 'L' }),
  M: content => mediaDesktopCss({ content, size: 'M' }),
  S: content => mediaDesktopCss({ content, size: 'S' })
};

export const mediaMobileMixin = {
  L: content => mediaMobileCss({ content, size: 'L' }),
  M: content => mediaMobileCss({ content, size: 'M' }),
  S: content => mediaMobileCss({ content, size: 'S' }),
  XS: content => mediaMobileCss({ content, size: 'XS' })
};
