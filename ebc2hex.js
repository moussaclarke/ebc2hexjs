Ebc2Hex = function() {};
Ebc2Hex.prototype = {
    convert: function(ebc, sat) {
        ebc = ebc > 80 ? 80 : ebc;
        ebc = ebc < 0 ? 0 : ebc;
        var srm = this.ebcToSrm(ebc);
        var rgb = {
            r: this.calcRed(srm),
            g: this.calcGreen(srm),
            b: this.calcBlue(srm)
        };
        rgb = this.desaturate(rgb, sat);
        return this.rgbToHex(rgb);
    },
    ebcToSrm: function(ebc) {
        return ebc * 0.508;
    },
    calcRed: function(srm) {
        var result = Math.round(280 - srm * 5.65);
        return result > 255 ? 255 : result;
    },
    calcGreen: function(srm) {
        var result = Math.round(0.188349 * Math.pow(srm, 2) - 13.2676 * srm + 239.51);
        return result;
    },
    calcBlue: function(srm) {
        var result = Math.round(0.000933566 * Math.pow(srm, 4) - 0.0894788 * Math.pow(srm, 3) + 3.00611 * Math.pow(srm, 2) - 40.8883 * srm + 183.409);
        return result < 0 ? 0 : result;
    },
    segmentToHex: function(seg) {
        var hex = seg.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    },
    rgbToHex: function(rgb) {
        return "#" + this.segmentToHex(rgb.r) + this.segmentToHex(rgb.g) + this.segmentToHex(rgb.b);
    },
    desaturate: function(rgb, sat) {
        var gray = rgb.r * 0.3086 + rgb.g * 0.6094 + rgb.b * 0.0820;
        gray = gray * (1 - sat);
        rgb.r = Math.round(rgb.r * sat + gray);
        rgb.g = Math.round(rgb.g * sat + gray);
        rgb.b = Math.round(rgb.b * sat + gray);
        return rgb;
    }
};