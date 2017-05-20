var Brad01Layer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var colorLayer = new cc.LayerColor(
            cc.color(255,255,0),
            320,96
        );
        colorLayer.x = size.width / 2;
        colorLayer.y = size.height / 2;
        colorLayer.ignoreAnchorPointForPosition(false);
        this.addChild(colorLayer);

        var mylabel = new cc.LabelTTF("My Game","Arial",48,
            cc.size(320,96),
            cc.TEXT_ALIGNMENT_CENTER,
            cc.VERTICAL_TEXT_ALIGNMENT_CENTER
        );
        mylabel.x = size.width / 2;
        mylabel.y = size.height / 2;
        mylabel.setColor(cc.color(0,0,255));
        this.addChild(mylabel);


        return true;
    },
});

var Brad01Scene = cc.Scene.extend({
    ctor:function () {
        this._super();
        cc.log("A");
        cc.warn("A");
        cc.error("A");
    },
    onEnter:function () {
        cc.log("B");
        var layer = new Brad01Layer();
        this.addChild(layer);
    }
});
