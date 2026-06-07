#!/bin/bash
# Open Source Barware — Start Server

DEST="$HOME/bar-inventory"

# Kill any existing instance on port 5051
lsof -ti:5051 | xargs kill -9 2>/dev/null
sleep 1

if [ ! -f "$DEST/server.py" ]; then
  echo "Server not installed. Run Install.command first."
  read -p "Press Enter to close..."
  exit 1
fi

cd "$DEST"
nohup python3 server.py >> server.log 2>&1 &
sleep 2

open "http://localhost:5051/" 2>/dev/null || true
echo "Bar Inventory running at http://localhost:5051/"
