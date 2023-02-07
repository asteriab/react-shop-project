import logo from "assets/logo.svg";

import Typography from "@mui/material/Typography";

type Props = {};
const Logo = (props: Props) => {
  return (
    <>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <img src={logo} width={100} />
      </Typography>
    </>
  );
};
export default Logo;
