<!--
 * @Author: PengTao mj19983171995@icloud.com
 * @Date: 2022-11-21 14:40:48
 * @LastEditors: PengTao mj19983171995@icloud.com
 * @LastEditTime: 2022-11-24 10:46:13
 * @FilePath: /nuxt-app/pages/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


<template>
  <div>
    <div>Index Page</div>
    <!-- 组件懒加载 -->

    <LazyMountainsList v-if="show" />
    <button v-if="!show" @click="show = true">显示列表</button>

    <!-- <div v-for="(todo, index) in data" :key="todo.id"> -->
    <!-- <input type="checkbox" v-model="todo.completed" /> -->
    <span> {{ data.id }} </span>
    <!-- </div> -->

    <div>
      <button @click="counter++">+</button>
      {{ counter }}
      <button @click="counter--">-</button>
    </div>

    <NuxtLink to="detai">详情页</NuxtLink> |
    <NuxtLink to="user-admin/1">/user-admin/1</NuxtLink> |
    <NuxtLink to="parentTest">parent</NuxtLink> |
    <NuxtLink to="parents/child">/parent/child</NuxtLink>
  </div>
</template>

<script setup>
const show = ref(false);

// const { data: todos } = await useAsyncData('todos', () => $fetch('/api/todo'))
// const { data: todos } = await useFetch("/api/todo");
const res = await useFetch("/api/test");
console.log(res);
const data = res.data;
console.log(data);
const counter = useCounter();
</script>

