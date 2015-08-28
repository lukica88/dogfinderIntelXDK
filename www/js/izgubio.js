 var Model = function() {
        var self = this;
        self.ime = ko.observable();
        self.visina = ko.observable();
        self.tezina = ko.observable();
        self.slika1 = ko.observable();
        self.slika2 = ko.observable();
        self.telefon = ko.observable();
        self.info = ko.observable();
        self.grad = ko.observable();
        self.rase = ko.observableArray();
        self.rasa = ko.observable();

        self.uploadImage1 = function() {
            var file = document.querySelector('#slika1').files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function() {
                self.slika1(reader.result);
            };
        };

        self.uploadImage2 = function () {
            var file = document.querySelector('#slika2').files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function () {
                self.slika2(reader.result);
            };
        };
       
        self.submit = function() {
            var data = {
                ime: self.ime(),
                visina: self.visina(),
                tezina: self.tezina(),
                slika1: self.slika1(),
                slika2: self.slika2(),
                rasa: self.rasa(),
                telefon: self.telefon(),
                info: self.info(),
                grad: self.grad()
        };
            $.ajax({
                type: "POST",
                data: data,
                url: "http://localhost:49816/api/Dog/izgubio",
                });
        };

      Init(self.rase);
    };

    function Init(rase) {
        $.ajax({
            type: "Get",
            url: "http://localhost:49816/api/Dog/rase",
            success: function (data) {
                if(rase){
                    rase(data);
                }
            }
        });
    };

    $(function () {
        var model = new Model();
        Init();
        ko.applyBindings(model, document.getElementById('mainDiv'));
    });