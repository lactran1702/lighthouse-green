"use strict";var pContact=function(){var o,n=document.getElementById("location--map"),e=document.getElementsByClassName("location-results")[0];let t="";t="undefined"==typeof path_resource?"assets/":path_resource;var i=L.icon({iconUrl:t+"img/icons/lighthouse-pin.svg",iconSize:[56,76],popupAnchor:[0,-19]});function a(o){console.log("Browser size: "+window.innerWidth+"x"+window.innerHeight)}function r(){var n=$(e).find(".coordinates"),t=[],a=0;if(console.log("results",n),n.each((function(){var n=$(this),e=n.find(".lat").text(),r=n.find(".long").text(),s="<b>"+n.find(".coordinates--label").text()+"</b><br>"+n.find(".coordinates--address").text(),c={lat:e,lon:r};t.push(c);var d=L.marker([e,r],{icon:i}).addTo(o).bindPopup(s);n.click((function(){o.setView([e,r],13),card.css("transform","none"),$(window).scrollTop(0),d.openPopup()})),a+=n.innerHeight()})),t.length>0&&($(window).innerWidth()>767?o.fitBounds(t,{padding:[500,100]}):o.fitBounds(t,{padding:[0,0]})),$(window).innerWidth()<767&&e.length>0)for(var r of e)r.style.maxHeight=a+"px"}return console.log("<pContact> => INIT!"),$(window).on("resize",a),a(),console.log("INIT mapInit"),function(){var t="pk.eyJ1IjoiY29tbW9uZGV2IiwiYSI6ImNqc2w3N21tNTBrMWI0NG8yNDhrMGo1ankifQ.vgrGRludoNSDGzCsVGDwog",i=L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',id:"light-v9",accessToken:t});if(o=L.map(n,{zoomControl:!1}).addLayer(i),e.length>0)for(var a of e)$(a).on("DOMSubtreeModified",(function(){r()}));r()}(),!0}();