(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* Bu alan zorunludur",
                    "alertTextCheckboxMultiple": "* L�tfen bir se�ene�i i�aretleyiniz",
                    "alertTextCheckboxe": "* Bu onay kutusu zorunludur"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Bu alana en az ",
                    "alertText2": " karakter girmelisiniz "
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Bu alana en fazla ",
                    "alertText2": " karakter girebilirsiniz"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Ge�erli en k���k de�er: "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Ge�erli en y�ksek de�er: "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* L�tfen ",
                    "alertText2": " tarihinden daha ileri bir tarih giriniz "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* L�tfen ",
                    "alertText2": " tarihinden daha geri bir tarih giriniz "

                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* L�tfen daha az onay kutusu i�areyleyiniz"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* L�tfen en az ",
                    "alertText2": " onay kutusunu i�aretleyiniz"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* De�erler ayn� olmal�"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText": "* Ge�ersiz telefon numaras�"
                },
                "email": {
                    // Simplified, was not working in the Iphone browser
                    "regex": /^([A-Za-z0-9_\-\.\'])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/,
                    "alertText": "* Ge�ersiz eposta adresi"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Ge�erli bir tam say� de�il"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,
                    "alertText": "* Ge�erli bir noktal� say� de�il"
                },
                "date": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                    "alertText": "* Ge�ersiz tarih. Tarih YYYY-MM-DD format�nda olmal�"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Ge�ersiz IP adresi"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                    "alertText": "* Ge�ersiz URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Bu alanda sadece rakam olmal�"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Bu alanda sadece harf olmal�"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* Bu alanda �zel karakterler olamaz"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* Bu kullan�c� ad� kullan�mda",
                    "alertTextLoad": "* Do�rulan�yor, l�tfen bekleyiniz"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* Bu kullan�c� ad�n� kullanabilirsiniz",
                    "alertText": "* Bu kullan�c� ad� kullan�mda",
                    "alertTextLoad": "* Do�rulan�yor, l�tfen bekleyiniz"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* Bu isim kullan�mda",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* Bu isim kullan�labilir",
                    // speaks by itself
                    "alertTextLoad": "* Do�rulan�yor, l�tfen bekleyiniz"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* Bu isim kullan�mda",
	                    // speaks by itself
	                    "alertTextLoad": "* Do�rulan�yor, l�tfen bekleyiniz"
	                },
                "validate2fields": {
                    "alertText": "* L�tfen 'HELLO' yaz�n"
                }
            };
            
        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);