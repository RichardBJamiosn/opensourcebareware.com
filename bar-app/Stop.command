#!/bin/bash
# Open Source Barware — Stop Server

lsof -ti:5051 | xargs kill -9 2>/dev/null
echo "Bar Inventory server stopped."
