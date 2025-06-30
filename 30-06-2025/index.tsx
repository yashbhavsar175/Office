// import React, { JSX, useEffect } from 'react';
// import { View } from 'react-native';
// import { Canvas, Circle } from '@shopify/react-native-skia';
// import { useSharedValue, withTiming } from 'react-native-reanimated';

// export default function App(): JSX.Element {
//   const radius = useSharedValue(50);

//   useEffect(() => {
//     radius.value = withTiming(120, { duration: 2000 });
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Canvas style={{ width: 300, height: 300 }}>
//         <Circle cx={150} cy={150} r={radius} color="orange" />
//       </Canvas>
//     </View>
//   );
// }
