var movie = {
    title: "Dirty Harry",
    year: 1971 ,
    languge: "English"
}
//add a new key - value pair
movie.actor = "Clint Eastwood"
// update an existing key - value pair
movie.year = 1980
// remove a key - value pair
delete movie.languge

 var movie2 = {
     title: "Scott Pilgrim Vs The World",
     year: 2010,
     cast: ["Micheal Cera","Chris Evans"],
     subtitelLanguge: "German",
     ratings: {imdb:7.6,rt: {critics: 82, audience: 84}}
    
 }

 //console.log(movie2.cast[1])
 console.log(movie2.ratings.rt.audience)
 