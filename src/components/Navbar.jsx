import { Mail, NotificationAdd, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
// import theme from '../theme'
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40% ",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Navbar
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationAdd />
          </Badge>
          <Avatar
            onClick={e => setOpen(true)}
            sx={{ width: 30, height: 30 }}
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </Icons>

        <UserBox onClick={e => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="menu"
        aria-labelledby="menu"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrign={{
          vertical: "top",
          horizontal: "right"
        }}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Accaunt</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar >
  );
}

export default Navbar;
