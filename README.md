📱 WebAR 3D Model Viewer (MindAR + Three.js)
This project is a Web-based Augmented Reality (AR) application that uses image tracking to display and animate a 3D model using MindAR and Three.js.
When the camera detects a predefined image target, a 3D model (.glb) is rendered and animated on top of it in real time.
🚀 Features
📷 Camera-based AR using image tracking
🧊 Loads and displays .glb 3D models
🔄 Smooth real-time rotation animation
🎧 Support for loading audio, video, and textures
🌐 Runs in the browser (no app install needed)
🧠 Technologies Used
MindAR – WebAR image tracking
Three.js – 3D rendering engine
GLTFLoader – For loading .glb models
JavaScript (ES Modules)
Node.js (for local server)
📁 Project Structure
project/
│
├── main.js           # Main AR logic
├── loader.js         # Asset loading utilities
├── GLTFLoader.js     # Three.js GLTF loader
├── three.module.js   # Three.js module
│
├── vali.glb          # 3D model
├── vali.mind         # Image tracking target
│
└── server.js (optional) # Node server
⚙️ How It Works
🔹 main.js
Initializes MindAR
Starts camera and tracking
Loads the 3D model
Anchors model to tracked image
Animates the model (rotation)
🔹 loader.js
Provides reusable loaders for:
3D models (.glb)
Audio
Video
Textures
