var form1 = document.getElementById('add-form-1');
var form2 = document.getElementById('add-form-2');
var form3 = document.getElementById('add-form-3');
var form4 = document.getElementById('add-form-4');
var form5 = document.getElementById('add-form-5');
var form6 = document.getElementById('add-form-6');
var form7 = document.getElementById('add-form-7');
var form8 = document.getElementById('add-form-8');
var form9 = document.getElementById('add-form-9');
var form10 = document.getElementById('add-form-10');
var form11 = document.getElementById('add-form-11');

var foodInCart = document.getElementById('food-in-cart');
var priceInCart = document.getElementById('price-in-cart');
var qtyInCart = document.getElementById('qty-in-cart');
var removeInCart = document.getElementById('remove-in-cart');

form1.addEventListener('submit', addCart1);
form2.addEventListener('submit', addCart2);
form3.addEventListener('submit', addCart3);
form4.addEventListener('submit', addCart4);
form5.addEventListener('submit', addCart5);
form6.addEventListener('submit', addCart6);
form7.addEventListener('submit', addCart7);
form8.addEventListener('submit', addCart8);
form9.addEventListener('submit', addCart9);
form10.addEventListener('submit', addCart10);
form11.addEventListener('submit', clearOrder);

//Since I am not sure (YET) how to use one function "add to cart" for all without declaring all the products inside javascript, I shall use multiple functions-- one for each addToCart buttons

//addToCart1
function addCart1(y) {
    y.preventDefault();


    var item1Name = document.getElementById('food-item-1').innerHTML;

    var item1Type = document.getElementById('set-hb1').value;
    var item1SetId;
    var item1Set;
    var item1Price;
    var itemPriceId;
    var itemQtyId;
    var itemRemoveId;

    if (item1Type == 1) {
        item1Set = "with Rice";
        item1Price = 5.00;
        item1SetId = "set1wr";
        itemPriceId = "set1wr-price";
        itemQtyId = "set1wr-qty";
        itemRemoveId = "set1wr-remove";
    }
    else if (item1Type == 2) {
        item1Set = "with Fries";
        item1Price = 5.00;
        item1SetId = "set1wf";
        itemPriceId = "set1wf-price";
        itemQtyId = "set1wf-qty";
        itemRemoveId = "set1wf-remove";
    }
    else {
        item1Set = "a la carte";
        item1Price = 4.30;
        item1SetId = "set1ala";
        itemPriceId = "set1ala-price";
        itemQtyId = "set1ala-qty";
        itemRemoveId = "set1ala-remove";
    }

    var isItemInCart = document.getElementById(item1SetId);
    if (isItemInCart != null) {
        //change quantity
        var callQtyId = document.getElementById(itemQtyId);
        var currentQty = callQtyId.innerHTML;
        var newQty = Number(currentQty) + 1;

        callQtyId.innerHTML = newQty;
        //callQtyId.value = newQty;

        //change price
        var callPriceId = document.getElementById(itemPriceId);
        var currentPrice = callPriceId.innerHTML;
        var newPrice = Number(currentPrice) + item1Price;

        callPriceId.innerHTML = newPrice.toFixed(2);
        //callPriceId.value = newPrice;

        calculatePrice();
    }
    else {
        //cart food col
        var add1ToMyCart = item1Name + " " + item1Set + " and Honey Butter Sauce";

        var new1Cart = document.createElement('li');
        new1Cart.className = 'cart-group-items';
        new1Cart.id = item1SetId;
        new1Cart.appendChild(document.createTextNode(add1ToMyCart));

        foodInCart.appendChild(new1Cart);

        //cart price col
        //var item1PriceName = "$" + item1Price.toFixed(2);

        var new1PriceCart = document.createElement('li');
        new1PriceCart.className = 'cart-group-price';
        new1PriceCart.id = itemPriceId;
        new1PriceCart.appendChild(document.createTextNode(item1Price.toFixed(2)));

        priceInCart.appendChild(new1PriceCart);
        addQuantityButton(itemQtyId);
        //addRemoveCartButton(itemRemoveId);
        calculatePrice();
    }
}

