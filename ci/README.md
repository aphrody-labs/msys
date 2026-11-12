# ci

CI definition: builds run on fr2 (`ssh cdn`, nice) or remote runners, never on the owner PC. Pipelines: graph/site regen, check-structure, clean-chroot builds per env x ISA (autobuild model, `third_party/msys2-autobuild`), repo db publish + sign, image build.
