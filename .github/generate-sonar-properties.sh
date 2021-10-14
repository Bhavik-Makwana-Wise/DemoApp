#!/bin/bash

set -e
PROJECT_VERSION=$(git rev-parse --short HEAD)
template=$(cat sonar-project.properties.tmpl)
eval "echo \"${template}\"" > sonar-project.properties
