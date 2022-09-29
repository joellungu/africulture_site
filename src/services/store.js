import { writable } from 'svelte/store';
export const panier = writable([]);
export let produitDetails = writable({});
export let afficheProduit = writable(0);
export let totalPrix = writable(0);

