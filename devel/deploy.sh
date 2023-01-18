#!/bin/bash

set -ex

TARGET=gs://figurl/plotly-1

yarn build
gsutil -m cp -R ./build/* $TARGET/