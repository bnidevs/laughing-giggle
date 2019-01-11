var func = () => {
	var elements = document.getElementsByClassName("yj6qo ajU");
	while(elements.length > 0){
  		for(var i = 0; i < elements.length; i++){
    			elements[i].click();
    			elements[i].remove();
  		}
		elements = document.getElementsByClassName("yj6qo ajU");
    	}
}
