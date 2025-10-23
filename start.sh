#!/bin/bash
PORT=${PORT:-5000}
exec npx next start -p $PORT -H 0.0.0.0
