
#!/usr/bin/env bash

# exit on error
set -o errexit

cd build
# Start server
ENV_PATH=/etc/secrets node ace jobs:listen --queue=default,analysis,media-pipeline
