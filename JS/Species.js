document.getElementById("Root").addEventListener("click", () =>{
    fetch("https://swapi.dev/api/species").then( res => res.json()).then((data)=>{
    document.getElementById("contexte").innerHTML=""
    //console.log(data.previous)
    document.getElementById("contexte").style.display = "block"
    for (let i =0 ;i < data.results.length; i++){
        namespecies(data.results[i].url,data.results[i].name)
    }
            if (data.previous != null){
            creationboutonpspecies(data.previous)
    }
            if (data.next != null){
                creationboutonspecies(data.next)
            }
})})
function creationboutonspecies(url){
    let btn = document.createElement('button');
    btn.innerHTML="Page Suivante"
    document.getElementById("contexte").appendChild(btn)
    //console.log(url)
    btn.addEventListener("click",() =>{
        fetch(url).then (res => res.json()).then((data)=>{
            //console.log(data);
            document.getElementById("contexte").innerHTML=""
            for (let i =0 ;i < data.results.length; i++){
                  namespecies(data.results[i].url,data.results[i].name)
            }
            if (data.previous != null){
            creationboutonpspecies(data.previous)
            }
            if (data.next != null){
                creationboutonspecies(data.next)
            }
        })
    })
}
function creationboutonpspecies(url){
    let bouton = document.createElement('button');
    bouton.innerHTML="Page Precedente"
    document.getElementById("contexte").appendChild(bouton)
    //console.log(url)
    bouton.addEventListener("click",() =>{
        fetch(url).then (res => res.json()).then((data)=>{
            //console.log(data);
            document.getElementById("contexte").innerHTML=""
            for (let i =0 ;i < data.results.length; i++){
                namespecies(data.results[i].url,data.results[i].name)
            }
            if (data.previous != null){
                creationboutonpspecies(data.previous)
            }
            if (data.next != null){
                creationboutonspecies(data.next)
            }  
        })
    })
}
function namespecies(url,name){
    let namespecies = document.createElement('div');
    namespecies.innerHTML = name
    document.getElementById("contexte").appendChild(namespecies)
    namespecies.addEventListener("click" , () =>{
    fetch(url).then (res => res.json()).then((data)=>{
        document.getElementById("contexte1").style.display = "block"
        //console.log(data)
        document.getElementById("contexte1").innerHTML=""
        document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Nom de la Race</h2>"+ data.name + "</div><br>"
        document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Classification</h2>"+ data.classification + "</div><br>"
        document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Designation</h2>" + data.designation + "</div><br>"
        document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Hauteur Moyenne</h2>" + data.average_height + "</div><br>"
        document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Couleurs de Skin</h2>" + data.skin_colors + "</div><br>"
        document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Durée de Vie</h2>" + data.average_lifespan + "</div><br>"
        document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Couleurs des yeux</h2>" + data.eye_colors+ "</div><br>"
    })
    })
}