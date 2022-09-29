<script>
    import { afficheProduit, panier, totalPrix } from "../../services/store";
    import { fade } from "svelte/transition";
    import CartePanier from "../widgets/CartePanier.svelte";
    //
    import { Modals, closeModal } from 'svelte-modals'
    import { openModal } from 'svelte-modals'
    //import ModalComponent from "./ModalComponent.svelte";
    import Popup from "../widgets/Popup.svelte";
    import BasDePage from "../basdepage/BasDePage.svelte";
    import Entete from "../header/Entete.svelte";
    //
    let xPos = 50;
    let yPos = 50;
    let display = "none";
    function openM() {
       display = "block";
    }
    function closeM() {
       display = "none";
    }
    //
    $:{
      //total = 0;
      //
    }
    //
    let total = 0;
    function calcule(params) {
        total = total + params;
        console.log(params)
    }
    //
    function remove(item) {
      //
      $panier = $panier.filter(t => t !== item);
      $panier.forEach((p)=>{
          $totalPrix = $totalPrix + p.quantite*p.prix;
          console.log("--:"+p.quantite+"*"+p.prix+"="+p.quantite*p.prix);
          //t++;
          console.log("index="+p.quantite+"="+p.prix);
        })
    }
    //
    // function handleClick() {
    //     openModal(Popup, { title: "Title of the Modal", message: "This is an alert using Svelte-Modal" })
    // }
</script>

<main >
  <Entete/>
  <br>
  <br>
  <br>
  <div class="container">
    <table class="table table-triped table-expended  py-7">
      <thead>
          <tr>
              <th>#</th>
              <th>Produit</th>
              <th>Quantite</th>
              <th>Prix</th> 
              <th></th> 
          </tr>
      </thead>
      <tbody>
          {#each $panier as item (item.id)}
              <CartePanier index={0} produit={item} on:delete={(e) => remove(item)} />       
          {/each}
      </tbody>
    </table>
    <!-- <div class="container">
        <div class="float-start">Total</div>
        <div class="float-end">$ 54345</div>
    </div> -->
    <div class="container-fuild">
        <div class="row justify-content-between">
            <div class="col-6">Total</div>
            <div class="col-6 text-end">$ {$totalPrix}</div>
        </div>
    </div>
    <hr>
    <div class="text-center py-5">
        {#if $panier.length > 0}
            <div
                on:click={openM} 
                class="btn btn-outline-warning"
            >Commander</div>
        {/if}
    </div>
  </div>
  <BasDePage/>
</main>