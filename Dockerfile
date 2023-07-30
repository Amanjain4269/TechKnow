# An official Node.js runtime as a base image
FROM node:14

# Setting the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Serving the built app using a static web server
CMD ["npm", "start"]
