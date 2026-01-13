import { useState } from "react";
import { Houses } from "../assets/city/Houses";
import { TrainCar } from "../assets/city/TrainCar";
import { Rail } from "../assets/city/Rail";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { Skyline } from "../assets/city/Skyline";

interface CityProps {
  isNight: boolean;
  children?: React.ReactNode;
  page: string;
}

const City: React.FC<CityProps> = ({ page }) => {
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
    <>
      {isHome && (
        <>
          <Brightness3Icon className="moon" />
          <div className="sun">
            <div />
          </div>
          <Skyline />
          <Train className="train-1" />
          <Train className="train-2" />
          <div className="house-base"></div>
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
    </>
  );
};

export default City;
