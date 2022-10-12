document.getElementById("Films").addEventListener("click", () =>{
    fetch("https://swapi.dev/api/films").then( res => res.json()).then((data)=>{
        document.getElementById("contexte").innerHTML=""
        //console.log(data)
        document.getElementById("contexte").style.display = "block"
        for (let i =0 ; i < data.results.length; i++ ){
            filmsmenu(data.results[i].url,data.results[i].title)
        }
        // if (data.previous != null){
        //     creationboutonp(data.previous)
        //     }
        // if (data.next != null){
        //     creationbouton(data.next)
        // }
})})
function filmsmenu(url,name){
    let filmsmenu = document.createElement('div');
    filmsmenu.innerHTML = name
    document.getElementById("contexte").appendChild(filmsmenu)
    filmsmenu.addEventListener("click" , () =>{
        fetch(url).then (res=> res.json()).then((data) =>{
            document.getElementById("contexte1").style.display = "block"
            console.log(data)
            document.getElementById("contexte1").innerHTML=""
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Nom du film</h2>"+ data.title + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Nombre d'episode</h2>"+ data.episode_id + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Producteurs</h2>" + data.producer + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Date de Sortie</h2>" + data.release_date + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Directeur executif</h2>" + data.director + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Résumé du Film</h2>" + data.opening_crawl + "</div><br>"
            //document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Couleurs des yeux</h2>" + data.eye_color+ "</div><br>"
        })
    })
}
function creationboutonfilms(url){
    let btn = document.createElement('button');
    btn.innerHTML="Page Suivante"
    document.getElementById("contexte").appendChild(btn)
    //console.log(url)
    btn.addEventListener("click",() =>{
        fetch(url).then (res => res.json()).then((data)=>{
            //console.log(data);
            document.getElementById("contexte").innerHTML=""
            for (let i =0 ;i < data.results.length; i++){
                  filmsmenu(data.results[i].url,data.results[i].name)
            }
            if (data.previous != null){
            creationboutonpfilm(data.previous)
            }
            if (data.next != null){
                creationboutonfilms(data.next)
            }
        })
    })
}
function creationboutonpfilms(url){
    let bouton = document.createElement('button');
    bouton.innerHTML="Page Precedente"
    document.getElementById("contexte").appendChild(bouton)
    //console.log(url)
    bouton.addEventListener("click",() =>{
        fetch(url).then (res => res.json()).then((data)=>{
            //console.log(data);
            document.getElementById("contexte").innerHTML=""
            for (let i =0 ;i < data.results.length; i++){
                filmsmenu(data.results[i].url,data.results[i].name)
            }
            if (data.previous != null){
                creationboutonpfilms(data.previous)
            }
            if (data.next != null){
                creationboutonfilms(data.next)
            }  
        })
    })
}