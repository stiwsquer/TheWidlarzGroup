import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const RoomsIcon = (props) => (
  <Svg
    width={44}
    height={44}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={22} cy={22} r={22} fill="#fff" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.526 14.476a4.478 4.478 0 0 1 8.094-2.632c-2.34.923-4.412 3.842-3.527 7.105a.256.256 0 0 0-.042.005c-.014.002-.028.005-.043.005a4.481 4.481 0 0 1-4.482-4.483Zm14.992 3.014a4.482 4.482 0 1 1-8.965 0 4.482 4.482 0 0 1 8.965 0ZM34 30.179c0 5.226-17.92 5.226-17.92 0 0-9.238 17.92-9.144 17.92 0Zm-14.388-9.874c-8.277-1.134-13.598 8.47-5.829 10.11.076-4.413 3.428-7.096 7.529-8.085a6.09 6.09 0 0 1-1.7-2.025Z"
      fill="#5603AD"
    />
  </Svg>
);

export default SearchIcon;
