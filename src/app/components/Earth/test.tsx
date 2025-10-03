import React, { CSSProperties } from "react";
import Spline from "@splinetool/react-spline";
import "./splineScene.css";

interface SplineSceneProps {
  sceneUrl?: string;
  width?: string;
  height?: string;
  position?: "relative" | "absolute" | "fixed" | "static" | "sticky";
  zIndex?: number;
  className?: string;
  style?: CSSProperties;
}

const SplineScene: React.FC<SplineSceneProps> = ({ 
  sceneUrl = "https://prod.spline.design/BNaurVSeS57NeyWI/scene.splinecode",
  width = "100%",
  height = "100%",
  position = "relative",
  zIndex = 0,
  className = "",
  style = {}
}) => {
  const containerStyle: CSSProperties = {
    position,
    width,
    height,
    zIndex,
    cursor: 'none', // Hide default cursor to show custom cursor
    ...style
  };

  return (
    <div 
      className={`spline-scene-container ${className}`}
      style={containerStyle}
    >
      <Spline 
        scene={sceneUrl}
        style={{ 
          pointerEvents: 'none',
          cursor: 'none'
        }}
      />
    </div>
  );
};

export default SplineScene;
