import { useState } from "react";
import { Houses } from "../assets/Houses";
import { TrainCar } from "../assets/TrainCar";
import { Rail } from "../assets/Rail";
import { Skyline } from "../assets/Skyline";

interface CityProps {
  isNight: boolean;
  children?: React.ReactNode;
}

const City: React.FC<CityProps> = ({ isNight, children }) => {
  const HOUSE_WIDTH = 659; // Width of the Houses SVG in pixels
  const RAIL_WIDTH = 125; // Width of the rail blocks SVG in pixels
  const [numHouses, setNumHouses] = useState(
    Math.ceil(innerWidth / HOUSE_WIDTH)
  );
  const [numRailBlocks, setNumRailBlocks] = useState(
    Math.ceil(innerWidth / RAIL_WIDTH)
  );

  window.onresize = () => {
    setNumHouses(Math.ceil(innerWidth / HOUSE_WIDTH));
    setNumRailBlocks(Math.ceil(innerWidth / RAIL_WIDTH));
  };

  return (
    <div className={`city ${isNight ? "night" : ""}`}>
      {children}
      <div className="train-cars">
        <TrainCar />
        <TrainCar />
        <TrainCar />
        <TrainCar />
      </div>

      <div className="house-container">
        {Array.from({ length: numHouses }, (_, i) => (
          <Houses key={i} />
        ))}
      </div>
      <div className="house-base"></div>
      <div className="rail-container">
        {Array.from({ length: numRailBlocks }, (_, i) => (
          <Rail key={i} />
        ))}
      </div>
      <Skyline />
    </div>
  );
};

export default City;
