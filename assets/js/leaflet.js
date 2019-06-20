var mymap = L.map('map', {scrollWheelZoom:false}).setView([48.463671, 35.038213], 14);
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYm9saWxpeWVsIiwiYSI6ImNqcmVxd2FwOTB4enM0NG9ydzFzZHhlanUifQ.sOkonrQFPb03B08JBfNfqg', {
    attribution: 'Map data &copy; <a href="//openstreetmap.org">OpenStreetMap</a> contributors, <a href="//creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery � <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 22,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(mymap);

var myIcon = L.icon({
    iconUrl:'build/images/infrastructure/icon.png',
    iconSize: [66, 85],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'build/images/infrastructure/iconShadow.png',
    shadowSize: [67, 29],
    shadowAnchor: [-10, 25]
});

L.marker([48.463671, 35.038213], {icon: myIcon}).addTo(mymap);

    var kindergartenIcon = L.icon({
        iconUrl:'build/images/infrastructure/iconKindergarten.png',
        iconSize: [52, 67],
        iconAnchor: [22, 94],
        popupAnchor: [3, -90],
        shadowUrl: 'build/images/infrastructure/iconSmallShadow.png',
        shadowSize: [46, 20],
        shadowAnchor: [0, 40]
    });

    var shopIcon = L.icon({
        iconUrl:'build/images/infrastructure/iconShop.png',
        iconSize: [52, 67], //width, height
        iconAnchor: [22, 94],
        popupAnchor: [3, -90],
        shadowUrl: 'build/images/infrastructure/iconSmallShadow.png',
        shadowSize: [46, 20],
        shadowAnchor: [0, 40]
    });
    
    var schoolIcon = L.icon({
        iconUrl:'build/images/infrastructure/iconSchool.png',
        iconSize: [52, 67], //width, height
        iconAnchor: [22, 94],
        popupAnchor: [3, -90],
        shadowUrl: 'build/images/infrastructure/iconSmallShadow.png',
        shadowSize: [46, 20],
        shadowAnchor: [0, 40]
    });

    var hospitalIcon = L.icon({
        iconUrl:'build/images/infrastructure/iconHospital.png',
        iconSize: [52, 67], //width, height
        iconAnchor: [22, 94],
        popupAnchor: [3, -90],
        shadowUrl: 'build/images/infrastructure/iconSmallShadow.png',
        shadowSize: [46, 20],
        shadowAnchor: [0, 40]
    });
   
    var bankIcon = L.icon({
        iconUrl:'build/images/infrastructure/iconBank.png',
        iconSize: [52, 67], //width, height
        iconAnchor: [22, 94],
        popupAnchor: [3, -90],
        shadowUrl: 'build/images/infrastructure/iconSmallShadow.png',
        shadowSize: [46, 20],
        shadowAnchor: [0, 40]
    });

    var salonIcon = L.icon({
        iconUrl:'build/images/infrastructure/iconSalon.png',
        iconSize: [52, 67], //width, height
        iconAnchor: [22, 94],
        popupAnchor: [3, -90],
        shadowUrl: 'build/images/infrastructure/iconSmallShadow.png',
        shadowSize: [46, 20],
        shadowAnchor: [0, 40]
    });

    var restarauntIcon = L.icon({
        iconUrl:'build/images/infrastructure/iconRestaraunt.png',
        iconSize: [52, 67], //width, height
        iconAnchor: [22, 94],
        popupAnchor: [3, -90],
        shadowUrl: 'build/images/infrastructure/iconSmallShadow.png',
        shadowSize: [46, 20],
        shadowAnchor: [0, 40]
    });

    var gasIcon = L.icon({
        iconUrl:'build/images/infrastructure/iconGas.png',
        iconSize: [52, 67], //width, height
        iconAnchor: [22, 94],
        popupAnchor: [3, -90],
        shadowUrl: 'build/images/infrastructure/iconSmallShadow.png',
        shadowSize: [46, 20],
        shadowAnchor: [0, 40]
    });


