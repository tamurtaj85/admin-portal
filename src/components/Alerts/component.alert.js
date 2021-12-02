import Alert from "react-bootstrap/Alert";

export const ALERTS_VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  LIGHT: "light",
  DARK: "dark",
};

// export const Alerts = () => {
//   return ALERTS_VARIANT.map((variant, idx) => (
//     <Alert key={idx} variant={variant}>
//       This is a {variant} alert—check it out!
//     </Alert>
//   ));
// };

export const Alerts = (props) => {
  const { variant, message } = props;

  return <Alert variant={variant}>{message}</Alert>;
};
