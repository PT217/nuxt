/*
 * @Author: PengTao mj19983171995@icloud.com
 * @Date: 2022-11-22 17:02:51
 * @LastEditors: PengTao mj19983171995@icloud.com
 * @LastEditTime: 2022-11-22 17:06:37
 * @FilePath: /nuxt-app/composables/useCounter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE 
 */
export const useCounter = () => useState('counter', () => 1)