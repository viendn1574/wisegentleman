# Stage 1: Build the application with Yarn
FROM node:20 AS build
ENV NODE-ENV production

# Set working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files to the container
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the application using NGINX
FROM nginx:1.21.0-alpine as production
ENV NODE-ENV production
# Copy built files from the previous stage to NGINX directory
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to start NGINX
CMD ["nginx", "-g", "daemon off;"]