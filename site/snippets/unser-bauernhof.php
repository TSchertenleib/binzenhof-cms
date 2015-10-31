  <section class="inhalt-unterseiten">
      <div>
        <img class="ueberbild" src="assets/media/images/ueberbild_unser_bauernhof.jpg" alt="Start">
      </div>
      <div class="text">
        <div class="uebertext-titel">
          <h1><h1><?php echo $page->title()->html() ?></h1></h1>
        </div>
        <div class="uebertext">
         <p> <?php echo $page->text()->kirbytext() ?></p>
        </div>
      </div>


      <div class="grid">
        <figure class="effect-ming">
          <img src="assets/media/images/ueber_uns.jpg" alt="Über uns"/>
          <figcaption>
            <h2>Über Uns</h2>
            <p class="beschriftung">Auf dem Binzenhof leben und arbeiten </br> wir im Einklang mit der Natur.</p>
            <p class="mehr">KLICKEN,</br>UM MEHR ZU ERFAHREN</p>
            <a href="ueber-uns">Mehr erfahren</a>
          </figcaption>     
        </figure>
        <figure class="effect-ming">
          <img src="assets/media/images/unsere_tiere.jpg" alt="Unsere Tiere"/>
          <figcaption>
            <h2>Unsere Tiere</h2>
            <p class="beschriftung">Jedes unserer Tiere soll ein glückliches</br> und schönes Leben haben.</p>
            <p class="mehr">KLICKEN,</br>UM MEHR ZU ERFAHREN</p>

            <a href="unsere-tiere">Mehr erfahren</a>
          </figcaption>     
        </figure>
      </div>

      <div class="abstand-oben"></div>
      <div class="abstand-oben2"></div>
      <div class="zitat">
        <h1>„Das Bauern ist eine Berufung. Wenn man das nicht lieben würde, würde 
          man es nicht tun.“</h1>
          <h6>Susanne Knörr</h6>
        </div>
           <div class="abstand-oben"></div>
          <div class="grau-container">

        <div class="text">
          <h3>UNSER BINZENHOF</h3>
          <div class="uebertext">
            <p><?php echo $page->unser_angebot_text()->kirbytext() ?></p>
          </div>

          <div class="slider-container">  
              <div class="site-slider-laedeli is-active">
              <?php foreach($page->images() as $image) : ?>
              <div><img src="<?php echo $image->url('') ?>" alt=""></div>
              <?php endforeach; ?>
              </div>
          </div>    

        </div>

          <div class="strange">
            <div class="abstand-oben"></div>
            <div class="abstand-oben"></div>
          </div>
           <div class="abstand-oben"></div>