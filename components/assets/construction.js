import { createIcon, defaultProps, Icon } from '@chakra-ui/react';
import { useColorModeSwitcher } from '../../utils/hooks/useColorModeSwitcher';

const ConstructionBase = createIcon({
  defaultProps,
  displayName: 'Construction',
  viewBox: '0 0 843.86 739.23',
  path: (
    <path d="M173.18 0l0 50.57 504.14 0 0 -50.57 96 0 0 50.57 17.6 0c29.09,0 52.94,23.85 52.94,52.94l0 253.59c0,29.09 -23.85,52.94 -52.94,52.94l-17.6 0 0 228.9 -96 0 0 -228.9 -504.14 0 0 228.9 -96 0 0 -228.9 -24.24 0c-29.09,0 -52.94,-23.85 -52.94,-52.94l0 -253.59c0,-29.09 23.85,-52.94 52.94,-52.94l24.24 0 0 -50.57 96 0zm262.71 460.88l146.75 254.12c6.28,10.82 -1.71,24.19 -13.93,24.19l-293.51 0.04c-13.05,0 -20.52,-14.63 -13.4,-25.17l146.21 -253.18c6.24,-10.85 21.78,-10.58 27.88,0zm2.21 196.62l0 19.17 -32.3 0 0 -19.17 32.3 0zm0 -96.54l0 74.05 -32.3 0 0 -74.05 32.3 0zm-16.15 -59.92l-118.84 205.9 237.68 0 -118.84 -205.9zm-337.53 -426.33l-60.28 160.31 0 122.08c0,15.89 12.92,28.8 28.8,28.8l27.35 0 117.03 -311.19 -112.9 0zm226.38 0l-117.02 311.19 112.89 0 117.04 -311.19 -112.91 0zm226.39 0l-117.03 311.19 112.91 0 117.02 -311.19 -112.9 0zm226.39 0l-117.04 311.19 112.91 0 60.27 -160.26 0 -122.13c0,-15.88 -12.92,-28.8 -28.8,-28.8l-27.34 0z" />
  )
});

export const Construction = ({ ...props }) => {
  const { colorLight, colorDark } = useColorModeSwitcher();
  return <Icon {...props} fill={colorDark} as={ConstructionBase} />;
};
