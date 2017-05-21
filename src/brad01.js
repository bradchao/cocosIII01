var Brad01Layer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;

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

        this.MyMouseListener(this);

        return true;
    },


    // 定義一個自訂方法名稱: MyMouseListener
    MyMouseListener: function(layer){
        if ('mouse' in cc.sys.capabilities){
            // mouse listener
            var mouseListener = {
                event: cc.EventListener.MOUSE,
                onMouseDown: function(event){
                    cc.log("down");
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
