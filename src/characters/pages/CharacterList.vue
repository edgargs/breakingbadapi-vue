<script setup lang="ts">
import CardList from '@/characters/components/CardList.vue';
import { useQuery } from "@tanstack/vue-query";
import breakingBadApi from "@/api/breakingBadApi";
import type { Character } from '@/characters/interfaces/character';

import characterStore from '@/store/characters.store';

const props = defineProps<{ title: string, visible: boolean}>();

const getCharactersCacheFirst = async():Promise<Character[]> => {
    if ( characterStore.characters.count > 0 ) {
        return characterStore.characters.list;
    }

    const { data } = await breakingBadApi.get<Character[]>('/characters');
    return data;
}

useQuery(
    ['characters'],
    getCharactersCacheFirst,
    {
        onSucess() {
            characterStore.loadedCharacters(data);
        }
    }
);
</script>

<template>
    <h1 v-if="characterStore.characters.isLoading"> Loading... </h1>
    <template v-else>
        <h2>{{ props.title }}</h2>

        <CardList :characters="characterStore.characters.list"/>
    </template>

</template>

<style scoped>

</style>