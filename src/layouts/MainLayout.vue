<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white" height-hint="98">
      <div class="header">
        {{ header }}
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <div style="width: 100%">
          <q-tabs>
            <q-route-tab name="first" to="/main/stat" label="얼마나썼나" />
            <q-route-tab name="secend" to="/main/plan" label="계획을짜자" />
            <q-route-tab name="third" to="/main/rec" label="모두다기록" />
          </q-tabs>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const header = ref('얼마나썼나');
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background: #43c6ac; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #191654,
    #43c6ac
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #191654,
    #43c6ac
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
