<script>
	// import Accueil from "./pages/accueil/Accueil.svelte"
	// import { Router, Link, Route } from "svelte-navigator";
    // import Recherche from "./pages/recherche/Recherche.svelte";
    // import Profil from "./pages/profil/Profil.svelte";
    // import ProduitCategorie from "./pages/produit/ProduitCategorie.svelte";
	// import Produit from "./pages/produit/Produit.svelte";
	// import Carte from "./pages/widgets/Carte.svelte";
	// import Panier from "./pages/panier/Panier.svelte";
	// import Commande from "./pages/commande/Commande.svelte";
    import Maintenace from "./pages/maintenace.svelte";
	export let name;
</script>

<!-- <main>
	<Accueil/>
</main> -->
<!-- <Router>
	<div>
		<Route path="/">
			<Accueil />
		</Route>
		<Route path="recherche" component={Recherche} />
		<Route path="produit" component={Produit} />
		<Route path="panier" component={Panier} />
		<Route path="commande" component={Commande} />
		<Route path="categorie" component={ProduitCategorie} />
		<Route path="profil" component={Profil} />
		<Route path="politique" component={Profil} />
		
	</div>
</Router> -->
<main>
	<Maintenace/>
</main>
<!-- <Route path="categorie/*">
			<Route path="/">
				<ProduitCategorie />
			</Route>
			<Route path=":id" component={ProduitCategorie} />
		</Route>
		<Route path="search/:query" let:params>
			<Recherche query={params.query} />
		</Route> -->
<style>
	
</style>