<script>    //
  import { createEventDispatcher } from "svelte";
  import { Link, navigate } from "svelte-navigator";
  import { Cart, Person } from "svelte-bootstrap-icons";
  import { afficheProduit, panier } from "../../services/store";
    //export let produit = {}
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
    const dispatcher = createEventDispatcher();
    
    let reqette = '';
    let listeCategorie = ["Art","Vetements","Alimentaire","Mobilier","Décoration","Autre"];
    function changeVue (params) {
      console.log(params)
      dispatcher("change", params)
    }
    function changeCategorie (params) {
      //console.log(params)
      dispatcher("changeCategorie", params)
    }
</script>

<style>
  a:link { text-decoration: none; }


  a:visited { text-decoration: none; }


  a:hover { text-decoration: none; }


  a:active { text-decoration: none; }
</style>

<!-- Header -->

<main>
  <!-- <nav class="py-1 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <a href="" class="navbar-brand">AfriCulture</a>
      <button class="navbar-toggler"
        type="button"
        id="navbarSideCollapse" aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><a href="#" on:click={()=>changeVue(0)} class="nav-link link-dark px-2" aria-current="page">Accueil</a></li>
          <li class="nav-item">
            <a href="#" class="nav-link link-dark px-2">
              <div class="flex-shrink-0 dropdown">
                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Categorie
                </a>
                <ul class="dropdown-menu text-small shadow">
                  {#each listeCategorie as cat , i}
                    <li><a class="dropdown-item"
                      on:click={()=>changeCategorie({"vue":4,"categorie":{cat},"ref":{i}})} href="#">{cat}</a></li>
                  {/each}
                </ul>
              </div>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item"><a href="#" on:click={()=>changeVue(3)}  class="nav-link link-dark px-2">Panier <div class="panier"> {$panier.length}</div></a></li>
          <li class="nav-item"><a href="#" on:click={()=>changeVue(2)}  class="nav-link link-dark px-2">Profi</a></li>
        </ul>
      </div>
    </div>
  </nav> -->
  <nav class="navbar navbar-expand-md fixed-top bg-warning vavcolor" style="background-color: rgba(255,251,192,45);">
    <div class="container-fluid">
      <a class="navbar-brand mx-4 py-3" href="#">AfriCulture</a>
      <button class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarCollapse" 
        aria-controls="navbarCollapse" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-4 mb-md-0">
          <!-- <li class="nav-item pe-4"><a href="#" on:click={()=>goToPage(4)} class="nav-link link-dark px-2">Profil</a></li> -->
          <li class="nav-item pe-4"><a href="#" on:click={()=>goToPage(1)} class="nav-link link-dark px-2" aria-current="page">Accueil</a></li>
          <li class="nav-item pe-4">
            <a href="#" class="nav-link link-dark px-2">
              <div class="flex-shrink-0 dropdown">
                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Categorie
                </a>
                <ul class="dropdown-menu text-small shadow">
                  {#each listeCategorie as cat , i}
                    <li><a class="dropdown-item"
                      on:click={()=>changeCategorie({"vue":4,"categorie":{cat},"ref":{i}})} href="#">{cat}</a></li>
                  {/each}
                </ul>
              </div>
            </a>
          </li>
          <li class="nav-item pe-4 m shopp"><a href="#" on:click={()=>goToPage(2)}  class="nav-link link-dark px-2">
            <Cart width={15} height={15} /> {$panier.length} <div class="panier"></div></a>
          </li>
          <li class="nav-item pe-4"><a href="#" on:click={()=>goToPage(4)}  class="nav-link link-dark px-2"><Person width={20} height={20} /> Profi</a></li>
        
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" on:click={()=>goToPage(3)}  type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</main>
<!--/ End Header -->