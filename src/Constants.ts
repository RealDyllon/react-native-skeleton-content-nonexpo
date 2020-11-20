import Animated, { Easing } from 'react-native-reanimated';
import { AnimationDirection, AnimationType } from './types';

export const DEFAULT_BORDER_RADIUS = 4;
export const DEFAULT_DURATION = 1200;
export const DEFAULT_ANIMATION_TYPE: AnimationType = 'shiver';
export const DEFAULT_ANIMATION_DIRECTION: AnimationDirection =
  'horizontalRight';
export const DEFAULT_BONE_COLOR = '#E1E9EE';
export const DEFAULT_HIGHLIGHT_COLOR = '#F2F8FC';
export const DEFAULT_EASING: Animated.EasingFunction = Easing.bezier(
  0.5,
  0,
  0.25,
  1
);
export const DEFAULT_LOADING = true;
