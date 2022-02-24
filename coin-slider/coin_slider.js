	var slides = document.getElementById("slider-item").children;
	var nextslide = document.getElementById("right-slide");
	var prevslide = document.getElementById("left-slide");
	var totalslides = slides.length;
	var index=0;

	nextslide.onclick=function (){
		next("next");
	}

	prevslide.onclick=function (){
		next("prev");
	}
	
	function next(direction){
		if(direction=="next"){
			index++;
			if(index==totalslides){
				index=0;
			}
		}
		else{
			if(index==0){
				index=totalslides-1;
			}
			else{
				index--;
			}
		}

		for(i=0;i<slides.length;i++){
			slides[i].classList.remove("active");
		}

		slides[index].classList.add("active");
		
	}