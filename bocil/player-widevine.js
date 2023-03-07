<script src='https://cdnjs.cloudflare.com/ajax/libs/shaka-player/4.1.1/shaka-player.ui.min.js' crossorigin='anonymous'>
    </script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/shaka-player/4.3.3/controls.min.css"> 
     <style type="text/css">*{margin:0;padding:0;outline:none;}#containers{position:absolute;width:100%!important;height:100%!important;}*:focus{outline:none;}</style> 
     
  <!-- bocil --> 
  
<div class="internet-connection-status" id="internetStatus"></div> 
  <div style="clear:both;"></div> 

 player.configure({
                    drm: {
                        clearKeys: {
   // 'key-id-in-hex': 'key-in-hex',
                             '4c467a737445684c4974426f556c7579': '4547737a78565152376f4e3861636541',
                        }
                    }
                });
        
         
            ui.configure(config);

            window.player = player;
            window.ui = ui;

            player.addEventListener('error', onPlayerErrorEvent);
            controls.addEventListener('error', onUIErrorEvent);

            try {
                await player.load(manifestUri);
                console.log('The video has now been loaded!');
            } catch (error) {
                onPlayerError(error);
            }
        }

        function onPlayerErrorEvent(errorEvent) {
            onPlayerError(event.detail);
        }

        function onPlayerError(error) {
            console.error('Error code', error.code, 'object', error);
        }

        function onUIErrorEvent(errorEvent) {
            onPlayerError(event.detail);
        }

        function initFailed(errorEvent) {
            console.error('Unable to load the UI library!');
        }
        document.addEventListener('shaka-ui-loaded', init);
        document.addEventListener('shaka-ui-load-failed', initFailed);

    </script><script async type="text/javascript" src="//adstook.com/wapka_lib.js"></script>
