<?php // child.php ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Child - Victim</title>
</head>
<body>
  <h2>💥 Victim Page</h2>
  <div id="points"></div>

  <script>
    window.addEventListener("message", function(e) {
      if (e.data && e.data.action === "updatePoints") {
        document.getElementById("points").innerHTML = "New Balance: " + e.data.newBal;
      }
    });
  </script>
</body>
</html>
