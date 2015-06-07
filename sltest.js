(function(){
	
	var createItem=getById('create-item');
	var itemList=getById('item-list');
	var atc=getById('atc');
	var qty=getById('qty-list');
	
	
	addEvent(createItem,"click",createItems,false);
	addEvent(atc,"click",genRow,false);
	
	var table=document.createElement('table');
	table.id="checklist";
	table.innerHTML+="<thead><tr><th colspan=3>Checklist</th></tr></thead><tbody></tbody>";
	document.body.appendChild(table);
	var tbody=document.getElementById('checklist').getElementsByTagName('tbody')[0];
	//addClass(table,"hidden");
	if(window.localStorage["totalItems"]){
		var i=parseInt(window.localStorage["totalItems"]);
		for(var j=0;j<i;j++){
			var itemName=window.localStorage.getItem("item_"+j);
			var listItem=document.createElement('option');
			listItem.value=itemName;
			listItem.text=itemName;
			itemList.appendChild(listItem);
		}
		addClass(itemList,"visible");
		addClass(atc,"visible");
		//alert("items found");
	}
	else{
		var i=0;
		window.localStorage["totalItems"]=0;
		//addClass(itemList,"hidden");
	}
	
	for(var k=1;k<13;k++){
		var newQty=document.createElement('option');
		newQty.text=newQty.value=k;
		qty.appendChild(newQty);
	}
	
	function createItems(){
		var newItem=getById('new-item');
		//alert('item added '+newItem.value+" INDEX "+i);
		var listItem=document.createElement('option');
		listItem.value=newItem.value;
		listItem.text=newItem.value;
		itemList.appendChild(listItem);
		window.localStorage.setItem("item_"+i,newItem.value);
		i++;
		window.localStorage.setItem("totalItems",i);
		newItem.value="";
	}
	
	function genRow(){
		if(itemList.value!=="none" && qty.value!=="noqty"){
		tbody.innerHTML+="<tr><td>"+itemList.value+"</td><td>"+qty.value+"</td><td><span class='remove'><i class='icon-remove'></i>Remove</span></td></tr>";
		
		var removeButtons=document.getElementsByClassName('remove');
		for(var b=0;b<removeButtons.length;b++)
		addEvent(removeButtons[b],"click",removeItem,false);
		}
		else{
		alert("Enter both the qty and the product");
		return;
		}
		
		
	}
	
	function removeItem(e){
			var tr=e.target.parentNode.parentNode;
			var tbody=tr.parentNode;
			tbody.removeChild(tr);
			return false;
	}
	
})();