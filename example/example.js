jQuery(document).ready(function(){
    // do initial update on page ready
    updateEbc();
    // set up listeners for the ebc and saturation inputs to trigger the update function
    jQuery('#ebcinput').on('keyup', function () {
        updateEbc();
    });
    jQuery('#satinput').on('change', function () {
        updateEbc();
    });
    // the update function
    function updateEbc() {
    	// make a new converter
        var ebc2hex = new Ebc2Hex;
        // get the user input for ebc and saturation
        var ebc = jQuery('#ebcinput').val();
        var sat = jQuery('#satinput').val();
        // convert those to hex colour
        var hexvalue = ebc2hex.convert(ebc, sat);
        // update the beer glass svg and the text values
        jQuery('#glass-liquid').css('fill', hexvalue);
        jQuery('#hex-value').text(hexvalue);
        jQuery('#sat-value').text(sat);
    }
});