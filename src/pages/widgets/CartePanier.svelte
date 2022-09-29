
<script>
    import { panier, totalPrix } from "../../services/store";
    import { fade } from "svelte/transition";
    import { Eject } from "svelte-bootstrap-icons";
    import { createEventDispatcher } from "svelte";
      //export let produit = {}
      const dispatcher = createEventDispatcher();
      export let produit;
      export let index;
      
      var quantite = produit.quantite;
      //let index;
      function supprimer() {
        //$panier = [...]
      }

      function calOne() {
        $totalPrix = $totalPrix + quantite * produit.prix;
        console.log("init");
      }
      calOne();//On calcule une seule foi...

      // $:{
      //   //quantite = produit.quantite
      //   $totalPrix = $totalPrix + quantite * produit.prix;
      //   console.log("Truc");
      // }

      async function addition(n) {
        console.log("--index: "+index);
        var valueAtIndex1 = $panier.at(index);
        valueAtIndex1.quantite = n.target.value;
        $panier[index] = valueAtIndex1;
        console.log($panier[index]);
        //
        var t = 0;
        $totalPrix = 0;
        $panier.forEach((p)=>{
          $totalPrix = $totalPrix + p.quantite*p.prix;
          console.log("--:"+p.quantite+"*"+p.prix+"="+p.quantite*p.prix);
          t++;
          console.log("index: "+t+"="+p.quantite+"="+p.prix);
        })
        //
        // if(n.target.value !== ""){
        //   if(n.target.value > quantite){
        //     console.log("La valeur saisi supp: "+(n.target.value * produit.prix));
        //     $totalPrix = $totalPrix + (n.target.value * produit.prix);
        //   }else{
        //     console.log("La valeur saisi inff: "+(n.target.value * produit.prix));
        //     $totalPrix = $totalPrix - (n.target.value * produit.prix);
        //   }
        //   quantite = n.target.value;
        // }
        // if(n.target.value === 0 || n.target.value === "" || n.target.value === NaN){
            
        //     console.log("Valeur null ou zero");
        // }else{
        //   $totalPrix = $totalPrix + (n.target.value * produit.prix);
        //   console.log(n.target.value);
        // }

        console.log("La valeur: "+n.target.value);

      }
      //
      function remove() {
        // var newListe = [];
        // for (let i = 0; i < $panier.length; i++) {
        //   if(i === index){
        //     console.log("L'index vaut: "+index+" et le i vaut: "+i+"")
        //   }else{
        //     newListe.push($panier[i]);
        //   }
        // }
        //
        // let removedItemCart = $panier.filter((value, i, arr) => {
        //   console.log("L'id 1 vaut: "+value.id+" et le id 2: "+produit.id+"")
        //   return value.id !== produit.id;
        // });
        //
        $panier = removedItemCart;
        //delete $panier[index]; 
        // $panier = $panier.filter(function(value, i, arr) {
        //   return i === index;
        // });
        
        //console.log(newListe);
        // $panier = $panier.reduce(function(result, option) {
        //   if (option.assigned) {
        //     return result.concat({
        //       name: option.name,
        //       newProperty: 'Foo'
        //     });
        //   }
        //   return result;
        // }, []);
      }
      
      async function requetteTest() {
        //print("Salut comment tu vas ?")
        //console.log("Salut comment tu vas ?")
        //afficheProduit = false;
        //console.log(true)
        dispatcher("delete");
      }
      //console.log(produit)
</script>
  <!--
  {@debug afficheProduit}
  -->
  <style>
    .close {
      color: black;
      font-size: medium;
      border-color: black;
      border-radius: 50%;
      height: 30;
      width: 30;
    }
  </style>
  
<tr>
    <td>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img 
            style="width: 120px; height: 120px"
            class="card-img-top" 
            src="http://localhost:8080/produit/image/{produit.id}/img0" alt="Card image cap"
        >
    </td>
    <td>{produit.titre}</td>
    <td>
        <div class="input-group">
            <span class="input-group-text" id="quantite">Qte</span>
            <input type="number" 
            class="form-control" 
            aria-label="Quantite"
            value={quantite}
            on:input={addition}
            aria-describedby="quantite"/>
        </div>
    </td>
    <td>{produit.prix} {produit.devise}</td> 
    <td><div class="delete" on:click={requetteTest(produit)}><div on:click={requetteTest} class="close">-</div></div></td> 
</tr>
  <!-- <div on:click={requetteTest(produit)} class="col">
    <div class="card mb-4 rounded-3 shadow-sm" >
      <img class="card-img-top" src="http://localhost:8080/produit/image/{produit.id}/img0" alt="Card image cap">
      <div class="card-body">
        <div class="card-text">
          <h5 class="titre">
            {produit.titre}
          </h5>
          <div class="sous_titre">
            {produit.nomBoutique}
          </div>
          <div class="prix">
            {produit.deviseMar} {produit.prixMar}
          </div>
          <div class="" style="text-align: center;">
            <input type="text"/>
          </div>
          <div class="">
            {#if produit.stockMar > 0}
              <div class="enstock" style="color: green">Total</div>
            {:else}
            <div class="passtock">Plus disponible</div>
              
            {/if}
          </div>
        </div>
       </div>
    </div>
  </div> -->