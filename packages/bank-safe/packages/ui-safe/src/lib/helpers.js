export const generateSignatureFromOwner = address => {
  const sigs = `0x000000000000000000000000${address.replace(
    "0x",
    ""
  )}000000000000000000000000000000000000000000000000000000000000000001`;

  return sigs;
};
