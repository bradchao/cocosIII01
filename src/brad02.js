var Brad02Layer = cc.Layer.extend({
    dx : 1,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var myTitle = new cc.LabelTTF("猜數字遊戲","Arial",48);
        myTitle.x = size.width / 2;
        myTitle.y = size.height * 9 / 10;
        myTitle.setColor(cc.color(255,255,0));
        this.addChild(myTitle,0,"myTitle");
        //this.addChild(myTitle,0,123);

        this.scheduleUpdate();

        return true;
    },

    update:function(){
        var myTitle = this.getChildByName("myTitle");
//        var myTitle = this.getChildByTag(123);
        if (myTitle.x+myTitle.width/2>=cc.winSize.width ||
            myTitle.x-myTitle.width/2<=0){
            this.dx *= -1
        }
        myTitle.x += this.dx;
    }
});

var Brad02Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad02Layer();
        this.addChild(layer);
    }
});
