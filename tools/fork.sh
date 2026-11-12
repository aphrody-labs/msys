#!/bin/sh
# fork each upstream into aphrody-labs, >=30 s apart; skip existing
while IFS='	' read -r up name; do
  if gh api "repos/aphrody-labs/$name" --jq .full_name >/dev/null 2>&1; then echo "exists $name"; continue; fi
  if gh api -X POST "repos/$up/forks" -f organization=aphrody-labs -f name="$name" -F default_branch_only=false --jq .full_name >/dev/null 2>&1; then echo "forked $name"; else echo "FAIL $name"; fi
  sleep 31
done < "$1"
