<script>
    import BasDePage from "../basdepage/BasDePage.svelte";

  let nom;
  function afficheNom(){
      console.log(nom)
  }
</script>

<main>
  <div class="form-signin w-100 m-auto">
    <div class="container">
      <div class="row">
        <div class="col col-md-3 col-lg-3"></div>
        <div class="clo col-md-6 col-lg-6">
          <form>
            <img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        
            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
        
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
        </div>
        <div class="col col-md-3 col-lg-3"></div>
      </div>
    </div>
  </div>
  <BasDePage />
</main>

