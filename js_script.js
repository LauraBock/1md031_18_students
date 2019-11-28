function MenuItem(name, des, img, kcal, glu, lac) {
    this.name = name;
    this.description = des;
    this.image = img;
    this.kcal = kcal;
    this.gluten = glu;
    this.lactose = lac;
    this.info = function () {
        return this.name + " has " + this.kcal + " kCal.";
    };
}

var classic = new MenuItem("Burgerama Classic", "Has everything you need in a burger", "https://www.menu.am/resources/default/img/restaurant_products/big/1517573640-7378.jpeg", 638, false, true);
var chicken = new MenuItem("Crispy Chicken Burger", "Enjoy the crunch with every bite", "https://www.kitchensanctuary.com/wp-content/uploads/2017/08/Crispy-Chicken-Burger-with-Honey-Mustard-Coleslaw-recipe-square-FS.jpg", 545, true, true);
var veggie = new MenuItem("Veggie Burger", "The proof that you don`t need meat for a good taste", "https://www.vegrecipesofindia.com/wp-content/uploads/2015/05/veggie-burger-recipe-5.jpg", 533, false, true);
var goat = new MenuItem("Goat Cheese Burger", "With cheese made from happy goats", "https://images.food52.com/8eR3zX4OfDyu2LqpaaDhxnAwi9M=/1200x1200/2d57de39-9257-4318-bb30-265a5d4a992a--2016-0719_burger-with-fig-jam-goat-cheese_james-ransom-439.jpg", 612, true, true);
var salmon = new MenuItem("Salmon Burger", "Reminds you of your last summer holiday", "https://www.jessicagavin.com/wp-content/uploads/2014/08/grilled-salmon-burgers-with-lemon-dill-sauce-1200.jpg", 577, false, false);
//console.log(classic.info());

let burgers = [classic, chicken, veggie, goat, salmon];
//console.log(menu[2].info());

/*var myElement = document.getElementsByClassName("grid");
for(let burger of burgers) {
    var div = document.createElement("div");
    
    var header = document.createElement("h3");
    var headerText = document.createTextNode(burger.name);
    header.appendChild(headerText);
    
    var image = document.createElement("img");
    image.setAttribute('src', burger.image);  
    image.setAttribute('width', '200');
    image.setAttribute('title', burger.name);
    
    
    var ul = document.createElement("ul");
    
    var desLi= document.createElement("li");
    var desText = document.createTextNode(burger.description);
    desLi.appendChild(desText);
    
    var calLi = document.createElement("li");
    var calText = document.createTextNode(burger.kcal + ' kCal');
    calLi.appendChild(calText);
    
    var  allLi= document.createElement("li");
    allLi.setAttribute('class', 'allergies')
    if(burger.gluten == true && burger.lactose == true) {
        var allText = document.createTextNode("Contains gluten and lactose");
        allLi.appendChild(allText);
    } else if(burger.gluten == true) {
        var allText = document.createTextNode("Contains gluten");
        allLi.appendChild(allText);
    } else if (burger.lactose == true) {
        var allText = document.createTextNode("Contains lactose");
        allLi.appendChild(allText);
    } 
    
    ul.appendChild(desLi);
    ul.appendChild(calLi);
    ul.appendChild(allLi);
    
    div.appendChild(header);
    div.appendChild(image);
    div.appendChild(ul);
    
    myElement[0].appendChild(div);

} */