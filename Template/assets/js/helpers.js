var addClass, device_height, device_width, el_body, el_html, el_nav, getCookie, nav_offset, parseBoolean, setCookie, set_background, set_font_size, set_height, set_text_color, validatedata;


device_width = window.innerWidth > 0 ? window.innerWidth : screen.width;

device_height = window.innerHeight > 0 ? window.innerHeight : screen.height;

el_html = jQuery('html');

el_body = jQuery('body');

el_nav = jQuery('.navbar');

if(el_nav.length)
    nav_offset = el_nav.offset().top + parseInt(el_nav.css('padding-top'));


validatedata = function(attr, def) {
    'use strict';
    if (attr !== void 0) {
        return attr;
    }
    return def;
};

parseBoolean = function(attr, def) {
    'use strict';
    if (attr === 'true') {
        return true;
    } else if (attr === 'false') {
        return false;
    }
    return def;
};

setCookie = function(cname, cvalue, exdays) {
    'use strict';
    var d, expires;
    if (exdays !== 'default') {
        d = new Date;
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + '; ' + expires;
    } else {
        document.cookie = cname + '=' + cvalue;
    }
};

getCookie = function(cname) {
    'use strict';
    var c, ca, i, name;
    name = cname + '=';
    ca = document.cookie.split(';');
    i = 0;
    while (i < ca.length) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
        i++;
    }
    return '';
};

addClass = function(element) {
    'use strict';
    if (element.hasClass('active')) {
        element.removeClass('active');
    } else {
        element.addClass('active');
    }
};

set_background = function() {
    'use strict';
    if ($('[data-background]').length > 0) {
        return $('[data-background]').each(function() {
            var background, backgroundmobile, that;
            that = $(this);
            background = $(this).attr('data-background');
            backgroundmobile = $(this).attr('data-background-mobile');
            if (that.attr('data-background').substr(0, 1) === '#') {
                that.css('background-color', background);
            } else if (that.attr('data-background-mobile') && device.mobile()) {
                that.css('background-image', 'url(' + backgroundmobile + ')');
            } else {
                that.css('background-image', 'url(' + background + ')');
            }
        });
    }
};

set_text_color = function() {
    'use strict';
    if ($('[data-color]').length > 0) {
        return $('[data-color]').each(function() {
            var that;
            that = $(this);
            that.css('color', that.attr('data-color'));
        });
    }
};

set_font_size = function() {
    'use strict';
    if ($('[data-font-size]').length > 0) {
        return $('[data-font-size]').each(function() {
            var that;
            that = $(this);
            that.css('font-size', that.attr('data-font-size') + 'px');
        });
    }
};

set_height = function() {
    'use strict';
    if ($('[data-height]').length > 0) {
        return $('[data-height]').each(function() {
            var height, that;
            that = $(this);
            height = that.attr('data-height');
            if (height.indexOf('%') > -1) {
                that.css('min-height', device_height * parseInt(height, 10) / 100);
            } else {
                that.css('min-height', parseInt(height, 10) + 'px');
            }
        });
    }
};
