/****************************************************************************\
* Tirzen CMS                                                                 *
******************************************************************************
* Version: 0.1                                                               *
* Authors: Stan Ozier <stan@tirzen.com>                                      *
* License:  http://www.gnu.org/licenses/gpl.txt (GPL)                        *
\****************************************************************************/
function cTxt(txt) {
	e = document.createTextNode(txt);
	if (arguments.length > 1) {
		e2 = document.createElement('div');
		if (arguments.length > 1) {
			e2.setAttribute('align',arguments[2]);
		}
		e2.appendChild(e);
		return e2;
	}
	return e;
}
function gE(id) {
	return document.getElementById(id);
}
function isE(e) {
	return (e.style.display == 'inline');
}
function sE(e) {
	if (e) {
		e.style.display = 'inline';
	}
}
function hE(e) {
	if (e) {
		e.style.display = 'none';
	}
}
function tE(e) {
	if (e) {
		if (isE(e)) {
			hE(e);
		} else {
			sE(e);
		}
	}
}
function isD(e) {
	if (e) {
		return (e.style.display == 'block');
	} else {
		return false;
	}
}
function sD(e) {
	if (e) {
		e.style.display = 'block';
	}
}
function hD(e) {
	if (e) {
		e.style.display = 'none';
	}
}
function tD(e) {
	if (e) {
		if (isD(e)) {
			hD(e);
		} else {
			sD(e);
		}
	}
}

function wE(e,s) {
	if (e) {
		e.innerHTML = s;
	}
}

function tSet(id) {
	e=gE(id+'_field');
	s=gE(id+'_set');
	if (isD(e)) {
		hD(e);
		s.className='option_hide';
	} else {
		s.className='option_show';
		sD(e);
	}
}

function opto(value,label) {
	e = document.createElement('option');
	e.value=value;
	e.appendChild(document.createTextNode(label));
	return e;
}

function cms_load_start() {
	if ($('cms_modal')) {
		$('cms_loading').addClass('modal');
	} else {
		$('cms_loading').removeClass('modal');
	}
	sD(gE('cms_loading'));
	new Fx.Style('cms_loading', 'opacity',{'duration':250}).start(0,0.7);
}

function cms_load_stop() {
	new Fx.Style('cms_loading', 'opacity',{'duration':250}).start(0.7,0);
	//hD(gE('cms_loading'));
}

function cms_custom_call() {
	// alert(arguments.length);
	xajax.call("cms_custom_call", arguments, 1);
}

function cms_switch_div(id,cur) {
	if (e = gE(id)) {
		for(i=0;i<e.childNodes.length;i++) {
			f = e.childNodes[i];
			if (!f.id) continue;
			if (f.id == cur) {
				sD(f);
			} else {
				hD(f);
			}
		}
	}
}

function cms_message(str) {
	e = gE('message');
	if (!str) {
		hD(e);
	} else {
		if (!e) {
			e = document.createElement('div');
			e.id = 'message';
			e.className = '';
			wE(e,str);
			gE('header').appendChild(e);
		} else {
			e.className = '';
			wE(e,str);
			sD(e);
		}
		window.setTimeout('cms_message()',2000);
	}
}

function cms_secure_login(ff) {
	if (ff.password.value) {
		ff.challenge.value = hex_md5(hex_md5(ff.password.value) + ff.challenge.value);
	} else {
		ff.challenge.value = '';
	}
	ff.password.value = '';
	return true;
}

function cms_modal() {
	e1 = new Element('div',{'id':'cms_modal','styles':{'visibility':'hidden'},
		'events':{
			'click':cms_modal_close
		}
	});
	e1.injectBefore($('cms_loading'));
	e2 = new Element('form',{'id':'cms_modal_content','styles':{'visibility':'hidden'}});
	e3 = new Element('img',{'class': 'loading','src':'template/admin/default/images/loading.gif'});
	e3.injectInside(e2);
	e2.injectBefore(e1);
	new Fx.Style('cms_modal', 'opacity',{'duration':250}).start(0,0.8);
	new Fx.Style('cms_modal_content', 'opacity',{'duration':350}).start(0,1);
	xajax.call("cms_custom_call", arguments, 1);
}
function cms_modal_close() {
	if ($('cms_modal_content')) {
		new Fx.Style('cms_modal_content', 'opacity',{'duration':250, 'onComplete':function() {
			$('cms_modal_content').remove();
		}}).start(1,0);
		new Fx.Style('cms_modal', 'opacity',{'duration':250, 'onComplete':function() {
			$('cms_modal').remove();
		}}).start(0.8,0);
		$$('body')[0].removeEvent('keydown');
	}
}
function cms_admin_init() {
	if (typeof $$ != 'function') return false;
	$$('body')[0].addEvent('keydown', function(event){
    	event = new Event(event);
    	//console.log('pressed: '+event.key);
	    if (event.key == 'esc') {
	    	cms_modal_close();
	    }
	});
	if(typeof Tabs == 'object') {
		Tabs.Init();
	}
}