var promise = $.getJSON("business.json");
    promise.then(function(data) {
        var allbusinesses = L.geoJson(data);
        var school = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.BusType == "School";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: schoolIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.Name).openPopup();
                });
            }
        });
        var kindergarten = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.BusType == "Kindergarten";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: kindergartenIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.Name).openPopup();
                });
            }
        });
        var hospital = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.BusType == "Hospital";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: hospitalIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.Name).openPopup();
                });
            }
        });
        var bank = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.BusType == "Bank";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: bankIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.Name).openPopup();
                });
            }
        });
        var gas = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.BusType == "Gas";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: gasIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.Name).openPopup();
                });
            }
        });
        var salon = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.BusType == "Salon";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: salonIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.Name).openPopup();
                });
            }
        });
        var shop = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.BusType == "Shop";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: shopIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.Name).openPopup();
                });
            }
        });
        var restaraunt = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.BusType == "Restaraunt";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: restarauntIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.Name).openPopup();
                });
            }
        });

        mymap.fitBounds(allbusinesses.getBounds(), {
            padding: [20, 20]
        });

        shop.addTo(mymap)
        school.addTo(mymap)
        hospital.addTo(mymap)
        bank.addTo(mymap)
        salon.addTo(mymap)
        restaraunt.addTo(mymap)
        kindergarten.addTo(mymap)
        gas.addTo(mymap)

         
        $("#gas").click(function() {
            mymap.addLayer(gas)

            mymap.removeLayer(shop)
            mymap.removeLayer(school)
            mymap.removeLayer(salon)
            mymap.removeLayer(bank)
            mymap.removeLayer(hospital)
            mymap.removeLayer(kindergarten)
            mymap.removeLayer(restaraunt)
        });

        $("#kindergarten").click(function() {
            mymap.addLayer(kindergarten)

            mymap.removeLayer(gas)
            mymap.removeLayer(school)
            mymap.removeLayer(restaraunt)
            mymap.removeLayer(bank)
            mymap.removeLayer(hospital)
            mymap.removeLayer(shop)
            mymap.removeLayer(salon)
        });

        $("#school").click(function() {
            mymap.addLayer(school)

            mymap.removeLayer(gas)
            mymap.removeLayer(salon)
            mymap.removeLayer(bank)
            mymap.removeLayer(hospital)
            mymap.removeLayer(shop)
            mymap.removeLayer(restaraunt)
            mymap.removeLayer(kindergarten)
        });

        $("#restaraunt").click(function() {
            mymap.addLayer(restaraunt)

            mymap.removeLayer(gas)
            mymap.removeLayer(salon)
            mymap.removeLayer(school)
            mymap.removeLayer(bank)
            mymap.removeLayer(hospital)
            mymap.removeLayer(shop)
            mymap.removeLayer(kindergarten)
        });

        $("#bank").click(function() {
            mymap.addLayer(bank)

            mymap.removeLayer(gas)
            mymap.removeLayer(salon)
            mymap.removeLayer(school)
            mymap.removeLayer(restaraunt)
            mymap.removeLayer(hospital)
            mymap.removeLayer(shop)
            mymap.removeLayer(kindergarten)
        });

        $("#hospital").click(function() {
            mymap.addLayer(hospital)

            mymap.removeLayer(gas)
            mymap.removeLayer(restaraunt)
            mymap.removeLayer(school)
            mymap.removeLayer(kindergarten)
            mymap.removeLayer(salon)
            mymap.removeLayer(bank)
            mymap.removeLayer(shop)
        });

        $("#shop").click(function() {
            mymap.addLayer(shop)

            mymap.removeLayer(gas)
            mymap.removeLayer(kindergarten)
            mymap.removeLayer(school)
            mymap.removeLayer(restaraunt)
            mymap.removeLayer(bank)
            mymap.removeLayer(hospital)
            mymap.removeLayer(salon)
        });

        $("#salon").click(function() {
            mymap.addLayer(salon)

            mymap.removeLayer(gas)
            mymap.removeLayer(shop)
            mymap.removeLayer(school)
            mymap.removeLayer(restaraunt)
            mymap.removeLayer(bank)
            mymap.removeLayer(hospital)
            mymap.removeLayer(kindergarten)
        });

        $("#allbus").click(function() {
            mymap.addLayer(school)
            mymap.addLayer(gas)
            mymap.addLayer(kindergarten)
            mymap.addLayer(salon)
            mymap.addLayer(bank)
            mymap.addLayer(hospital)
            mymap.addLayer(shop)
            mymap.addLayer(restaraunt)
        });

    });

/*
* first argument width heigth
 */