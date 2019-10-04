var bccbId = Math.random();
document.write(unescape('%3Cdiv id=' + bccbId + '%3E%3C/div%3E'));
window._bcvma = window._bcvma || [];
_bcvma.push(["setAccountID", "2352119295241264573"]);
_bcvma.push(["setParameter", "CustomUrl", ""]);
_bcvma.push(["setParameter", "WindowParameters", "vr=&vi=&ve=&vp=&vn=&lc="]);
_bcvma.push(["addStatic", {type: "chat", bdid: "1093747443227023843", id: bccbId}]);
var bcLoad = function(){
    if(window.bcLoaded) return; window.bcLoaded = true;
    var vms = document.createElement("script"); vms.type = "text/javascript"; vms.async = true;
    vms.src = ('https:'==document.location.protocol?'https://':'http://') + "vmss.boldchat.com/aid/2352119295241264573/bc.vms4/vms.js";
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vms, s);
};
if(window.pageViewer && pageViewer.load) pageViewer.load();
else if(document.readyState=="complete") bcLoad();
else if(window.addEventListener) window.addEventListener('load', bcLoad, false);
else window.attachEvent('onload', bcLoad);

$( ".header-chat__button" ).click(function(event) {
    event.preventDefault();
    try{
    $(".bcStatic img").trigger("click");
    }catch(event){};
});