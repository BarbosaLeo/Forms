
/*
function add(type) {
    var element = document.createElement("article");   
    };
    var foo = document.getElementById("dependente") 
        foo.appendChild(element);
}

document.getElementById("depadd").onclick = function(){
    add("text");
};*/


var cpf = false;
function addC(){
    var cpfc = "<input type='tel' maxlength='11' placeholder=' CPF' pattern='[0-9]{3}.[0-9]{3}.[0-9]{3]-[0-9]{2}' required>"
    if(cpf == false){
        $("#divc").append(cpfc)
        cpf = true
    }
}
function removeC(){
    $("#divc").empty();
    return cpf = false
}


//var i = [];

function addForm() {
    $(("<div />"), { id:"depremovable"})
        .append($("<b>Nome Completo: <b/>"))
        .append($("<input />", { type:"text", size:"50", required:true}))
        .append($("<br>"))
        .append($("<b> Relação: <b/>"))
        .append($("<input />", { type:"text", size:"20", placeholder:"Ex. Esposa(o), filha(o)..." , required:true}))
        .append($("<br>"))
        .append($("<b>Data de Nascimento: </b>")
        .append($("<input />", { type:"date", required:true})))
        .append($("<br>"))
        .append($("<b>CPF: </b>")
        .append($("<input />", { type:"tel", maxlenght:"11", placeholder:"123.123.123-00", pattern:"[0-9]{3}.[0-9]{3}.[0-9]{3]-[0-9]{2}", required:true})))
        .append($("<br>"))
        .append($("<button>", {class:"btn btn-danger btn-sm", id: "RemoveBtn", onclick:"removeForm()"})
            .append($("<span>", {class:"glyphicon glyphicon-minus"}))
            .append($("<span> Remover<span/>", {class:"glyphicon glyphicon-minus"})))
        .appendTo("#depContainer");
    //i++;
}

function removeForm() {
    var removable =
    document.getElementById("depremovable");
    removable.remove();
}
function removeB(tipo) {
    var removable =
    document.getElementById("bremovable"+tipo);
    removable.remove();
}

function buttonDrop(){
    document.getElementById("myDropdown").classList.toggle("show");
}

var num = 0;
var index = 0;

function btnBens(num){
    switch(num != null){
        case num == 0:
            $(("<tr />"), { id:"bremovable"+num})
                .append($("<td>")
                .append($("<h2> Casa<h2/>"))
                .append($("<b>Inscrição IPTU: <b/>")
                .append($("<input />", { type:"text", size:"22", maxlenght:"22", required:true}))
                .append($("<br>")))
                .append($("<b>  Data de Aquisição: <b/>")
                .append($("<input />", { type:"date", required:true}))
                .append($("<br>")))
                .append($("<button>", {class:"btn btn-danger btn-sm", id: "RemoveBtn", onclick:"removeB(0)"})
                .append($("<span>", {class:"glyphicon glyphicon-minus"}))
                .append($("<span> Remover<span/>", {class:"glyphicon glyphicon-minus"}))))
            .appendTo("#bContainer");
        break;
        case num == 1:
            $(("<tr />"), { id:"bremovable"+num})
                .append($("<td>")
                .append($("<h2> Apto<h2/>"))
                .append($("<b>Inscrição IPTU: <b/>")
                .append($("<input />", { type:"text", size:"22", maxlenght:"22", required:true}))
                .append($("<br>")))
                .append($("<b>  Data de Aquisição: <b/>")
                .append($("<input />", { type:"date", required:true}))
                .append($("<br>")))
                .append($("<button>", {class:"btn btn-danger btn-sm", id: "RemoveBtn", onclick:"removeB(1)"})
                .append($("<span>", {class:"glyphicon glyphicon-minus"}))
                .append($("<span> Remover<span/>", {class:"glyphicon glyphicon-minus"}))))
            .appendTo("#bContainer");
        break;
        case num == 2:
            $(("<tr />"), { id:"bremovable"+num})
                .append($("<td>")
                .append($("<h2> Veiculo<h2/>"))
                .append($("<b>Renavam: <b/>")
                .append($("<input />", { type:"tel", size:"9", required:true})))
                .append($("<br>"))
                .append($("<b>  Placa: <b/>")
                .append($("<input />", { type:"text", size:"8", placeholder:"AAA-0000", required:true})))
                .append($("<br>"))
                .append($("<button>", {class:"btn btn-danger btn-sm", id: "RemoveBtn", onclick:"removeB(2)"})
                .append($("<span>", {class:"glyphicon glyphicon-minus"}))
                .append($("<span> Remover<span/>", {class:"glyphicon glyphicon-minus"}))))
            .appendTo("#bContainer");
    }
}
function btnCasa(){
    num = 0;
    btnBens(num);
}
function btnApto(){
    num = 1;
    btnBens(num);
}
function btnVeiculo(){
    num = 2;
    btnBens(num);
}

window.onclick = function(event){
    if(!event.target.matches('#dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}