//addToCart2
function addCart2(y) {
    y.preventDefault();


    var item2Name = document.getElementById('food-item-2').innerHTML;

    var item2Type = document.getElementById('set-shb1').value;
    var item2Set;
    var item2SetId;
    var item2Price;
    var itemPriceId;
    var itemQtyId;
    var itemRemoveId;

    if (item2Type == 1) {
        item2Set = "with Rice";
        item2Price = 5.00;
        item2SetId = "setshb1wr";
        itemPriceId = "setshb1wr-price";
        itemQtyId = "setshb1wr-qty";
        itemRemoveId = "setshb1wr-remove";
    }
    else if (item2Type == 2) {
        item2Set = "with Fries";
        item2Price = 5.00;
        item2SetId = "setshb1wf"
        itemPriceId = "setshb1wf-price";
        itemQtyId = "setshb1wf-qty";
        itemRemoveId = "setshb1wf-remove";
    }
    else {
        item2Set = "a la carte";
        item2Price = 4.30;
        item2SetId = "setshb1ala"
        itemPriceId = "setshb1ala-price";
        itemQtyId = "setshb1ala-qty";
        itemRemoveId = "setshb1ala-remove";
    }

    var isItemInCart = document.getElementById(item2SetId);
    if (isItemInCart != null) {
        //change quantity
        var callQtyId = document.getElementById(itemQtyId);
        var currentQty = callQtyId.innerHTML;
        var newQty = Number(currentQty) + 1;

        callQtyId.innerHTML = newQty;
        //callQtyId.value = newQty;

        //change price
        var callPriceId = document.getElementById(itemPriceId);
        var currentPrice = callPriceId.innerHTML;
        var newPrice = Number(currentPrice) + item2Price;

        callPriceId.innerHTML = newPrice.toFixed(2);
        //callPriceId.value = newPrice;

        calculatePrice();
    }

    else {
        //cart food col
        var add2ToMyCart = item2Name + " " + item2Set + " and Spicy Honey Butter Sauce";

        var new2Cart = document.createElement('li');
        new2Cart.className = 'cart-group-items';
        new2Cart.id = item2SetId;
        new2Cart.appendChild(document.createTextNode(add2ToMyCart));

        foodInCart.appendChild(new2Cart);

        //cart price col
        //var item2PriceName = "$" + item2Price.toFixed(2);

        var new2PriceCart = document.createElement('li');
        new2PriceCart.className = 'cart-group-price';
        new2PriceCart.id = itemPriceId;
        new2PriceCart.appendChild(document.createTextNode(item2Price.toFixed(2)));

        priceInCart.appendChild(new2PriceCart);
        addQuantityButton(itemQtyId);

        //addRemoveCartButton(itemRemoveId);
        calculatePrice();
    }
}

