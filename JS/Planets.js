document.getElementById("Planets").addEventListener("click", () =>{
    fetch("https://swapi.dev/api/planets").then( res => res.json()).then((data)=>{
        document.getElementById("contexte").innerHTML=""
        //console.log(data)
        document.getElementById("contexte").style.display = "block"
        for (let i =0 ; i < data.results.length; i++ ){
            planetsmenu(data.results[i].url,data.results[i].name)
        }
        if (data.previous != null){
        creationboutonpplanets(data.previous)
        }
        if (data.next != null){
            creationboutonplanets(data.next)
        }
})})
function planetsmenu(url,name){
    let planetsmenu = document.createElement('div');
    planetsmenu.innerHTML = name
    document.getElementById("contexte").appendChild(planetsmenu)
    planetsmenu.addEventListener("click" , () =>{
        fetch(url).then (res=> res.json()).then((data) =>{
            document.getElementById("contexte1").style.display = "block"
            console.log(data)
            document.getElementById("contexte1").innerHTML=""
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Nom de la Planette</h2>"+ data.name + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Climat</h2>"+ data.climate + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Diamétre</h2>" + data.diameter + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Populations</h2>" + data.population + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Terrain</h2>" + data.terrain + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Pourcentage d'eau sur la planette</h2>" + data.surface_water + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Temps de Rotation en h </h2>" + data.rotation_period+ "</div><br>"
        })
    })
}
function creationboutonplanets(url){
    let btn = document.createElement('button');
    btn.innerHTML="Page Suivante"
    document.getElementById("contexte").appendChild(btn)
    //console.log(url)
    btn.addEventListener("click",() =>{
        fetch(url).then (res => res.json()).then((data)=>{
            //console.log(data);
            document.getElementById("contexte").innerHTML=""
            for (let i =0 ;i < data.results.length; i++){
                planetsmenu(data.results[i].url,data.results[i].name)
            }
            if (data.previous != null){
            creationboutonpplanets(data.previous)
            }
            if (data.next != null){
                creationboutonplanets(data.next)
            }
        })
    })
}
function creationboutonpplanets(url){
    let bouton = document.createElement('button');
    bouton.innerHTML="Page Precedente"
    document.getElementById("contexte").appendChild(bouton)
    //console.log(url)
    bouton.addEventListener("click",() =>{
        fetch(url).then (res => res.json()).then((data)=>{
            //console.log(data);
            document.getElementById("contexte").innerHTML=""
            for (let i =0 ;i < data.results.length; i++){
                planetsmenu(data.results[i].url,data.results[i].name)
            }
            if (data.previous != null){
                creationboutonpplanets(data.previous)
            }
            if (data.next != null){
                creationboutonplanets(data.next)
            }  
        })
    })
}