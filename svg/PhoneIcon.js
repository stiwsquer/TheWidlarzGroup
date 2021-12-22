import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const PhoneIcon = (props) => (
  <Svg
    width={44}
    height={44}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={22} cy={22} r={22} fill="#fff" />
    <Path
      d="M29.502 24.763c-.795-.785-1.787-.785-2.577 0a149.81 149.81 0 0 0-1.798 1.803c-.162.167-.299.202-.496.091-.39-.213-.806-.385-1.18-.618-1.748-1.099-3.211-2.512-4.508-4.102-.643-.79-1.215-1.636-1.615-2.588-.081-.192-.066-.319.09-.476.604-.582 1.191-1.18 1.784-1.777.825-.831.825-1.803-.006-2.639-.47-.476-.941-.942-1.412-1.418-.487-.486-.968-.977-1.459-1.458-.795-.775-1.788-.775-2.578.005-.607.597-1.19 1.21-1.808 1.797-.572.542-.86 1.206-.921 1.98-.097 1.262.212 2.452.648 3.611.891 2.4 2.248 4.533 3.894 6.488 2.224 2.643 4.877 4.735 7.982 6.244 1.397.679 2.846 1.2 4.42 1.287 1.085.06 2.027-.213 2.781-1.059.517-.577 1.1-1.104 1.646-1.656.81-.82.816-1.813.01-2.623-.962-.968-1.93-1.93-2.897-2.892Z"
      fill="#5603AD"
    />
  </Svg>
);

export default PhoneIcon;