function addCart3(y) {
    y.preventDefault();

    var itemName = document.getElementById('food-item-3').innerHTML;

    var itemType = document.getElementById('set-xshb1').value;
    var itemSet;
    var itemSetId;
    var itemPrice;
    var itemPriceId;
    var itemQtyId;
    var itemRemoveId;

    if (itemType == 1) {
        itemSet = "with Rice";
        itemPrice = 5.00;
        itemSetId = "setxshb1wr";
        itemPriceId = "setxshb1wr-price";
        itemQtyId = "setxshb1wr-qty";
        itemRemoveId = "setxshb1wr-remove";
    }
    else if (itemType == 2) {
        itemSet = "with Fries";
        itemPrice = 5.00;
        itemSetId = "setxshb1wf"
        itemPriceId = "setxshb1wf-price";
        itemQtyId = "setxshb1wf-qty";
        itemRemoveId = "setxshb1wf-remove";
    }
    else {
        itemSet = "a la carte";
        itemPrice = 4.30;
        itemSetId = "setxshb1ala"
        itemPriceId = "setxshb1ala-price";
        itemQtyId = "setxshb1ala-qty";
        itemRemoveId = "setxshb1ala-remove";
    }

    var isItemInCart = document.getElementById(itemSetId);
    if (isItemInCart != null) {
        //change quantity
        var callQtyId = document.getElementById(itemQtyId);
        var currentQty = callQtyId.innerHTML;
        var newQty = Number(currentQty) + 1;

        callQtyId.innerHTML = newQty;
        //callQtyId.value = newQty;

        //change price
        var callPriceId = document.getElementById(itemPriceId);
        var currentPrice = callPriceId.innerHTML;
        var newPrice = Number(currentPrice) + itemPrice;

        callPriceId.innerHTML = newPrice.toFixed(2);
        //callPriceId.value = newPrice;

        calculatePrice();
    }
    else {
        //cart food col
        var addToMyCart = itemName + " " + itemSet + " and Extra Spicy Honey Butter Sauce";

        var newCart = document.createElement('li');
        newCart.className = 'cart-group-items';
        newCart.id = itemSetId;
        newCart.appendChild(document.createTextNode(addToMyCart));

        foodInCart.appendChild(newCart);

        //cart price col
        var newPriceCart = document.createElement('li');
        newPriceCart.className = 'cart-group-price';
        newPriceCart.id = itemPriceId;

        newPriceCart.appendChild(document.createTextNode(itemPrice.toFixed(2)));

        priceInCart.appendChild(newPriceCart);
        addQuantityButton(itemQtyId);

        //addRemoveCartButton(itemRemoveId);
        calculatePrice();
    }
}

//ROW 2 ADD TO CART BUTTONS
function addCart4(y) {
    y.preventDefault();


    var setName = document.getElementById('food-item-4').innerHTML;

    var setType = document.getElementById('set-4-choice').value;
    var setSauce = document.getElementById('set-4-sauce').value;
    var setSet;
    var setSauceName;
    var itemSetId;
    var setPrice;
    var itemPriceId;
    var itemQtyId;
    var itemRemoveId;
    if (setType == 1) {
        setSet = "with Rice";
        setPrice = 5.20;

        if (setSauce == 1) {
            setSauceName = "Honey Butter";
            itemSetId = "set4wrxhb";
            itemPriceId = "set4wrxhb-price";
            itemQtyId = "set4wrxhb-qty";
            itemRemoveId = "set4wrxhb-remove";;

        }
        else if (setSauce == 2) {
            setSauceName = "Spicy Honey Butter";
            itemSetId = "set4wrxshb";
            itemPriceId = "set4wrxshb-price";
            itemQtyId = "set4wrxshb-qty";
            itemRemoveId = "set4wrxshb-remove";;
        }
        else {
            setSauceName = "Extra Spicy Honey Butter";
            itemSetId = "set4wrxxshb";
            itemPriceId = "set4wrxxshb-price";
            itemQtyId = "set4wrxxshb-qty";
            itemRemoveId = "set4wrxxshb-remove";;
        }
    }
    else if (setType == 2) {
        setSet = "with Fries";
        setPrice = 5.20;

        if (setSauce == 1) {
            setSauceName = "Honey Butter";
            itemSetId = "set4wfxhb";
            itemPriceId = "set4wfxhb-price";
            itemQtyId = "set4wfxhb-qty";
            itemRemoveId = "set4wfxhb-remove";

        }
        else if (setSauce == 2) {
            setSauceName = "Spicy Honey Butter";
            itemSetId = "set4wfxshb";
            itemPriceId = "set4wfxshb-price";
            itemQtyId = "set4wfxshb-qty";
            itemRemoveId = "set4wfxshb-remove";
        }
        else {
            setSauceName = "Extra Spicy Honey Butter";
            itemSetId = "set4wfxxshb";
            itemPriceId = "set4wfxxshb-price";
            itemQtyId = "set4wfxxshb-qty";
            itemRemoveId = "set4wfxxshb-remove";
        }
    }
    else {
        setSet = "a la carte";
        setPrice = 4.40;

        if (setSauce == 1) {
            setSauceName = "Honey Butter";
            itemSetId = "set4alaxhb";
            itemPriceId = "set4alaxhb-price";
            itemQtyId = "set4alaxhb-qty";
            itemRemoveId = "set4alaxhb-remove";

        }
        else if (setSauce == 2) {
            setSauceName = "Spicy Honey Butter";
            itemSetId = "set4alaxshb";
            itemPriceId = "set4alaxshb-price";
            itemQtyId = "set4alaxshb-qty";
            itemRemoveId = "set4alaxshb-remove";
        }
        else {
            setSauceName = "Extra Spicy Honey Butter";
            itemSetId = "set4alaxxshb";
            itemPriceId = "set4alaxxshb-price";
            itemQtyId = "set4alaxxshb-ala";
            itemRemoveId = "set4alaxxshb-remove";
        }
    }

    var isItemInCart = document.getElementById(itemSetId);
    if (isItemInCart != null) {
        //change quantity
        var callQtyId = document.getElementById(itemQtyId);
        var currentQty = callQtyId.innerHTML;
        var newQty = Number(currentQty) + 1;

        callQtyId.innerHTML = newQty;
        //callQtyId.value = newQty;

        //change price
        var callPriceId = document.getElementById(itemPriceId);
        var currentPrice = callPriceId.innerHTML;
        var newPrice = Number(currentPrice) + setPrice;

        callPriceId.innerHTML = newPrice.toFixed(2);
        //callPriceId.value = newPrice;

        calculatePrice();
    }
    else {


        //cart food col
        var add4ToMyCart = setName + " " + setSet + " and " + setSauceName;

        var new4Cart = document.createElement('li');
        new4Cart.className = 'cart-group-items';
        new4Cart.id = itemSetId;
        new4Cart.appendChild(document.createTextNode(add4ToMyCart));

        foodInCart.appendChild(new4Cart);

        //cart price col
        //var item4Price = "$" + set4Price.toFixed(2);

        var new4PriceCart = document.createElement('li');
        new4PriceCart.className = 'cart-group-price';
        new4PriceCart.id = itemPriceId;
        new4PriceCart.appendChild(document.createTextNode(setPrice.toFixed(2)));

        priceInCart.appendChild(new4PriceCart);
        addQuantityButton(itemQtyId);

        //addRemoveCartButton(itemRemoveId);
        calculatePrice();
    }
}

