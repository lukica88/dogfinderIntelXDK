var url = "http://localhost:49816/api/Dog";

var Model = null;
        var Model = function() {
            var self = this;
            self.dogs = ko.observableArray([]);
            self.xx = function(data) {
                sessionStorage.setItem("dogfinder.id", data.id);
                document.location.href = 'PronasaoPas.html';
            };
            
        };

function Init(){
    $.getJSON(url  +'/getAll',function(data){
        var dogs = [];
        $.each(data,function(i){
            dogs.push(
                {
                    name:data[i].Name,
                    kind:data[i].Kind, 
                    id:data[i]._Id,
                    slika1: data[i].Slika1
                })
        });
        Model.dogs(dogs);
    });
}

$(function(){
    sessionStorage.removeItem("dogfinder.id");
    Init();
    Model = new Model();
    ko.applyBindings(Model);
});