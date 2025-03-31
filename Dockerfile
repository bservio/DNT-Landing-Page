# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the entire project to the working directory
COPY . .

# Expose the port that Next.js will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "build",]
CMD ["npm", "run", "start",]
