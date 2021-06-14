jQuery(function($) {

    /*Add IE Version for compatibility
    -------------------------------------------------------------------*/
    var ie_version = daw_detectIE();
    if ( ie_version >= 9 && ie_version <= 11 ) {
        $('html').addClass("ie-compatible");
    }
    if ( ie_version == 10  ) {
        $('html').addClass("ie-compatible-10");
    }
    if ( ie_version >= 10 ) {
        $('html').addClass("ie-edge-compatible");
    }

    /*Add IOS compatibility
    -------------------------------------------------------------------*/
    if ( !$('html').hasClass("ie-compatible") && daw_isIOS() ) {
        $('html').addClass("ios-compatible");
    }

    /*Add Safari compatibility
    -------------------------------------------------------------------*/
    if ( daw_isSafari() ) {
        $('html').addClass("safari-compatible");
    }

    /*Add Safari compatibility
    -------------------------------------------------------------------*/
    if ( daw_isFirefox() ) {
        $('html').addClass("firefox-compatible");
    }


/*--------------------------------------------------------------------------------*/
});/* ************************ $(document).ready  ******************************* */
/*--------------------------------------------------------------------------------*/
