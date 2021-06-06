var wms_layers = [];

var lyr_stjohns_modified_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "stjohns_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/stjohns_modified_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5942468.807327, 5957044.094941, -5803438.845469, 6089088.719722]
                            })
                        });
var format_newtown_stpeters_1 = new ol.format.GeoJSON();
var features_newtown_stpeters_1 = format_newtown_stpeters_1.readFeatures(json_newtown_stpeters_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_newtown_stpeters_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_newtown_stpeters_1.addFeatures(features_newtown_stpeters_1);
var lyr_newtown_stpeters_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_newtown_stpeters_1, 
                style: style_newtown_stpeters_1,
                interactive: true,
                title: '<img src="styles/legend/newtown_stpeters_1.png" /> newtown_stpeters'
            });

lyr_stjohns_modified_0.setVisible(true);lyr_newtown_stpeters_1.setVisible(true);
var layersList = [lyr_stjohns_modified_0,lyr_newtown_stpeters_1];
lyr_newtown_stpeters_1.set('fieldAliases', {'id': 'id', });
lyr_newtown_stpeters_1.set('fieldImages', {'id': 'TextEdit', });
lyr_newtown_stpeters_1.set('fieldLabels', {'id': 'no label', });
lyr_newtown_stpeters_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});