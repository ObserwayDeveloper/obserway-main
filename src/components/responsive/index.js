export const deviceSize = {
  mobile: '320',
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

export const device = {
  mobile: `(max-width: ${deviceSize.mobile}px)`,
  tablet: `(max-width: ${deviceSize.tablet}px)`,
  laptop: `(max-width: ${deviceSize.laptop}px)`,
  desktop: `(min-width: ${deviceSize.desktop}px)`
};