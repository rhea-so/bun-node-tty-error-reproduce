import { PrismaClient } from "@prisma/client"; // https://bun.sh/guides/ecosystem/prisma

new PrismaClient();

setTimeout(() => {
  console.log("Hello, World!");
}, 1000);
