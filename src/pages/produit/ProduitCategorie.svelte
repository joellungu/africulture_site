<script>
    import { createEventDispatcher } from "svelte";
    import Carte from "../widgets/Carte.svelte";
    //export let produit = {}
    const dispatcher = createEventDispatcher();

    //export let categorie
    
    async function getListeProduit() {
        console.log("Salut comment tu vas ?")
        //dispatcher("change", 1);
        //var rep = fetch("http://localhost:9090/produit/all", )
        //
        const res = await fetch('http://localhost:9090/produit/all', {
            method: 'GET'
        })
        const json = await res.json()
        console.log(json)
        return json;
    }
</script>

<main>
    <div class="container">
        <!--Vue des produit suivant la catégorie...
        Nous sommes dans la partie cat: {categorie}-->
        {#await getListeProduit()}
            Une animation de load...
        {:then produits} 
            le produit sont là.
            <div class="d-flex align-content-between flex-wrap justify-content-around">
                {#each produits as item}
                    <Carte on:change={(e) => afficheAccueil(e.detail)}/>
                {/each}
            </div>
        {:catch erreur}
            Une erreur s'est produit...{erreur}
        {/await}
    </div>
</main>