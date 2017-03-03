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
            return "undefined";
    };

    this.deleteValue = function (key) {
        delete hash[key];
    };

    this.getKeys = function () {
        return Object.keys(hash);
    };
}

var drinkStorage = new THashStorage();


function addDrink() {
    var drink = prompt("Введите название напитка:", "Маргарита");
    var info = [confirm("Алкогольный он или нет? (ОК - да, Отмена - нет)"), prompt("Введите рецепт приготовления напитка:")];
    info[0] == true ? info[0] = "да" : info[0] = "нет";
    drinkStorage.addValue(drink, info);
}

function getInfoAboutDrink() {
    var drinkAsk = prompt("Введите название напитка, информацию о котором Вы хотите узнать:", "Маргарита");
    var result = drinkStorage.getValue(drinkAsk);
    if (result != "undefined")
        alert("Напиток: " + drinkAsk + "\nАлкогольный: " + result[0] + "\nРецепт приготовления: " + result[1]);
    else
        alert("Такого напитка нет!");
}

function deleteDrink() {
    var delDrink = prompt("Введите название напитка, которого хотите удалить:");
    drinkStorage.deleteValue(delDrink);
}

function getAllDrinks() {
    alert(drinkStorage.getKeys());
}