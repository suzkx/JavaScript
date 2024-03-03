let campoTexto=document.getElementById("campoTexto");
let addBtn=document.getElementById("add");
let main=document.querySelector("main");
let texto= campoTexto.value;

let contador=0;

function add(){
 let texto= document.getElementById("campoTexto").value;
    if((texto!==null) && (texto!=="") && (texto!==undefined)){
        contador++
       let novoItem= `
       <div id="${contador}" class="item">
            <div  onclick="marcarTarefa(${contador})" class="item-texto">
                <span>
                    ${texto}
                </span>
            </div>
            <div class="item-delete">
                <img onclick="deletar(${contador})" id="delete" src="../FILES/delete.svg">
                    <span onclick="deletar(${contador})">Deletar</span>
            </div>
        </div>
       ` 
      main.innerHTML+=novoItem;
      texto.value="";
}

// <img src="../FILES/trip_origin.svg">
}
campoTexto.addEventListener("keyup", function(event){
    if(event.keyCode===13){
        event.preventDefault();
        addBtn.click();

    }
})

function deletar(id){
    var tarefa= document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item= document.getElementById(id);
    var classe=item.getAttribute('class');
    var icone= document.getElementsByClassName("item-icone");
    let img=document.querySelector("img");

    if((classe==="item")){
        item.classList.toggle('item-feito');
       // icone.add(img.src="../FILES/task_alt.svg");

       item.parentNode.appendChild(item);
    }

    else{
        item.classList.remove("item-feito");
        item.classList.add("item");
       // icone.add(img.src="../FILES/trip_origin.svg");
    };

};