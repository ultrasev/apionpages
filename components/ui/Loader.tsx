import React from "react";
import styled, { keyframes } from "styled-components";

export interface SpinnerProps {
  width: number;
}

const l17 = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  margin-top: -30px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  transform-origin: 50% 116.5%;
  animation: ${l17} 2s infinite linear;

  &:before {
    content: "";
    min-width: 233%;
    height: 233%;
    background: radial-gradient(farthest-side, #00da3c 90%, #0000) top,
      radial-gradient(farthest-side, #00cbe7 90%, #0000) left,
      radial-gradient(farthest-side, #fd8603 90%, #0000) bottom,
      radial-gradient(farthest-side, #f4f328 90%, #0000) right;
    background-size: 43% 43%;
    background-repeat: no-repeat;
    animation: inherit;
    animation-direction: reverse;
  }
`;

export const SpinnerColor: React.FC<SpinnerProps> = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <Loader />
    </div>
  );
};

export interface PulseProps {
  width?: number;
  color?: string;
}

const pulseAnimation = keyframes`
  100% { box-shadow: 0 0 0 40px rgba(0, 0, 0, 0); }
`;

const PulseLoader = styled.div<PulseProps>`
  width: ${(props) => props.width || 20}px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${(props) => props.color || "#000"};
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.25);
  animation: ${pulseAnimation} 1.5s infinite linear;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.25);
    animation: inherit;
  }

  &:before {
    animation-delay: -0.5s;
  }

  &:after {
    animation-delay: -1s;
  }
`;

export const Pulse: React.FC<PulseProps> = ({ width, color }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <PulseLoader width={width} color={color} />
    </div>
  );
};
