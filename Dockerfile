# Use an official Node runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./


# Install the application dependencies
RUN yarn install

# Copy the application code to the container
COPY . .

# Expose app port
EXPOSE 3000

# Define the command to run your application
CMD ["yarn", "start"]
