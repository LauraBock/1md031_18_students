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

let saveAndDisplay = function() {
   // console.log("Button clicked!");
    
    //save information in an array
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
    //var street = document.getElementById("street").value;
    //var house = document.getElementById("house").value;
    
    let costumer = [gender, fullname, email/*, street, house*/];
   /* console.log(costumer[0]);
    console.log(costumer[1]);
    console.log(costumer[2]);
    console.log(costumer[3]);
    console.log(costumer[4]); */
    
    //display information
    var myOrder = document.getElementById('confirmation');
    
    var dl = document.createElement("dl");
    
    var nameDt = document.createElement("dt");
    var nameText = document.createTextNode("Name: " + fullname);
    nameDt.appendChild(nameText);
    dl.appendChild(nameDt);
    
    var genderDt = document.createElement("dt");
    var genderText = document.createTextNode("Gender: " + gender);
    genderDt.appendChild(genderText);
    dl.appendChild(genderDt);
    
    var mailDt = document.createElement("dt");
    var mailText = document.createTextNode("E-mail: " + email);
    mailDt.appendChild(mailText);
    dl.appendChild(mailDt);
    
    /*var addressDt = document.createElement("dt");
    var addressText = document.createTextNode("Address: " + street + " " + house);
    addressDt.appendChild(addressText);
    dl.appendChild(addressDt);*/
    
    var dlBurger = document.createElement("dl");
    var dt = document.createElement("dt");
    var dtText = document.createTextNode("Your order:");
    dt.appendChild(dtText);
    dlBurger.appendChild(dt);
    for(let burger of food){
        if(document.getElementById(burger.id).checked) {
            var dd = document.createElement("dd");
            var ddText = document.createTextNode(burger.name);
            dd.appendChild(ddText);
            dlBurger.appendChild(dd);
        }
    }
    
     myOrder.appendChild(dl);
     myOrder.appendChild(dlBurger);
}; 
//var orderButton = document.getElementById('orderButton');
//orderButton.addEventListener("click", saveAndDisplay);