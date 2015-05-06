<!doctype html>
<html lang="en">
  <head>
      <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="U Rec CMS">

        <title>U Rec &ndash; CMS</title>

    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" type="text/css">

    <link rel="stylesheet" type="text/css" href="css/stylesheets/style.css">
  </head>
  <body>
    <div id="insert">
      <h1>Hello World</h1>
    </div>

    <script type="text/template" id="outdoorrecAnnouncements">
      <div class="panel shout">
            <div class="shout-content">
                <img src="http://dummyimage.com/100x100/B70724/B70724" alt="">
                <fieldset>
                    <div class="shout-title">U-Rec Closed March 17th for St. Patty's Day and all that</div>
                    <p>Have fun and remember the Big 3</p>
                </fieldset>
            </div>
        </div>
        <div class="panel shout">
            <div class="shout-content">
                <!-- <img src="http://dummyimage.com/100x100/B70724/B70724" alt=""> -->
                <fieldset>
                    <div class="shout-title">Two days left to sign up for March Madness!!!</div>
                    <p>If you walk or run 100 miles in March, you'll be entered into a drawing to win a $25 gift card! (not really!!) ((but actually really!!))</p>
                </fieldset>
            </div>
        </div>
    </script>


  </body>
  <footer>
    <!-- Backbone and dependencies -->
    <script src="js/vendor/jquery-2.1.3.min.js"></script>
    <script src="js/vendor/underscore.js"></script>
    <script src="js/vendor/backbone.js"></script>

    <!-- Backbone App -->
    <script src="js/app.js"></script>

    <!-- Models -->
    <script src="js/models.js"></script>

    <!-- Collections -->
    <script src="js/collections.js"></script>
    <!-- Views -->
    <!--<script src="js/views/climbingwall.js"></script> -->
    <!--<script src="js/views/main.js"></script> -->
    <script src="js/views/outdoorrec.js"></script>
    <!--<script src="js/views/facility.js"></script> -->
    <!--<script src="js/views/misc.js"></script> -->
    <!--<script src="js/views/intramurals.js"></script> -->

    <script type="text/javascript">
      window.onload = function() {
          app.init();
      }
    </script>

  </footer>
</html>