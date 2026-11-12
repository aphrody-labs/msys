# msys (name in identity.toml): source/metadata distribution for MSYS2 / MinGW-w64 + Windows-native bridges. No local compilation.
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

# cross-ecosystem map (top 300 by reverse deps); add --offline to skip nuget/psgallery probes
xmap *args: graph
    bun tools/xmap.ts {{args}}

# assert tree == docs/ARCHITECTURE.md
check:
    bun tools/check-structure.ts

outline:
    for d in third_party/*/; do ay ingest --outline -m 60000 -o "graph/outline/$(basename $d).md" "$d" >/dev/null; done

site: xmap
    bun tools/site.ts

serve:
    bun tools/site.ts --serve

# heavy work goes to fr2
prd cmd:
    ssh cdn "nice -n 19 {{cmd}}"

# full regen + verification
all: site check
