import { defineEventHandler } from 'h3';

const todo = defineEventHandler(() => [
  { id: 1, title: "nuxt3", completed: false },
  { id: 2, title: "vue3", completed: true }
]);

export { todo as default };
//# sourceMappingURL=todo.mjs.map
