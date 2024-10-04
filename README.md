# Domestic Water Wastage Prevention System

This project is a ** Domestic Water Wastage Prevention System** that interfaces with Firebase Firestore to fetch and update water flow data and control servo gates using a React frontend. The project includes two primary functionalities:
- **Servo Control**: For opening and closing the servo-controlled gate.
- **WaterFlow Data**: For displaying real-time water usage and flow rate.

## Table of Contents
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Firebase Configuration](#firebase-configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## Project Structure

The project consists of two main components:

1. **ServoControl**: Allows the admin to open and close a gate by controlling the servo motor. This updates the `servoState` field in the Firestore.
2. **WaterFlow**: Displays the water flow data, including `flowRate` and `totalUsage` fetched from the Firestore `WaterFlow` collection.

---

## Features

- **Servo Control**: Open and close the gate using buttons that update the Firestore `servoState` field.
- **Real-Time Water Data**: Fetch and display real-time `flowRate` and `totalUsage` from Firestore.
- **Firebase Firestore Integration**: Seamless interaction with Firebase for fetching and updating data.

---

## Technologies Used

- **React** (18.x)
- **Firebase** (Firestore)
- **React Router** (for routing)
- **Vite** (for fast builds)

---

## Installation

Follow these steps to run the project on your local machine.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/waterflow-management-system.git
cd waterflow-management-system
```

### 2. Install dependencies
```bash
npm install
npm install -g firebase-tools
firebase init functions
cd functions
npm install firebase-admin


```

### 3. Firebase Setup

Ensure you have a Firebase project set up with Firestore. You need two collections:
- **WaterFlow**: With documents `Sensor1` (for `flowRate`, `totalUsage`) and `ServoControl` (for `servoState`).

---

## Firebase Configuration

Set up Firebase by providing your Firebase project's credentials.

1. Go to `src/firebase/waterflow.jsx` and replace the Firebase configuration object with your own:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

2. Ensure your Firestore database has the following structure:
   ```
	users[
	user1[
		currentMonth[
			servoControl[servoState:1],
			waterflowSensor[totalusages:214]
		],
		jan24[
			servoControl[servoState:1],
			waterflowSensor[totalusages:214]
		],
 
		feb24[
			servoControl[servoState:1],
			waterflowSensor[totalusages:214]
		],

	],
	user2[
		currentMonth[
			servoControl[servoState:1],
			waterflowSensor[totalusages:214]
		],
		jan24[
			servoControl[servoState:1],
			waterflowSensor[totalusages:214]
		],
 
		feb24[
			servoControl[servoState:1],
			waterflowSensor[totalusages:214]
		],

	],
	]
	
	admin[
		limit[max:200,penalty:150, regular:100],
		price[penaltyPrice:2, regularPrice:.4],
		01ListOfAdmin[admins:["admin@gmail.com", "admin2@gmail.com"]]
	]

---

## Usage

### Start the development server

```bash
npm run dev
```

Navigate to `http://localhost:3000` to view the project.

- **Servo Control**: Open/close the gate using the buttons in the `ServoControl` component.
- **Water Flow Data**: Real-time display of `flowRate` and `totalUsage` in the `WaterFlow` component.

---

## Folder Structure

```
waterflow-management-system/
├── public/
├── src/
│   ├── components/
│   │   ├── ServoControl.jsx
│   │   └── WaterFlow.jsx
│   ├── firebase/
│   │   └── waterflow.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

### Explanation:
- **components/**: Contains the React components for handling the servo control (`ServoControl.jsx`) and water flow data (`WaterFlow.jsx`).
- **firebase/**: Contains Firebase configuration (`waterflow.jsx`) to interact with Firestore.
- **App.jsx**: Main application file that renders components.
- **main.jsx**: React entry point that renders `App`.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Contributors

- Akash Bera- [Developer](https://www.linkedin.com/in/akash-bera-5a3009250/)
- Subhayan Kapas- [Developer](https://www.linkedin.com/in/subhayan-kapas-003009250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)


#