"use client";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
//
import logo from "../../assets/images/github.svg";
import "./MainNavbar.scss";

const MainNavbar = () => {
  const navItems = [
    { title: "Home", link: "/" },
    { title: "Bookmarks", link: "/bookmarks" },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const NavLinks = () => {
    return (
      <>
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className={`link weight-700 fs-20 text-decoration-none ${
              pathname.startsWith(item.link) ? "active" : ""
            }`}
            onClick={handleDrawerToggle}
          >
            {item.title}
          </Link>
        ))}
      </>
    );
  };

  return (
    <>
      <AppBar component="nav" position="static" className="main-nav">
        <div className="container">
          <Toolbar className="flex-between">
            {/* Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="d-flex d-lg-none"
            >
              <MenuIcon />
            </IconButton>

            <Image
              src={logo}
              loading="lazy"
              alt="Landing Image"
              className="ms-4"
            />

            {/* Large Screens */}
            <Box sx={{ flexGrow: 1 }} className="flex-between d-none d-lg-flex">
              <Box className="links d-flex gap-3 align-items-center">
                <NavLinks />
              </Box>
            </Box>
          </Toolbar>
        </div>
      </AppBar>

      {/* Small Screen */}
      <nav className="main-nav">
        <div className="container">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            className="d-flex d-lg-none mobile-drawer"
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                p: 2,
                gap: 1,
              }}
            >
              <NavLinks />
            </Box>
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
