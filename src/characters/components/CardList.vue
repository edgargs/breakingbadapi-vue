<script setup lang="ts">
import CharacterCard from "@/characters/components/CharacterCard.vue";
import type { Character } from '@/characters/interfaces/character';

//! 2- Composable functions
//import { useCharacters } from '@/characters/composables/useCharacters'
//const { characters, isLoading, hasError, errorMessage } = useCharacters();

//! 3- TanStack Query
/*import breakingBadApi from '@/api/breakingBadApi';
import { useQuery } from '@tanstack/vue-query';

const getCharacterSlow = async():Promise<Character[]> => {
    const { data } = await breakingBadApi.get<Character[]>('/characters');
    return data;
}
const { isLoading, isError, data: characters, error } = useQuery(
    ['characters'],
    getCharacterSlow
);*/

interface Props {
    characters: Character[]
}
const props = defineProps<Props>();

</script>

<template>
    <!-- h1 v-if="isLoading"> Loading... </h1>
    <h1 v-if="isError"> {{ error }} </h1 -->
    <div class="card-list">
        <CharacterCard
            v-for="character of characters"
            :key="character.char_id"
            :character="character"
        />
    </div>
</template>

<style scoped>
.card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>