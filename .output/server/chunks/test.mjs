import { defineEventHandler } from 'h3';

const test = defineEventHandler(async () => (await fetch("https://v1.hitokoto.cn/")).json());

export { test as default };
//# sourceMappingURL=test.mjs.map
