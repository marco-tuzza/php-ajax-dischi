<?php 
include "dischi.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube Music PHP</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="https://www.gabrielerapino.com/it/files/2018/11/youtube-logo.png" alt="">
            <span>Music</span>
        </div>
        <div class="nav">
            <ul>
                <li id="home">Home</li>
                <li id="dropdown">Generi</li>
                <li id="search">Cerca</li>
            </ul>
            <input type="text" name="" value="" placeholder="Cerca">
            <i class="fas fa-search"></i>
        </div>
        <div class="user">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="">
        </div>
    </header>
    <main>
        <?php  
        foreach ($dischi as $brano ) {
            $poster = ($brano["poster"]);
            $title = ("<span>" . $brano["title"] . "</span>");
            $author = ("<span>" . $brano["author"] . "</span>");
            $genre = ("<span class = 'genre'>" . $brano["genre"] . "</span>");
            $year = ("<span class = 'year'>" . $brano["year"] . "</span>");
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