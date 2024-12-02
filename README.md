# Tinder Clone
A full-stack Tinder clone built with modern web technologies. This project replicates the core features of the popular dating app Tinder, including user authentication, profile creation, swiping functionality, and real-time chat.

![Screenshot 2024-12-02 235215](https://github.com/user-attachments/assets/6e3b78ce-9a27-4ed7-8914-1a94f93fd52a)


# Features
- User Authentication: Secure user registration and login using JWT.
- Profile Management: Users can create and update their profiles with photos, bio, and interests.
- Swiping Interface: Swipe left to pass and right to like other user profiles.
- Matches: Get notified when two users like each other.
- Real-Time Chat: Instant messaging with matched users using WebSockets.
- Notifications: Real-time notifications for new matches and messages.
- Responsive Design: Mobile-first design for a seamless experience on all devices.
- Tech Stack
- Frontend: React, Redux, Material-UI
- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Authentication: JWT (JSON Web Tokens)
- Real-Time Communication: Socket.io
- Deployment: Render

# Installation:

# Clone the repository:

git clone https://github.com/yourusername/tinder-clone.git
cd tinder-clone

# Install dependencies:

npm install
cd client
npm install
cd ..

Set up environment variables: Create a .env file in the root directory and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SOCKET_PORT=your_socket_port

# Run the application:

npm run dev

