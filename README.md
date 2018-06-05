# THIS IS AN SAMPLE FOR PHP DEVELOPER TO APPROACH REACT-NATIVE #
# ------------------------------------------------------------ #
# INTALLING ENVIRONMENT ON UBUNTU
# STEP 1 INSTALLING BASE MODULE
sudo apt-get install nodejs
sudo apt-get install npm
sudo apt-get install yarn
sudo apt-get install openjdk-8-jdk 
sudo npm install -g react-native-cli

# STEP 2 DOWNLOADING SDK 
# GOTO https://developer.android.com/studio/
# AT `Command line tools only` DOWNLOAD `SDK tools package` LINUX
# CREATE DIR ~/android-sdk
# EXTRACT sdk-tools-linux-*.zip TO ~/android-sdk
cd ~/android-sdk
touch ~/.android/repositories.cfg
./tools/bin/sdkmanager "platform-tools"
./tools/bin/sdkmanager --licenses
sudo rm -f /usr/bin/adb
sudo rm -f /bin/adb
sudo ln -s ~/android-sdk/platform-tools/adb /usr/bin/adb
sudo ln -s ~/android-sdk/platform-tools/adb /bin/
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

# STEP 3 INIT PROJECT
react-native init {ProjectName}
cd {ProjectName}

# THE BELOW ASSUME YOU ARE IN THE PROJECT FOLDER

# SIMPLE PACKAGE REQUIRED FOR DEVELOPMENT
# - phpjs
# - react-native-camera
# - react-native-easy-grid
# - react-native-sound
# - react-navigation
#
# Installing these package using command: 
react-native install {package-name}
react-native link
cp index.js index.android.js
# cp index.js index.ios.js

# TO START DEBUG:
# 1. Have a phone/emulator running
# 2. RUN COMMAND `react-native start'
# 3. Open another terminal to run command 'react-native start'
# 4. When open built app shake it to Show Debug menu
# 5. select enable `live reloading` and `hot reloading`

# FINAL BUILD RELEASE - ANDROID VERSION
# RUN COMMAND 
sdk.dir = /home/haou/android-sdk

react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/