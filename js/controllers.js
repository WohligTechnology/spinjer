angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footercolor = "";

    $scope.mySlides = [
    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];
})

.controller('LoveCtrl', function ($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("love");
    $scope.menutitle = NavigationService.makeactive("Love");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footercolor = "black";



    function getArticles(data) {


        $scope.catColor = TemplateService.getheader(data.category.id);

        console.log(data);
        $scope.category = data.catgory;
        $scope.loveblog = data.article;
        _.each($scope.loveblog, function (n) {
            n.timestamp = moment(n.timestamp).toDate();
        });
        $scope.viewed = data.mostViewed;

    };
    NavigationService.getCategoryArticles(1, getArticles);
})

.controller('LieDetailCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("liedetail");
        $scope.menutitle = NavigationService.makeactive("Lie Detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.footercolor = "black";
    })
    .controller('ConfessionDetailCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("confessiondetail");
        $scope.menutitle = NavigationService.makeactive("Confession Detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.footercolor = "black";

        $scope.confessionblog = [{
            head: "#51",
            title: "I have heard a lot about women pleasuring themselves and reaching orgasm without a man. I want to try it out.",
            content: "I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends betrayed me. Even he started behaving which i never expectd. Made fun of me always, stopped hearing my problem, he just stopped talking with me. We lived together but he was never there with me. Ignored me for his friends, family.. Then he would always spend my money and will say he has spent alot on me which i dont even know. I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends..."
    }];
    })

.controller('ConfessionsCtrl', function ($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("confessions");
    $scope.menutitle = NavigationService.makeactive("Confessions");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footercolor = "black";
    $scope.confessionblog = [{
        head: "#51",
        content: "I have heard a lot about women pleasuring themselves and reaching orgasm without a man. I want to try it out. Are there any precautions that I need to take?"
  }, {
        head: "#52",
        content: "I have heard a lot about women pleasuring themselves and reaching orgasm without a man. I want to try it out. Are there any precautions that I need to take?"
  }, {
        head: "#53",
        content: "I have heard a lot about women pleasuring themselves and reaching orgasm without a man. I want to try it out. Are there any precautions that I need to take?"
  }];
})

.controller('LieCtrl', function ($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("lie");
    $scope.menutitle = NavigationService.makeactive("Lie");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    console.log("my ctrol");
    $scope.demo = "demo working";
    $scope.footercolor = "black";

    $scope.liesblog = [{
            img: "img/love-pic.jpg",
            title: "Love for Two, Please!",
            date: "March 13, 2015 by Anonymous",
            descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
    }, {
            img: "img/kiss-pic.jpg",
            title: "Love for Two, Please!",
            date: "March 13, 2015 by Anonymous",
            descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
    }, {
            img: "img/love-pic.jpg",
            title: "Love for Two, Please!",
            date: "March 13, 2015 by Anonymous",
            descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
    },

        {
            img: "img/kiss-pic.jpg",
            title: "Love for Two, Please!",
            date: "March 13, 2015 by Anonymous",
            descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
    }, {
            img: "img/love-pic.jpg",
            title: "Love for Two, Please!",
            date: "March 13, 2015 by Anonymous",
            descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
    },

        {
            img: "img/kiss-pic.jpg",
            title: "Love for Two, Please!",
            date: "March 13, 2015 by Anonymous",
            descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
    }
  ];
    console.log($scope.liesblog);
    $scope.viewed = [{
        img: "img/kiss-pic.jpg",
        caption: "Butterfly Junkie"
  }, {
        img: "img/post2.jpg",
        caption: "Butterfly Junkie"
  }, {
        img: "img/kiss-pic.jpg",
        caption: "Butterfly Junkie"
  }, {
        img: "img/post2.jpg",
        caption: "Butterfly Junkie"
  }];
})

.controller('LustCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("lust");
        $scope.menutitle = NavigationService.makeactive("Lust");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('SexpertCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("sexpert");
        $scope.menutitle = NavigationService.makeactive("Sexpert");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.footercolor = "black";

        $scope.sexpertblog = [{
                content: "I have just graduated and have been offered my dream job in Mumbai. But it will be moving away from my family and my boyfriend. I don’t know if i will be able to live without him."
    }, {
                content: "I am 18 and i met this boy on my holiday to Himachal Pradesh. Now I am back home and i miss him terribly. He is a local and we’ve kept in touch. I want to go back there for my Christmas vacation, but my parents wont allow it. I feel like running away to him. How do i convince my parents to let me go?"
    }, {
                content: "I have just graduated and have been offered my dream job in Mumbai. But it will be moving away from my family and my boyfriend. I don’t know if i will be able to live without him."
    },
            {
                content: "I am 18 and i met this boy on my holiday to Himachal Pradesh. Now I am back home and i miss him terribly. He is a local and we’ve kept in touch. I want to go back there for my Christmas vacation, but my parents wont allow it. I feel like running away to him. How do i convince my parents to let me go?"
    }];
    })
    .controller('QueriesCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("queries");
        $scope.menutitle = NavigationService.makeactive("Queries");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.footercolor = "black";
        $scope.queriesblog = [{
                content: "I have just graduated and have been offered my dream job in Mumbai. But it will be moving away from my family and my boyfriend. I don’t know if i will be able to live without him."
    }, {
                content: "I am 18 and i met this boy on my holiday to Himachal Pradesh. Now I am back home and i miss him terribly. He is a local and we’ve kept in touch. I want to go back there for my Christmas vacation, but my parents wont allow it. I feel like running away to him. How do i convince my parents to let me go?"
    }, {
                content: "I have just graduated and have been offered my dream job in Mumbai. But it will be moving away from my family and my boyfriend. I don’t know if i will be able to live without him."
    },
            {
                content: "I am 18 and i met this boy on my holiday to Himachal Pradesh. Now I am back home and i miss him terribly. He is a local and we’ve kept in touch. I want to go back there for my Christmas vacation, but my parents wont allow it. I feel like running away to him. How do i convince my parents to let me go?"
                          }
                         ];
    })

