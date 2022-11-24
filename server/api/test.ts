/*
 * @Author: PengTao mj19983171995@icloud.com
 * @Date: 2022-11-23 16:07:58
 * @LastEditors: PengTao mj19983171995@icloud.com
 * @LastEditTime: 2022-11-23 16:25:49
 * @FilePath: /nuxt-app/server/api/test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default defineEventHandler(async () => (await fetch('https://v1.hitokoto.cn/')).json())
// export default defineEventHandler(() => ([
//   { id: 1, hitokoto: 'nuxt3', },
//   { id: 2, hitokoto: 'vue3', },
// ]))