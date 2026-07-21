FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy the entrypoint script into the container
COPY entrypoint.sh /usr/src/app/entrypoint.sh

# Ensure the script is executable
RUN chmod +x /usr/src/app/entrypoint.sh

# Use absolute path for the ENTRYPOINT
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
