import Nav from "./Nav";
import MenuIcon from "@mui/icons-material/Menu";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import SunnyIcon from "@mui/icons-material/Sunny";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";

interface RibbonProps {
  setDrawerOpen: (open: boolean) => void;
  drawerOpen: boolean;
  toggleIsNight: () => void;
  isNight: boolean;
}

const Ribbon: React.FC<RibbonProps> = ({
  setDrawerOpen,
  drawerOpen,
  toggleIsNight,
  isNight,
}) => {
  return (
    <div className="nav-ribbon">
      <button className="day-night-toggle" onClick={() => toggleIsNight()} aria-label="toggle day/night mode" title="toggle day/night mode">
        {isNight ? <BedtimeIcon /> : <SunnyIcon />}
      </button>
      <Nav />
      <button className="nav-drawer-toggle" onClick={() => setDrawerOpen(true)}>
        <MenuIcon fontSize="large" />
      </button>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        anchor="right"
        slotProps={{
          paper: {
            sx: {
              backgroundColor: isNight ? "#4E6255" : "#F3EBE3",
              color: isNight ? "#fff" : "#744B53",
              width: "100%",
            },
          },
        }}
      >
        <div className={`drawer-container ${isNight ? "night" : "" }`}>
          <button
            onClick={() => setDrawerOpen(false)}
            className="close-drawer-button"
          >
            <CloseIcon />
          </button>
          <Nav closeDrawer={() => setDrawerOpen(false)}/>
        </div>
      </Drawer>
    </div>
  );
};

export default Ribbon;
