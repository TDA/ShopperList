function addEvent(elt,evt,listenerfunc,capture){
	if(elt.addEventListener){
		elt.addEventListener(evt,listenerfunc,capture);
	}
	else if(elt.attachEvent){
		elt.attachEvent('on'+evt,listenerfunc);
	}
}

function addClass(elt,newClass){
	if(elt.classList){
		elt.classList.add(newClass);
	}
	else{
		if(elt.className==="")
			elt.className=newClass;
		else if(elt.className.indexOf(newClass)==-1){
			elt.className=newClass;
		}
		else
			elt.className+=" "+newClass;
	}
}

function removeClass(elt,oldClass){
	if(elt.classList){
		elt.classList.remove(oldClass);
	}
	else{
		if(elt.className==="")
			return;
		if(elt.className.indexOf(oldClass)!==-1){
			elt.className.replace(oldClass,' ');
		}
	}
}

var getById=function(id){
	return document.getElementById(id)||document.querySelector('#'+id+'');
}
