var Brad01Layer = cc.Layer.extend({
    n8: null,
    n7: null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.n8 = new cc.Sprite("res/imgs/number8.png");
        this.n8.attr({
            x: size.width / 2,
            y: size.height / 4
        });
        this.addChild(this.n8);

        this.n7 = new cc.Sprite(res.number7_png);
        this.n7.attr({
            x: size.width / 2,
            y: size.height * 3 / 4
        });
        this.addChild(this.n7);

        var n0 = new cc.Sprite(res.number_png,cc.rect(1,1,70,70));
        n0.attr({
            x: size.width / 2,
            y: size.height * 2 / 4
        });
        this.addChild(n0);

        var frameCache = cc.spriteFrameCache;
        frameCache.addSpriteFrames(
            res.number_plist, res.number_png);

        var n1 = new cc.Sprite("#number0.png");
        n1.attr({
            x: size.width * 3 / 4,
            y: size.height * 2 / 4
        });
        this.addChild(n1);

        // 文字選單
        cc.MenuItemFont.setFontSize(72);
        var item1 = new cc.MenuItemFont("Start",this.item1Callback,this);
        var item2 = new cc.MenuItemFont("Setting",this.item2Callback,this);
        var menu = new cc.Menu(item1,item2);
        menu.alignItemsVertically();
        this.addChild(menu);

        this.MyMouseListener(this);

        cc.log(sayYa("Brad"));

        return true;
    },

    item1Callback: function (sender) {
        cc.director.pushScene(new cc.TransitionFadeTR(1, new Brad02Scene()));
    },
    item2Callback: function (sender) {
        cc.log("setting");
    },

    // 定義一個自訂方法名稱: MyMouseListener
    MyMouseListener: function(layer){
        if ('mouse' in cc.sys.capabilities){
            // mouse listener
            var mouseListener = {
                event: cc.EventListener.MOUSE,
                onMouseDown: function(event){
                    var x = event.getLocationX();
                    var y = event.getLocationY();
                    var point = new cc.Point(x,y);

                    var n8X = layer.n8.x;
                    var n8Y = layer.n8.y;
                    var n8W = layer.n8.width;
                    var n8H = layer.n8.height;
                    var rect = new cc.Rect(n8X,n8Y,n8W,n8H);

                    if (cc.rectContainsPoint(rect,point)){
                        cc.log("got it");
                    }

                }
            };
            cc.eventManager.addListener(mouseListener,this);

        }
    }

});

var Brad01Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad01Layer();
        this.addChild(layer);
    }
});

function sayYa(who){
    return "Ya," + who;
}