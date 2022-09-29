<script >
//import { Button } from 'svelma'
import { afficheProduit, panier } from "../../services/store";
import { fade } from "svelte/transition";
import BasDePage from "../basdepage/BasDePage.svelte";
import Entete from "../header/Entete.svelte";
import Produit from "../produit/Produit.svelte";
import ProduitCategorie from "../produit/ProduitCategorie.svelte";
import Profil from "../profil/Profil.svelte";
import Carte from "../widgets/Carte.svelte";
import Panier from "../panier/Panier.svelte";
import Commande from "../commande/Commande.svelte";
//import TrucEnt from './TrucEnt.svelte';
for (let index = 0; index < 10; index++) {
    //const element = array[index];
    //console.log(index)
    //$panier[index] = {"id":index,"titre":"letitre plus id:{index}","prix":index * 5}
    //panier = [...panier,{"id":index,"titre":"letitre plus id:{index}","prix":index * 5}]
}
//
//panier = panier;
//
$:ap = false
let categorie
let produit
//$afficheProduit = true

function afficheAccueil(props) {
    
    //afficheProduit.set(props)
    afficheProduit.set(props)
    ap=props;
    //console.log(ap);
    //console.log($afficheProduit);
}

function afficheProduitDetails(props) {
    
    produit = props;
    produit = produit;
    afficheProduit.set(1)
}

function afficheCategorieProduit(props) {
    
    //afficheProduit.set(props)
    afficheProduit.set(props.vue)
    categorie = props.categorie.cat
    //console.log(props.categorie.cat);
    //console.log(afficheProduit);
}
//
async function getAllProduits() {
		const res = await fetch('http://localhost:8080/produit/all', { method: 'GET' });
		const text = await res.json();
		if (res.ok) {
            //console.log(text);
			return text;
		} else {
			throw new Error(text);
		}
	}

	let promise = getAllProduits();

	function handleClick() {
		promise = getAllProduits();
	}
//
</script>
<!--
{@debug panier}
-->

<style>
</style>

<main>
    <!-- en tete de la page <div>truc::: {ap.getters}</div> <Truc/> -->
    <Entete on:change={(e)=>afficheAccueil(e.detail)}
        on:changeCategorie={(e)=>afficheCategorieProduit(e.detail)}
        />
        <!-- la page avec les produits selon la requette -->
        {#await promise}
            <p>Chargement en cours ...</p>
        {:then produits}
        <br>
        <br>
            <div transition:fade class="container py-5">
                <div class="row row-cols-2 row-cols-md-4 row-cols-lg-4 mb-3 text-center">
                    {#each produits as item}
                        <!-- {#if item.id % 3 == 0}
                        {console.log("condition respecté...")}
                            <div></div>
                        {/if} -->
                        <Carte produit={item} on:details={(e) => afficheProduitDetails(e.detail)}/>
                    {/each}
                </div>
            </div>
        {:catch error}
        <div class="alert alert-danger" role="alert">
            Erreur du à caude de : {error.message}
          </div>
        {/await}
    <BasDePage/>
    <!-- le bas de page  -->
</main>
