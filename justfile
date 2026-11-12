# C:\msys — source/research monorepo for MSYS2 / MinGW-w64. No local compilation.
set shell := ["bash", "-c"]

# clone missing repos (sequential, partial)
fetch:
    sh tools/clone.sh tools/clones.tsv

# fork any missing upstream into aphrody-labs (>=30 s apart)
forks:
    sh tools/fork.sh tools/forks.tsv

# fetch upstream for every clone and fast-forward local default branch
sync:
    for d in third_party/*/; do git -C "$d" fetch -q --filter=blob:none upstream && git -C "$d" merge -q --ff-only "upstream/$(git -C "$d" rev-parse --abbrev-ref upstream/HEAD | cut -d/ -f2-)" || echo "skip $d"; done

# push upstream default branch to our forks
push-forks:
    for d in third_party/*/; do git -C "$d" push -q origin HEAD || echo "skip $d"; done

graph:
    bun tools/pkgbuild-graph.ts && bun tools/vcpkg-map.ts

outline:
    for d in third_party/*/; do ay ingest --outline -m 60000 -o "graph/outline/$(basename $d).md" "$d" >/dev/null; done

site: graph
    bun tools/site.ts

serve:
    bun tools/site.ts --serve

# heavy work goes to prd
prd cmd:
    ssh prd "nice -n 19 {{cmd}}"
