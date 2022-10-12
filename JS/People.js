document.getElementById("People").addEventListener("click", () =>{
    fetch("https://swapi.dev/api/people").then( res => res.json()).then((data)=>{
        document.getElementById("contexte").innerHTML=""
        //console.log(data)
        document.getElementById("contexte").style.display = "block"
        for (let i =0 ; i < data.results.length; i++ ){
            peoplemenu(data.results[i].url,data.results[i].name)
        }
        if (data.previous != null){
        creationboutonppeople(data.previous)
        } 
        if (data.next != null){
            creationboutonpeople(data.next)
        }  
})})
function peoplemenu(url,name){
    let peoplemenu = document.createElement('div');
    peoplemenu.innerHTML = name
    document.getElementById("contexte").appendChild(peoplemenu)
    peoplemenu.addEventListener("click" , () =>{
        fetch(url).then (res=> res.json()).then((data) =>{
            document.getElementById("contexte1").style.display = "block"
            console.log(data)
            document.getElementById("contexte1").innerHTML=""
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Nom de la Personne</h2>"+ data.name + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Taille</h2>"+ data.height + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Poids</h2>" + data.mass + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Couleur de Cheveux</h2>" + data.hair_color + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Couleurs de Skin</h2>" + data.skin_color + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Genre</h2>" + data.gender + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Couleurs des yeux</h2>" + data.eye_color+ "</div><br>"
        })
    })
}
function creationboutonpeople(url){
    let btn = document.createElement('button');
    btn.innerHTML="Page Suivante"
    document.getElementById("contexte").appendChild(btn)
    //console.log(url)
    btn.addEventListener("click",() =>{
        fetch(url).then (res => res.json()).then((data)=>{
            //console.log(data);
            document.getElementById("contexte").innerHTML=""
            for (let i =0 ;i < data.results.length; i++){
                  peoplemenu(data.results[i].url,data.results[i].name)
            }
            if (data.previous != null){
            creationboutonppeople(data.previous)
            }
            if (data.next != null){
                creationboutonpeople(data.next)
            }
        })
    })
}
function creationboutonppeople(url){
    let bouton = document.createElement('button');
    bouton.innerHTML="Page Precedente"
    document.getElementById("contexte").appendChild(bouton)
    //console.log(url)
    bouton.addEventListener("click",() =>{
        fetch(url).then (res => res.json()).then((data)=>{
            //console.log(data);
            document.getElementById("contexte").innerHTML=""
            for (let i =0 ;i < data.results.length; i++){
                peoplemenu(data.results[i].url,data.results[i].name)
            }
            if (data.previous != null){
                creationboutonppeople(data.previous)
            }
            if (data.next != null){
                creationboutonpeople(data.next)
            }  
        })
    })
}