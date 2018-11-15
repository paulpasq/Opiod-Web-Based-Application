var map;
function initMap() {
  var CT = new google.maps.LatLng(41.7,-72.7);

  map = new google.maps.Map(document.getElementById('map'), {center: CT, zoom: 9});

  //list of rehab centers




  var MCCANorwalk = new google.maps.LatLng(41.1308, -73.4148);
  var TheConnectionIncMiddletown = new google.maps.LatLng(41.5925, -72.7171);
  var LiberationProgramBridgeport = new google.maps.LatLng(41.1920, -73.1656);
  var ConnecticutRenaissanceIncBridgeport = new google.maps.LatLng(41.1798, -73.1894);
  var TurnbridgeNewHaven = new google.maps.LatLng(41.3066, 72.9231);
  var SoutheasternCouncilonAlcoholismandDrugDependenceIncLebanon = new google.maps.LatLng(41.5680, -72.2378);
  var RushfordatStonegateDurham = new google.maps.LatLng(41.4722, -72.7130);
  var MountainsideTreatmentCenter = new google.maps.LatLng(42.0034546,-73.3282223,3);
  var HighWatchRecoveryCenterKent  = new google.maps.LatLng(41.7649, -73.4129);
  var FarrellTreatmentCenterNewBritain = new google.maps.LatLng(41.6724, -72.7817);
  
  var marker = new google.maps.Marker({
    map: map,
    position: MCCANorwalk,
    title: "MCCA Norwalk"
  });
  var marker = new google.maps.Marker({
    map: map,
    position: TheConnectionIncMiddletown,
    title: "The Connection Inc, Middletown"
  });
  var marker1 = new google.maps.Marker({
    map: map,
    position:LiberationProgramBridgeport,
    title: "Liberation Program Bridgeport"
  });
  var marker2 = new google.maps.Marker({
    map: map,
    position: ConnecticutRenaissanceIncBridgeport
  });
  var marker3 = new google.maps.Marker({
    map: map,
    position: TurnbridgeNewHaven
  });
  var marker4 = new google.maps.Marker({
    map: map,
    position: SoutheasternCouncilonAlcoholismandDrugDependenceIncLebanon
  });
  var marker5 = new google.maps.Marker({
    map: map,
    position: RushfordatStonegateDurham
  });
  var marker6 = new google.maps.Marker({
    map: map,
    position: MountainsideTreatmentCenter
  });
  var marker7 = new google.maps.Marker({
    map: map,
    position: HighWatchRecoveryCenterKent
  });
  var marker8 = new google.maps.Marker({
    map: map,
    position: FarrellTreatmentCenterNewBritain
  });


}

