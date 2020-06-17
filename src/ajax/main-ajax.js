var source   = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);

$.ajax({
    url : 'dischi.php',
    type : 'GET',
    success : function(data) {              
        var dataParse = jQuery.parseJSON(data);
        for (var i = 0; i < dataParse.length; i++) {
            var author = dataParse[i].author;
            var genre = dataParse[i].genre;
            var poster = dataParse[i].poster;
            var title = dataParse[i].title;
            var year = dataParse[i].year;
            console.log(author, genre, poster, title, year);
            var context = {
                "poster" : poster,
                "title" : title,
                "author" : author,
                "genre": genre,
                "year": year
            };
            var html = template(context)
            $("main").append(html)
        }

    },
    error : function() {
        alert("Si è verificato un errore");
    }
});