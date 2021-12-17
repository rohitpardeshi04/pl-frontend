import React from "react";
import { styled } from "@mui/styles";

import SideNav from "./SideNav";
import DashboardRoutes from "../Routes/DashboardRoutes";
import TopNav from "./TopNav";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const DashboardLayoutWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 15vw",
  overflow: "hidden",
  paddingTop: "10vh",
}));

const DashboardLayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 15vw",
  overflow: "hidden",
});

const DashboardLayoutContent = styled("div")({
  flex: "1 1 15vw",
  height: "100%",
  overflow: "auto",
  //   padding: 8,
});

const DashboardLayout = () => {
  return (
    <>
      <DashboardLayoutRoot>
        <TopNav />
        <SideNav />
        {/* <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      /> */}
        <DashboardLayoutWrapper>
          <DashboardLayoutContainer>
            <DashboardLayoutContent>
              <DashboardRoutes />
            </DashboardLayoutContent>
          </DashboardLayoutContainer>
        </DashboardLayoutWrapper>
      </DashboardLayoutRoot>
    </>
  );
};

export default DashboardLayout;
