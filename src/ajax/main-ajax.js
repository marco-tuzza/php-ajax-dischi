$.ajax({
    url : 'dischi.php',
    type : 'GET',
    success : function(data) {              
        var dataParse = jQuery.parseJSON(data);
        console.log(dataParse);
        for (var i = 0; i < dataParse.length; i++) {
            var author = dataParse[i].author
            var genre = dataParse[i].genre
            var poster = dataParse[i].poster
            var title = dataParse[i].title
            var year = dataParse[i].year
            console.log(author, genre, poster, title, year);
        }
    },
    error : function() {
        alert("Si è verificato un errore");
    }
});