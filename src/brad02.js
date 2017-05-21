var Brad02Layer = cc.Layer.extend({
    dx: 2,
    nums: new Array(10),
    back: null,
    enter: null,
    mesg : null,
    input : null,
    ctor: function () {
        this._super();
        var size = cc.winSize;

        var myTitle = new cc.LabelTTF("猜數字遊戲", "Arial", 48);
        myTitle.x = size.width / 2;
        myTitle.y = size.height * 7 / 8;
        myTitle.setColor(cc.color(255, 255, 0));
        this.addChild(myTitle, 0, "myTitle");

        this.initSprit();

        this.scheduleUpdate();

        return true;
    },

    initSprit: function () {
        var frameCache = cc.spriteFrameCache;
        frameCache.addSpriteFrames(
            res.number_plist, res.number_png);
        for (i = 0; i < this.nums.length; i++) {
            this.nums[i] = new cc.Sprite("#number" + i + ".png");
            var px, py;
            if (i == 0) {
                px = 2;
                py = 1;
            } else {
                px = (i - 1) % 3 + 2;
                py = parseInt((i - 1) / 3) + 2;
            }
            this.nums[i].attr({
                x: cc.winSize.width * px / 6,
                y: cc.winSize.height * py / 8
            });
            this.addChild(this.nums[i]);
        }

        this.back = new cc.Sprite(res.back_png);
        this.back.attr({
            x: cc.winSize.width * 3 / 6,
            y: cc.winSize.height * 1 / 8
        });
        this.addChild(this.back);

        this.enter = new cc.Sprite(res.enter_png);
        this.enter.attr({
            x: cc.winSize.width * 4 / 6,
            y: cc.winSize.height * 1 / 8
        });
        this.addChild(this.enter);

        this.input = new cc.LabelTTF("123","",48);
        this.input.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height *6/8
        });
        this.addChild(this.input);

        this.mesg = new cc.LabelTTF("輸入三位數","",48);
        this.mesg.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height *5/8
        });
        this.addChild(this.mesg);

    },


    update: function () {
        var myTitle = this.getChildByName("myTitle");
//        var myTitle = this.getChildByTag(123);
        if (myTitle.x + myTitle.width / 2 >= cc.winSize.width ||
            myTitle.x - myTitle.width / 2 <= 0) {
            this.dx *= -1
        }
        myTitle.x += this.dx;
    }
});

var Brad02Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new Brad02Layer();
        this.addChild(layer);
    }
});