function addCart5(y) {
    y.preventDefault();


    var setName = document.getElementById('food-item-5').innerHTML;
    var setType = document.getElementById('set-5-choice').value;
    var setSauce = document.getElementById('set-5-sauce').value;
    var setSet;
    var setSauceName;
    var itemSetId;
    var setPrice;
    var itemPriceId;
    var itemQtyId;
    var itemRemoveId;

    if (setType == 1) {
        setSet = "with Rice";
        setPrice = 7.00;

        if (setSauce == 1) {
            setSauceName = "Honey Butter";
            itemSetId = "set5wrxhb";
            itemPriceId = "set5wrxhb-price";
            itemQtyId = "set5wrxhb-qty";
            itemRemoveId = "set5wrxhb-remove";

        }
        else if (setSauce == 2) {
            setSauceName = "Spicy Honey Butter";
            itemSetId = "set5wrxshb";
            itemPriceId = "set5wrxshb-price";
            itemQtyId = "set5wrxshb-qty";
            itemRemoveId = "set5wrxshb-remove";
        }
        else {
            setSauceName = "Extra Spicy Honey Butter";
            itemSetId = "set5wrxxshb";
            itemPriceId = "set5wrxxshb-price";
            itemQtyId = "set5wrxxshb-qty";
            itemRemoveId = "set5wrxxshb-remove";
        }
    }
    else if (setType == 2) {
        setSet = "with Fries";
        setPrice = 7.00;

        if (setSauce == 1) {
            setSauceName = "Honey Butter";
            itemSetId = "set5wfxhb";
            itemPriceId = "set5wfxhb-price";
            itemQtyId = "set5wfxhb-qty";
            itemRemoveId = "set5wfxhb-remove";

        }
        else if (setSauce == 2) {
            setSauceName = "Spicy Honey Butter";
            itemSetId = "set5wfxshb";
            itemPriceId = "set5wfxshb-price";
            itemQtyId = "set5wfxshb-qty";
            itemRemoveId = "set5wfxshb-remove";
        }
        else {
            setSauceName = "Extra Spicy Honey Butter";
            itemSetId = "set5wfxxshb";
            itemPriceId = "set5wfxxshb-price";
            itemQtyId = "set5wfxxshb-qty";
            itemRemoveId = "set5wfxxshb-remove";
        }
    }
    else {
        setSet = "a la carte";
        setPrice = 6.30;

        if (setSauce == 1) {
            setSauceName = "Honey Butter";
            itemSetId = "set5alaxhb";
            itemPriceId = "set5alaxhb-price";
            itemQtyId = "set5alaxhb-qty";
            itemRemoveId = "set5alaxhb-remove";

        }
        else if (setSauce == 2) {
            setSauceName = "Spicy Honey Butter";
            itemSetId = "set5alaxshb";
            itemPriceId = "set5alaxshb-price";
            itemQtyId = "set5alaxshb-qty";
            itemRemoveId = "set5alaxshb-remove";
        }
        else {
            setSauceName = "Extra Spicy Honey Butter";
            itemSetId = "set5alaxxshb";
            itemPriceId = "set5alaxxshb-price";
            itemQtyId = "set5alaxxshb-qty";
            itemRemoveId = "set5alaxxshb-remove";
        }
    }

    var isItemInCart = document.getElementById(itemSetId);
    if (isItemInCart != null) {
        //change quantity
        var callQtyId = document.getElementById(itemQtyId);
        var currentQty = callQtyId.innerHTML;
        var newQty = Number(currentQty) + 1;

        callQtyId.innerHTML = newQty;
        //callQtyId.value = newQty;

        //change price
        var callPriceId = document.getElementById(itemPriceId);
        var currentPrice = callPriceId.innerHTML;
        var newPrice = Number(currentPrice) + setPrice;

        callPriceId.innerHTML = newPrice.toFixed(2);
        //callPriceId.value = newPrice;

        calculatePrice();
    }
    else {

        //cart food col

        var add5ToMyCart = setName + " " + setSet + " and " + setSauceName;

        var new5Cart = document.createElement('li');
        new5Cart.className = 'cart-group-items';
        new5Cart.id = itemSetId;
        new5Cart.appendChild(document.createTextNode(add5ToMyCart));

        foodInCart.appendChild(new5Cart);

        //cart price col
        //var item4Price = "$" + set4Price.toFixed(2);

        var new5PriceCart = document.createElement('li');
        new5PriceCart.className = 'cart-group-price';
        new5PriceCart.id = itemPriceId;
        new5PriceCart.appendChild(document.createTextNode(setPrice.toFixed(2)));

        priceInCart.appendChild(new5PriceCart);
        addQuantityButton(itemQtyId);

        //addRemoveCartButton(itemRemoveId);
        calculatePrice();
    }
}

