import React from 'react';
import './styles.css';

const FlexBoxDisplay = ({ areas, areaValues, totalArea, builtArea, availableArea }) => {
 
  const isEmpty = Object.values(areas).every(value => value === 0);
  const totalUsedArea = Object.keys(areas).reduce((acc, type) => acc + (areas[type] * areaValues[type]), 0);
  const availablePercentage = ((totalArea - totalUsedArea) / totalArea) * 100;

  
  const renderFlexboxItems = () => {
    return Object.keys(areas).map(type => {
      const area = areas[type] * areaValues[type];
      const percentage = (area / totalArea) * 100;
      return area > 0 && (
        <div
          key={type}
          className={`flexbox-item ${type}`}
          style={{
            flexBasis: `${percentage}%`
          }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}<br />
          {percentage.toFixed(2)}%
        </div>
      );
    });
  };

  return (
    <div className="flexbox-container">
      {isEmpty ? (
        <div
          className="flexbox-item empty"
          style={{
            flexBasis: '100%'
          }}
        >
          Available<br />
          100%
        </div>
      ) : (
        <>
          {renderFlexboxItems()}
          <div
            className="flexbox-item available"
            style={{
              flexBasis: `${availablePercentage}%`
            }}
          >
            Available<br />
            {availablePercentage.toFixed(2)}%
          </div>
        </>
      )}
    </div>
  );
};

export default FlexBoxDisplay; 

