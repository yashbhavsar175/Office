1. when you use Expo app then use these step

We have write "npx create-expo-app my-skia-app" this to create build in application like vite, my-skia-app is project name (whatever you can write instead of that)

then go in my-skia-app "cd my-skia-app"

after that you have to write "npx expo install @shopify/react-native-skia" for use the skia library

and make sure you already craete a device above pixel 6 in android studio, if you missing these step go and create device after that go forward

after the completing that step you have to write "npm run android"

then for animation in app you have to install "npm install react-native-reanimated" this library




2. when you have to use with CLI

FIrst you have create app from this "npx @react-native-community/cli init MyApp"

and when you use animation for anything you have to install this library called "npm install react-native-reanimated"

after installing this library you have to add "plugins: ['react-native-reanimated/plugin']," this in babel.config.js

after that if you want to start you have write this
 "npx react-native run-android" or
 " npx react-native run-android" and " npx react-native start --reset-cache" in dual terminal together





3. This step is for if you want to show your app in your physical phone

 First you need to connect your pc or laptop and physical phone via same wifi

After that you have to confirm that you enabled developer mode in your phone(If you didn't  you can check on youtube)

after enabled devloper mode, In dev mode you have to enable wireless or wifi debugging

then write this command "adb pair <your phone ipaddress>  (IP address show in pairing with code section)

after write this code you eed to enter pairing code that will show in your physical phone

To show your device is connected you need to write this "adb devices"

it will show offline after your device name untill you give the popup permission in your mobile

then run this command "npm run android"  boom you got your app in your physical device