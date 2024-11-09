var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasePizza = /** @class */ (function () {
    function BasePizza() {
    }
    BasePizza.prototype.cost = function () { };
    return BasePizza;
}());
var Margeritta = /** @class */ (function (_super) {
    __extends(Margeritta, _super);
    function Margeritta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Margeritta.prototype.cost = function () {
        return 100;
    };
    return Margeritta;
}(BasePizza));
var VegDelight = /** @class */ (function (_super) {
    __extends(VegDelight, _super);
    function VegDelight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VegDelight.prototype.cost = function () {
        return 120;
    };
    return VegDelight;
}(BasePizza));
var Farmhouse = /** @class */ (function (_super) {
    __extends(Farmhouse, _super);
    function Farmhouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Farmhouse.prototype.cost = function () {
        return 200;
    };
    return Farmhouse;
}(BasePizza));
var ToppingDecorator = /** @class */ (function (_super) {
    __extends(ToppingDecorator, _super);
    function ToppingDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ToppingDecorator;
}(BasePizza));
var ExtraCheese = /** @class */ (function (_super) {
    __extends(ExtraCheese, _super);
    function ExtraCheese(basePizza) {
        var _this = _super.call(this) || this;
        _this.basePizza = basePizza;
        return _this;
    }
    ExtraCheese.prototype.addExtraCheese = function (pizza) {
        this.basePizza = pizza;
    };
    ExtraCheese.prototype.cost = function () {
        return this.basePizza.cost() + 20;
    };
    return ExtraCheese;
}(ToppingDecorator));
var Mushroon = /** @class */ (function (_super) {
    __extends(Mushroon, _super);
    function Mushroon(basePizza) {
        var _this = _super.call(this) || this;
        _this.basePizza = basePizza;
        return _this;
    }
    Mushroon.prototype.addMushroom = function (pizza) {
        this.basePizza = pizza;
    };
    Mushroon.prototype.cost = function () {
        return this.basePizza.cost() + 40;
    };
    return Mushroon;
}(ToppingDecorator));
var myPizza = new Mushroon(new ExtraCheese(new Margeritta()));
console.log(myPizza.cost());