function addCart6(y) {
    y.preventDefault();


    var setName = document.getElementById('food-item-tray1').innerHTML;
    var itemPrice = 30;
    var itemSetId;
    var tray1Sauce = document.getElementById('tray1-sauce').value;
    var itemPriceId;
    var itemQtyId;
    var itemRemoveId;

    if (tray1Sauce == 1) {
        sauceName = "Honey Butter";
        itemSetId = "tray1hb";
        itemPriceId = "tray1hb-price";
        itemQtyId = "tray1hb-qty";
        itemRemoveId = "tray1hb--remove";
    }
    else if (tray1Sauce == 2) {
        sauceName = "Spicy Honey Butter";
        itemSetId = "tray1shb";
        itemPriceId = "tray1shb-price";
        itemQtyId = "tray1shb-qty";
        itemRemoveId = "tray1shb--remove";
    }
    else {
        sauceName = "Extra Spicy Honey Butter";
        itemSetId = "tray1xshb";
        itemPriceId = "tray1xshb-price";
        itemQtyId = "tray1xshb-qty";
        itemRemoveId = "tray1xshb--remove";
    }

    var isItemInCart = document.getElementById(itemSetId);
    if (isItemInCart != null) {
        //change quantity
        var callQtyId = document.getElementById(itemQtyId);
        var currentQty = callQtyId.innerHTML;
        var newQty = Number(currentQty) + 1;

        callQtyId.innerHTML = newQty;
        //callQtyId.value = newQty;

        //change price
        var callPriceId = document.getElementById(itemPriceId);
        var currentPrice = callPriceId.innerHTML;
        var newPrice = Number(currentPrice) + itemPrice;

        callPriceId.innerHTML = newPrice.toFixed(2);
        //callPriceId.value = newPrice;

        calculatePrice();
    }
    else {

        //cart food col
        var add6ToMyCart = setName + " with " + sauceName;

        var new6Cart = document.createElement('li');
        new6Cart.className = 'cart-group-items';
        new6Cart.id = itemSetId;
        new6Cart.appendChild(document.createTextNode(add6ToMyCart));

        foodInCart.appendChild(new6Cart);

        //cart price col
        //var item6Price = "$" + set6Price.toFixed(2);

        var new6PriceCart = document.createElement('li');
        new6PriceCart.className = 'cart-group-price';
        new6PriceCart.id = itemPriceId;
        new6PriceCart.appendChild(document.createTextNode(itemPrice.toFixed(2)));

        priceInCart.appendChild(new6PriceCart);

        addQuantityButton(itemQtyId);

        //addRemoveCartButton(itemRemoveId);

        calculatePrice();
    }
}

