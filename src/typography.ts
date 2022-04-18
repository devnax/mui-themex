const typography = (theme: any) => ({
  fontFamily: "'Open Sans', sans-serif",
  fontSize: 15,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  h1: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 55,
    fontWeight: 800
  },
  h2: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 45,
    fontWeight: 700
  },
  h3: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 30,
    fontWeight: 700
  },
  h4: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 24,
    fontWeight: 700
  },
  h5: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 18,
    fontWeight: 600
  },
  h6: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 16,
    fontWeight: 600
  },
  subtitle1: {
    fontFamily: "'Open Sans', sans-serif",
    lineHeight: 1.5,
    fontWeight: 400,
    color: theme.palette.grey[500]
  },
  subtitle2: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 15,
    lineHeight: 1.5,
    color: theme.palette.grey[500]
  },
  body1: {
    fontFamily: "'Open Sans', sans-serif"
  },
  body2: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 15
  }
})

export default typography