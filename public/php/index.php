<?php 
include "dischi.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <?php  
        foreach ($dischi as $brano ) {
            $poster = ($brano["poster"]);
            $title = ("<span>" . $brano["title"] . "</span>");
            $author = ("<span>" . $brano["author"] . "</span>");
            $genre = ("<span>" . $brano["genre"] . "</span>");
            $year = ("<span>" . $brano["year"] . "</span>");
        ?>
        <div class="elemento-brano">
            <img src="<?php echo $poster ?>" alt="">
        <?php
            echo $title;
            echo $author;
            echo $genre;
            echo $year;
        ?>
        </div>
        <?php
        };
        ?>
        </div>
    </main>
</body>
</html>