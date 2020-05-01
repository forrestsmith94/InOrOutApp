<script>
function getSource(id){
    $.ajax({
        url: "https://api.spoonacular.com/cuisine/"+id+"/information?apiKey=f8990570b1cb4139919e3cfa23f3c241", success:function:(res{document.getElementbyID("sourceLink").innerHTML=res.sourceUrl
    document.getElementbyID("sourceLink").href=res.sourceUrl

})
    })
}; 
function getCuisine (Q){
    $.ajax ({url:"http://api.spoonacular.com/cuisine/search?apiKey=f8990570b1cb4139919e3cfa23f3c241&number=1&query="+q,
success:function (res){
    element.getElementbyID("output").innerHTML"<H1>"+res.results[0].title+"</h1> <br> <img src=''"+ res.baseUri+res.results[0].image+"'width='400'/> <br> ready in" res.results[0].readyInMinutes+ "minutes"
        getsource(res.results[0].id)}}))
}
})

}
</script>