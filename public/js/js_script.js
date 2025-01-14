/* function MenuItem(name, des, img, kcal, glu, lac) {
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


var myElement = document.getElementsByClassName("grid");
for(let burger of food) {
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
    ul.appendChild(desLi);
    
    var calLi = document.createElement("li");
    var calText = document.createTextNode(burger.kcal + ' kCal');
    calLi.appendChild(calText);
    ul.appendChild(calLi);
    
    if(burger.gluten) {
        var  allLi= document.createElement("li");
        var allText1 = document.createTextNode("Contains ");
        allLi.appendChild(allText1);
        var span = document.createElement("span");
        span.setAttribute('class', 'allergies');
        var allText2 = document.createTextNode("gluten");
        span.appendChild(allText2);
        allLi.appendChild(span);
        ul.appendChild(allLi);
    }
    if (burger.lactose) {
        var  allLi= document.createElement("li");
        var allText1 = document.createTextNode("Contains ");
        allLi.appendChild(allText1);
        var span = document.createElement("span");
        span.setAttribute('class', 'allergies');
        var allText2 = document.createTextNode("lactose");
        span.appendChild(allText2);
        allLi.appendChild(span);
        ul.appendChild(allLi);
    }
    
    var checkbox = document.createElement("input");
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', burger.id);
    
    div.appendChild(header);
    div.appendChild(image);
    div.appendChild(ul);
    div.appendChild(checkbox);
    
    myElement[0].appendChild(div);

}
*/
let createCostumer = function() {
    if(document.getElementById("female").checked) {
        gender = document.getElementById("female").value;
    } else if(document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
    } else if(document.getElementById("non").checked) {
        gender = document.getElementById("non").value;
    } else if(document.getElementById("undis").checked) {
        gender = document.getElementById("undis").value;
    }
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var payment = document.getElementById("payment").value;
    //var street = document.getElementById("street").value;
    //var house = document.getElementById("house").value;

    let costumer = [fullname.toString(), gender.toString(), email.toString(), payment.toString()/*, street, house*/];
   /* console.log(costumer[0]);
    console.log(costumer[1]);
    console.log(costumer[2]);
    console.log(costumer[3]);
    console.log(costumer[4]); */
    
    return(costumer);
};

let displayCostumer = function() {
   // console.log("Button clicked!");
    var myCostumer = document.getElementById('costumerInfo');
    let costumer = createCostumer();
    
    /*var header = document.createElement("h2");
    var headerText = document.createTextNode("Costumer details");
    header.appendChild(headerText);
    myCostumer.appendChild(header);*/
    
    var dl = document.createElement("dl");
    
    var nameDt = document.createElement("dt");
    var nameText = document.createTextNode("Name: " + costumer[0]);
    nameDt.appendChild(nameText);
    dl.appendChild(nameDt);
    
    var genderDt = document.createElement("dt");
    var genderText = document.createTextNode("Gender: " + costumer[1]);
    genderDt.appendChild(genderText);
    dl.appendChild(genderDt);
    
    var mailDt = document.createElement("dt");
    var mailText = document.createTextNode("E-mail: " + costumer[2]);
    mailDt.appendChild(mailText);
    dl.appendChild(mailDt);
    
    var payDt = document.createElement("dt");
    var payText = document.createTextNode("Payment method: " + costumer[3]);
    payDt.appendChild(payText);
    dl.appendChild(payDt);
    
    /*var addressDt = document.createElement("dt");
    var addressText = document.createTextNode("Address: " + costumer[4] + " " + costumer[5]);
    addressDt.appendChild(addressText);
    dl.appendChild(addressDt);*/
    
     myCostumer.appendChild(dl);
}; 
//var orderButton = document.getElementById('orderButton');
//orderButton.addEventListener("click", displayCostumer);

let displayOrder = function() {
    var orderItems = document.getElementById("orderItems");
    var ulBurger = document.createElement("ul");
    for(let burger of food){
        if(document.getElementById(burger.id).checked) {
            var li = document.createElement("li");
            var liText = document.createTextNode(burger.name);
            li.appendChild(liText);
            ulBurger.appendChild(li);
        }
    orderItems.appendChild(ulBurger);
    }
    
};
//orderButton.addEventListener("click", displayOrder);

let orderItems = function() {
    let orderItems = [];
    for(let burger of food){
        if(document.getElementById(burger.id).checked) {
            orderItems.push(burger.name);
        }
    }
    return(orderItems);
};

