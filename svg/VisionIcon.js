import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const VisionIcon = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.367 11.106C4.324 8.399 6.76 4.866 9.98 5.78c-2.644 1.585.615 4.918 2.24 2.236 1.019 3.94-3.836 5.734-5.854 3.09Z"
      fill="#BFC1CC"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.814 9.605C13.353 16.239 4.648 16.358.18 9.608c-.243-.369-.24-.861.007-1.223 4.468-6.582 13.123-6.775 17.63-.007.243.365.243.861-.003 1.227ZM2.24 8.993c4.247-4.845 9.362-4.908 13.517 0-4.155 4.841-9.292 4.778-13.517 0Z"
      fill="#BFC1CC"
    />
  </Svg>
);

export default VisionIcon;
