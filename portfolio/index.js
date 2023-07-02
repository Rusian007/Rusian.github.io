var item1 = document.getElementById("link1");
var item2 = document.getElementById("link2");
var item3 = document.getElementById("link3");
var circle = document.getElementById("circle");
var clicked = false;

function runAnime(){
	if(clicked){
		item1.classList.remove('animate-links-item1');
		item1.classList.add('in-animate-links-item1');
		clicked = false;
		item2.classList.remove('animate-links-item2');
		item2.classList.add('in-animate-links-item2');

		item3.classList.remove('animate-links-item3');
		item3.classList.add('in-animate-links-item3');
		return;
	}
	else{
		clicked = true;
		item1.classList.add('animate-links-item1');
		item2.classList.add('animate-links-item2');
		item3.classList.add('animate-links-item3');

		//item1.classList.add('z-index-high');
		

		item2.classList.remove('in-animate-links-item2');
		item1.classList.remove('in-animate-links-item1');
		item3.classList.remove('in-animate-links-item3');
		
	}
	
}

function profile(){
	// Simulate a mouse click:

}

function projects(){

}