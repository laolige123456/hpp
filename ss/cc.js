new Vue ({
	el: '.fake_body',
	data() {
		return {
		body_bg_color: "#FFFFFF",
		is_dark: false,
		set_color: "#FD7163",
		bg_img: "",
		snow_bg_color: "#000000",
		engines: [
            { name: 'icon-baidu', url: 'https://www.baidu.com'},
		  { name: 'icon-google', url: 'https://www.google.com'},
		  { name: 'icon-bing', url: 'https://www.bing.com'},
          { name: 'icon-bilibili', url: 'https://www.bing.com'},
		],
		small_site_engines: [
			{name: 'icon-zhihu-circle', url:'https://www.zhihu.com'},
			{name: 'icon-douban_F', url:'https://www.douban.com'},
			{name: 'icon-weibo-circle', url:'https://s.weibo.com'},
		],
		show: false,
		hot_show: false,
		set_show: false,
		support_show: false,
		collect_show: false,
		is_super_clean: false,
		search_urls: [
            {url: "https://www.baidu.com/s?wd="},
			{url: "https://www.google.com/search?q="},
			{url: "https://www.bing.com/search?q="},
            {url: "https://search.bilibili.com/all?keyword="},
		],
		small_search_urls: [
			{url: "https://www.zhihu.com/search?type=content&q="},
			{url: "https://www.douban.com/search?q="},
			{url: "https://s.weibo.com/weibo?q="},
            {url: "https://s.weibo.com/weibo?q="},
		],
		selected: 0,
		search_content: "",
		zhihu_hot_text: [],
		weibo_hot_text: [],
		v2ex_hot_text: [],
		collect_bucket: [
			// {
			// 	type: "社交",
			// 	content : [
			// 	]
			// },
			{
				type: "娱乐",
				content : [
					{url: "https://www.bilibili.com", img_url: "https://android-artworks.25pp.com/fs08/2020/08/03/2/110_bac4079fd00a2632370397972e6e81bf_con_130x130.png", name: "B站"},
					{url: "https://web.okjike.com", img_url: "../static/imgs/jike.png", name: "即刻"},
					{url: "https://www.yikm.net", img_url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3739754777,221676916&fm=26&gp=0.jpg", name: "小霸王"},
					{url: "https://sesme.co", img_url: "../static/imgs/private.png", name: "阅后即焚"},
				]
			},
			{
				type: "知识",
				content : [
					{url: "https://www.yxgapp.com", img_url: "https://android-artworks.25pp.com/fs08/2020/04/22/5/2_bba2fa20ee06ce0a7da159eb9dccc8fb_con_130x130.png", name: "译学馆"},
					{url: "https://www.allhistory.com", img_url: "https://www.allhistory.com/online/common/img/logo-ah.1598.svg", name: "全历史"},
					{url: "https://zh.wikihow.com/%E9%A6%96%E9%A1%B5", img_url: "https://de.m.wikihow.com/skins/WikiHow/wH-initials_152x152.png", name: "WikiHow"},
					{url: "https://www.cbaigui.com", img_url: "https://tvax1.sinaimg.cn/crop.134.23.335.335.180/006TSKyvly8gdioscf16wj30gs0angmm.jpg?KID=imgbed,tva&Expires=1596521012&ssig=63EscNEb9M", name: "知妖"},
				]
			},
			{
				type: "其他",
				content : [
					{url: "https://www.slant.co", img_url:"https://www.slant.co/images/share-logo.png", name: "slant"},
					{url: "https://www.dute.org", img_url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3805817126,3556190360&fm=26&gp=0.jpg", name: "工具箱"},
					{url: "https://aidn.jp/mikutap", img_url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3280813892,1559189130&fm=26&gp=0.jpghttps://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3280813892,1559189130&fm=26&gp=0.jpg", name: "mikutap"},
					{url: "https://film-grab.com/", img_url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=185411431,2649130716&fm=26&gp=0.jpg", name: "FilmGrab"},
				]
			}
		]
	}
	},
	methods:{
		change_bg_color: function() {
			if(this.body_bg_color == "#FFFFFF"){
				this.body_bg_color = "#000000"
				this.snow_bg_color = "#FFFFFF"
			}else{
				this.body_bg_color = "#FFFFFF"
				this.snow_bg_color = "#000000"
			}
		},
		search_action: function() {
			if (this.search_content == "") {
				url = this.engines[this.selected].url
			} else{
				url = this.search_urls[this.selected].url+`${this.search_content}`
			}
			window.open(url,"_blank")
		},
		showClick: function() {
			this.show = !this.show
		},
		select: function(index){
			this.selected = index
			localStorage.selected=index
		},
		set_show_func: function(){
			this.set_show = !this.set_show
		},
		to_night: function(){
			this.change_bg_color()
			console.log(this.is_dark)
			localStorage.is_dark=!this.is_dark
			console.log(localStorage.is_dark=="true")
		},
		support_show_func: function(){
			this.support_show = !this.support_show
		},
		search_by_site: function(index){
			if (this.search_content == "") {
				url = this.small_site_engines[index].url
			} else{
				url = this.small_search_urls[index].url+`${this.search_content}`
			}
			window.open(url,"_blank")
		},
		get_zhihu_hot: function(){
			this.zhihu_hot_text = []
		 axios.get(window.location.origin + "/hot?item=zhihu").then(response => (this.zhihu_hot_text = response.data))
		}, 
		get_weibo_hot: function(){
			this.weibo_hot_text = []
		 axios.get(window.location.origin + "/hot?item=weibo").then(response => (this.weibo_hot_text = response.data))
		}, 
		get_v2ex_hot: function(){
			this.v2ex_hot_text = []
		 axios.get(window.location.origin + "/hot?item=v2ex").then(response => (this.v2ex_hot_text = response.data))
		}, 
		show_hot: function(){
			this.hot_show =! this.hot_show
			this.collect_show = false
			if(this.hot_show == true){
				this.get_zhihu_hot()
				this.get_weibo_hot()
				this.get_v2ex_hot()
			}
		},
		show_collect: function(){
			this.collect_show =! this.collect_show
			this.hot_show = false
		},
		set_super_clean: function(){
			this.is_super_clean = !this.is_super_clean
			this.collect_show = false
			this.hot_show = false
			localStorage.is_super_clean = this.is_super_clean
		}
	},
	mounted(){
		if(localStorage.is_dark == "true") {
			this.is_dark=true
			this.body_bg_color = "#000000"
			this.snow_bg_color = "#FFFFFF"
		}
		else{
			this.is_dark=false
			this.body_bg_color = "#FFFFFF"
			this.snow_bg_color = "#000000"
		}
		if(localStorage.is_super_clean =="true"){
			this.is_super_clean = true
		}else{
			this.is_super_clean = false
		}
		if(localStorage.selected){
			this.selected = localStorage.selected
		}
	}
});

