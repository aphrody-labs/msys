#!/bin/sh
# sequential partial clones; origin = aphrody-labs fork, upstream = original
mkdir -p third_party
while IFS='	' read -r up name; do
  d="third_party/$name"; [ -d "$d/.git" ] && { echo "have $name"; continue; }
  git clone -q --filter=blob:none "https://github.com/$up.git" "$d" && \
  git -C "$d" remote rename origin upstream && \
  git -C "$d" remote add origin "https://github.com/aphrody-labs/$name.git" && echo "cloned $name" || echo "FAIL $name"
done < "$1"