function addCart7(y) {
    y.preventDefault();


    var setName = document.getElementById('food-item-tray2').innerHTML;
    var itemPrice = 15;
    var itemSetId = "tray-fries";
    var itemPriceId = "tray-fries-price";
    var itemQtyId = "tray-fries-qty";
    var itemRemoveId = "tray-fries-remove";

    var isItemInCart = document.getElementById(itemSetId);
    if (isItemInCart != null) {
        //change quantity
        var callQtyId = document.getElementById(itemQtyId);
        var currentQty = callQtyId.innerHTML;
        var newQty = Number(currentQty) + 1;

        callQtyId.innerHTML = newQty;

        //change price
        var callPriceId = document.getElementById(itemPriceId);
        var currentPrice = callPriceId.innerHTML;
        var newPrice = Number(currentPrice) + itemPrice;

        callPriceId.innerHTML = newPrice.toFixed(2);
        //callPriceId.value = newPrice;

        calculatePrice();
    }
    else {
        //cart food col
        var add7ToMyCart = setName;

        var new7Cart = document.createElement('li');
        new7Cart.className = 'cart-group-items';
        new7Cart.id = itemSetId;
        new7Cart.appendChild(document.createTextNode(add7ToMyCart));

        foodInCart.appendChild(new7Cart);

        //cart price col

        var new7PriceCart = document.createElement('li');
        new7PriceCart.className = 'cart-group-price';
        new7PriceCart.id = itemPriceId;
        new7PriceCart.appendChild(document.createTextNode(itemPrice.toFixed(2)));

        priceInCart.appendChild(new7PriceCart);

        //cart quantity column
        addQuantityButton(itemQtyId);

        //addRemoveCartButton(itemRemoveId);

        calculatePrice();
    }
}

