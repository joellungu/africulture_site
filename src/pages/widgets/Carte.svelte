
<script>
  import { afficheProduit } from "../../services/store";
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { Link, navigate } from "svelte-navigator";
    import { produitDetails } from "../../services/store";
    //export let produit = {}
    const dispatcher = createEventDispatcher();
    export let produit;
    
    async function requetteTest(params) {
      //print("Salut comment tu vas ?")
      $produitDetails = params;
      console.log("Salut comment tu vas ?")
      //afficheProduit = false;
      //console.log(true)
      //dispatcher("details", params);
      navigate("/produit", { replace: false });
    }
</script>
<!--
{@debug afficheProduit}
-->
<style>

</style>

<div on:click={requetteTest(produit)} class="col">
  <div class="card mb-4 rounded-3 shadow-sm" >
    <img class="card-img-top" src="http://localhost:8080/produit/image/{produit.id}/img0" alt="Card image cap">
    <div class="card-body">
      <!-- <h5 class="card-title">{produit.id}</h5> -->
      <div class="card-text">
        <h5 class="titre">
          {produit.titre}
        </h5>
        <div class="sous_titre">
          {produit.nomBoutique}
        </div>
        <div class="prix">
          {produit.devise} {produit.prix}
        </div>
        <div class="">
          {#if produit.stock > 0}
            <div class="enstock" style="color: green">En Stock</div>
          {:else}
          <div class="passtock">Plus disponible</div>
          {/if}
        </div>
      </div>
     </div>
  </div>
  
<!-- <div class="card ">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      {produit.titre}
      <time datetime="2016-1-1">${produit.prix}</time>
    </div>
  </div>
  <div class="card-body">
    <p class="card-text soustitre-carte">{produit.titre}</p>
    <h5 class="card-title titre-carte">${produit.prix}</h5>
    <p class="card-text soustitre-carte" style="color: green;">En Stock</p>
    <-- svelte-ignore a11y-missing-attribute --
    <a class="btn btn-outline-primary" on:click={requetteTest}>Void</a>
  </div>
</div> -->
</div>