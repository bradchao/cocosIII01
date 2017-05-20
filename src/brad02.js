var Brad02Layer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var myTitle = new cc.LabelTTF("猜數字遊戲","Arial",48);
        myTitle.x = size.width / 2;
        myTitle.y = size.height * 9 / 10;
        myTitle.setColor(cc.color(255,255,0));
        this.addChild(myTitle,0);

        return true;
    },
});

var Brad02Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad02Layer();
        this.addChild(layer);
    }
});
