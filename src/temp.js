
var TempLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        return true;
    }
});

var TempScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new TempLayer();
        this.addChild(layer);
    }
});

