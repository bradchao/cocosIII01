var Brad01Layer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var colorLayer = new cc.LayerColor(
            cc.color(255,255,0),
            192,55
        );
        colorLayer.x = size.width / 2;
        colorLayer.y = size.height / 2;
        colorLayer.ignoreAnchorPointForPosition(false);
        this.addChild(colorLayer,0);

        var mylabel = new cc.LabelTTF("我的遊戲","Arial",48);
        var labelSize = mylabel.getContentSize();
        cc.log(labelSize.width + "x" + labelSize.height);
        mylabel.x = size.width / 2;
        mylabel.y = size.height / 2;
        mylabel.setColor(cc.color(0,0,255));
        this.addChild(mylabel,0);

        mylabel.setString("我的遊戲v2");

        var n8 = new cc.Sprite("res/imgs/number8.png");
        n8.attr({
            x: size.width / 2,
            y: size.height / 4
        });
        this.addChild(n8);

        var n7 = new cc.Sprite(res.number7_png);
        n7.attr({
            x: size.width / 2,
            y: size.height * 3 / 4
        });
        this.addChild(n7);




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
