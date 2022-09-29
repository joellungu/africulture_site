<script>
    import { createEventDispatcher, getContext } from "svelte";
    import { Link, navigate } from "svelte-navigator";
    import { Cart, Arrow90degLeft, Back } from "svelte-bootstrap-icons";
    import Popup from "../widgets/Popup.svelte";
    import { afficheProduit, panier, produitDetails } from "../../services/store";
    import Entete from "../header/Entete.svelte";
    import BasDePage from "../basdepage/BasDePage.svelte";
    //
    //
    console.log(getContext('simple-modal'));
    const open = getContext('simple-modal');
    //export let produit = {}
    const dispatcher = createEventDispatcher();
    let produit = $produitDetails ;
    let imageProduit
    var listeImage = [];
    let quantite = 1
    //
    function goToPage(t) {
      console.log("cool");
      if(t === 1){
        navigate("/", { replace: false });
      }else if(t === 2){
        navigate("/panier", { replace: false });
      }else if(t === 3){
        navigate("/recherche", { replace: false });
      }else if(t === 4){
        navigate("/profil", { replace: false });
      }
      
    }
    
    //nombreImages
    for (let index = 0; index < produit.nombreImages; index++) {
        //const element = array[index];
        const map = new Map();
        map.set('id', index)
        listeImage.push(map);
        //[index] = {"id":index}
        //console.log(listeImage[index])
        //panier = [...panier,{"id":index,"titre":"letitre plus id:{index}","prix":index * 5}]
    }

    //Pour affiche l'image principale du produit.
    function load() {
      imageProduit="http://localhost:8080/produit/image/"+produit.id+"/img0";
    }
    load();
    function changeImage(index) {
      console.log("le suit using");
      imageProduit="http://localhost:8080/produit/image/"+produit.id+"/img"+index;
    }
    
    async function requetteTest(params) {
      console.log("Salut comment tu vas ?")
      dispatcher("change", 2);
    }

    const showPopup = () => {
      //open(Popup, {message: "Produit ajouté dans le panier"})
    }

    function ajouterAuPanier() {
        var m = {}
        m['id'] = produit['id'];
        m['idfournisseur'] = produit['idfournisseur']
        m['titre'] = produit['titre']
        m['image'] = produit['image']
        m['devise'] = produit['devise']
        m['prix'] = produit['prix']
        m['paysOrigine'] = produit['paysOrigine']
        m['codePays'] = produit['codePays']
        m['quantite'] = quantite;
        m['poidsUnitaire'] = produit['poidsUnitaire']
        //console.log("Le map vaut: "+produit['titreMar']);
        //console.log("Le map vaut: "+m['titre'])
      if(quantite > 0){
        $panier.push(m)
        $panier = $panier
        console.log($panier);
        showPopup();
      }else{
        showPopup();
      }
    }

</script>

<style>
  img {
    width: 100%;
    height: 50%;
  }
  .item {
    width: 25%;
    height: 25%;
    background-color: blue;
    color: black;
  }
  .titre {
    height: 5px;
    width: 100%;
    border-top: 8px solid #bbb;
    border-radius: 5px;
    background-color: yellow;
  }
  main#truc .poids{
    color: green;
    background-color: yellow;
    font-size: 13;
    font-weight: normal;
    background-color: yellow;
    height: 10px;
    width: 100px;
  }
  main#truc .cles{
    color: blue;
    font-weight: 700;
  }
</style>

<main>
  <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
    <div class="container-fluid">
      <a class="navbar-brand mx-4 py-3" href="#" on:click="{() => navigate(-1)}" > <Arrow90degLeft width={15} height={15} /></a>
      <a class="navbar-brand mx-4 py-3 m shopp" href="#" on:click="{() => goToPage(2)}" >
        <Cart width={15} height={15} /> {$panier.length} <div class="panier"></div>
      </a>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-4 mb-md-0">
          <!-- <li class="nav-item pe-4"><a href="#" on:click={()=>goToPage(4)} class="nav-link link-dark px-2">Profil</a></li> -->
          <li class="nav-item pe-4 m shopp">
            <a href="#" on:click={()=>goToPage(2)} 
              class="nav-link link-dark px-2"> <Cart width={15} height={15} /> {$panier.length}
            </a>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
  <div id="image-produit" class="container">
    <div class="d-flex justify-content-center">
      <img class="card-img-top" src={imageProduit} alt="Card image cap">
      <!-- <div class="alert alert-danger" role="alert">
        Erreur du à caude de : {error.message}
      </div> -->
    </div>
    <hr>
    <div class="row">
      {#each listeImage as item}
      <!-- 
      {console.log(item.has('id'))}
      {console.log(item.get('id'))}
      {console.log(item["id"])} -->
        <div class="col-3 col-sm-2 col-md-2 col-lg-2">
          <div on:click={(e)=>changeImage(item.get('id'))}>
              <img class="card-img-top" src="http://localhost:8080/produit/image/{produit.id}/img{item.get('id')}" alt="Card image cap">
          </div>
        </div>
      {/each}
    </div>
    <hr>
    <h5 class="titre">
      {produit.titre}
    </h5>
    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6">
        Fournisseur
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-6">
        <div class="sous_titre">
          {produit.nomBoutique}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6">
        <div class="prix">
          Prix
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-6">
        {produit.devise} {produit.prix}
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6">
        <div class="cles">
          Poids: 
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-6">
        <div class="poids">{produit.poidsUnitaire} Kg</div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6">
        <div class="cles">
          Disponibilité: 
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-6">
        {#if produit.stock > 0}
          <div class="enstock" style="color: green">En Stock ({produit.stock})</div>
        {:else}
          <div class="passtock">Plus disponible</div>
        {/if}
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6">
        Saisissez le quantité
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-6">
        <input type="text" bind:value={quantite}>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6">
        <button on:click={ajouterAuPanier} id="btn-acheter-maintenant" class="btn btn-primary btn-lg rounded-0" type="button">AJOUTER AU PANIER</button>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-6">
        <!-- <button on:click={ajouterAuPanier} id="btn-ajouter-panier" class="btn btn-outline-secondary btn-lg px-4" type="button">AJOUTER  AU  PANIER</button> -->
      </div> 
    </div>
  </div>
  <BasDePage/>
</main>