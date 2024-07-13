(function carousel(){
    var items= document.querySelectorAll('.members-list-item');
    var c = items.length;
    if(c>3){
        var e = 3;
        
    }else{
       e = c;
    }
    for(var i=0; i<e; i++){
        items[i].classList.add('active');
    }
    document.querySelector('.slides-count').innerText = items.length;
})();

var arrws = document.querySelectorAll('.member-list-arrows button');
if(arrws){
    arrws.forEach(function(key, value){
        key.onclick = function(){
            var attr = key.getAttribute('data-slide');
            slide(attr);
        }
    })
}

function slide(attr){
    var slides = document.querySelectorAll('.members-list-item.active');
    var allslides = document.querySelectorAll('.members-list-item');
    for (let i = 0; i < slides.length; i++) {
        const div = slides[i];
        
        if (div.classList.contains('active')) {
          if(attr === 'next'){
            var itemIndex = i;
          }else{
            itemIndex = i;
            break;
          }
          
        }
        
    }
    var current = slides[itemIndex];
    
    var currentIndex = Array.from(allslides).indexOf(current);
    if(currentIndex === (allslides.length - 1)){
        var lastIndex = 3;
    }else if(currentIndex === 0){
        var lastIndex = allslides.length;
    }else{
        var lastIndex = currentIndex + 2;
    }

    document.querySelector('.current-slide').innerText = lastIndex;
    slides.forEach(function(key, value){
        key.classList.remove('active');
    })
    for(var j = lastIndex; j>(lastIndex-3); j--){
        
        allslides[j-1].classList.add('active');
    }
}

(function boxes(){
   var boxes = document.querySelectorAll('.boxes .box_card');
   var w = window.innerWidth;
   if(w<767){
     if(!boxes[0].classList.contains('active')){
        !boxes[0].classList.add('active');
     }
     if(!boxes[1].classList.contains('active')){
        !boxes[1].classList.add('active');
     }
   }
})();


window.onresize = function(){
    boxes();
}


var dotes = document.querySelectorAll('ul.slide-navs li a');
if(dotes){
    dotes.forEach(function(key,value){
        key.onclick = function(){
            var actives = document.querySelectorAll('.boxes .box_card.active');
            var cards = document.querySelectorAll('.boxes .box_card');
            
            if(Number(key.getAttribute('data-slide'))>= 0){
                var sl = key.getAttribute('data-slide');
                document.querySelector('.slide-navs li a.active').classList.remove('active');
                key.classList.add('active');
                var nxt = key.parentNode.nextElementSibling;
                var nxtP = nxt.querySelector('a').getAttribute('data-slide');
                actives.forEach(function(key, value){
                    key.classList.remove('active');
                })
                for(var k = sl; k<nxtP; k++){
                    cards[k-1].classList.add('active');
                }
            }else{
                var current = document.querySelector('.slide-navs li a.active');
                if(key.getAttribute('data-slide') === 'next'){
                    current.classList.remove('active');
                    var nxt = current.parentNode.nextElementSibling;
                    if(nxt.querySelector('a').getAttribute('data-slide') === 'next'){
                        document.querySelector('.slide-navs li a[data-slide="'+ 1 +'"]').classList.add('active');
                    }else{
                        nxt.querySelector('a').classList.add('active');
                    }
                    
                    var sl = nxt.querySelector('a').getAttribute('data-slide');
                    if(sl === 'next'){
                        sl = 1;
                    }else{
                        sl = sl;
                    }
                    var nextEnd =  nxt.nextElementSibling;
                    if(nextEnd){
                        var nextP = nextEnd.querySelector('a').getAttribute('data-slide');
                    }else{
                       var nextP = document.querySelector('.slide-navs li a[data-slide="1"]').parentNode.nextElementSibling.querySelector('a').getAttribute('data-slide');
                    }
                    actives.forEach(function(key, value){
                        key.classList.remove('active');
                    })
                   
                    for(var l = sl; l<nextP; l++){
                        
                        cards[l-1].classList.add('active');
                    }

                }else{
                    current.classList.remove('active');
                    var prv = current.parentNode.previousElementSibling;
                    if(prv.querySelector('a').getAttribute('data-slide') === 'prev'){
                        document.querySelector('.slide-navs li a[data-slide="next"]').parentNode.previousElementSibling.querySelector('a').classList.add('active');
                    }else{
                        prv.querySelector('a').classList.add('active');
                    }
                    var sl = prv.querySelector('a').getAttribute('data-slide');
                    if(sl === 'prev'){
                        sl = document.querySelector('.slide-navs li a[data-slide="next"]').parentNode.previousElementSibling.querySelector('a').getAttribute('data-slide');
                    }else{
                        sl = Number(sl);
                    }
                    var prevStart =  prv.previousElementSibling;
                    if(prevStart){
                        var prevP = Number(current.getAttribute('data-slide'));
                    }else{
                       var prevP = Number(document.querySelector('.slide-navs li a[data-slide="next"]').parentNode.previousElementSibling.querySelector('a').getAttribute('data-slide')) + 1;
                    }
                    actives.forEach(function(key, value){
                        key.classList.remove('active');
                    })
                    
                    for(var p = sl; p<prevP; p++){
                       
                        cards[p-1].classList.add('active');
                    }
                    
                }
            }
        }

    })
}