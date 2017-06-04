
var SettingLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var title = new cc.LabelTTF("Setting","",36);
        title.attr({
            x: size.width / 2,
            y: size.height *9 / 10
        });
        this.addChild(title);

        this.initMenu();

        return true;
    },

    initMenu: function () {
        var item1 = new cc.MenuItemFont("2",this.setG2,this);
        var item2 = new cc.MenuItemFont("3",this.setG3,this);
        var item3 = new cc.MenuItemFont("4",this.setG4,this);
        var item4 = new cc.MenuItemFont("5",this.setG5,this);

        var menu = new cc.Menu(item1, item2, item3, item4);
        menu.alignItemsVertically();
        this.addChild(menu);
    },

    setG2: function () {
        cc.log("22222");
    },
    setG3: function () {
        cc.log("33333");
    },
    setG4: function () {
        cc.log("44444");
    },
    setG5: function () {
        cc.log("55555");
    },



});

var SettingScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new SettingLayer();
        this.addChild(layer);
    }
});

