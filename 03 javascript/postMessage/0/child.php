<?php // child.php ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Child Iframe</title>
</head>
<body>
  <h2>Child iframe</h2>
  <div id="msg"></div>

  <script>
    window.addEventListener("message", function(e) {
      document.getElementById("msg").innerHTML = "Message: " + e.data;
    });
  </script>
</body>
</html>
