<script setup lang="ts">
import type { Character } from '@/characters/interfaces/character';
import { toRef } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{ character: Character }>();
const character = toRef(props, 'character');

const router = useRouter();

const goTo = () => {
    router.push(`by/${ character.value.char_id }`);
}
</script>

<template>
<div class="character-card" @click="goTo()">
    <img :src="character.img"
        :alt="character.name">
    <h3>{{ character.name }}</h3>
</div>
</template>

<style scoped>
.character-card {
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}

img {
    width: 150px;
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
}

</style>