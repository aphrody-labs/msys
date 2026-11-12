# Codebase Digest: aas-sign-build

- Files analyzed: 2
- Total lines: 19
- Total size: 386 B
- Git branch: `main`
- Git HEAD commit: `c5ea2848 (Initial commit)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
aas-sign-build/
├── Dockerfile (1 lines, 35 B, ~11 tokens)
└── README.md (18 lines, 351 B, ~103 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
# aas-sign build for MSYS2 CI pipelines

This builds the [skeeto/aas-sign](https://github.com/skeeto/aas-sign) Linux
`x86_64` binary in a repeatable way. So
we can use the binary for code signing in our CI pipelines without needing to
depend on third party binaries.

Build:

```bash
docker build --output out .
```

Result:

```text
out/aas-sign
```


================================================
FILE: Dockerfile
================================================
// [OUTLINE - 0 symbols, 68 lines]


