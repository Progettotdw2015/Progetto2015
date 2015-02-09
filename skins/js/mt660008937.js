if(document.createElement && (typeof effi_660008937_mastertag == 'undefined')) {
	var protocol = 'http'+((document.location.protocol == 'https:')?'s':'')+'://';
	var effi_660008937_idp = '';
	var effi_660008937_catid = '';
	var effi_660008937_catwording = '';
	var effi_660008937_ref = '';
	var effi_660008937_mnt = '';
	var effi_660008937_email = '';
	var effi_660008937_params = new Array();
	var effi_660008937_mastertag = new Object();

	function fn_effi_660008937_parseurl(url) {
		var effi_660008937_result = new Array();
		var effi_660008937_params1 = url.split('&');
		for(var i=0; i<effi_660008937_params1.length; i++) {
			var t = effi_660008937_params1[i].split('=');
			 effi_660008937_result[t[0]] = t[1];
		}
		return  effi_660008937_result;
	}

	var effi_660008937_str_src_js = 'mastertag.effiliation.com';
	var effi_660008937_allScripts = document.getElementsByTagName('script');
	for(var i=0; i<effi_660008937_allScripts.length;i++) {
		var currentScript = effi_660008937_allScripts.item(i);
		var reg_src_js = new RegExp(effi_660008937_str_src_js,'g');
		if(currentScript.src && reg_src_js.test(currentScript.src)) {
			var param = currentScript.src.lastIndexOf('?');
			effi_660008937_params = fn_effi_660008937_parseurl(currentScript.src.substring(param+1));
			break;
		}
	}

	switch(effi_660008937_params.page) {
		case('product'):
			if(typeof effi_660008937_params.idp != 'undefined') effi_660008937_idp = effi_660008937_params.idp;
			if(typeof effi_660008937_params.idcat != 'undefined') effi_660008937_catid = effi_660008937_params.idcat;
			break;

		case('category'):
			if(typeof effi_660008937_params.idcat != 'undefined') effi_660008937_catid = effi_660008937_params.idcat;
			if(typeof effi_660008937_params.wordingcat != 'undefined') effi_660008937_catwording = effi_660008937_params.wordingcat;
			break;

		case('addcart'):
		    if(typeof effi_660008937_params.idp != 'undefined') effi_660008937_idp = effi_660008937_params.idp.replace(/_/g, ',');
		    if(typeof effi_660008937_params.montant != 'undefined') effi_660008937_mnt = effi_660008937_params.montant;
			break;

		case('sale'):
			if(typeof effi_660008937_params.idp != 'undefined') effi_660008937_idp = effi_660008937_params.idp.replace(/_/g, ',');
			if(typeof effi_660008937_params.montant != 'undefined') effi_660008937_mnt = effi_660008937_params.montant;
			if(typeof effi_660008937_params.ref != 'undefined') effi_660008937_ref = effi_660008937_params.ref;
			if(typeof effi_660008937_params.email != 'undefined') effi_660008937_email = effi_660008937_params.email;
			break;

		default :
			break;
      }
      // Tag Effiliation
      (function(){
        	var _effi_ws = document.createElement('script');
        	_effi_ws.type = 'text/javascript';
        	_effi_ws.async = true;
        	_effi_ws.src = protocol + 'track.effiliation.com/660008937/'+effi_660008937_params.page+'/engage.js';
        	var s = document.getElementsByTagName('script')[0] || document.getElementsByTagName('body')[0];
        	s.parentNode.insertBefore(_effi_ws, s);
      })();


    // Start MasterTag Effiliation
    if(effi_660008937_params.page == 'home'){
      // Tag Ad6media
      var r6id="1395732866";
      (function(){
	var a=document.createElement("script");
  	a.type="text/javascript";
	a.async= !0;
	a.src="//r.ad6media.fr/re.js";
	(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)
      })(); 

      // Tag Allo Pub
      (function(){
         try {
            var allopub_header = document.getElementsByTagName("head")[0];
            var allopub_script = document.createElement("script");
            allopub_script.type = "text/javascript";
            allopub_script.src = protocol + "vu.veoxa.com/trafic/retar.php?type=HOME&boutique=tradeinn";
            allopub_header.appendChild(allopub_script);
         } catch (e) {}
      })();
      // Tag Full Perf
      var prfroi = {tracker : {compte : "tradeinncom"}};
      (function() {var pf = document.createElement('script'); pf.type = 'text/javascript'; pf.async = true; pf.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'tags.master-perf-tools.com/V7/tagv7.pkmin.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pf, s);})();

      // Tag Nanointeractive
      (function(){
         try {
            var noiheader = document.getElementsByTagName("head")[0];
            var noiscript = document.createElement("script");
            noiscript.type = "text/javascript";
            noiscript.src = protocol + "prf.audiencemanager.de/log/profile/user-match/type/js/sec/7740bc894aba863240d14a99c7d6c75b/advertiserId/52f9f5e1b1a43d9d45000154/pid/52f9f8a5b1a43daa300000ab/productId/";
            noiheader.appendChild(noiscript);
         } catch (e) {}
      })();

      // Tag Redvertisment
      (function(){
         var tp_rtrgt_random = Math.random() * 10000000000000000;
         var tp_rtrgt_url = 'http'+(('https:'==document.location.protocol)?'s':'')+'://hal9000.redintelligence.net/retarget?a=16613&version=1';
      
         var tpDiv = document.createElement('div');
         tpDiv.id = "tp_rtrgt_div_"+tp_rtrgt_random;
         tpDiv.style.cssText ="position: absolute; visibility:hidden; left:0px; top:0px; width:1px; height:1px; border:0";
      
         var tpIframe = document.createElement('iframe');
         tpIframe.id = "tp_rtrgt_iframe_" +tp_rtrgt_random;
         tpIframe.name = "tp_rtrgt_iframe_" +tp_rtrgt_random;
         tpIframe.src = tp_rtrgt_url;
         tpIframe.width = "1";
         tpIframe.height = "1";
         tpIframe.scrolling = "no";
      
         tpDiv.appendChild(tpIframe);
         var s = document.getElementsByTagName('script')[0]; s.parentNode.appendChild(tpDiv);
      })();


    }

    if(effi_660008937_params.page == 'generic'){
      // Tag Full Perf
      var prfroi = {tracker : {compte : "tradeinncom"}};
      (function() {var pf = document.createElement('script'); pf.type = 'text/javascript'; pf.async = true; pf.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'tags.master-perf-tools.com/V7/tagv7.pkmin.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pf, s);})();
      // Tag Redvertisment
      (function(){
         var tp_rtrgt_random = Math.random() * 10000000000000000;
         var tp_rtrgt_url = 'http'+(('https:'==document.location.protocol)?'s':'')+'://hal9000.redintelligence.net/retarget?a=16613&version=1';
      
         var tpDiv = document.createElement('div');
         tpDiv.id = "tp_rtrgt_div_"+tp_rtrgt_random;
         tpDiv.style.cssText ="position: absolute; visibility:hidden; left:0px; top:0px; width:1px; height:1px; border:0";
      
         var tpIframe = document.createElement('iframe');
         tpIframe.id = "tp_rtrgt_iframe_" +tp_rtrgt_random;
         tpIframe.name = "tp_rtrgt_iframe_" +tp_rtrgt_random;
         tpIframe.src = tp_rtrgt_url;
         tpIframe.width = "1";
         tpIframe.height = "1";
         tpIframe.scrolling = "no";
      
         tpDiv.appendChild(tpIframe);
         var s = document.getElementsByTagName('script')[0]; s.parentNode.appendChild(tpDiv);
      })();


    }

    if(effi_660008937_params.page == 'product'){
      // Tag Ad6media
      var r6id="1395732866";
      (function(){
	var a=document.createElement("script");
  	a.type="text/javascript";
	a.async= !0;
	a.src="//r.ad6media.fr/re.js";
	(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)
      })(); 

      // Tag Allo Pub
      (function(){
         try {
            var allopub_header = document.getElementsByTagName("head")[0];
            var allopub_script = document.createElement("script");
            allopub_script.type = "text/javascript";
            allopub_script.src = protocol + "vu.veoxa.com/trafic/retar.php?type=PRODUIT&boutique=tradeinn&produit_id="+effi_660008937_idp;
            allopub_header.appendChild(allopub_script);
         } catch (e) {}
      })();
      // Tag Full Perf
      var prfroi = {tracker : {compte : "tradeinncom"}};
      (function() {var pf = document.createElement('script'); pf.type = 'text/javascript'; pf.async = true; pf.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'tags.master-perf-tools.com/V7/tagv7.pkmin.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pf, s);})();

      // Tag Nanointeractive
      (function(){
         try {
            var noiheader = document.getElementsByTagName("head")[0];
            var noiscript = document.createElement("script");
            noiscript.type = "text/javascript";
            noiscript.src = protocol + "prf.audiencemanager.de/log/profile/user-match/type/js/sec/7740bc894aba863240d14a99c7d6c75b/advertiserId/52f9f5e1b1a43d9d45000154/pid/52f9f87eb1a43d79300000b3/productID/" + effi_660008937_idp;
            noiheader.appendChild(noiscript);
         } catch (e) {}
      })();

      // Tag Redvertisment
      (function(){
         var tp_rtrgt_items = effi_660008937_idp;
         var tp_rtrgt_segment = effi_660008937_catid;
         
         var tp_rtrgt_random = Math.random() * 10000000000000000;
         var tp_rtrgt_url = 'http'+(('https:'==document.location.protocol)?'s':'')+'://hal9000.redintelligence.net/retarget?a=16613&version=1&event=view&cat=0000';
         tp_rtrgt_url += '&segment=' + tp_rtrgt_segment;
         tp_rtrgt_url += '&items=' + tp_rtrgt_items;
      
         var tpDiv = document.createElement('div');
         tpDiv.id = "tp_rtrgt_div_"+tp_rtrgt_random;
         tpDiv.style.cssText ="position: absolute; visibility:hidden; left:0px; top:0px; width:1px; height:1px; border:0";
      
         var tpIframe = document.createElement('iframe');
         tpIframe.id = "tp_rtrgt_iframe_" +tp_rtrgt_random;
         tpIframe.name = "tp_rtrgt_iframe_" +tp_rtrgt_random;
         tpIframe.src = tp_rtrgt_url;
         tpIframe.width = "1";
         tpIframe.height = "1";
         tpIframe.scrolling = "no";
      
         tpDiv.appendChild(tpIframe);
         var s = document.getElementsByTagName('script')[0]; s.parentNode.appendChild(tpDiv);
      })();


    }

    if(effi_660008937_params.page == 'category'){
      // Tag Ad6media
      var r6id="1395732866";
      (function(){
	var a=document.createElement("script");
  	a.type="text/javascript";
	a.async= !0;
	a.src="//r.ad6media.fr/re.js";
	(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)
      })(); 

      // Tag Allo Pub
      (function(){
         try {
            var allopub_header = document.getElementsByTagName("head")[0];
            var allopub_script = document.createElement("script");
            allopub_script.type = "text/javascript";
            allopub_script.src = protocol + "vu.veoxa.com/trafic/retar.php?type==CATEGORIE&boutique=tradeinn&categorie_id="+effi_660008937_catid;
            allopub_header.appendChild(allopub_script);
         } catch (e) {}
      })();
      // Tag Full Perf
      var prfroi = {tracker : {compte : "tradeinncom"}};
      (function() {var pf = document.createElement('script'); pf.type = 'text/javascript'; pf.async = true; pf.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'tags.master-perf-tools.com/V7/tagv7.pkmin.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pf, s);})();
      // Tag Nanointeractive
      (function(){
         try {
            var noiheader = document.getElementsByTagName("head")[0];
            var noiscript = document.createElement("script");
            noiscript.type = "text/javascript";
            noiscript.src = protocol + "prf.audiencemanager.de/log/profile/user-match/type/js/sec/7740bc894aba863240d14a99c7d6c75b/advertiserId/52f9f5e1b1a43d9d45000154/pid/52f9f8dcb1a43da1450000b5/category/" + effi_660008937_catid;
            noiheader.appendChild(noiscript);
         } catch (e) {}
      })();

      // Tag Redvertisment
      (function(){
         var tp_rtrgt_segment = effi_660008937_catid;
      
         var tp_rtrgt_random = Math.random() * 10000000000000000;
         var tp_rtrgt_url = 'http'+(('https:'==document.location.protocol)?'s':'')+'://hal9000.redintelligence.net/retarget?a=16613&version=1';
         tp_rtrgt_url += '&segment=' + tp_rtrgt_segment;
      
            var tpDiv = document.createElement('div');
         tpDiv.id = "tp_rtrgt_div_"+tp_rtrgt_random;
         tpDiv.style.cssText ="position: absolute; visibility:hidden; left:0px; top:0px; width:1px; height:1px; border:0";
      
         var tpIframe = document.createElement('iframe');
         tpIframe.id = "tp_rtrgt_iframe_" +tp_rtrgt_random;
         tpIframe.name = "tp_rtrgt_iframe_" +tp_rtrgt_random;
         tpIframe.src = tp_rtrgt_url;
         tpIframe.width = "1";
         tpIframe.height = "1";
         tpIframe.scrolling = "no";
      
         tpDiv.appendChild(tpIframe);
         var s = document.getElementsByTagName('script')[0]; s.parentNode.appendChild(tpDiv);
      })();


    }

    if(effi_660008937_params.page == 'addcart'){
      // Tag Ad6media
      var r6id="1395732866";
      (function(){
	var a=document.createElement("script");
  	a.type="text/javascript";
	a.async= !0;
	a.src="//r.ad6media.fr/re.js";
	(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)
      })(); 

      // Tag Allo Pub
      (function(){
         try {
            var allopub_header = document.getElementsByTagName("head")[0];
            var allopub_script = document.createElement("script");
            allopub_script.type = "text/javascript";
            allopub_script.src = protocol + "vu.veoxa.com/trafic/retar.php?type=PANIER&boutique=tradeinn&transaction_amout=&data="+effi_660008937_idp;
            allopub_header.appendChild(allopub_script);
         } catch (e) {}
      })();
      // Tag Full Perf
      var prfroi = {tracker : {compte : "tradeinncom"}};
      (function() {var pf = document.createElement('script'); pf.type = 'text/javascript'; pf.async = true; pf.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'tags.master-perf-tools.com/V7/tagv7.pkmin.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pf, s);})();
      // Tag Nanointeractive
      (function(){
         try {
            var noiheader = document.getElementsByTagName("head")[0];
            var noiscript = document.createElement("script");
            noiscript.type = "text/javascript";
            noiscript.src = protocol + "prf.audiencemanager.de/log/profile/user-match/type/js/sec/7740bc894aba863240d14a99c7d6c75b/advertiserId/52f9f5e1b1a43d9d45000154/pid/52f9f8c0b1a43d79300000b4/order_article/" + effi_660008937_idp;
            noiheader.appendChild(noiscript);
         } catch (e) {}
      })();


    }
 
    if(effi_660008937_params.page == 'sale'){
      // Tag Ad6media
      var r6id="1395732866";
      (function(){
	var a=document.createElement("script");
  	a.type="text/javascript";
	a.async= !0;
	a.src="//r.ad6media.fr/re.js";
	(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)
      })(); 

      // Tag Allo Pub
      (function(){
         try {
            var allopub_header = document.getElementsByTagName("head")[0];
            var allopub_script = document.createElement("script");
            allopub_script.type = "text/javascript";
            allopub_script.src = protocol + "vu.veoxa.com/trafic/retar.php?type=TRANSACTION&boutique=tradeinn&transaction_id="+effi_660008937_ref+"&transaction_amout="+effi_660008937_mnt+"&data="+effi_660008937_idp;
            allopub_header.appendChild(allopub_script);
         } catch (e) {}
      })();
      // Tag Full Perf
      var prfroi = {
         tracker : {compte : "tradeinncom"},
         roi: {
            page : "checkout",
            roiRef : "sale_" + effi_660008937_ref + "_"+ new Date().getTime(),
            prixHT : effi_660008937_mnt.replace(",","."),
            prixTTC : "",
            fdp : "",
            typeV : "1",
            sqNumber: "1"
         }
      };
      var _cart = _cart || [];
      if(typeof(perf)!="undefined")perf.roi(prfroi, _cart);
      (function() {var pf = document.createElement('script'); pf.type = 'text/javascript'; pf.async = true; pf.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'tags.master-perf-tools.com/V7/tagv7.pkmin.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pf, s);})();
      // Tag Nanointeractive
      (function(){
         try {
            var noiheader = document.getElementsByTagName("head")[0];
            var noiscript = document.createElement("script");
            noiscript.type = "text/javascript";
            noiscript.src = protocol + "akt.audiencemanager.de/log/ad/conversion/type/js/sec/7740bc894aba863240d14a99c7d6c75b/advertiserId/52f9f5e1b1a43d9d45000154/pid/52f9f749b1a43da04500014a/orderID/" + effi_660008937_ref+"/order_article/"+effi_660008937_idp+"/order_total/"+effi_660008937_mnt;
            noiheader.appendChild(noiscript);
         } catch (e) {}
      })();
     (function(d){
		var HEIAS_PARAMS = [];
		HEIAS_PARAMS.push(['type', 'ppx'], ['ssl', 'auto'], ['n', 'null'], ['cus', 'null']);
		HEIAS_PARAMS.push(['pb', '1']);
		HEIAS_PARAMS.push(['order_article', effi_660008937_idp]);
		HEIAS_PARAMS.push(['order_id', effi_660008937_ref]);
		HEIAS_PARAMS.push(['order_total', effi_660008937_mnt]);
		HEIAS_PARAMS.push(['product_quantity', 1]);
		if (typeof window.HEIAS === 'undefined') { window.HEIAS = []; }
		window.HEIAS.push(HEIAS_PARAMS);
		var scr = d.createElement('script');
		scr.async = true;
		scr.src = (d.location.protocol === 'https:' ? 'https:' : 'http:') + '//ads.heias.com/x/heias.async/p.min.js';
		var elem = d.getElementsByTagName('script')[0];
		elem.parentNode.insertBefore(scr, elem);
      }(document));

      // Tag Redvertisment
      (function(){
         var tp_rtrgt_random = Math.random() * 10000000000000000;
         var tp_rtrgt_url = 'http'+(('https:'==document.location.protocol)?'s':'')+'://hal9000.redintelligence.net/retarget?a=16613&version=1&demark=1';
      
            var tpDiv = document.createElement('div');
         tpDiv.id = "tp_rtrgt_div_"+tp_rtrgt_random;
         tpDiv.style.cssText ="position: absolute; visibility:hidden; left:0px; top:0px; width:1px; height:1px; border:0";
      
         var tpIframe = document.createElement('iframe');
         tpIframe.id = "tp_rtrgt_iframe_" +tp_rtrgt_random;
         tpIframe.name = "tp_rtrgt_iframe_" +tp_rtrgt_random;
         tpIframe.src = tp_rtrgt_url;
         tpIframe.width = "1";
         tpIframe.height = "1";
         tpIframe.scrolling = "no";
      
         tpDiv.appendChild(tpIframe);
         var s = document.getElementsByTagName('script')[0]; s.parentNode.appendChild(tpDiv);
      
      })();

    }
    // End MasterTag Effiliation
}

// ad6media : 1395732866
// allopub : tradeinn
// fullperf : tradeinncom
// nanointeractive : 7740bc894aba863240d14a99c7d6c75b : 52f9f5e1b1a43d9d45000154 : 52f9f8a5b1a43daa300000ab : 52f9f8dcb1a43da1450000b5 : 52f9f87eb1a43d79300000b3 : 52f9f8c0b1a43d79300000b4 : 52f9f749b1a43da04500014a : null : null
// redvertisment : 16613 : null