function addCart8(y) {
    y.preventDefault();


    var setName = document.getElementById('food-item-side1').innerHTML;
    var itemPrice = 1;
    var itemSetId = "side-rice";
    var itemPriceId = "side-rice-price";
    var itemQtyId = "side-rice-qty";
    var itemRemoveId = "side-rice-remove";

    var isItemInCart = document.getElementById(itemSetId);
    if (isItemInCart != null) {
        //change quantity
        var callQtyId = document.getElementById(itemQtyId);
        var currentQty = callQtyId.innerHTML;
        var newQty = Number(currentQty) + 1;

        callQtyId.innerHTML = newQty;

        //change price
        var callPriceId = document.getElementById(itemPriceId);
        var currentPrice = callPriceId.innerHTML;
        var newPrice = Number(currentPrice) + itemPrice;

        callPriceId.innerHTML = newPrice.toFixed(2);
        //callPriceId.value = newPrice;

        calculatePrice();
    }
    else {
        //cart food col
        var add7ToMyCart = setName;

        var new7Cart = document.createElement('li');
        new7Cart.className = 'cart-group-items';
        new7Cart.id = itemSetId;
        new7Cart.appendChild(document.createTextNode(add7ToMyCart));

        foodInCart.appendChild(new7Cart);

        //cart price col

        var new7PriceCart = document.createElement('li');
        new7PriceCart.className = 'cart-group-price';
        new7PriceCart.id = itemPriceId;
        new7PriceCart.appendChild(document.createTextNode(itemPrice.toFixed(2)));

        priceInCart.appendChild(new7PriceCart);

        //cart quantity column
        addQuantityButton(itemQtyId);

        //addRemoveCartButton(itemRemoveId);

        calculatePrice();
    }
}

function addCart9(y) {
    y.preventDefault();


    var setName = document.getElementById('food-item-side2').innerHTML;
    var itemPrice = 1;
    var itemSetId = "side-fries";
    var itemPriceId = "side-fries-price";
    var itemQtyId = "side-fries-qty";
    var itemRemoveId = "side-fries-remove";

    var isItemInCart = document.getElementById(itemSetId);
    if (isItemInCart != null) {
        //change quantity
        var callQtyId = document.getElementById(itemQtyId);
        var currentQty = callQtyId.innerHTML;
        var newQty = Number(currentQty) + 1;

        callQtyId.innerHTML = newQty;

        //change price
        var callPriceId = document.getElementById(itemPriceId);
        var currentPrice = callPriceId.innerHTML;
        var newPrice = Number(currentPrice) + itemPrice;

        callPriceId.innerHTML = newPrice.toFixed(2);
        //callPriceId.value = newPrice;

        calculatePrice();
    }
    else {
        //cart food col
        var add7ToMyCart = setName;

        var new7Cart = document.createElement('li');
        new7Cart.className = 'cart-group-items';
        new7Cart.id = itemSetId;
        new7Cart.appendChild(document.createTextNode(add7ToMyCart));

        foodInCart.appendChild(new7Cart);

        //cart price col

        var new7PriceCart = document.createElement('li');
        new7PriceCart.className = 'cart-group-price';
        new7PriceCart.id = itemPriceId;
        new7PriceCart.appendChild(document.createTextNode(itemPrice.toFixed(2)));

        priceInCart.appendChild(new7PriceCart);

        //cart quantity column
        addQuantityButton(itemQtyId);

        //addRemoveCartButton(itemRemoveId);

        calculatePrice();
    }
}