.controller('AboutusCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("aboutus");
        $scope.menutitle = NavigationService.makeactive("AboutUs");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.footercolor = "black";
    })
    .controller('SexpertDetailCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("sexpertdetail");
        $scope.menutitle = NavigationService.makeactive("Sexpert Detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.footercolor = "black";
        $scope.sexpertblog = [{
            content: "I have just graduated and have been offered my dream job in Mumbai. But it will be moving away from my family and my boyfriend. I don’t know if i will be able to live without him.",
            ans: "Yes, of course you can enjoy intercourse with a man even after you pleasure yourself. You can masturbate by having a fantasy, touching your breasts and stroking your genitals. Do not insert objects or fingers into the vagina. Study the anatomy of the vulva and vagina. You will learn that the clitoris is the female penis, which brings about an orgasm for women when stimulated. It is situated at the apex of the vulva.Yes, of course you can enjoy intercourse with a man even after you pleasure yourself. You can masturbate by having a fantasy, touching your breasts and stroking your genitals. Do not insert objects or fingers into the vagina. Study the anatomy of the vulva and vagina. You will learn that the clitoris is the female penis, which brings about an orgasm for women when stimulated. It is situated at the apex of the vulva."
    }];
    })
    .controller('QueriesDetailCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("queriesdetail");
        $scope.menutitle = NavigationService.makeactive("Queries Detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.footercolor = "black";
        $scope.queriesblog = [{
            content: "I have just graduated and have been offered my dream job in Mumbai. But it will be moving away from my family and my boyfriend. I don’t know if i will be able to live without him.",
            ans: "Yes, of course you can enjoy intercourse with a man even after you pleasure yourself. You can masturbate by having a fantasy, touching your breasts and stroking your genitals. Do not insert objects or fingers into the vagina. Study the anatomy of the vulva and vagina. You will learn that the clitoris is the female penis, which brings about an orgasm for women when stimulated. It is situated at the apex of the vulva.Yes, of course you can enjoy intercourse with a man even after you pleasure yourself. You can masturbate by having a fantasy, touching your breasts and stroking your genitals. Do not insert objects or fingers into the vagina. Study the anatomy of the vulva and vagina. You will learn that the clitoris is the female penis, which brings about an orgasm for women when stimulated. It is situated at the apex of the vulva."
    }];
    })

.controller('SliderCtrl', function ($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("slider");
    $scope.menutitle = NavigationService.makeactive("slider");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('LoveDetailCtrl', function ($scope, TemplateService, NavigationService, $stateParams) {
    //Used to name the .html file
    function loadArticle(data) {
        console.log(data);
        $scope.catColor = TemplateService.getheader(data.category.id);
        data.article.timestamp = moment(data.article.timestamp).toDate();
        $scope.article = data.article;
        $scope.article.next = data.next;
        $scope.article.prev = data.prev;
        $scope.recommended = data.recommended;
    };
    NavigationService.getArticle($stateParams.id, loadArticle);
    $scope.template = TemplateService.changecontent("lovedetail");
    $scope.menutitle = NavigationService.makeactive("Love Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footercolor = "black";
})

.controller('LustCtrl', function ($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("lust");
    $scope.menutitle = NavigationService.makeactive("Lust");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('footerCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.form = {
        isdisable: true
    };

    function doneCallback(data) {
        $scope.form.done = true;
        if (data.value) {
            $scope.form.complete = "Thank you for Subsribing.";
        } else {
            $scope.form.complete = "Email id is already Subscribed.";
        }

    }
    $scope.checkdisble = function (email) {
        console.log(email);
        if (email) {
            $scope.form.isdisable = false;
        } else {
            $scope.form.isdisable = true;
        }
    };
    $scope.sendEmail = function (email) {
        if (!$scope.form.isdisable) {
            NavigationService.sendSubsribe(email, doneCallback);
        }

    };

})

.controller('headerctrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    var get = false;
    $scope.shownav = "menu-out";
    $scope.getnav = function () {
        get = !get;
        if (get == true) {
            $scope.shownav = "menu-in";
            $("#icon1").addClass("top-bar")
            $("#icon2").addClass("mid-bar")
            $("#icon3").addClass("down-bar")
        } else {
            $scope.shownav = "menu-out";
            $("#icon1").removeClass("top-bar")
            $("#icon2").removeClass("mid-bar")
            $("#icon3").removeClass("down-bar")
        }
    }
})

;