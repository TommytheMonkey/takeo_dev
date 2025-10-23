#!/bin/bash
# Start Next.js server with port from environment or default to 5000
PORT=${PORT:-5000}
echo "Starting Next.js on port $PORT"
exec npx next start -p $PORT -H 0.0.0.0
