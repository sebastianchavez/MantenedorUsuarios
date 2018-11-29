//*****************************************************************************************//
//*  Permite el ingreso de numeros decimales  //creada por oscar cerda  
//*****************************************************************************************//
function decimales(obj, e) {
    var key = (window.event) ? e.keyCode : e.which;
    var keyF = (window.event) ? event.keyCode : e.keyCode;
    var keychar = String.fromCharCode(key);
    var keycharF = String.fromCharCode(key);
    var caracteres = "-.$#!&(%'";
    var presicion = obj.title.split(",");
    var nenteros = 1;
    var ndecimales = 1;
    var dec = ",";
    if (presicion.length == 2) {
        nenteros = presicion[0];
        ndecimales = presicion[1];
    }
    //alert(caracteres.indexOf(keychar));
    var valida = eval("/^([-]{0,1})([0-9]{1," + nenteros + "})?(\,[0-9]{0," + ndecimales + "})?$/");
    var valida2 = eval("/^([-]{0,1}[0-9]{1," + nenteros + "})(\,[0-9]{0," + ndecimales + "})?$/");
    //alert("valorIE : " + key + " , valorFI : " + keyF );
    if ((key != 46 && key != 8) && (keyF != 46 && keyF != 8 && keyF != 9) || (caracteres.indexOf(keychar) >= 0)) {
        //var re = new RegExp(valida3,"i");
        var valor = obj.value + keychar;
        var l = valor.length;
        var r = valida.test(valor);
        //alert(l);
        if (l == nenteros & valor.indexOf(dec) < 0 && r) {
            obj.value = obj.value + keychar + ",";
            return false
        }
        else if (l - 1 == nenteros && valida.test(obj.value + "," + keychar)) {
            obj.value = obj.value + "," + keychar;
            return false;
        }

        if (!r) {
            return false;
        } else {
            if (l >= 2) {
                r = valida2.test(valor);
                if (!r) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        }
    } else {
        return true;
    }
}

/*
var text = "is is a Test.";  
var myRegExp = new RegExp('teST','i');  
text.replace(myRegExp,'Example'); 
•g -> global search (all occurrences) 
•i -> case insensitive
•m -> multiline 
*/

//*****************************************************************************************//
//*  Limpia texto  //creada por oscar cerda 
//*****************************************************************************************//
function limpiar(obj) {
    obj.value = "";
    return false;
}

//*****************************************************************************************//
//*  Agrega Cero Al final de un decimal  //creada por oscar cerda 
//*****************************************************************************************//
function cerodec(obj) {
    var valor = trim(obj.value);
    var l = valor.length;
    //alert(valor.substring(l-1));
    if (l > 1) if (valor.substring(l - 1) == ",") { valor = valor + "0"; obj.value = valor; }
}


//*****************************************************************************************//
//*  Bloquea campos,   permite solo TAB y ENTER  //creada por oscar cerda 
//*****************************************************************************************//

function bloquear(obj, e) {
    var key = (window.event) ? e.keyCode : e.which;
    var keyF = (window.event) ? event.keyCode : e.keyCode;
    var keychar = String.fromCharCode(key);
    var keycharF = String.fromCharCode(key);
    if ((key != 46 && key != 8) && (keyF != 46 && keyF != 8 && keyF != 9)) {
        return false;

    } else {
        return true;
    }
}



//*****************************************************************************************//
//*  Permite solo la entrada numeros     //creada por oscar cerda  
//*****************************************************************************************//

function solonumeros(obj, e) {
    var key = (window.event) ? e.keyCode : e.which;
    var keyF = (window.event) ? event.keyCode : e.keyCode;
    var keychar = String.fromCharCode(key);
    var keycharF = String.fromCharCode(key);
    var caracteres = "-.$#!&(%'";
    //alert(caracteres.indexOf(keychar));
    //var valida = /^([]{0,1})([0-9]{0,})$/ ;
    var valida = /^([]{0,1})([0-9]{0,})$/;
    //alert("valorIE : " + key + " , valorFI : " + keyF );
    if ((key != 46 && key != 8) && (keyF != 46 && keyF != 8 && keyF != 9) || (caracteres.indexOf(keychar) >= 0)) {
        var valor = obj.value + keychar;
        //alert("valor : " + valor);
        if (!(valida.test(valor))) {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}



//*****************************************************************************************//
//*  Formatea un campo Numérico  //creada por oscar cerda 
//*****************************************************************************************//


function separadormiles(obj) {
    nStr = obj.value;
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}




//*****************************************************************************************//
//*  Valida y formatea campo de rut
//*****************************************************************************************//


//var topeRut = 50000000;
function validarut(obj, puntos) {
    // var now = new Date(); 
    //document.frm.touch.value = now.getTime();
    rut_val = obj.value;
    if (rut_val.length == 0) {
        //alert( "Ingrese RUT");
        //obj.focus();
        return false;
    }

    if (!checkRutField(obj, puntos)) {
        return false;
    }

}



function checkRutField(obj, puntos) {
    var tmpstr = "";
    var rut = obj.value;
    for (i = 0; i < rut.length; i++)
        if (rut.charAt(i) != ' ' && rut.charAt(i) != '.' && rut.charAt(i) != '-')
            tmpstr = tmpstr + rut.charAt(i);
    rut = tmpstr;
    largo = rut.length;
    // [VARM+]
    tmpstr = "";
    for (i = 0; rut.charAt(i) == '0'; i++);
    for (; i < rut.length; i++)
        tmpstr = tmpstr + rut.charAt(i);
    rut = tmpstr;
    largo = rut.length;
    // [VARM-]
    if (largo < 2) {
        alert("Debe ingresar el rut completo.");
        obj.value = "";
        obj.focus();
        obj.select();
        return false;
    }
    for (i = 0; i < largo; i++) {
        if (rut.charAt(i) != "0" && rut.charAt(i) != "1" && rut.charAt(i) != "2" && rut.charAt(i) != "3" && rut.charAt(i) != "4" && rut.charAt(i) != "5" && rut.charAt(i) != "6" && rut.charAt(i) != "7" && rut.charAt(i) != "8" && rut.charAt(i) != "9" && rut.charAt(i) != "k" && rut.charAt(i) != "K") {
            alert("El valor ingresado no corresponde a un RUT valido.");
            obj.value = "";
            obj.focus();
            obj.select();
            return false;
        }
    }
    var invertido = "";
    for (i = (largo - 1), j = 0; i >= 0; i-- , j++)
        invertido = invertido + rut.charAt(i);
    var drut = "";
    drut = drut + invertido.charAt(0);
    drut = drut + '-';
    cnt = 0;
    for (i = 1, j = 2; i < largo; i++ , j++) {
        if (cnt == 3) {
            if (puntos == 1) { drut = drut + '.'; }
            j++;
            drut = drut + invertido.charAt(i);
            cnt = 1;
        }
        else {
            drut = drut + invertido.charAt(i);
            cnt++;
        }
    }
    invertido = "";
    for (i = (drut.length - 1), j = 0; i >= 0; i-- , j++)
        invertido = invertido + drut.charAt(i);
    obj.value = invertido.toUpperCase();
    if (checkDV(rut, obj))
        return true;
    return false;
}


function checkDV(crut, obj) {
    largo = crut.length;
    if (largo < 2) {
        alert("Debe ingresar el rut completo.");
        obj.focus();
        obj.select();
        obj.value = "";
        return false;
    }
    if (largo > 2)
        rut = crut.substring(0, largo - 1);
    else
        rut = crut.charAt(0);
    dv = crut.charAt(largo - 1);
    checkCDV(dv, obj);
    if (rut == null || dv == null)
        return 0;
    var dvr = '0';
    suma = 0;
    mul = 2;
    for (i = rut.length - 1; i >= 0; i--) {
        suma = suma + rut.charAt(i) * mul;
        if (mul == 7)
            mul = 2;
        else
            mul++;
    }
    res = suma % 11;
    if (res == 1)
        dvr = 'k';
    else if (res == 0)
        dvr = '0';
    else {
        dvi = 11 - res;
        dvr = dvi + "";
    }
    if (dvr != dv.toLowerCase()) {
        alert("EL rut es incorrecto.");
        obj.focus();
        obj.value = "";
        return false;
    }
    return true;
}


function checkCDV(dvr, obj) {
    dv = dvr + "";
    if (dv != '0' && dv != '1' && dv != '2' && dv != '3' && dv != '4' && dv != '5' && dv != '6' && dv != '7' && dv != '8' && dv != '9' && dv != 'k' && dv != 'K') {
        alert("Debe ingresar un digito verificador valido.");
        obj.focus();
        obj.select();
        return false;
    }
    return true;
}

//*****************************************************************************************//
//*  Quita blancos a un string  //creada por oscar cerda 
//*****************************************************************************************//
function trim(str) {
    str = str.replace(/^\s*|\s*$/g, "");
    return str;
}

//*****************************************************************************************//
//*  Formatea RUT - Sin Validación  //creada por oscar cerda 
//*****************************************************************************************//

function formato_rut(rut, puntos) {
    var sRut1 = trim(rut.value);
    var tmpstr = "";
    for (i = 0; i < sRut1.length; i++)
        if (sRut1.charAt(i) != ' ' && sRut1.charAt(i) != '.' && sRut1.charAt(i) != '-')
            tmpstr = tmpstr + sRut1.charAt(i);

    sRut1 = tmpstr;
    var valida = /^[1-9]{1}([0-9]{0,9}[0-9|K|k]{1})$/
    if (trim(sRut1) != "")
        if (!valida.test(sRut1)) {
            rut.value = "";
            sRut1 = "";
            tmpstr = "";
            rut.focus();
            alert('Formato rut incorrecto')
        }
    var nPos = 0;
    var sInvertido = "";
    var sRut = "";
    for (var i = sRut1.length - 1; i >= 0; i--) {
        sInvertido += sRut1.charAt(i);
        if (i == sRut1.length - 1)
            sInvertido += "-";
        else if (nPos == 3) {
            if (puntos == 1) { sInvertido += "."; }
            nPos = 0;
        }
        nPos++;
    }
    for (var j = sInvertido.length - 1; j >= 0; j--) {
        if (sInvertido.charAt(sInvertido.length - 1) != ".")
            sRut += sInvertido.charAt(j);
        else if (j != sInvertido.length - 1)
            sRut += sInvertido.charAt(j);
    }
    rut.value = sRut.toUpperCase();
}


//*****************************************************************************************//
//*  Quitar Puntos 
//*****************************************************************************************//


function quitarPuntos(callerCtrl) {
    var valor = callerCtrl.value;

    if (!IsNumeric(valor)) {
        document.getElementById(callerCtrl.id).value = '';
        valor = '';
    }

    if (callerCtrl.value != '') {
        valor = callerCtrl.value.replace(/[.]/g, '');
        document.getElementById(callerCtrl.id).value = valor;
    }
}


//*****************************************************************************************//
//*  Agregar Puntos 
//*****************************************************************************************//

function agregarPuntos(callerCtrl) {
    quitarPuntos(callerCtrl, 0)

    var valor = callerCtrl.value;
    var valorConPuntos;

    if (!IsNumeric(valor)) {
        document.getElementById(callerCtrl.id).value = '';
        valor = '';
    }

    if (valor.length < 4) {
        valorConPuntos = valor;
    }
    else {
        if (valor.length < 7) {
            valorConPuntos = Left(valor, valor.length - 3) + "." + Right(valor, 3);
        }
        else {
            valorConPuntos = Left(valor, valor.length - 6) + "." + valor.substr(valor.length - 6, 3) + "." + Right(valor, 3);
        }
    }
    document.getElementById(callerCtrl.id).value = valorConPuntos;
}


//*****************************************************************************************//
//*  Verifica si el campo es Numérico 
//*****************************************************************************************//

function IsNumeric(sText) {
    var ValidChars = "0123456789.";
    var IsNumber = true;
    var Char;

    for (i = 0; i < sText.length && IsNumber == true; i++) {
        Char = sText.charAt(i);
        if (ValidChars.indexOf(Char) == -1) {
            IsNumber = false;
        }
    }
    return IsNumber;
}


function Left(str, n) {
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else
        return String(str).substring(0, n);
}
function Right(str, n) {
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else {
        var iLen = String(str).length;
        return String(str).substring(iLen, iLen - n);
    }
}


function valC(obj) {
    var valor = 0;
    if (trim(obj) == "") { valor = 0; } else { valor = obj; }
    return valor;
}



function bloqueoEnter() {
    $("form").keypress(function (e) {
        if (e.which == 13) {
            return false;
        }
    });
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}


function val_fechaJS(obj) {

    var datePat = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var fechaCompleta = obj.value.match(datePat);


    if (fechaCompleta == null) {
        obj.value = '';
        return false;
    }

    dia = fechaCompleta[1];
    mes = fechaCompleta[3];
    anio = fechaCompleta[5];



    if (dia < 1 || dia > 31) {
        alert("El valor del día debe estar comprendido entre 1 y 31.");
        limpiar(obj);
        return false;
    }
    if (mes < 1 || mes > 12) {
        alert("El valor del mes debe estar comprendido entre 1 y 12.");
        limpiar(obj);
        return false;
    }
    if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia == 31) {
        alert("El mes " + mes + " no tiene 31 días!");
        limpiar(obj);
        return false;
    }
    if (mes == 2) { // bisiesto
        var bisiesto = (anio % 4 == 0 && (anio % 100 != 0 || anio % 400 == 0));
        if (dia > 29 || (dia == 29 && !bisiesto)) {
            alert("Febrero del " + anio + " no contiene " + dia + " dias!");
            limpiar(obj);
            return false;
        }
    }
    return true;
}


//Email


function val_correo(txt) {
    var corr = txt.value;
    var re;
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    if (corr != "") {
        if (!b.test(corr)) {
            VarTextoMensaje = "La dirección de email es incorrecta.";
            alert(VarTextoMensaje);
            txt.focus();
            txt.value = "";
            return false;
        }
    }
}