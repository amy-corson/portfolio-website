import Nav from "./Nav";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface RibbonProps {
  isMobile: boolean;
  toggleDrawer: () => void;
  toggleIsNight: () => void;
  drawerOpen: boolean;
}

const Ribbon: React.FC<RibbonProps> = ({
  toggleDrawer,
  drawerOpen,
  isMobile,
  toggleIsNight,
}) => {
  return (
    <div className="nav-ribbon">
      <button className="toggle" onClick={() => toggleIsNight()}>
        toggle d/n
      </button>
      <button onClick={() => toggleDrawer()}>
        {drawerOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  );
};

export default Ribbon;
