<h1 align="center">
  <img alt="logo" title="plantmanager" src="assets/icon.png" width="150" height="150" />
</h1>
<h1 align="center">Plantmanager</h1>
<p align="center">React Native application developed during NLW #05</p>

<p align="center">
 <a href="#about">About</a> •
 <a href="#layout">Layout</a> •
 <a href="#technologies">Technologies</a> •
  <a href="getting">Getting Started</a> •
 <a href="#contribution">Contribution</a> •
 <a href="#license">License</a> •
 <a href="#author">Author</a>
</p>

## About
<p align="justify">A mobile application that reminds you to water your plants.</p>
<h3>Features:</h3>
<ul>
<li>Add or delete plants</li>
<li>List plants</li>
<li>Set alarm to create a reminder</li>
<li>Receive notification to water the plant</li>
</ul>

## Layout
<p align="justify">You can view the layout accessing the following link: <a href="https://www.figma.com/file/FrZWUIVldB2BO34EOhG6ER/PlantManager-(Copy)?node-id=0%3A1">See it</a>

## Technologies
The project's been developed using the following technologies:
- <a href="https://expo.io/">Expo</a>
- <a href="https://www.typescriptlang.org/">Typescript</a>
- <a href="https://reactnative.dev/">React Native</a>
- <a href="https://docs.expo.io/versions/latest/sdk/lottie/">Lottie-react-native</a>

## Getting started
### Requisites
Make sure you have Node.js, Expo, and an emulator (Xcode or Android Studio) installed in your machine. If you desire to run the application in your device, then download 'Expo Go' from the <a href="https://apps.apple.com/br/app/expo-go/id982107779">App Store</a> or <a href="https://play.google.com/store/apps/details?id=host.exp.exponent">Google Play</a>. 
```bash
# Clone this repository
$ git clone https://github.com/btadashi/plantmanager.git

# Navigate to the folder 'plantmanager'
$ cd plantmanager

# Install all dependencies:
$ yarn

# Install JSON Server:
$ sudo npm install -g json-server

# Insert you IP address in ./src/services/api

# Run the following commnand to initialize JSON Server from server.json:
$ json-server ./src/services/server.json --host [insert-your-IP-address] --port 3333

# Start application:
$ expo start
```

## Contribution
1. Fork this repository.
2. Create a new branch with your changes ```git checkout -b my-feature```
3. Commit your changes to the branch ```git commit -m "feature: My feature"```
4. Now just push it ```git push origin my-feature```
5. Submit pull request
## License
This project is under MIT license. 
## Author
This project's been developed by <a href="https://www.linkedin.com/in/bruno-yamaguchi/">Bruno Yamaguchi</a> during NLW #05.
