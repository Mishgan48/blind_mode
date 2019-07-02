    function setCookie(name, value, expires, path, domain, secure) {
        document.cookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
    }

    function get_cookie(cookie_name) {
        var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

        if (results)
            return (unescape(results[2]));
        else
            return null;
    }

    function delete_cookie(cookie_name) {
        var cookie_date = new Date();
        cookie_date.setTime(cookie_date.getTime() - 1);
        document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
    }
    //РЅРѕРІРѕРµ РІ РІРµСЂСЃРёРё 1.2
    function dmuGostSettings() {
        $('#infobardm').css({
            display: 'block'
        });
        setCookie("uGostSettings", "enable", "Mon, 01-Jan-2096 00:00:00 GMT", "/");
        setCookie("uGostfontfordk", "fontsize2", "Mon, 01-Jan-2096 00:00:00 GMT", "/");
        setCookie("uGostcolorfordk", "color1", "Mon, 01-Jan-2096 00:00:00 GMT", "/");
        location.reload();
    }
    var dmchecksettings = get_cookie("uGostSettings");

    if (dmchecksettings == '' || dmchecksettings == null) {
        $('#infobardm').css({
            display: 'none'
        });
    } else {
        $('#enableuGost').css({
            display: 'none'
        });
        $('#infobardm').css({
            display: 'block'
        });
    }
    if (dmchecksettings == null) {
        $('#infobardm').css({
            display: 'none'
        });
    }

    //РЅРѕРІРѕРµ РІ РІРµСЂСЃРёРё 1.2
    var dmcookiesimg = get_cookie("uGostimgfordk");
    if (dmcookiesimg == 'imgnone') {
        $(document).ready(function() {
            $("img").addClass("none");
            $("a.dmdisableimage").addClass("dmimageActive");
            $("a.dmenableimage").removeClass("dmimageActive");
            $('div').css({
                background: 'none'
            });
            $('span').css({
                background: 'none'
            });
            $('body').css({
                background: 'none'
            });
            $('table').css({
                background: 'none'
            });
            $('td').css({
                background: 'none'
            });
            $('tr').css({
                background: 'none'
            });
            $('a').css({
                background: 'none'
            });
            $('li').css({
                background: 'none'
            });
            $('ul').css({
                background: 'none'
            });
        });

    } else {
        $(document).ready(function() {
            $("img").addClass("");
            $("a.dmenableimage").addClass("dmimageActive");
            $("a.dmdisableimage").removeClass("dmimageActive");
        });
    }

    function dmfunctsizeone() {
        $('#allEntries').css({
            fontSize: '14px',
            fontWeight: 'normal'
        });
        $('.eTitle a ').css({
            fontSize: '14px',
            fontWeight: 'normal'
        });
        $('.eTitle').css({
            fontSize: '14px',
            fontWeight: 'normal'
        });
        $('.eBlock').css({
            fontSize: '14px',
            fontWeight: 'normal'
        });
        $('.dmchangea1').css({
            color: '#ffffff',
            fontSize: '14px',
            background: '#000000'
        });

        $('.dmchangea3').css({
            color: '',
            fontSize: '23px',
            background: 'normal'
        });

        $('.dmchangea2').css({
            color: '',
            fontSize: '18px',
            background: 'normal'
        });
        $(document).ready(function() {
            $("a.dmchangea1").addClass("dmchangeaActive");
            $("a.dmchangea2").removeClass("dmchangeaActive");
            $("a.dmchangea3").removeClass("dmchangeaActive");
        });
        setCookie("uGostfontfordk", "fontsize1", "Mon, 01-Jan-2096 00:00:00 GMT", "/");
        location.reload();
    }

    function dmfunctsizetwo() {
        $('#allEntries').css({
            fontSize: '18px',
            fontWeight: 'bold'
        });
        $('.eTitle a ').css({
            fontSize: '18px',
            fontWeight: 'bold'
        });
        $('.eTitle').css({
            fontSize: '18px',
            fontWeight: 'bold'
        });
        $('.eBlock').css({
            fontSize: '18px',
            fontWeight: 'bold'
        });
        $('.dmchangea3').css({
            color: '',
            fontSize: '23px',
            background: ''
        });
        $('.dmchangea1').css({
            color: '',
            fontSize: '14px',
            background: ''
        });
        $('.dmchangea2').css({
            color: '#ffffff',
            fontSize: '18px',
            background: '#000000'
        });
        $(document).ready(function() {
            $("a.dmchangea2").addClass("dmchangeaActive");
            $("a.dmchangea1").removeClass("dmchangeaActive");
            $("a.dmchangea3").removeClass("dmchangeaActive");
        });
        setCookie("uGostfontfordk", "fontsize2", "Mon, 01-Jan-2096 00:00:00 GMT", "/");
        location.reload();
    }

    function dmfunctsizethree() {
        $('#allEntries').css({
            fontSize: '23px',
            fontWeight: 'bold'
        });
        $('.eTitle a ').css({
            fontSize: '23px',
            fontWeight: 'bold'
        });
        $('.eTitle').css({
            fontSize: '23px',
            fontWeight: 'bold'
        });
        $('.eBlock').css({
            fontSize: '23px',
            fontWeight: 'bold'
        });
        $('.dmchangea3').css({
            color: '#ffffff',
            fontSize: '23px',
            background: '#000000'
        });
        $('.dmchangea2').css({
            color: '',
            fontSize: '18px',
            background: ''
        });
        $('.dmchangea1').css({
            color: '',
            fontSize: '14px',
            background: ''
        });
        $(document).ready(function() {
            $("a.dmchangea3").addClass("dmchangeaActive");
            $("a.dmchangea1").removeClass("dmchangeaActive");
            $("a.dmchangea2").removeClass("dmchangeaActive");
        });
        setCookie("uGostfontfordk", "fontsize3", "Mon, 01-Jan-2096 00:00:00 GMT", "/");
        location.reload();
    }

    function dmdisableimage() {
        $('img').css({
            display: 'none'
        });
        $('div').css({
            background: 'none'
        });
        $('span').css({
            background: 'none'
        });
        $('body').css({
            background: 'none'
        });
        setCookie("uGostimgfordk", "imgnone", "Mon, 01-Jan-2096 00:00:00 GMT", "/");
        location.reload();
    }

    function dmenableimage() {
        $('img').css({
            display: 'inherit'
        });
        $("img").addClass("");
        setCookie("uGostimgfordk", "imgyes", "Mon, 01-Jan-2096 00:00:00 GMT", "/");
        location.reload();
    }

    var dmcookiesfont = get_cookie("uGostfontfordk");


    if (dmcookiesfont == 'fontsize1' || dmcookiesfont == 'fontsize0') { //fontsize1 РёРјРµРµС‚СЃСЏ РІ РІРёРґСѓ 14px
        //РґРµР»Р°РµРј РІСЃРµ РІ 14 РїРёРєСЃРµР»СЏС…
        $("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("fontSize", "14px");
        $("h1").css("fontSize", "16px");
        $("h2").css("fontSize", "15px");
        $("#infobardm, .dmchangea1, .dmchangea2, .dmchangea3, .dmdisableimage, .dmenableimage, .dmcolor1, .dmcolor2, .dmcolor3, .dmcolor4").css("fontSize", "14px");

        //РґРµР»Р°РµРј РѕС‚СЃС‚СѓРїС‹ РІ 30px
        $("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("line-height", "30px");
        $("h1").css("line-height", "30px");
        $("h2").css("line-height", "30px");
        $("#infobardm, .dmchangea1, .dmchangea2, .dmchangea3, .dmdisableimage, .dmenableimage, .dmcolor1, .dmcolor2, .dmcolor3, .dmcolor4").css("line-height", "30px");

        //РІС‹РґРµР»СЏРµРј С‚РµРєСѓС‰РёР№ РїСѓРЅРєС‚
        $(document).ready(function() {
            $("a.dmchangea2").removeClass("dmchangeaActive");
            $("a.dmchangea1").addClass("dmchangeaActive");
            $("a.dmchangea3").removeClass("dmchangeaActive");
        });
    } else {
        if (dmcookiesfont == 'fontsize2') { //fontsize2 РёРјРµРµС‚СЃСЏ РІ РІРёРґСѓ 18px
            //РґРµР»Р°РµРј РІСЃРµ РІ 27 РїРёРєСЃРµР»СЏС…
            $("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("fontSize", "18px");
            $("h1").css("fontSize", "20px");
            $("h2").css("fontSize", "19px");
            $("#infobardm, .dmchangea1, .dmchangea2, .dmchangea3, .dmdisableimage, .dmenableimage, .dmcolor1, .dmcolor2, .dmcolor3, .dmcolor4").css("fontSize", "18px");

            //РґРµР»Р°РµРј РѕС‚СЃС‚СѓРїС‹ РІ 35px
            $("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("line-height", "35px");
            $("h1").css("line-height", "35px");
            $("h2").css("line-height", "35px");
            $("#infobardm, .dmchangea1, .dmchangea2, .dmchangea3, .dmdisableimage, .dmenableimage, .dmcolor1, .dmcolor2, .dmcolor3, .dmcolor4").css("line-height", "35px");

            //РІС‹РґРµР»СЏРµРј С‚РµРєСѓС‰РёР№ РїСѓРЅРєС‚
            $(document).ready(function() {
                $("a.dmchangea2").addClass("dmchangeaActive");
                $("a.dmchangea1").removeClass("dmchangeaActive");
                $("a.dmchangea3").removeClass("dmchangeaActive");
            });
        } else {
            if (dmcookiesfont == 'fontsize3') { //fontsize3 РёРјРµРµС‚СЃСЏ РІ РІРёРґСѓ 23px
                //РґРµР»Р°РµРј РІСЃРµ РІ 27 РїРёРєСЃРµР»СЏС…
                $("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("fontSize", "23px");
                $("h1").css("fontSize", "25px");
                $("h2").css("fontSize", "24px");
                $("#infobardm, .dmchangea1, .dmchangea2, .dmchangea3, .dmdisableimage, .dmenableimage, .dmcolor1, .dmcolor2, .dmcolor3, .dmcolor4").css("fontSize", "18px");

                //РґРµР»Р°РµРј РѕС‚СЃС‚СѓРїС‹ РІ 40px
                $("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("line-height", "40px");
                $("h1").css("line-height", "40px");
                $("h2").css("line-height", "40px");
                $("#infobardm, .dmchangea1, .dmchangea2, .dmchangea3, .dmdisableimage, .dmenableimage, .dmcolor1, .dmcolor2, .dmcolor3, .dmcolor4").css("line-height", "40px");

                //РІС‹РґРµР»СЏРµРј С‚РµРєСѓС‰РёР№ РїСѓРЅРєС‚
                $(document).ready(function() {
                    $("a.dmchangea2").removeClass("dmchangeaActive");
                    $("a.dmchangea1").removeClass("dmchangeaActive");
                    $("a.dmchangea3").addClass("dmchangeaActive");
                });


            }
        }
    }

    //Р°РњР°Р•Р°РќР±ВЏР°Р•Р°Рњ Р±В„Р°РћР°Рќ Р°Р Р±В†Р°Р’Р°Р•Р±В‚ Р°РќР°Рђ Р±ВЃР°РђР°Р™Р±В‚Р°Р•
    function dmcolor1() {
        setCookie("uGostcolorfordk", "color1", "Mon, 01-Jan-2096 00:00:00 GMT", "static/css/");
        location.reload();
    }

    function dmcolor2() {
        setCookie("uGostcolorfordk", "color2", "Mon, 01-Jan-2096 00:00:00 GMT", "static/css/");
        location.reload();
    }

    function dmcolor3() {
        setCookie("uGostcolorfordk", "color3", "Mon, 01-Jan-2096 00:00:00 GMT", "static/css/");
        location.reload();

    }
    var dmcookiescolor = get_cookie("uGostcolorfordk");

    if (dmcookiescolor == 'color1') {
        document.write('<link type="text/css" rel="Stylesheet" href="static/css/style2.css" />');

    }
    if (dmcookiescolor == 'color2') {
        document.write('<link type="text/css" rel="Stylesheet" href="static/css/style1.css" />');
    }
    if (dmcookiescolor == 'color3') {
        document.write('<link type="text/css" rel="Stylesheet" href="static/css/style3.css" />');
    }
    if (dmcookiescolor == 'color') {
        document.write('<link type="text/css" rel="Stylesheet" href="static/css/style.css?v=10" />');
    }

    function dmreset() {
        setCookie("uGostcolorfordk", "color", "Mon, 01-Jan-2096 00:00:00 GMT", "static/css/");
        setCookie("uGostfontfordk", "color", "Mon, 01-Jan-2096 00:00:00 GMT", "static/css/");
        setCookie("uGostimgfordk", "color", "Mon, 01-Jan-2096 00:00:00 GMT", "static/css/");
        //РЅРѕРІРѕРµ РІ РІРµСЂСЃРёРё 1.2
        setCookie("uGostSettings", "", "Mon, 01-Jan-2096 00:00:00 GMT", "/");
        //РЅРѕРІРѕРµ РІ РІРµСЂСЃРёРё 1.2
        location.reload();
    }
    document.write('<link type="text/css" rel="Stylesheet" href="static/css/allstyles.css" />');