/* global window, document */
module.exports = {
  pushHistory: (url, push) => {
    if (window.location.hash.substr(1) !== url) {
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      push(url);
    }
  },
  getBodyScrollTop: () => (
    window.pageYOffset
    || document.documentElement.scrollTop
    || document.body.scrollTop
    || 0
  ),
  getRem: () => +window.getComputedStyle(document.getElementsByTagName('html')[0]).fontSize.split('px')[0],
  sizes: {
    b_desktop: 1199,
    b_desktop_s: 991,
    b_tablet: 767,
    mobile: 425,
  },
  blue: '#0077FF',
  white: '#FFF',
  black: '#000',
  logoColor: '#262626',
  darkwhite: '#F8F8F8',
  grayBorder: '#EBEBEB',
  darkgray: '#323232',
  whitegray: '#D1D1D1',
  almostWhite: '#E1E1E1',
  bluegray: '#5E6977',
};
