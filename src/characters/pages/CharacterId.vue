<script setup lang="ts">
import { useRoute } from 'vue-router';

import characterStore from '@/store/characters.store';
import breakingBadApi from '@/api/breakingBadApi';
import type { Character } from '@/characters/interfaces/character';

import { useQuery } from "@tanstack/vue-query";

const route = useRoute();
const { id } = route.params as { id: string };

const getCharacterCacheFirst = async(characterId: string):Promise<Character> => {
    if (characterStore.checkIdInStore(characterId)) {
        return characterStore.ids.list[characterId];
    }

    const { data } = await breakingBadApi.get<Character[]>(`/characters/${characterId}`);
    return data[0];
}

const { data } = useQuery(
    ['characters', id],
    () => getCharacterCacheFirst(id),
    {
        onSucess(character) {
            characterStore.loadedCharacter(character);
        }
    }
);
</script>

<template>
<div>
    <h1>Character #{{ id }}</h1>
    <code>
    {{ data }}
    </code>
 </div>
</template>

<style scoped>

</style>