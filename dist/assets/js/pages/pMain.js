"use strict";var pMain=(function(){console.log("<pMain> => INIT!");const n=document.getElementsByTagName("main")[0];if(!n)return void console.warn("[MAIN] Thẻ <main> trong HTML của bạn đâu?");const a=n.getAttribute("id");a||console.warn("[MAIN] Thẻ <main> hình như chưa có 'id' kìa. Mà nếu không cần thì thôi cũng chả sao!"),a&&GLoader.loadScript("assets/js/pages/"+a+".js",(function(n){console.info("page script loading status: ",n)})),document.body.classList.add("loaded")}(),!0);