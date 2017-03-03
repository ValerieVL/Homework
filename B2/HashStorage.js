"use strict";

function THashStorage() {
    var hash = {};

    this.addValue = function (key, value) {
        hash[key] = value;
    };

    this.getValue = function (key) {
        if (key in hash)
            return hash[key];
        else
            return undefined;
    };

    this.deleteValue = function (key) {
        delete hash[key];
    };

    this.getKeys = function () {
        return Object.keys(hash);
    };
}




