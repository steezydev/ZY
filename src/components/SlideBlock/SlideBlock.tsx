import { motion } from 'framer-motion';
import React from 'react';

type TDirections = 'left' | 'right' | 'up' | 'down';

interface SlideBlockProps {
  className?: string;
  children: React.ReactNode;
  mass?: number;
  offset?: number;
  direction?: TDirections;
  tagName?: keyof JSX.IntrinsicElements;
  delay?: number;
}

interface IConf {
  x: number;
  y: number;
  opacity: number;
}

const formInitialConfig = (direction: TDirections, value = 200) => {
  const conf = { opacity: 0 } as IConf;

  switch (direction) {
    case 'up':
      conf.y = value;
      break;
    case 'left':
      conf.x = value;
      break;
    case 'down':
      conf.y = -value;
      break;
    case 'right':
      conf.x = -value;
      break;
    default:
  }
  return conf;
};

const formTransitionConfig = (delay: number, mass: number) => {
  return {
    delay,
    type: 'spring',
    stiffness: 100,
    mass,
  };
};

export default function SlideBlock({
  className,
  children,
  offset = 200,
  mass = 0.5,
  direction = 'up',
  tagName = 'span',
  delay = 0,
}: SlideBlockProps) {
  const MotionTag = motion[tagName as keyof typeof motion];

  return (
    <MotionTag
      initial={formInitialConfig(direction, offset)}
      animate={{ y: 0, x: 0, opacity: 1 }}
      transition={formTransitionConfig(delay, mass)}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