function addCart10(y) {
    y.preventDefault();


    var setName = document.getElementById('food-item-sauce').innerHTML;
    var itemPrice = 0.50;
    var itemSetId;
    var xtraSauce = document.getElementById('extra-sauce').value;
    var itemPriceId;
    var itemQtyId;
    var itemRemoveId;

    if (xtraSauce == 1) {
        sauceName = "Honey Butter";
        itemSetId = "xtrasoshb";
        itemPriceId = "xtrasoshb-price";
        itemQtyId = "xtrasoshb-qty";
        itemRemoveId = "xtrasoshb--remove";
    }
    else if (xtraSauce == 2) {
        sauceName = "Spicy Honey Butter";
        itemSetId = "xtrasosshb";
        itemPriceId = "xtrasosshb-price";
        itemQtyId = "xtrasosshb-qty";
        itemRemoveId = "xtrasosshb--remove";
    }
    else {
        sauceName = "Extra Spicy Honey Butter";
        itemSetId = "xtrasosxshb";
        itemPriceId = "xtrasosxshb-price";
        itemQtyId = "xtrasosxshb-qty";
        itemRemoveId = "xtrasosxshb--remove";
    }

    var isItemInCart = document.getElementById(itemSetId);
    if (isItemInCart != null) {
        //change quantity
        var callQtyId = document.getElementById(itemQtyId);
        var currentQty = callQtyId.innerHTML;
        var newQty = Number(currentQty) + 1;

        callQtyId.innerHTML = newQty;
        //callQtyId.value = newQty;

        //change price
        var callPriceId = document.getElementById(itemPriceId);
        var currentPrice = callPriceId.innerHTML;
        var newPrice = Number(currentPrice) + itemPrice;

        callPriceId.innerHTML = newPrice.toFixed(2);
        //callPriceId.value = newPrice;

        calculatePrice();
    }
    else {

        //cart food col
        var add6ToMyCart = setName + " - " + sauceName;

        var new6Cart = document.createElement('li');
        new6Cart.className = 'cart-group-items';
        new6Cart.id = itemSetId;
        new6Cart.appendChild(document.createTextNode(add6ToMyCart));

        foodInCart.appendChild(new6Cart);

        //cart price col

        var new6PriceCart = document.createElement('li');
        new6PriceCart.className = 'cart-group-price';
        new6PriceCart.id = itemPriceId;
        new6PriceCart.appendChild(document.createTextNode(itemPrice.toFixed(2)));

        priceInCart.appendChild(new6PriceCart);

        addQuantityButton(itemQtyId);

        //addRemoveCartButton(itemRemoveId);

        calculatePrice();
    }
}

var price = document.getElementById('total-price');

function calculatePrice() {
    var orderList = document.getElementsByClassName('cart-group-price');
    //var orderListQty = document.getElementsByClassName('cart-group-qty');
    var firstPrice;
    //var quantity = 1;
    var multipliedPrice;
    var totalPrice = 0.00;
    for (var i = 0; i < orderList.length; i++) {
        firstPrice = Number(orderList[i].innerHTML);
        //quantity = Number(orderListQty[i].innerHTML);
        //multipliedPrice = firstPrice * quantity;
        totalPrice = totalPrice + firstPrice;
    }
    price.innerHTML = "Total Price: $" + totalPrice.toFixed(2);
}


//<input class="cart-quantity-input" type="number" value="1" min="1">
//<select class="mega-qty"><option value="1" selected>1</option ><option value="2">2</option><option value="3">3</option><option value="4">4</option></select >`
function addQuantityButton(itemQtyId) {
    var quantityOfItemList = document.createElement('li');
    quantityOfItemList.className = 'cart-group-qty';
    quantityOfItemList.id = itemQtyId;
    quantityOfItemList.innerHTML = "1";

    qtyInCart.appendChild(quantityOfItemList);
}

//quantity change using input type=number. need to relearn event listener.
/*
 * function quantityChanged(event) {
    
    calculatePrice();
}
 

function addRemoveCartButton(itemRemoveId){
    var removeFromCart = `
            <input type="submit" class="btn remove-from-cart" onclick="removeCartItem();" value="Remove"></input>`
    var removeFromCartButton = document.createElement('li');
    removeFromCartButton.className = 'cart-group-remove';
    removeFromCartButton.id = itemRemoveId;
    //removeFromCartButton.innerHTML = removeFromCart;

    removeInCart.appendChild(removeFromCartButton);
}

function removeCartItem() {
    document.getElementById()
    parentElement.parentElement.remove();
    calculatePrice();
}
*/

function clearOrder() {
    var getOrderClasses = document.getElementsByClassName('cart-group');
    for (i = 0; i < getOrderClasses.length; i++) {
        getOrderClasses[i].removeChild;
    }
    calculatePrice();
}

function confirmOrder() {
    var r = confirm("Confirm Order");
    if (r == true) {
        alert("We have received your order! We will contact you to deliver your order soon!");
    } else {
        alert("Order Cancelled");
    }
}
