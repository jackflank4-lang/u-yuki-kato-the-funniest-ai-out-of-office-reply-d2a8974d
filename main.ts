import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I am on vacation. This reply was written by my replacement agent, who is also on vacation and also wrote this.";

if (!REPLY.trim() || REPLY.length > 160) {
  throw new Error("reply must be 1-160 characters, not only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
