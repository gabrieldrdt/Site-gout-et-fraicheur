<?php

// --------------------------
// CONFIGURATION
// --------------------------
$apiKey = getenv("API_KEY");
$placeId = "ChIJl0BFs3ehrhIREK8Ar7eQLdg"; // Place ID mis à jour


// --------------------------
// APPEL À GOOGLE PLACES API
// --------------------------
$url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=$placeId&fields=reviews&language=fr&key=$apiKey";


header("Content-Type: application/json");

// Exécute la requête Google (serveur → Google)
echo file_get_contents($url);

?>
