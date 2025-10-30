var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TESTPOINT_1 = new ol.format.GeoJSON();
var features_TESTPOINT_1 = format_TESTPOINT_1.readFeatures(json_TESTPOINT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TESTPOINT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TESTPOINT_1.addFeatures(features_TESTPOINT_1);
var lyr_TESTPOINT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TESTPOINT_1, 
                style: style_TESTPOINT_1,
                popuplayertitle: 'TESTPOINT',
                interactive: true,
                title: '<img src="styles/legend/TESTPOINT_1.png" /> TESTPOINT'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_TESTPOINT_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_TESTPOINT_1];
lyr_TESTPOINT_1.set('fieldAliases', {'fid': 'fid', 'TYPE': 'Type of Data', });
lyr_TESTPOINT_1.set('fieldImages', {'fid': 'TextEdit', 'TYPE': 'ValueMap', });
lyr_TESTPOINT_1.set('fieldLabels', {'fid': 'no label', 'TYPE': 'no label', });
lyr_TESTPOINT_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});