var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function() {
    this.title = "Love Lie Lust";
    this.meta = "Love Lie Lust";
    this.metadesc = "Love Lie Lust";

    var d = new Date();
    this.year = d.getFullYear();

    this.init = function() {
        this.headermenu = "views/headermenu.html";
        this.header = "views/header.html";
        this.menu = "views/menu.html";
        this.slider = "views/slider.html";
        this.content = "views/content/content.html";
        this.home = "views/content/home.html";
        this.love = "views/content/love.html";
        this.lie = "views/content/lie.html";
        this.lust = "views/content/lust.html";
        this.footermenu = "views/footermenu.html";
        this.footer = "views/footer.html";
    };

    this.changecontent = function(page) {
        this.init();
        var data = this;
        data.content = "views/content/" + page + ".html";
        return data;
    };

    this.init();

});
