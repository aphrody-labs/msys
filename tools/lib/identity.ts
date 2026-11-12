// Repo root + identity.toml + relocatable sibling roots (SRC_ROOT / LABS_ROOT override). No absolute paths in tools.
import { join, resolve } from "node:path";
export const ROOT = resolve(import.meta.dir, "..", "..");
export const ID = Bun.TOML.parse(await Bun.file(join(ROOT, "identity.toml")).text()) as any;
export const SRC = resolve(ROOT, process.env.SRC_ROOT ?? ID.paths.src);
export const LABS = resolve(ROOT, process.env.LABS_ROOT ?? ID.paths.labs);
