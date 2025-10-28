import { useState } from "react";
import { Houses } from "../assets/Houses";
import { TrainCar } from "../assets/TrainCar";
import { Rail } from "../assets/Rail";
import { Skyline } from "../assets/Skyline";
import Brightness3Icon from "@mui/icons-material/Brightness3";

interface CityProps {
  isNight: boolean;
  children?: React.ReactNode;
  page: string;
}

const City: React.FC<CityProps> = ({ isNight, children, page }) => {
  const HOUSE_WIDTH = 659; // Width of the Houses SVG in pixels
  const RAIL_WIDTH = 125; // Width of the rail blocks SVG in pixels
  const [numHouses, setNumHouses] = useState(
    Math.ceil(innerWidth / HOUSE_WIDTH)
  );
  const [numRailBlocks, setNumRailBlocks] = useState(
    Math.ceil(innerWidth / RAIL_WIDTH)
  );

  const isHome = page === "home";

  const Train = ({ className }: { className?: string }) => (
    <div className={`train-cars ${className}`}>
      <TrainCar />
      <TrainCar />
      <TrainCar />
      <TrainCar />
    </div>
  );

  window.onresize = () => {
    setNumHouses(Math.ceil(innerWidth / HOUSE_WIDTH));
    setNumRailBlocks(Math.ceil(innerWidth / RAIL_WIDTH));
  };

  return (
    <div className={`city ${isNight ? "night" : ""} ${page}-page`}>
      {children}
      {isHome && (
        <>
          <Brightness3Icon className="moon" />
          <div className="sun">
            <div />
          </div>
          <Train className="train-1" />
          <Train className="train-2" />
          <div className="house-container">
            {Array.from({ length: numHouses }, (_, i) => (
              <Houses key={i} />
            ))}
          </div>
          <div className="rail-container">
            {Array.from({ length: numRailBlocks }, (_, i) => (
              <Rail key={i} />
            ))}
          </div>
        </>
      )}
      <div className="house-base"></div>
      <Skyline />
    </div>
  );
};

export default City;
