<script setup lang="ts">
import { RouterView } from 'vue-router';

import type { RouterLink } from '@/router/link-routers';

import NavBar from '@/shared/components/NavBar.vue';
import { characterRoute } from '@/characters/router';

const routeLinks: RouterLink[] = characterRoute.children!
.filter( route => (route.props as {visible: boolean}).visible )
.map( route => {
    return {
        name: route.name as string,
        path: route.path,
        title: route.props.title,
    };
});
</script>

<template>
<div>
    <h1>Characters</h1>

    <!-- Navbar -->
    <NavBar
        :show-icon="false"
        :links="routeLinks" />

    <!-- RouterView + Suspense -->
    <RouterView />

 </div>
</template>

<style scoped>

</style>