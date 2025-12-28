import fs from "fs";

const file = process.argv[2];
if (!file) {
  console.error("usage: node read-res-index.js <resources.index>");
  process.exit(1);
}

const buf = fs.readFileSync(file);
const result = {};

for (let off = 0; off + 16 < buf.length; off++) {
  const recordSize = buf.readUInt32LE(off);
  if (recordSize <= 8 || off + 4 + recordSize > buf.length) continue;

  let p = off + 4;

  const resType = buf.readUInt32LE(p); p += 4;
  const id = buf.readUInt32LE(p); p += 4;

  const valueSize = buf.readUInt16LE(p); p += 2;
  if (valueSize === 0 || p + valueSize + 2 > off + 4 + recordSize) continue;

  let value = buf.slice(p, p + valueSize).toString("utf8");
  p += valueSize;

  const nameSize = buf.readUInt16LE(p); p += 2;
  if (nameSize === 0 || p + nameSize > off + 4 + recordSize) continue;

  let name = buf.slice(p, p + nameSize).toString("utf8");

  // 清理 \0
  name = name.replace(/\0/g, "");
  value = value.replace(/\0/g, "");

  // 排除 header 垃圾命中
  if (!name) continue;

  result[name] = value;
}

console.log(result);
