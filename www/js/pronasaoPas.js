    
    function Model(name, age, weight,slika1) {
        var self = this;
        self.Name = ko.observable(name);
        self.Age = ko.observable(age);
        self.Weight = ko.observable(weight);
        //self.Height = ko.observable(id);
        //self.Description = ko.observable(id);
        //self.Kind = ko.observable(id);
        //self.Found = ko.observable(id);
        //self.dateString = ko.observable(id);
        //self.Deleted = ko.observable(id);
        //self.Vlasnik = ko.observable(id);
        //self.Email = ko.observable(id);
        //self.Mob = ko.observable(id);
        self.Slika1 = ko.observable(slika1);
        //self.Slika2 = ko.observable(id);
        //self.Opstina = ko.observable(id);
        //self.Grad = ko.observable(id);
        //self.Drzava = ko.observable(id);
     };

    function Init(id) {
        var retModel;
        $.getJSON('http://localhost:49816/api/Dog/getdog?id=' + id,function(serverData) {
            retModel = new Model(serverData.Name, serverData.Age, serverData.Weight, serverData.Slika1);
            ko.applyBindings(retModel);
        });
    };
    jQuery(function () {
        Init(sessionStorage.getItem("dogfinder.id") || 3);
    });
