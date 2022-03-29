import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import NotifHandler from "../NotifHandler";

const drawerWidth = 240;

const drawerItems = [
  {
    name: "dashboard",
    label: "Dashboard",
    icon: "icon", // should be icon component
    route: "/dashboard",
  },
  {
    name: "client_management",
    label: "Client Management",
    icon: "icon", // should be icon component
    route: "/clients",
  },
  {
    name: "content_management",
    label: "Content Management",
    icon: "icon", // should be icon component
    route: "/content",
  },
  {
    name: "activity",
    label: "Activity Management",
    icon: "icon", // should be icon component
    route: "/activity",
  },
  {
    name: "points_management",
    label: "Points Management",
    icon: "icon", // should be icon component
    route: "/points",
  },
  {
    name: "coins_management",
    label: "Coins Management",
    icon: "icon", // should be icon component
    route: "/coins",
  },
  {
    name: "notification_management",
    label: "Notification Management",
    icon: "icon", // should be icon component
    route: "/notification",
  },
  {
    name: "partner_management",
    label: "Partner Management",
    icon: "icon", // should be icon component
    route: "/partner",
  },
  {
    name: "account_settings",
    label: "Account Settings",
    icon: "icon", // should be icon component
    route: "/settings",
  },
];

function MainLayout(props) {
  const router = useRouter();
  const { data: session, status } = useSession();

  console.log("session data", session, status);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <p>{session}</p>
      <p>{status}</p>
      <Divider />
      <List>
        {drawerItems.map((item, index) => (
          <ListItem
            button
            key={item.name}
            onClick={() => router.push(item.route)}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: { xs: "relative", sm: "flex" } }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            display: { xs: "block", sm: "block" },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
              flexShrink: 0,
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 2,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {/* Don't need Toolbar if there is no AppBar Header */}
          <Toolbar />
          {props.children}
        </Box>
      </Box>
      <NotifHandler />
    </>
  );
}

export default MainLayout;
