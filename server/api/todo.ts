/*
 * @Author: PengTao mj19983171995@icloud.com
 * @Date: 2022-11-22 16:29:47
 * @LastEditors: PengTao mj19983171995@icloud.com
 * @LastEditTime: 2022-11-24 09:38:20
 * @FilePath: /nuxt-app/server/api/todo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// const todos = [
//   { id: 1, title: 'nuxt3', completed: false },
//   { id: 2, title: 'vue3', completed: true },
// ]

// export default Handler: () => {
//   return todos
// }

export default defineEventHandler(() => [
  { id: 1, title: 'nuxt3', completed: false },
  { id: 2, title: 'vue3', completed: true }
])