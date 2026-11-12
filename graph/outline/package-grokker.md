# Codebase Digest: package-grokker

- Files analyzed: 5
- Total lines: 70
- Total size: 2.0 KB
- Git branch: `main`
- Git HEAD commit: `a976a49d (Revert "Use requests instead of urllib")`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
package-grokker/
├── grok-artifacts/
│   └── action.yml (33 lines, 1013 B, ~269 tokens)
├── grokkermod.py (18 lines, 719 B, ~194 tokens)
├── package-grokker.py (5 lines, 104 B, ~30 tokens)
├── package-update-check.py (11 lines, 229 B, ~65 tokens)
└── requirements.txt (3 lines, 23 B, ~6 tokens)
```

## Source Files

================================================
FILE: grok-artifacts/action.yml
================================================
name: 'Grok artifacts'
description: 'Grok MINGW CI artifacts for removed DLLs or symbols required by reverse dependencies'
inputs:
  repo:
    description: 'sync database to search for reverse dependencies'
    required: false
    default: 'mingw64'
  path:
    description: 'Directory containing updated packages to grok'
    required: true
runs:
  using: 'composite'
  steps:

  - name: Install stuff
    shell: bash
    run: |
      echo "::group::Install stuff"
      python -m venv --system-site-packages grokker_venv
      . grokker_venv/bin/activate
      pip install -r '${{ github.action_path }}/../requirements.txt'
      deactivate
      echo "::endgroup::"
  - name: Grok packages
    shell: bash
    env:
      repo: ${{ inputs.repo }}
      packagepath: ${{ inputs.path }}
    run: |
      echo "::group::Grok packages"
      . grokker_venv/bin/activate
      python -u '${{ github.action_path }}/../package-update-check.py' -v -e "${repo,,}" artifact_dir "${packagepath}"
      echo "::endgroup::"


================================================
FILE: grokkermod.py
================================================
// [OUTLINE - 9 symbols, 185 lines]
// import concurrent.futures
// import os
// import pefile
// import tarfile
// import threading
// import zstandard
// import contextlib
// import urllib.request
// L18-L30: def open_zstd_supporting_tar(name, fileobj):
// L34-L43: def pefile_set_max_import_symbols(max_symbols: int):
// L46-L99: class ProblematicImportSearcher(object):
// L47-L51: def __init__(self, problem_dll_symbols, local_mirror=None, artifacts=None):
// L53-L60: def _open_package(self, pkg):
// L62-L99: def __call__(self, pkg):
// L102-L137: def grok_dependency_tree(repo, package, package_handler):
// L139-L167: def exports_for_package(name, fileobj):
// L169-L184: def diff_package_exports(url1, url2):


================================================
FILE: package-grokker.py
================================================
// [OUTLINE - 0 symbols, 39 lines]
// import argparse
// import os
// import pacdb
// import grokkermod


================================================
FILE: package-update-check.py
================================================
// [OUTLINE - 1 symbols, 105 lines]
// import argparse
// import itertools
// import os
// import pprint
// import sys
// import contextlib
// import pathlib
// import pacdb
// import grokkermod
// L14-L19: def gha_group(title):


================================================
FILE: requirements.txt
================================================
pefile
zstandard
pacdb


