import React, { useState } from "react";
import AreaInput from "./AreaInput";
import FlexBoxDisplay from "./FlexBoxDisplay";
import "./styles.css";

const areaValues = {
  linear: 23,
  lType: 28.749,
  md: 140,
  manager: 80,
  small: 80,
  ups: 90,
  bms: 90,
  server: 40,
};

const initialAreas = {
  linear: 0,
  lType: 0,
  md: 0,
  manager: 0,
  small: 0,
  ups: 0,
  bms: 0,
  server: 0,
};

const App = () => {
  const [totalArea, setTotalArea] = useState(2000);
  const [areas, setAreas] = useState(initialAreas);
  const [error, setError] = useState(false);

  const updateAreas = (type, value) => {
    const newAreas = {
      ...areas,
      [type]: value,
    };
    const builtArea = Object.keys(newAreas).reduce(
      (acc, key) => acc + newAreas[key] * areaValues[key],
      0
    );
    if (builtArea <= totalArea) {
      setAreas(newAreas);
      setError(false);
    } else {
      setError(true);
    }
  };

  const builtArea = Object.keys(areas).reduce(
    (acc, key) => acc + areas[key] * areaValues[key],
    0
  );
  const availableArea = totalArea - builtArea;

  return (
    <div className="container">
      <AreaInput setTotalArea={setTotalArea} />
      <div className="content">
        <FlexBoxDisplay
          areas={areas}
          areaValues={areaValues}
          totalArea={totalArea}
          builtArea={builtArea}
          availableArea={availableArea}
        />
        <div className="sections">
          <div className="section">
            <h3>Open Workspaces</h3>
            <div className="workspace-row">
              {["linear", "lType"].map((type) => (
                <div key={type} className="workspace">
                  <img src={`/${type}.png`} alt={`${type} Workstations`} />
                  <div className="control-btn-box">
                    <button
                      className="control-btn"
                      onClick={() =>
                        updateAreas(type, Math.max(areas[type] - 1, 0))
                      }
                    >
                      -
                    </button>
                    <span>{areas[type]}</span>
                    <button
                      className="control-btn"
                      onClick={() => updateAreas(type, areas[type] + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="section">
            <h3>Cabins</h3>
            <div className="workspace-row">
              {["md", "manager", "small"].map((type) => (
                <div key={type} className="workspace">
                  <img src={`/${type}.png`} alt={`${type} Cabin`} />
                  <div className="control-btn-box">
                    <button
                      className="control-btn"
                      onClick={() =>
                        updateAreas(type, Math.max(areas[type] - 1, 0))
                      }
                    >
                      -
                    </button>
                    <span>{areas[type]}</span>
                    <button
                      className="control-btn"
                      onClick={() => updateAreas(type, areas[type] + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="section">
            <h3>Public Spaces</h3>
            <div className="workspace-row">
              {["ups", "bms", "server"].map((type) => (
                <div key={type} className="workspace">
                  <img src={`/${type}.png`} alt={`${type} Room`} />
                  <div className="control-btn-box">
                    <button
                      className="control-btn"
                      onClick={() =>
                        updateAreas(type, Math.max(areas[type] - 1, 0))
                      }
                    >
                      -
                    </button>
                    <span>{areas[type]}</span>
                    <button
                      className="control-btn"
                      onClick={() => updateAreas(type, areas[type] + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {error && (
        <div className="error-message">
          Error: The total built area exceeds the available area!
        </div>
      )}
    </div>
  );
};

export default App;
