
function ajout(e){
    e.preventDefault();
    
}

window.onload = function(){
    var plus = document.getElementsByClassName('fa-plus-circle');
    var moin = document.getElementsByClassName('fa-minus-circle');
    var quantityArticle = document.getElementsByClassName('quantity');
    var heart = document.getElementsByClassName('fa-heart');
    var total = document.getElementById('total');
    var price = document.getElementsByClassName('unit-price');
    var card = document.getElementsByClassName('card-product');
    var corbeille = document.getElementsByClassName('fa-trash-alt');


    for(let i=0; i<corbeille.length; i++){
        corbeille[i].addEventListener('click', function(){
            quantityArticle[i].innerHTML = 0;
            total_article[i]= 0;
                
            functionTotal();     
        })
    }

    


    var prices = []
    for(var i = 0; i < price.length; i++){
        var p2 = ""
        p = price[i].innerHTML;
        for(j=0; j<p.length;j++){
            if(p[j]!=" " && p[j]!="$"){
                p2 += p[j]
            }
        }
        prices.push(p2)
    }

    total_article = []
    for (let i = 0; i < plus.length; i++) {
            plus[i].addEventListener('click', function () {
             q = Number(quantityArticle[i].innerHTML);
                q += 1;
                quantityArticle[i].innerHTML = q;
                total_article[i] = prices[i]*q
                functionTotal();

            });
        }
    
        function functionTotal(){
            total_articles = 0
            for(let j=0; j < total_article.length; j++){
                total_articles += total_article[j];
            }   
            total.innerHTML = total_articles + " $"
        }


        
    for (let i = 0; i < moin.length; i++) {
        moin[i].addEventListener('click', function () {
            q = Number(quantityArticle[i].innerHTML);
            q -= 1;
            if(q>=0){
                quantityArticle[i].innerHTML = q;
                var totalA = prices[i]*q
                total_article[i] = totalA
                total_articles = 0
                for(let j=0; j < total_article.length; j++){
                    total_articles += total_article[j];
                }   
                total.innerHTML = total_articles + " $"
            }

        });
    }
    for(let i = 0; i<heart.length; i++){
        var isclicked = false;
        heart[i].addEventListener('click', function(){
            isclicked = !isclicked;
            if(isclicked){
                heart[i].style.color = 'red'
            }else{
                heart[i].style.color = 'black'
            }
        })
    }

    
       
}