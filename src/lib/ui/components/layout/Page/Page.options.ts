import { WidthContraintType } from './Page.types';

const WIDTH_TYPE_TIGHT = 'TIGHT';
const WIDTH_TYPE_MEDIUM = 'MEDIUM';

/**
 * Obtains the CSS specifier for the corresponding width type
 *
 * @param {WidthContraintType} widthType  The level of tightness of the width
 * @returns {string}  CSS specifier representing the max width CSS
 */
const getMaxWidth = (widthType: WidthContraintType) => {
  switch (widthType) {
    case WIDTH_TYPE_TIGHT:
      return 'sm';
    case WIDTH_TYPE_MEDIUM:
    default:
      return 'md';
  }
};

export { WIDTH_TYPE_TIGHT, WIDTH_TYPE_MEDIUM, getMaxWidth };
