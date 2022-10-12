document.getElementById("Vehicles").addEventListener("click", () =>{
    fetch("https://swapi.dev/api/vehicles").then( res => res.json()).then((data)=>{
        document.getElementById("contexte").innerHTML=""
        //console.log(data)
        document.getElementById("contexte").style.display = "block"
        for (let i =0 ; i < data.results.length; i++ ){
            vehiclesmenu(data.results[i].url,data.results[i].name)
        }
        if (data.previous != null){
        creationboutonpvehicles(data.previous)
        }
        if (data.next != null){
            creationboutonvehicles(data.next)
        }
 })})
 function vehiclesmenu(url,name){
    let vehiclesmenu = document.createElement('div');
    vehiclesmenu.innerHTML = name
    document.getElementById("contexte").appendChild(vehiclesmenu)
    vehiclesmenu.addEventListener("click" , () =>{
        fetch(url).then (res=> res.json()).then((data) =>{
            document.getElementById("contexte1").style.display = "block"
            console.log(data)
            document.getElementById("contexte1").innerHTML=""
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Nom du vehicule</h2>"+ data.name + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Capacité D'emport</h2>"+ data.cargo_capacity + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Equipage</h2>" + data.crew + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Longueur</h2>" + data.length + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Manufacturier / Constructeur</h2>" + data.manufacturer + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Nombre de passagers</h2>" + data.passengers + "</div><br>"
            document.getElementById("contexte1").innerHTML+= "<div class='flex'><h2>Type de vehicules</h2>" + data.vehicle_class+ "</div><br>"
        })
    })
}
function creationboutonvehicles(url){
    let btn = document.createElement('button');
    btn.innerHTML="Page Suivante"
    document.getElementById("contexte").appendChild(btn)
    //console.log(url)
    btn.addEventListener("click",() =>{
        fetch(url).then (res => res.json()).then((data)=>{
            document.getElementById("contexte1").style.padding="50px"
            //console.log(data);
            document.getElementById("contexte").innerHTML=""
            for (let i =0 ;i < data.results.length; i++){
                vehiclesmenu(data.results[i].url,data.results[i].name)
            }
            if (data.previous != null){
            creationboutonpvehicles(data.previous)
            }
            if (data.next != null){
                creationboutonvehicles(data.next)
            }
        })
    })
}
function creationboutonpvehicles(url){
    let bouton = document.createElement('button');
    bouton.innerHTML="Page Precedente"
    document.getElementById("contexte").appendChild(bouton)
    //console.log(url)
    bouton.addEventListener("click",() =>{
        fetch(url).then (res => res.json()).then((data)=>{
            //console.log(data);
            document.getElementById("contexte").innerHTML=""
            for (let i =0 ;i < data.results.length; i++){
                vehiclesmenu(data.results[i].url,data.results[i].name)
            }
            if (data.previous != null){
                creationboutonpvehicles(data.previous)
            }
            if (data.next != null){
                creationboutonvehicles(data.next)
            }  
        })
    })
}

// cargo_capacity: "50000"
// consumables: "2 months"
// cost_in_credits: "150000"
// created: "2014-12-10T15:36:25.724000Z"
// crew: "46"
// edited: "2014-12-20T21:30:21.661000Z"
// films: (2) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/5/']
// length: "36.8 "
// manufacturer: "Corellia Mining Corporation"
// max_atmosphering_speed: "30"
// model: "Digger Crawler"
// name: "Sand Crawler"
// passengers: "30"
// pilots: []
// url: "https://swapi.dev/api/vehicles/4/"
// vehicle_class: "wheeled"
// [[Prototype]]: Object
