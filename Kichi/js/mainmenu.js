window.fbAsyncInit=function(){FB.init({appId:'158000174877255',autoLogAppEvents:!0,xfbml:!1,version:'v2.12',})};(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return}
js=d.createElement(s);js.id=id;js.src="https://connect.facebook.net/vi_VN/sdk.js";fjs.parentNode.insertBefore(js,fjs)}(document,'script','facebook-jssdk'));TH.MainMenu=function(game){var playButton;var helloText;var fbBtn;var listGcButton=[];var listGcText=[];var giftCodePopup;var btnClose;var btnPrev;var btnNext;var gcData=[];var btnSound;var gcPopup;var gcTitle;var gcText;var gcDesc;var blurBg;var data;var gcpBlur;var rule_bg;var rule_close;var rule_blur};var paging;var currentPageIndex;var totalPage;var instance;TH.MainMenu.prototype={init:function()
{TH.MainMenu.listGcButton=[];TH.MainMenu.listGcText=[];instance=this},preload:function()
{},create:function()
{var bg=game.add.image(game.world.centerX,game.world.centerY,'bg');bg.scale.setTo(1,1);bg.anchor.set(0.5);var title=game.add.image(game.world.centerX,450,'title');title.anchor.set(0.5);fbBtn=this.add.image(game.world.centerX,game.world.centerY-15,'fb_login');fbBtn.anchor.set(0.5);fbBtn.scale.setTo(1,1);fbBtn.inputEnabled=!0;fbBtn.events.onInputDown.add(this.onClickOnBtnFB,this);TH.MainMenu.playButton=this.add.image(game.world.centerX,game.world.centerY,'play');TH.MainMenu.playButton.anchor.set(0.5);TH.MainMenu.playButton.scale.setTo(1,1);TH.MainMenu.playButton.inputEnabled=!0;TH.MainMenu.playButton.events.onInputDown.add(this.onClickOnBtnPlay,this);TH.MainMenu.playButton.visible=!1;var rulesBtn=this.add.image(game.world.centerX+350,game.world.height-95,'rules');rulesBtn.anchor.set(0.5);rulesBtn.scale.setTo(1,1);rulesBtn.inputEnabled=!0;rulesBtn.events.onInputDown.add(this.onClickOnBtnRules,this);var giftBtn=this.add.image(game.world.centerX-350,game.world.height-95,'gift');giftBtn.anchor.set(0.5);giftBtn.scale.setTo(1,1);giftBtn.inputEnabled=!0;giftBtn.events.onInputDown.add(this.onClickOnBtnGift,this);TH.MainMenu.gcpBlur=game.add.image(game.world.centerX,game.world.centerY,'blur_bg');TH.MainMenu.gcpBlur.anchor.set(0.5);TH.MainMenu.gcpBlur.scale.setTo(1,1);TH.MainMenu.gcpBlur.inputEnabled=!0;TH.MainMenu.giftCodePopup=this.add.image(game.world.centerX,game.world.centerY,'list_gc');TH.MainMenu.giftCodePopup.anchor.set(0.5);TH.MainMenu.giftCodePopup.scale.setTo(1,1);TH.MainMenu.btnClose=game.add.image(TH.MainMenu.giftCodePopup.centerX+TH.MainMenu.giftCodePopup.width/2-60,TH.MainMenu.giftCodePopup.centerY-TH.MainMenu.giftCodePopup.height/2+75,'btnClose');TH.MainMenu.btnClose.anchor.set(0.5);TH.MainMenu.btnClose.scale.setTo(1,1);TH.MainMenu.btnClose.inputEnabled=!0;TH.MainMenu.btnClose.events.onInputDown.add(this.onClickToTitle,this);TH.MainMenu.btnPrev=game.add.image(game.world.centerX-300,game.world.centerY+(TH.MainMenu.giftCodePopup.height/2)+60,'prev');TH.MainMenu.btnPrev.scale.setTo(0.75,0.75);TH.MainMenu.btnPrev.anchor.set(0.5);TH.MainMenu.btnNext=this.add.image(game.world.centerX+300,game.world.centerY+(TH.MainMenu.giftCodePopup.height/2)+60,'next');TH.MainMenu.btnNext.anchor.set(0.5);TH.MainMenu.btnNext.scale.setTo(0.75,0.75);TH.MainMenu.btnPrev.events.onInputDown.add(this.onClickBtnPrev,this);TH.MainMenu.btnNext.events.onInputDown.add(this.onClickBtnNext,this);TH.MainMenu.btnPrev.inputEnabled=!0;TH.MainMenu.btnNext.inputEnabled=!0;TH.MainMenu.giftCodePopup.inputEnabled=!0;var startPoint=TH.MainMenu.giftCodePopup.centerX-70;for(var i=0;i<9;i++)
{var gc_text;gc_text=game.add.bitmapText(game.world.centerX,startPoint+(i*130),'marvin','',75);gc_text.anchor.set(0.5);gc_text.inputEnabled=!0;gc_text.events.onInputDown.add(this.onClickToGCItem,this);TH.MainMenu.listGcText.push(gc_text)}
paging=game.add.bitmapText(TH.MainMenu.giftCodePopup.centerX+TH.MainMenu.giftCodePopup.width/2-125,TH.MainMenu.giftCodePopup.centerY+TH.MainMenu.giftCodePopup.height/2-125,'marvin','1/3',90);paging.anchor.set(0.5);btnSound=game.add.image(game.world.width,0,'sound_on');btnSound.anchor.set(0.5);btnSound.x-=btnSound.width-50;btnSound.y+=btnSound.height/2;if(localStorage.getItem('soundSetting'))
{if(localStorage.getItem('soundSetting')=='s_on')
{TH.sound=!0;btnSound.loadTexture('sound_on');TH.bgMusic=game.add.audio('bg_music',1,!0);TH.bgMusic.play()}
else{TH.sound=!1;btnSound.loadTexture('sound_off')}}
else{localStorage.setItem('soundSetting','s_on');btnSound.loadTexture('sound_on');TH.sound=!0;TH.bgMusic=game.add.audio('bg_music',1,!0);TH.bgMusic.play()}
btnSound.inputEnabled=!0;btnSound.events.onInputDown.add(this.onClickBtnSound,this);var emitter=game.add.emitter(game.world.centerX,-50,50);emitter.makeParticles('snow');emitter.width=game.world.width;emitter.minParticleSpeed.setTo(10,30);emitter.maxParticleSpeed.setTo(85,100);emitter.minParticleScale=0.5;emitter.maxParticleScale=1;emitter.gravity=150;emitter.start(!1,5000,850);emitter.setAlpha(1,0,5000);TH.MainMenu.blurBg=game.add.image(game.world.centerX,game.world.centerY,'blur_bg');TH.MainMenu.blurBg.anchor.set(0.5);TH.MainMenu.blurBg.scale.setTo(1,1);TH.MainMenu.blurBg.inputEnabled=!0;TH.MainMenu.blurBg.events.onInputDown.add(this.onCloseGCPopup,this);TH.MainMenu.gcPopup=game.add.image(game.world.centerX,game.world.centerY,'gc_popup');TH.MainMenu.gcPopup.anchor.set(0.5);TH.MainMenu.gcPopup.scale.setTo(1,1);TH.MainMenu.gcTitle=game.add.image(game.world.centerX,game.world.centerY-370,'coca_title');TH.MainMenu.gcTitle.anchor.set(0.5);TH.MainMenu.gcTitle.scale.setTo(1,1);TH.MainMenu.gcDesc=game.add.image(game.world.centerX,game.world.centerY+265,'coca_desc');TH.MainMenu.gcDesc.anchor.set(0.5);TH.MainMenu.gcDesc.scale.setTo(1,1);TH.MainMenu.gcText=game.add.bitmapText(TH.MainMenu.gcPopup.centerX,50,'marvin','COCA123456',85);TH.MainMenu.gcText.anchor.set(0.5);TH.MainMenu.gcText.y=TH.MainMenu.gcTitle.centerX+250;TH.MainMenu.gcText.tint=0x096199;TH.MainMenu.gcPopup.inputEnabled=!0;TH.MainMenu.gcPopup.visible=!1;TH.MainMenu.gcText.visible=!1;TH.MainMenu.gcTitle.visible=!1;TH.MainMenu.gcDesc.visible=!1;TH.MainMenu.blurBg.visible=!1;this.onClickToTitle();instance.rule_blur=game.add.image(game.world.centerX,game.world.centerY,'blur_bg');instance.rule_blur.anchor.set(0.5);instance.rule_blur.scale.setTo(1,1);instance.rule_blur.inputEnabled=!0;instance.rule_bg=game.add.image(game.world.centerX,game.world.centerY,'rule_popup');instance.rule_bg.anchor.set(0.5);instance.rule_bg.scale.setTo(1,1);instance.rule_close=game.add.image(game.world.centerX+instance.rule_bg.width/2-75,game.world.centerY-instance.rule_bg.height/2+100,'btnClose');instance.rule_close.anchor.set(0.5);instance.rule_close.scale.setTo(1,1);instance.rule_close.inputEnabled=!0;instance.rule_close.events.onInputDown.add(instance.onCloseRulePopup,instance);instance.onCloseRulePopup();FB.getLoginStatus(function(response){if(response.status=='connected'){TH.fbAccessToken=response.authResponse.accessToken;fbBtn.visible=!1;TH.MainMenu.playButton.visible=!0;FB.api('/me','GET',{"fields":"id,name"},function(response){TH.fbUserName=response.name})}})},onClickOnBtnFB:function(){if(this.game.device.iOS)
{game.sound.unlock()}
FB.getLoginStatus(function(response){if(response.status=='connected'){TH.fbAccessToken=response.authResponse.accessToken;fbBtn.visible=!1;TH.MainMenu.playButton.visible=!0;FB.api('/me','GET',{"fields":"id,name"},function(response){TH.fbUserName=response.name})}else{var uri=encodeURI("https://zzvutienhung.github.io/Kichi/");window.location=encodeURI("https://www.facebook.com/dialog/oauth?client_id=158000174877255&redirect_uri="+uri+"&response_type=token")}})},onClickOnBtnPlay:function(){if(!TH.fbAccessToken)
{FB.getLoginStatus(function(response){if(response.status=='connected'){TH.fbAccessToken=response.authResponse.accessToken;gamesparks.facebookConnectRequest(response.authResponse.accessToken,"",function(response){TH.userId=response.userId;TH.score=0;TH.hashKey='';TH.achievement=[];TH.isPlayAgain=!1;TH.isGameOver=!1;game.state.start('Gameplay')})}else{var uri=encodeURI("https://zzvutienhung.github.io/Kichi/");window.location=encodeURI("https://www.facebook.com/dialog/oauth?client_id=158000174877255&redirect_uri="+uri+"&response_type=token")}})}
else{gamesparks.facebookConnectRequest(TH.fbAccessToken,"",function(response){TH.userId=response.userId;TH.score=0;TH.hashKey='';TH.achievement=[];TH.isPlayAgain=!1;TH.isGameOver=!1;game.state.start('Gameplay')})}},onClickOnBtnRules:function(){instance.rule_bg.visible=!0;instance.rule_blur.visible=!0;instance.rule_close.visible=!0},onClickOnBtnGift:function(){if(!gamesparks.getAuthToken())
{if(!TH.fbAccessToken)
{window.alert('Bạn vui lòng đăng nhập facebook để xem giỏ quà nhé <3');return}
else{this.gamesparksFacebookAuthenticate(TH.fbAccessToken,TH.fbUserName)}}
TH.MainMenu.giftCodePopup.visible=!0;TH.MainMenu.btnPrev.visible=!0;TH.MainMenu.btnNext.visible=!0;TH.MainMenu.btnClose.visible=!0;TH.MainMenu.gcpBlur.visible=!0;TH.MainMenu.listGcText.forEach(element=>{element.visible=!0});var request={};request.eventKey="GET_LIST_GC_OF_USER";request.USER_ID=TH.userId;gamesparks.sendWithData("LogEventRequest",request,function(response){if(response.scriptData.data)
{TH.MainMenu.data=response.scriptData.data;totalPage=Math.ceil(TH.MainMenu.data.length/9);currentPageIndex=1;paging.setText(currentPageIndex+'/'+totalPage);var currentPageData=instance.loadGCListByPageIndex(currentPageIndex);for(var i=0;i<9;i++)
{if(currentPageData[i])
{TH.MainMenu.listGcText[i].visible=!0;TH.MainMenu.listGcText[i].setText(currentPageData[i].giftCode)}
else{TH.MainMenu.listGcText[i].visible=!1;TH.MainMenu.listGcText[i].setText('')}}}})},gamesparksFacebookAuthenticate:function(tokenFB,displayName)
{gamesparks.facebookConnectRequest(tokenFB,"",function(response){TH.userId=response.userId})},onClickBtnNext:function()
{if(currentPageIndex>=totalPage)
return;if(currentPageIndex<totalPage)
currentPageIndex ++;if(currentPageIndex==totalPage)
TH.MainMenu.btnNext.visible=!1;if(currentPageIndex>1)
TH.MainMenu.btnPrev.visible=!0;paging.setText(currentPageIndex+'/'+totalPage);var currentPageData=this.loadGCListByPageIndex(currentPageIndex);for(var i=0;i<9;i++)
{if(currentPageData[i])
{TH.MainMenu.listGcText[i].visible=!0;TH.MainMenu.listGcText[i].setText(currentPageData[i].giftCode)}
else{TH.MainMenu.listGcText[i].visible=!1;TH.MainMenu.listGcText[i].setText('')}}},onClickBtnPrev:function()
{if(currentPageIndex<=1)
return;if(currentPageIndex>1)
currentPageIndex --;if(currentPageIndex==1)
TH.MainMenu.btnPrev.visible=!1;if(currentPageIndex<totalPage)
TH.MainMenu.btnNext.visible=!0;paging.setText(currentPageIndex+'/'+totalPage);var currentPageData=this.loadGCListByPageIndex(currentPageIndex);for(var i=0;i<9;i++)
{if(currentPageData[i])
{TH.MainMenu.listGcText[i].visible=!0;TH.MainMenu.listGcText[i].setText(currentPageData[i].giftCode)}
else{TH.MainMenu.listGcText[i].visible=!1;TH.MainMenu.listGcText[i].setText('')}}},onClickToGCItem:function(item)
{TH.MainMenu.gcPopup.visible=!0;TH.MainMenu.gcText.visible=!0;TH.MainMenu.gcTitle.visible=!0;TH.MainMenu.gcDesc.visible=!0;TH.MainMenu.blurBg.visible=!0;TH.MainMenu.gcText.setText(item.text);if(item.text.startsWith("COCA"))
{TH.MainMenu.gcTitle.loadTexture("coca_title");TH.MainMenu.gcDesc.loadTexture("coca_desc")}
else if(item.text.startsWith("CRM"))
{TH.MainMenu.gcTitle.loadTexture("caramel_title");TH.MainMenu.gcDesc.loadTexture("caramel_desc")}
else if(item.text.startsWith("DETO"))
{TH.MainMenu.gcTitle.loadTexture("detox_title");TH.MainMenu.gcDesc.loadTexture("detox_desc")}
else if(item.text.startsWith("BFF"))
{TH.MainMenu.gcTitle.loadTexture("buffet_title");TH.MainMenu.gcDesc.loadTexture("buffet_desc")}},onClickToTitle:function()
{TH.MainMenu.giftCodePopup.visible=!1;TH.MainMenu.btnClose.visible=!1;TH.MainMenu.btnPrev.visible=!1;TH.MainMenu.btnNext.visible=!1;TH.MainMenu.gcpBlur.visible=!1;TH.MainMenu.listGcText.forEach(element=>{element.visible=!1})},onClickBtnSound:function()
{if(TH.sound)
{btnSound.loadTexture('sound_off');localStorage.setItem('soundSetting','s_off');TH.sound=!1;if(TH.bgMusic)
{TH.bgMusic.stop()}}
else{btnSound.loadTexture('sound_on');localStorage.setItem('soundSetting','s_on');TH.sound=!0;if(!TH.bgMusic)
{TH.bgMusic=game.add.audio('bg_music',1,!0)}
TH.bgMusic.play()}},loadGCListByPageIndex:function(pageIndex)
{if(pageIndex<=0||pageIndex>totalPage)
{return}
var pageDatas=[];var pageStart=(pageIndex-1)*9;var pageEnd=pageStart+9;for(var i=pageStart;i<pageEnd;i++)
{if(TH.MainMenu.data[i])
{pageDatas.push(TH.MainMenu.data[i])}}
return pageDatas},onCloseGCPopup:function()
{TH.MainMenu.gcPopup.visible=!1;TH.MainMenu.gcText.visible=!1;TH.MainMenu.gcTitle.visible=!1;TH.MainMenu.gcDesc.visible=!1;TH.MainMenu.blurBg.visible=!1},onCloseRulePopup:function()
{instance.rule_bg.visible=!1;instance.rule_blur.visible=!1;instance.rule_close.visible=!1}}