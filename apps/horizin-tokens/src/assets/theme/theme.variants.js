export default {
  // Text
  circle: {
    borderRadius: 99999,
  },
  icon: {
    borderRadius: 99999,
    border: '2px solid',
    borderColor: 'white',
    boxShadow: 1,
  },

  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },

  // Tag
  tag: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
    secondary: {
      color: 'text',
      bg: 'secondary',
    },
  },

  form: {
    button: {
      mt: 2,
      fontSize: [1, 1, 2],
      px: [3, 3, 4],
      py: [3],
      // width: '100%',
    },
  },
};
