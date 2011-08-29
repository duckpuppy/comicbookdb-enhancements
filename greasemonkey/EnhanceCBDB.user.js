// Enhance ComicBookDB Script
// version 0.51 BETA - 2007-10-14
//
// Copyright (C) 2007 Tom Tullio (ttullio)
//
// Includes functionality based on "Accessify" by Ben Zeigler (www.jzig.com)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You can download a copy of the GNU General Public License at
// http://diveintomark.org/projects/greasemonkey/COPYING
// or get a free printed copy by writing to the Free Software Foundation,
// Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.
//
// To install, you need Greasemonkey: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Enhance ComicBookDB", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Enhance ComicBookDB
// @namespace     http://www.tullio.net/greasemonkey
// @description   Shortcuts for collection-management tasks on comicbookdb.com
// @include       http://comicbookdb.com/*
// @include       http://www.comicbookdb.com/*
// ==/UserScript==

window.addEventListener("load",function(){
	try{
		document.forms[0].elements[0].focus();
	}
	catch(err){
	}
},true);
(function(){
	var _1="data:image/gif,GIF89a%09%00%09%00%91%FF%00%FF%FF%FFb%AD%8E%00K%2C%00%00%00%2C%00%00%00%00%09%00%09%00%00%02%17%84%8Eb%C1%1D%D7%40%83L2%08r~%22%CE%5E%7D%CEd%24%07P%00%00%3B";
	var _2="data:image/gif,GIF89aT%00%11%00%C4%FF%00%FF%FF%FF%F5%F5%F6%EB%EC%EE%E1%E4%E6%D5%D8%DC%CC%CF%D3%C1%C6%CB%B8%BD%C2%AC%B2%B8%A2%A9%B0%98%A0%A8%8E%96%9F%82%8B%95x%82%8Coy%84ep%7C5P%5C%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%2C%00%00%00%00T%00%11%00%00%05%FF%20%24%8Edi%9Eh%AA%AE%EC%F9%BCp%2C%CFtm%DFx%1E%8Bz%EF%FF%40%1A%2FH%2C%1Aa%C3%D7%A2a%5B%2C%1C%8F%C6%82%91c%3Ck%CBG%B6%B7%D5%25%1F%00%84%0D%00H%3C%0C%00%C2%CDA%20%97ia%B0xmX%3C%08%E6%DE7%FCdPc%00%03%07%0F%03%03jY%0EW%2F%06%01ThL%89Lr%93%0F%89P%95Y%08a%91%2F%9CZ%0E~%3B%10%80%9A%86q0%00%07j%A9j%03%06%0F%09%00%97%0F%01%83%95L%0C%01%03%01%AFqq%0Ai%00%0A%B1m%07%03%81%0Cq%B9%BB%BD%A6s%0F%7B%9A%AF%86%80%C0%0B%03%08j%09%01%0F%05%AF%A8%CF%2F%02%05%0F%C9%B1bq%02%AF%07%02%EA%0F%0A%0A%0B%00v%E9%E4%E6%00%D3j%2F%D1q%04%FA%2F%F3%0C%1D%C8Vi%9E%B0%18%EE%B4%1Cpp*%8C%2Ft%02%FC%B5y%26%8F%1E%BA9%0E%C5%F8C2%0A%5C%BF%7F%60%16%1C%08%A0%80%E0%99%01%02d_hB%A0%60%D7%9D%01%0Eb%C9%BBHH%0D%3Cj%05%08Td%A8%11%A6%CC%8F%1CI%01E%B5%00%98%03%93%C0l%C5%40%10%00Y%B96%02%CC%3C%2Cw%2C*%83%AAO%04%00H%26%86%01T%A9%1A%FF%7D)%A2I%D2%91%B35%C6%06)%86%B6%AD%90%8En%E3%C6U%2B%B7.%91%16x%F3%EA%DD%AB%22%04%00%3B";
	var _3="data:image/gif,GIF89aS%00%11%00%C4%FF%00%F5%F5%F6%EB%EC%EE%D5%D8%DC%CC%CF%D3ep%7Coy%84%82%8B%95%8A%92%9B%8E%96%9Fx%82%8C%98%A0%A8%A2%A9%B0%AC%B2%B8%BA%BF%C4%B8%BD%C2%C1%C6%CB%E9%EB%ED%E0%E2%E4%E1%E4%E65P%5C6Q%5D7R%5E6P%5C7Q%5D8R%5E%FF%FF%FF%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%2C%00%00%00%00S%00%11%00%00%05%FF%E0%24%8E%24iQ%A3U%AEl%EB%BE%23EU%18%FA%12x%AE%EF%7C%EF%FF%C0%A00'%1A%1A%8F%C8%24%AF%A8l%3A%9F8%E6%CE%80H%08%11%88%02!%810%F8%AA%B8.%CE%E0%05%EF%CCa%2B%3A(%C5%15%04%99%B8%23%18_%10%1E%19%81O2%D8f%028%00s%02v%3B%19%0C%3A%87%04%84%3B%05%0F%08K%13%3B%0F%00%90%0C%19vYd%86%12s%12%12z%60%05Yw%80%0B%12%19%09%09%98%04%60TZ%04%87%09%5E%B1%88f%AF%97%0C%B0D%92%3A%829%7C%B1%A0%8A9%19%0Ez%C6z%12%0F%04%0B%19Z%CE%8E%0E%12%0B%0A%19%5E%87%97%A8%90%19%C3%88%8A%8A%DA%19%10%DD%B4%BC%86%888%02%C8%CC%A0%89%D6%08%12%0Cz%0B%00%04%03%CC%04%06%19%08%95%0E%0F%0C%EC%D5%12%10%60S%2Cf%EBj)%24H%06%01%BFH%3B%02%F4%C1%11%80%99%A2%84%C5%E2%09p0%8F%40%01~%19%14%14%1B%90%A1%15%00%8C%87%0C%82%90%0C%60%E7%22%B2o%88T%FEi%F0pG%1B%02%B9%10%90%E4%86%08%23%0E~%0E%00(%E8xG%02%A0%1C%02%00L%04%00%20%DD!%05%22%03%BC%5C4U%11T%02%01%22%F0%DB%15%A5%97%8E%80%7FD.%D4%93%D1Z%01%A2%D6%E6%E4%C8%85%83%A4%D8C%F5%FE%60%EBY%15Q%DC%00%07%02%5C%B3%E9%15%0A%8FKV%FC%FA%BD)x%91%B1%C2%83%FB%22%5E%2C%980%E3%C7J%60H%9EL%B9%F2%0B%0A%170%5C(%11%02%00%3B";
	var _4="data:image/gif,GIF89a%60%00%11%00%C4%FF%00%F5%F5%F6%EB%EC%EE%D5%D8%DC%CC%CF%D3ep%7Coy%84%82%8B%95%8E%96%9Fx%82%8C%98%A0%A8%A2%A9%B0%AC%B2%B8%B8%BD%C2%C1%C6%CB%E1%E4%E6%3FWc%3FVb5P%5C6Q%5D6P%5C7Q%5D%3AS_%3BT%60%FF%FF%FF%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%2C%00%00%00%00%60%00%11%00%00%05%FF%60%24%8Edi%8E%13UA%8F%25%9Dp%2C%CFtL%DCx%AE%EF%7C%EF%FF%C0%A0%10'%1A%1A%8F%C8%E4%B0%A8l%3A%9F%40%E6%ED%80%10R%83%87C%81%808%18%80WdX)%25%5C%16%BDB%E3p%3B%07%2F%17%05%A1q%11%00%DD%3C5%7B%87'GrgZ%06_8%0Bg%5Bg%08%84%04%05Z%80%0E%0C%04%0E%0Ev%5C%5ES%5D%05nW%8D%5B%86%0B%9Dax%5D%8B%8DU%8C%8E9eg%17%94%7D%0E%AD_%AD%02n%09u%17%098%17%0Cv%BBv%09%00%B4h%17%00%B8g%0B%01%05%B6%B4%09%B0%0E%06%C4%B4r%B5%C1n%0A%B7%0C%CB%B8%AA%7F%BA%86%0D%92%95%04%07%17%7B%17%E0%02v%01%E0%0C%01%BA%B6%07%0E%0Bv%5E%05%94f%95%B7_%EB%04%ED%E4l%E7%E6%B8%DBd%C0%9E%3Ap%09%12%F0k%C7%0D%D0'%02%E9p%FCk%83%26%E2%85%00%E9%C4%95%A3%C4%60%1E%01%05%0E%06%604%83%C6%0C%1C%80%18%D3%8AMtc%88%E4%C7%90%23%FB%5C%CC%D8%D0%9B%9B%88S%CA!%AAh%E7%5EB%5D%07%18%00H%E0qW%81%98%25w5p%10%8E%40%C2%7F%9A%EC%08%60%EA%C6%E8%C8%7B%03%A6%FE%CA%85%E3%85%C3%9B%E2%8E%5E%90%C5%93%80%01X%01%E4%B49%60%AB%80G%063%A9%26%5D%80%20%CE%D9%8B%0A%C4B%13%00%20%00%D9~q%CD%A2%F5%82V%ED%8D2P%12%0F%E9%93%18%B1%E2%C7%3E%18Cq%0C%B9%B2%E5%9A%973g%AE%C1%B93%89%09%9EC%87%0E%01%00%3B";
	var _5="data:image/gif,GIF89ac%00%11%00%C4%FF%00%F5%F5%F6%EB%EC%EE%D5%D8%DC%CC%CF%D3%83%8B%95%C1%C5%CAfq%7Dep%7Coy%84%82%8B%95%8E%96%9Fx%82%8C%98%A0%A8%A2%A9%B0%AC%B2%B8%B8%BD%C2%C1%C6%CB%E1%E4%E6%EB%ED%EE5P%5C6P%5C%FF%FF%FF%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%2C%00%00%00%00c%00%11%00%00%05%FF%E0%24%8Edi%9Eh%AA%AEl%9B%1Ep%2C%CFtm%DFx%AE%EF%B4%C8%FF%C0%A00%E8%1B%1A%8FH%5E%F1%80P(%92%8AE%CD%898%2C%14%09%03.%0A%D3%F2%B8%C2%A2%02P%A9%00%12%C7%8A%A3Vn%1C%20%15ANmC%40%9E4zx%02%13D%10%08%01%03L%0AU0Wh%07Q%85MR%07j%0B%891%15%11%0F%07%11%11rVX0%8B%08t%5CMU%0Ej%A2%60z%881%8D0%A21E%A4%10%0DR%0Cq%15%0C%07%0C%00%02tf%15%05%B5%96%94%BBk%93%0Fr%15%C6%B8%BA%BCd%B4%0E%0E%01%08%B4%BB%0C%11%94%09f%BBnt%B9%C3%07%0D%C0%D3%B60K%0E%D6%15%0D%01%10%07%0F%01%8A%09%08%99%8Fr%EA%B8%B7%15%EB%02%9A0%B6%15%0A%11%0E%E4%60%89wLS-4%F5%DA)%F0%F7h%1D%04w%A0%E0%C9%AB%C7%80ABw%07%8A0x%82%60%40%99%00%FA%E44%880%00%E4%A35z%F8%A9%AD%D1'%C3_%A6%07%01%BF%914%A9%A7%0C%C3%0A%20%F5-%7CB%87%D4I%99%25%8F%11%7B%94SS%11%01%00*F%08%20%AF%E2%A3%07%81%84%5E%923%40*%CBI%0A%1E%24%8D%89%2C%EA%CF%A7%10%22L%B5%B7%F3%93%1C%3F%3F%BB%9A%94W%B5%E9%AD%8C%7C%0E%24%F0x-%81%B5%00n%1E%E0DK%C7.N%9E%2B%F7%3DR%40%0BAL%BD%20%C5%D6t%B0%00%9D_%BC%81*%60C*%81%C0O%C4h%1Fc%B1%26%C1%0D%DC%24%A0%93%A4D%B2%24%B4i%20%A3%8F%94%3E%CD%BA%F5%8D%D5%AEc%C7vA%BB%F6%08%0A%13p%AF%C0%AD%DB6%ED%10%00%3B";
	var _6="data:image/gif,GIF89aG%00%11%00%C4%FF%00%1DQ%96%1ER%97Bv%BBCw%BCCv%BBM%7B%B3X%80%ABc%84%A3p%8B%99%7C%90%91%87%94%89%92%99%81%9F%9Fw%AA%A4o%B6%A9f%C1%AE%5E%CF%B4T%E4%BED%D9%B9L%F0%C3%3C%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%2C%00%00%00%00G%00%11%00%00%05%FF%20%20%8Edi%9Eh%AA%AE%A6%E0%BEp%2C%CFtm%DF%AF%88%EF%7C%DF%EB%BE%A00%08%8C%15%10%88a%0Ca%A0%1D%10%85%17%12%0930iEid2%89%1C%94%AE%C9BVxp'%8A%F09R(%9F%1B%B3%AC%EB%01iK%1C%AEc%D4e%FD2%A1%02GM%02b%06_%2F%0D%5E%02%0D%13Mb%02%07b%0C%11I%0Bh2r%02%96%0D%0A%83%09%13f%09%02%09%11f%96%5B%09%0A%A0%13%0C%84%10%A6%2F%11%AD%81%06%04%84c%91%0B%B2%2F%871%99%9A%10%5Ci%12p%0C%12%02%08%07%05%AF%A0.%C4%A3%A2%13p%0F%0F%2F%8F1g%13%12%05%8F%96%D70%99%09I%05%0E%13%84%12%D4%D5%0A%10%0E%E8%D7%DF%B7%02%D4%2F%CF%C8%0CQ%D2T%02w%02V%F0.%99%1EDH%90%00%C2%B1W%D0%08%DDs7F%00B%07%D5%1E%CDsaiA%C1%08a%1AR%14%83%80%81%98%01%BE%00%C88Pn%02%84%2F%07%826IH%E3%11%5D%B0%86)%B5%25%91X%ED%85.%93%87%FE-%90%A0m%C1%1Ep%22%C1%08%1D%0A0(%D1%A3B~!%5DZC)%D3%A7%40YH%9D*5%00U%11!%00%00%3B";
	var _7="data:image/gif,GIF89a%09%00%08%00%91%00%00%003%FF5P%5C%FF%FF%FF%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%09%00%08%00%00%02%12T%8E!%B6%AD%0C%22%9B%60%BDW'%B6%BC%E9t%08%05%00%3B";
	try{
		document.forms[0].elements[0].focus();
		document.getElementsByName("form_searchtype")[0].selectedIndex=1;
	}
	catch(err){
	}
	var _8="//a[contains(., 'My Collection')]";
	var _9=document.evaluate(_8,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
	for(var _a=null,i=0;(_a=_9.snapshotItem(i));i++){
		var _b=document.createElement("span");
		_b.innerHTML="<span><BR>"+"<A HREF=\"http://www.comicbookdb.com/collection_last.php\">Latest Additions</A></span>";
		_a.parentNode.insertBefore(_b,_a.nextSibling);
	}
	if(window.location.pathname.match(/\/collection_batch_add.php/i)){
		var _c="//text()[(parent::a) and (contains(., 'View this title'))]";
		var _d=document.evaluate(_c,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		if(_d.snapshotLength){
			_a=_d.snapshotItem(0);
			var _e=_a.parentNode;
			_e.setAttribute("href","javascript:history.go(-2)");
		}
	}
	var _f="//text()[(parent::a) and (contains(., 'to your collection') or contains(., 'full details'))]";
	var _10=document.evaluate(_f,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
	var rf=false,df=false,cf=false;
	for(var _12=null,i=0;(_12=_10.snapshotItem(i));i++){
		var _13=null;
		if((/title to your collection/i.test(_12.nodeValue))&&!rf){
			_13="r";
			rf=true;
		}else{
			if((/return to your collection/i.test(_12.nodeValue))&&!cf){
				_13="c";
				cf=true;
			}else{
				if((/full details of this title/i.test(_12.nodeValue))&&!df){
					_13="4";
					df=true;
				}
			}
		}
		if(_13==null){
			continue;
		}
		var anc=_12.parentNode;
		while(anc.tagName!="A"){
			anc=anc.parentNode;
		}
		if(anc.getAttribute("accesskey")==null){
			anc.setAttribute("accesskey",_13);
		}
	}
	if(window.location.pathname.match(/\/title.php/i)){
		var _15,thisLink;
		var _16="//a[parent::td[@align='left'] and contains(@href,'issue.php')]";
		var _17=document.evaluate(_16,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		for(var i=0;i<_17.snapshotLength;i++){
			thisLink=_17.snapshotItem(i);
			var _19=document.createElement("img");
			_19.style.marginRight="4px";
			_19.style.border="0";
			_19.src=_1;
			var _1a=document.createElement("a");
			_1a._target="target";
			_1a.title="Add to your collection";
			_1a.style.border="0";
			var _1b=thisLink.href.replace(/issue.php/i,"collection_add.php");
			_1a.href=_1b;
			_1a.appendChild(_19);
			thisLink.parentNode.insertBefore(_1a,thisLink);
			if(!thisLink.firstChild){
				var _1c=document.createTextNode(".");
				var _1d=document.createElement("font");
				_1d.style.color="white";
				_1d.appendChild(_1c);
				thisLink.parentNode.insertBefore(_1d,thisLink.nextSibling);
			}
		}
	}
	if(window.location.pathname.match(/\/collection.php/i)){
		var _1e,thisLink;
		var _1f="//a[contains(@href,'collection_title')]";
		var _20=document.evaluate(_1f,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		for(var i=0;i<_20.snapshotLength;i++){
			thisLink=_20.snapshotItem(i);
			var _22=document.createElement("img");
			_22.style.marginLeft="3px";
			_22.style.border="0";
			_22.src=_7;
			var _23=document.createElement("a");
			_23._target="target";
			_23.title="View full details of this title";
			_23.style.border="0";
			_23.style.verticalAlign="baseline";
			var _24=thisLink.href.replace(/collection_title.php/i,"title.php");
			_23.href=_24;
			_23.appendChild(_22);
			thisLink.parentNode.insertBefore(_23,thisLink.nextSibling);
		}
	}
	if(window.location.pathname.match(/\/title.php/i)){
		var _25,thisLink;
		var _26="//a[contains(@href,'title_covergallery')]";
		var _27=document.evaluate(_26,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		if(!_27.snapshotLength){
			return;
		}
		for(var i=0;i<_27.snapshotLength;i++){
			thisLink=_27.snapshotItem(i);
			if(thisLink.href.match(/\/title_covergallery.php/i)){
				var _29=document.createElement("img");
				_29.style.marginRight="4px";
				_29.style.border="0";
				_29.src=_2;
				var _2a=document.createElement("a");
				_2a.title="Shows issues of this title in your Collection";
				_2a.style.border="0";
				var _2b=thisLink.href.replace(/title_covergallery.php/i,"collection_title.php");
				_2a.href=_2b;
				_2a.appendChild(_29);
				thisLink.parentNode.insertBefore(_2a,thisLink);
				var _2c=document.createElement("img");
				_2c.style.marginRight="4px";
				_2c.style.border="0";
				_2c.src=_3;
				var _2d=document.createElement("a");
				_2d.title="Display issues of this title that are on your Wishlist";
				_2d.style.border="0";
				var _2e=thisLink.href.replace(/title_covergallery.php/i,"wishlist_title.php");
				_2d.href=_2e;
				_2d.appendChild(_2c);
				thisLink.parentNode.insertBefore(_2d,thisLink);
				var _2f=document.createElement("img");
				_2f.style.marginRight="4px";
				_2f.style.border="0";
				_2f.src=_4;
				var _30="//a[contains(., 'My ComicBookDB')]";
				var _31=document.evaluate(_30,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
				for(var i=0;i<_31.snapshotLength;i++){
					var _33=_31.snapshotItem(i);
					var _34=((_33.getAttribute("HREF")).slice(12));
				}
				var _35=document.createElement("a");
				_35.title="Display your issues of this title in the Marketplace";
				_35.style.border="0";
				var _36=thisLink.href.replace(/title_covergallery.php/i,"collection_market_title.php");
				_36+="&user"+_34;
				_35.href=_36;
				_35.appendChild(_2f);
				thisLink.parentNode.insertBefore(_35,thisLink);
				var _37=document.createElement("div");
				_37.innerHTML="<P>";
				thisLink.parentNode.insertBefore(_37,thisLink);
				var _38=document.createElement("img");
				_38.style.marginRight="4px";
				_38.style.border="0";
				_38.src=_5;
				var _39=document.createElement("a");
				_39.title="Search the Marketplace for this title";
				_39.style.border="0";
				var _3a=thisLink.href.replace(/title_covergallery.php/i,"market_title.php");
				_39.href=_3a;
				_39.appendChild(_38);
				thisLink.parentNode.insertBefore(_39,thisLink);
				var _3b=(document.title.slice(16,-7));
				var _3c=document.createElement("img");
				_3c.style.marginRight="4px";
				_3c.style.border="0";
				_3c.src=_6;
				var _3d=document.createElement("a");
				_3d.target="CPG";
				_3d.title="Search Comic Price Guide";
				_3d.style.border="0";
				_3d.href="http://www.comicpriceguide.com/qsearch.asp?findme="+_3b;
				_3d.appendChild(_3c);
				thisLink.parentNode.insertBefore(_3d,thisLink);
			}
		}
	}
})();

document.onkeypress=function(e) {
	var e=window.event || e
	// Focus the search box on '/'
	if(e.keyCode == 47) {
		document.getElementsByName("form_search")[0].focus();
		return false;
	}
}
