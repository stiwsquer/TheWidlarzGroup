import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LeftArrowIcon = (props) => (
  <Svg
    width={10}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9 17 1 9l8-8"
      stroke="#5603AD"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LeftArrowIcon;
