<script>
    import BasDePage from "./basdepage/BasDePage.svelte";
    //
</script>

<main>
	<div class="header-row" id="header-row" style="padding: 0px; overflow:hidden; height:100px;">
        <!-- container-fluid is the same as container but spans a wider viewport, 
    it still has padding though so you need to remove this either by adding 
    another class with no padding or inline as I did below -->
   <div class="container-fluid" style="padding: 0px;">
      <div class="row"> 
        <!-- You originally has it set up for two columns, remove the second 
    column as it is unneeded and set the first to always span all 12 columns 
    even when at its smallest (xs). Set the overflow to hidden so no matter 
    the height of your image it will never show outside this div-->
         <div class="col-xs-12"> 
            <a class="navbar-brand logo" href="index.html">
        <!-- place your image here -->
               <img src="http://placekitten.com/g/1200/600" alt="company logo" style="width: 100%;">
            </a> 
         </div>     
      </div>
   </div>
</div>
  <div class="centre">
    En maintenance...
  </div>
  <BasDePage />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	* {
       margin: 0; 
       padding: 0;
     }

     .centre { 
      display: flex;
      align-items: center;
      justify-content: center;
     }

     div#banner { 
       position: absolute; 
       top: 0; 
       left: 0; 
       background-color: #DDEEEE; 
       width: 100%; 
     }
     div#banner-content { 
       width: 800px; 
       margin: 0 auto; 
       padding: 10px; 
       border: 1px solid #000;
     }
     div#main-content { 
       padding-top: 70px;
    }
</style>