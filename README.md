# Performance Gear

This is an e-commerce website for sports accessories, where customers can browse, purchase, and review various sports products, including gear and apparel. The website is fully responsive, offers user authentication, and allows users to manage products they add to the platform. It also features various animations, dark/light theme toggle, and sorting functionality.

## Live site link: https://performance-gear.web.app/

## Features:
- **Responsive Design**: The website is designed to be responsive on all devices, including mobile, tablet, and desktop views.
- **User Authentication**: Users can log in, register, and use third-party authentication methods like Google and GitHub.
- **Add and Manage Products**: Users can add, view, update, and delete sports equipment on the platform (private routes).
- **Product Sorting**: Users can sort products based on price (ascending or descending).
- **Dark/Light Theme Toggle**: A toggle is provided to switch between dark and light themes.
- **Toast Notifications**: The app uses SweetAlert for showing success and error messages, such as when login fails.
- **Animations**: Integrated React Awesome Reveal for various animations.
- **Loading Spinner**: A loading spinner appears while data is being fetched.
- **404 Page**: Displays a custom 404 page for non-existent routes.
  
## Tech Stack:
- **Frontend**: React, React Router, React Reveal
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: Firebase Authentication (Google/Email)
- **Hosting**: Firebase for client-side, Vercel for server-side hosting
- **Database**: MongoDB
- **State Management**: React Context API


## 🛠 Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/Arrafi2644/Performance-Gear-Client.git
   cd performance-gear
#### Install dependencies:
npm install
#### Set up environment variables:
#### Create a .env file in the root directory and add the following:
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id

#### Start the development server:
npm run dev
Build for production:

#### Preview the production build:

npm run preview

