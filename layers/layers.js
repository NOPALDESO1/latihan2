var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_batas_administrasi_ar_321820210529024828_1 = new ol.format.GeoJSON();
var features_batas_administrasi_ar_321820210529024828_1 = format_batas_administrasi_ar_321820210529024828_1.readFeatures(json_batas_administrasi_ar_321820210529024828_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_administrasi_ar_321820210529024828_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_administrasi_ar_321820210529024828_1.addFeatures(features_batas_administrasi_ar_321820210529024828_1);
var lyr_batas_administrasi_ar_321820210529024828_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_administrasi_ar_321820210529024828_1, 
                style: style_batas_administrasi_ar_321820210529024828_1,
                popuplayertitle: "batas_administrasi_ar_321820210529024828",
                interactive: true,
                title: '<img src="styles/legend/batas_administrasi_ar_321820210529024828_1.png" /> batas_administrasi_ar_321820210529024828'
            });
var format_kawasan_pariwisata_pt_321820200511043156_2 = new ol.format.GeoJSON();
var features_kawasan_pariwisata_pt_321820200511043156_2 = format_kawasan_pariwisata_pt_321820200511043156_2.readFeatures(json_kawasan_pariwisata_pt_321820200511043156_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kawasan_pariwisata_pt_321820200511043156_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kawasan_pariwisata_pt_321820200511043156_2.addFeatures(features_kawasan_pariwisata_pt_321820200511043156_2);
var lyr_kawasan_pariwisata_pt_321820200511043156_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kawasan_pariwisata_pt_321820200511043156_2, 
                style: style_kawasan_pariwisata_pt_321820200511043156_2,
                popuplayertitle: "kawasan_pariwisata_pt_321820200511043156",
                interactive: true,
                title: '<img src="styles/legend/kawasan_pariwisata_pt_321820200511043156_2.png" /> kawasan_pariwisata_pt_321820200511043156'
            });

lyr_OSMStandard_0.setVisible(true);lyr_batas_administrasi_ar_321820210529024828_1.setVisible(true);lyr_kawasan_pariwisata_pt_321820200511043156_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_batas_administrasi_ar_321820210529024828_1,lyr_kawasan_pariwisata_pt_321820200511043156_2];
lyr_batas_administrasi_ar_321820210529024828_1.set('fieldAliases', {'objectid': 'objectid', 'desa': 'desa', 'kabupaten': 'kabupaten', 'kecamatan': 'kecamatan', 'provinsi': 'provinsi', 'l_desa_ha': 'l_desa_ha', 'sumberdata': 'sumberdata', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_kawasan_pariwisata_pt_321820200511043156_2.set('fieldAliases', {'kaw_wisata': 'kaw_wisata', 'des_wisata': 'des_wisata', 'sumberdata': 'sumberdata', });
lyr_batas_administrasi_ar_321820210529024828_1.set('fieldImages', {'objectid': 'Range', 'desa': 'TextEdit', 'kabupaten': 'TextEdit', 'kecamatan': 'TextEdit', 'provinsi': 'TextEdit', 'l_desa_ha': 'TextEdit', 'sumberdata': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_kawasan_pariwisata_pt_321820200511043156_2.set('fieldImages', {'kaw_wisata': 'TextEdit', 'des_wisata': 'TextEdit', 'sumberdata': 'TextEdit', });
lyr_batas_administrasi_ar_321820210529024828_1.set('fieldLabels', {'objectid': 'no label', 'desa': 'inline label - always visible', 'kabupaten': 'inline label - always visible', 'kecamatan': 'inline label - always visible', 'provinsi': 'no label', 'l_desa_ha': 'no label', 'sumberdata': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_kawasan_pariwisata_pt_321820200511043156_2.set('fieldLabels', {'kaw_wisata': 'inline label - always visible', 'des_wisata': 'inline label - always visible', 'sumberdata': 'inline label - always visible', });
lyr_kawasan_pariwisata_pt_321820200511043156_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});