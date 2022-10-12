document.getElementById("Starships").addEventListener("click", () =>{
    fetch("https://swapi.dev/api/starships").then( res => res.json()).then((data)=>{
        document.getElementById("contexte").innerHTML=""
        //console.log(data)
        document.getElementById("contexte").style.display = "block"
        for (let i =0 ; i < data.results.length; i++ ){
            starshipsmenu(data.results[i].url,data.results[i].name)
        }
        if (data.previous != null){
        creationboutonpstarships(data.previous)
        }
        if (data.next != null){
            creationboutonstarships(data.next)
        }
})})
function starshipsmenu(url,name){
    let starshipsmenu = document.createElement('div');
    starshipsmenu.innerHTML = name
    document.getElementById("contexte").appendChild(starshipsmenu)
    starshipsmenu.addEventListener("click" , () =>{
        fetch(url).then (res=> res.json()).then((data) =>{
            document.getElementById("contexte1").style.display = "block"
            console.log(data)
            document.getElementById("contexte1").innerHTML=""
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Nom du vaisseau</h2>"+ data.name + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Capacité D'emport</h2>"+ data.cargo_capacity + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Equipage</h2>" + data.crew + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Longueur</h2>" + data.length + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Manufacturier / Constructeur</h2>" + data.manufacturer + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Nombre de passagers</h2>" + data.passengers + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Classe ou type de vaisseau</h2>" + data.starship_class+ "</div><br>"
        })
    })
}
function creationboutonstarships(url){
    let btn = document.createElement('button');
    btn.innerHTML="Page Suivante"
    document.getElementById("contexte").appendChild(btn)
    //console.log(url)
    btn.addEventListener("click",() =>{
        fetch(url).then (res => res.json()).then((data)=>{
            //console.log(data);
            document.getElementById("contexte").innerHTML=""
            for (let i =0 ;i < data.results.length; i++){
                  starshipsmenu(data.results[i].url,data.results[i].name)
            }
            if (data.previous != null){
            creationboutonpstarships(data.previous)
            }
            if (data.next != null){
                creationboutonstarships(data.next)
            }
        })
    })
}
function creationboutonpstarships(url){
    let bouton = document.createElement('button');
    bouton.innerHTML="Page Precedente"
    document.getElementById("contexte").appendChild(bouton)
    //console.log(url)
    bouton.addEventListener("click",() =>{
        fetch(url).then (res => res.json()).then((data)=>{
            //console.log(data);
            document.getElementById("contexte").innerHTML=""
            for (let i =0 ;i < data.results.length; i++){
                starshipsmenu(data.results[i].url,data.results[i].name)
            }
            if (data.previous != null){
                creationboutonpstarships(data.previous)
            }
            if (data.next != null){
                creationboutonstarships(data.next)
            }  
        })
    })
}
