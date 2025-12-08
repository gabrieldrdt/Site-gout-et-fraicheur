<?php

// --------------------------
// CONFIGURATION
// --------------------------
$apiKey = "AIzaSyB4mBWfeAbURI9pqAzV4763Uh-KL2GmyAI";  // NE PAS PARTAGER
$placeId = "ChIJl0BFs3ehrhIREK8Ar7eQLdg"; // Place ID mis à jour


// --------------------------
// APPEL À GOOGLE PLACES API
// --------------------------
$url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=$placeId&fields=reviews&language=fr&key=$apiKey";


header("Content-Type: application/json");

// Exécute la requête Google (serveur → Google)
echo file_get_contents($url);

?>
