

###📁 Project Structure
project/
│
├── main.js            # Main AR logic
├── loader.js          # Asset loading utilities
├── GLTFLoader.js      # Three.js GLTF loader
├── three.module.js    # Three.js module
│
├── vali.glb           # 3D model
├── vali.mind          # Image tracking target
│
└── server.js          # (optional) Node server


## 🎯 Key Components

### WebAR 3D Model Viewer
MindAR + Three.js

An interactive Web-based Augmented Reality (AR) application that uses image tracking to render and animate a 3D model directly in the browser.

When the camera detects a predefined image target, a .glb model is displayed and animated on top of it in real time — no app installation required.

### Features
📷 Camera-based AR using image tracking
🧊 Loads and displays .glb 3D models
🔄 Smooth real-time rotation animation
🎧 Support for audio, video, and textures
🌐 Runs entirely in the browser

### Technologies Used
MindAR – WebAR image tracking
Three.js – 3D rendering engine
GLTFLoader – For loading .glb models
JavaScript (ES Modules)
Node.js (optional, for local server)

## 💡 Smart Features

- **Time Validation**: Prevents scheduling conflicts and invalid time ranges
- **Auto-formatting**: Converts YouTube URLs to embedded format
- **Responsive Design**: Works on tablets, desktops, and touch screens
- **Error Handling**: User-friendly alerts for invalid inputs
- **Data Persistence**: Integrated with backend API

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start backend server: `node server.js`
4. Start frontend: `npm run dev`
5. Access at: `http://localhost:5173/main.js`

## 📸 How It Works

main.js
Initializes MindAR
Starts camera and tracking
Loads the 3D model
Anchors the model to the tracked image
Animates the model (rotation)

Provides reusable loaders for:

3D models (.glb)
Audio
Video
Textures
