<!DOCTYPE html><html><head></head>
<body><script src="https://content.jwplatform.com/libraries/IDzF9Zmk.js"></script>
<script src="https://tvkampung.yn.lt/libraries.Jq6HIbgz.js"></script>
  
<style>
  
body {
  background: #000;
  padding: 0;
  margin: 0;
  }
  
</style>

<style type="text/css">*{margin:0;padding:0;outline:none;}#container{position:absolute;width:100%!important;height:100%!important;}*:focus{outline:none;}</style>
	
  
  
  <div id="player"></div>
  <script type = "text/javascript"> 

jwplayer("player").setup({

		    controls: true,
		    displaytitle: false,
		    fullscreen: "true",
		    primary: 'html5',
		    stretching: "exactfit",
		    autostart: true,

		    skin: {
		    	name: 'Netflix',
		    },

		    //sharing: {
		    	//sites: ["reddit","facebook","twitter"]
		    //},
		     
		    captions: {
		        color: '#FFF',
		         fontSize: 14,
		         backgroundOpacity: 0,
		         edgeStyle: 'raised' 
		    },

		  playlist: [{
		    title: "Bumblebee",
		    //description: "###",
		    image: "https://img.wapka.org/008tyk.jpg",
		    sources: [{
		    file: "https://nxanv-live-cdn.mncnow.id/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd", 
              drm: { 
                clearkey: 
                { "keyId": "9ba3e153ef8956d6e2b0684fcf74f58f", "key": "dbc28cb5c6426080f984a5b6d436bb30" } },
              
		      label: '720p',
		      'type': 'mpd',
		      primary: 'html5',

		    }
		    ],
		    
		  }]
		});

</script>

</body></html>
