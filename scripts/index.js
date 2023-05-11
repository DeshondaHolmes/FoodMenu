"use strict";


let menu = {
    drinks : [
     "Water", "Tea", "Sweet Tea", 
     "Coke", "Dr. Pepper", "Sprite"
     ],
    entrees : [
    "Hamburger w/ Fries", 
     "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies", 
     "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw", 
     "Veggie Plate"
    ],
    desserts: [
     "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
     ]
    };


    window.omload = function(){

        categorySelect.onchange = onCategorySelectChange;
    };

    function onCategorySelectChange (){
        availableItemsListbox.options.length = 0
        let currentValue = categorySelection.value;
        console.log(currentValue);

        if(currentValue ==)


    }



