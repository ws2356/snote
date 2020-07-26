#!/usr/bin/env bash
set -eu

if [ "$#" -gt 0 ] ; then
  npx lerna bootstrap --strict -- "$@"
else
  npx lerna bootstrap --strict
fi
