#!/bin/bash
SCRIPT_DIR="${BASH_SOURCE[0]%\\*}"
SCRIPT_DIR="${SCRIPT_DIR%/*}"
ARTIFACTS=$SCRIPT_DIR/../artifacts

DEPLOYMENT_SOURCE=$SCRIPT_DIR

DEPLOYMENT_TARGET=$ARTIFACTS/wwwroot
echo Handling node.js deployment.

rm -rf $DEPLOYMENT_TARGET/public
cp -rf $DEPLOYMENT_SOURCE/public $DEPLOYMENT_TARGET

echo "Finished successfully."
