const typography = (theme: any) => ({
  fontFamily: "'Inter', sans-serif",
  fontSize: 15,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  h1: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 55,
    fontWeight: 800
  },
  h2: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 45,
    fontWeight: 700
  },
  h3: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 30,
    fontWeight: 700
  },
  h4: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 24,
    fontWeight: 700
  },
  h5: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18,
    fontWeight: 600
  },
  h6: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 16,
    fontWeight: 600
  },
  subtitle1: {
    fontFamily: "'Inter', sans-serif",
    lineHeight: 1.5,
    fontWeight: 400,
    color: theme.palette.grey[500]
  },
  subtitle2: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 16,
    lineHeight: 1.5,
    color: theme.palette.grey[500]
  },
  body1: {
    fontFamily: "'Inter', sans-serif"
  },
  body2: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 16
  }
})

export default typography