#!/bin/bash
# Open Source Barware — Install Script (macOS)
# Double-click to install. Starts the server automatically.

set -e

echo ""
echo "  Open Source Barware — Installing..."
echo "  ────────────────────────────────────"
echo ""

# Install Python dependencies
echo "  Installing Python packages..."
pip3 install flask openpyxl --quiet

# Create install directory
DEST="$HOME/bar-inventory"
mkdir -p "$DEST"
echo "  Install directory: $DEST"

# Copy app files
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cp "$SCRIPT_DIR/server.py" "$DEST/"
cp "$SCRIPT_DIR/dashboard.html" "$DEST/"
echo "  Copied app files."

# Initialize data files (don't overwrite existing data)
[ -f "$DEST/bar_data.json" ]     || echo '{"bar_name":"","created":"","stations":[]}' > "$DEST/bar_data.json"
[ -f "$DEST/count_history.json" ] || echo '[]' > "$DEST/count_history.json"
[ -f "$DEST/invoice_history.json" ] || echo '[]' > "$DEST/invoice_history.json"
[ -f "$DEST/config.json" ]        || echo '{"api_base_url":"","api_key":"","model":""}' > "$DEST/config.json"
echo "  Data files ready."

# Write launchd plist for auto-start on login
PLIST_DIR="$HOME/Library/LaunchAgents"
PLIST="$PLIST_DIR/com.osb.barinventory.plist"
mkdir -p "$PLIST_DIR"

PYTHON3_PATH="$(which python3)"

cat > "$PLIST" << PLISTEOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.osb.barinventory</string>
  <key>ProgramArguments</key>
  <array>
    <string>$PYTHON3_PATH</string>
    <string>$DEST/server.py</string>
  </array>
  <key>WorkingDirectory</key>
  <string>$DEST</string>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>/tmp/bar_inventory.log</string>
  <key>StandardErrorPath</key>
  <string>/tmp/bar_inventory.log</string>
  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key>
    <string>/usr/local/bin:/usr/bin:/bin</string>
  </dict>
</dict>
</plist>
PLISTEOF

# Load the agent (unload first in case it was already loaded)
launchctl unload "$PLIST" 2>/dev/null || true
launchctl load "$PLIST"
echo "  Auto-start configured (runs on login)."

# Wait for server to start
echo "  Starting server..."
sleep 3

# Open browser
open "http://localhost:5051/" 2>/dev/null || true

echo ""
echo "  ────────────────────────────────────"
echo "  Installation complete!"
echo "  Dashboard: http://localhost:5051/"
echo "  Data:      $DEST"
echo "  Logs:      /tmp/bar_inventory.log"
echo ""
echo "  The server will start automatically when you log in."
echo "  Use Start.command / Stop.command to control it manually."
echo ""
read -p "  Press Enter to close this window..."
