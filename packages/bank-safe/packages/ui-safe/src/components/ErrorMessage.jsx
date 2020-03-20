export const ErrorMessage = props => {
  return (
    <Atom.Span sx={props.sx}>
      <Atom.Span sx={props.sxLabel}>{props.label}</Atom.Span>
      <Atom.Span sx={props.sxValue}>{props.msg}</Atom.Span>
    </Atom.Span>
  );
};

ErrorMessage.defaultProps = {
  label: "Error:",
  valueDisconnected: "Connection Required",
  sx: {
    fontSize: [1, 1, 2]
  },
  sxLabel: {
    fontWeight: [700],
    mr: [1]
  },
  sxValue: {}
};
