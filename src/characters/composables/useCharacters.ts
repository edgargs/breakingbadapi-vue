import { onMounted, ref } from 'vue';
import breakingBadApi from '@/api/breakingBadApi';
import type { Character } from '@/characters/interfaces/character';

const characters = ref<Character[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>();

export const useCharacters = () => {

    onMounted( async () => {
        await loadCharacters();
    });

    const loadCharacters = async() => {
        if ( characters.value.lentgh > 0 ) return;

        isLoading.value = true;
        try {
            const { data } = await breakingBadApi.get('/characters');

            characters.value = data;

        } catch (error) {
            hasError.value = true;
            console.log(error);
            errorMessage.value = JSON.stringify(error);
        }
        isLoading.value = false;
    }

    return {
        characters,
        isLoading,
        hasError,
        errorMessage,
    }
}
