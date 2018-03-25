//ALLLLLLLL the data for the calculator

//BASIC SPIRITS
var spirits = [
    //-------name-----------------ethonol-sugar-acid -------------- notes---------------------------
    ["Bourbon (80 proof)",           0.4,   0, 0, "Crème de cacao, honey, grapefruit, figs, apple, cognac, chamomile, rye, amontillado sherry"],
    ["Bourbon (100 proof)",          0.5,   0, 0, "Crème de cacao, honey, grapefruit, figs, apple, cognac, chamomile, rye, amontillado sherry"],
    ["Rye (80 proof)",               0.4,   0, 0, "Crème de cacao, honey, grapefruit, figs, apple, cognac, chamomile, bourbon, amontillado sherry"],
    ["Rye (100 proof)",              0.5,   0, 0, "Crème de cacao, honey, grapefruit, figs, apple, cognac, chamomile, bourbon, amontillado sherry"],
    ["Scotch (80 proof)",            0.4,   0, 0, "Apples, pears, cinnamon, oloroso sherry"],
    ["Scotch (100 proof)",           0.5,   0, 0, "Apples, pears, cinnamon, oloroso sherry"],
    ["Smoky Scotch (80 proof)",      0.4,   0, 0, "Pineapple, mint, lime"],
    ["Smoky Scotch (100 proof)",     0.5,   0, 0, "Pineapple, mint, lime"],
    ["Japanese Whisky (80 proof)",   0.4,   0, 0, "Pineapple, coconut"],
    ["Japanese Whisky (100 proof)",  0.5,   0, 0, "Pineapple, coconut"],
    ["Gin (80 proof)",               0.4,   0, 0, "Almost anything, herbs, vermouth, Chartreuse, honey, calvados, bitters, champagne, ginger, sherry"],
    ["Gin (100 proof)",              0.5,   0, 0, "Almost anything, herbs, vermouth, Chartreuse, honey, calvados, bitters, champagne, ginger, sherry"],
    ["Plymouth Gin",                 0.412, 0, 0, "Almost anything, herbs, citrus, vermouth, Chartreuse, honey, calvados, bitters, champagne, ginger"],
    ["Mezcal (80 proof)",            0.4,   0, 0, "Tequila (reposado), bell pepper, strawberry, Suze"],
    ["Mezcal (100 proof)",           0.5,   0, 0, "Tequila (reposado), bell pepper, strawberry, Suze"],
    ["Blanco Tequila (80 proof)",    0.4,   0, 0, "Grapefruit, black pepper, yellow Chartreuse, salt, jalapeño, Thai basil, kumquats, Aperol"],
    ["Blanco Tequila (100 proof)",   0.5,   0, 0, "Grapefruit, black pepper, yellow Chartreuse, salt, jalapeño, Thai basil, kumquats, Aperol"],
    ["Reposado Tequila (80 proof)",  0.4,   0, 0, "Grapefruit, black pepper, yellow Chartreuse, salt, jalapeño, Thai basil, kumquats, mezcal"],
    ["Reposado Tequila (100 proof)", 0.5,   0, 0, "Grapefruit, black pepper, yellow Chartreuse, salt, jalapeño, Thai basil, kumquats, mezcal"],
    ["Cachaça (80 proof)",           0.4,   0, 0, "Fruits and berries"],
    ["Cachaça (100 proof)",          0.4,   0, 0, "Fruits and berries"],
    ["Vodka (80 proof)",             0.4,   0, 0, "Anything with flavor"],
    ["Vodka (100 proof)",            0.5,   0, 0, "Anything with flavor"],
    ["Brandy (80 proof)",            0.4,   0, 0, "Calvados, sweet vermouth, honey, mint, cinnamon, apple, cherries, maple syrup, amontillado sherry"],
    ["Brandy (100 proof)",           0.5,   0, 0, "Calvados, sweet vermouth, honey, mint, cinnamon, apple, cherries, maple syrup, amontillado sherry"],
    ["Rum (80 proof)",               0.4,   0, 0, "Other rums, maple syrup, coffee, citrus (lime especially), herbs (mint, basic), ginger, curry leaf"],
    ["Rum (100 proof)",              0.5,   0, 0, "Other rums, maple syrup, coffee, citrus (lime especially), herbs (mint, basic), ginger, curry leaf"]
];

//SWEETENERS
var sweeteners = [
    //-------name------ethonol-sugar-acid -------------- notes-----------------------------------
    ["Simple syrup",      0, 61.5, 0, "Combine 1 part sugar to 1 part water by weight"],
    ["Rich simple syrup", 0, 80, 0, "Combine 2 parts sugar to 1 part water by weight"],
    ["Agave syrup",       0, 61.5, 0, "Add 50g of water for each 100g of agave nectar"],
    ["Honey syrup",       0, 61.5, 0, "Add 64g of water for each 100g of honey"],
    ["Demerara syrup",    0, 61.5, 0, "Combine 1 part demarara sugar to 1 part water by weight"],
    ["Maple syrup",       0, 87.5, 0, "Use Grade A: Dark Color & Robust Taste, syrup"],
    ["Grenadine",         0, 66.6, 0, "Sweetness is from Rose's Grenadine"],
    ["Commercial orgeat", 0, 85.5, 0, "Pairs well with pears"],
    ["Any nut orgeat",    0, 61.5, 0, "Pairs well with pears"]
];

//JUICES AND ACIDS
var juices = [
    //-------name----------ethonol-sugar-acid -------------- notes---------------------------------
    ["Lemon juice",        0, 1.6,  6, "Pairs with almost everything"],
    ["Lime juice",         0, 1.6,  6, "Pairs with almost everything"],
    ["Grapefruit juice",   0, 10.4, 2.4, "Tequila, bourbon, rye, cinnamon, Aperol"],
    ["Orange juice",       0, 12.4, 0.8, "Gin"],
    ["Strawberry",         0, 8,  1.5, "Black pepper, cinnamon"],
    ["Concord Grape",      0, 18, 0.5, ""],
    ["Cranberry",          0, 13.3, 3.6, ""],
    ["Granny Smith apple", 0, 13, 0.9, "Celery"],
    ["Honeycrisp apple",   0, 13.8, 0.7, "Celery"]
];

//BITTERS
var bitters = [
    //-------name------ethonol-sugar-acid --------- notes-------------------------------------------
    ["Angostura bitters", 0.447, 4.2, 0, "1 dash = 0.8ml or 27oz"],
    ["Peychauds bitters", 0.35, 5, 0, "1 dash = 0.8ml or 27oz"]
];

//VERMOUTHS
var vermouths = [
    //-------name--------------------ethonol-sugar-acid --------- notes-----------------------------
    ["Carpano Antica sweet vermouth", 0.165, 16, 0.6, "Coffee, bourbon, rye"],
    ["Dolin Blanc vermouth",          0.16, 13, 0.6, "Chamomile, watermelon, sage"],
    ["Dolin Dry vermouth",            0.175, 3,  0.6, "Peach, apricot"],
    ["Dolin Rouge sweet vermouth",    0.16, 13, 0.6, "Chai tea"],
    ["Generic dry vermouth",          0.175, 3,  0.6, "Peach, apricot"],
    ["Generic sweet vermouth",        0.165, 16, 0.6, "Chai tea"],
    ["Lillet Blanc",                  0.17, 9.5,  0.6, "Dry sherry, Cointreau"]
];

//LIQUEURS
var liqueurs = [
    //-------name------------ethonol-sugar-acid --------- notes-----------------------------
    ["Amaro CioCiaro",         0.30, 16, 0, "Peach"],
    ["Amer Picon",             0.15, 20, 0, "Maraschino liqueur, whiskey"],
    ["Aperol",                 0.11, 24, 0, "Blanco tequila, sherry, mango, grapefruit"],
    ["Benedictine",            0.40, 24.5, 0, "Sweet vermouth, whiskey, brandy"],
    ["Campari",                0.24, 24, 0, "Chocolate, raspberries, sloe gin"],
    ["Chartreuse, Green",      0.55, 25, 0, "Coffee, chocolate"],
    ["Chartreuse, Yellow",     0.40, 31.2, 0, "Strawberry, tequila"],
    ["Cointreau (triple sec)", 0.40, 25, 0, "Gin, cherry, brandy, Lillet Blanc, Crème de violette"],
    ["Crème de cacao, white",  0.24, 39.5, 0, "Bourbon, rye, gin, Lillet Blanc"],
    ["Crème de violette",      0.20, 37.5, 0, "Gin, Cointreau, Maraschino liqueur"],
    ["Drambuie",               0.40, 30, 0, ""],
    ["Fernet Branca",          0.39, 8,  0, "Gin, sweet vermouth, whiskey, cognac"],
    ["Luxardo Maraschino",     0.32, 35, 0, "Crème de violette, whiskey, gin, sweet vermouth, green Chartreuse, pineapple",]
];

//SODAS
var sodas = [
    ["Tonic water (Schweppes)",  0, 9, 0, "Gin"],
    ["Soda water / still water", 0, 0, 0, ""],
    ["Tonic water (Fever Tree)", 0, 8, 0, "Gin"]
];

//OTHERS
var others = [
    ["Egg white",          0,    0, 0,   "1 large egg white is ~1oz (30ml)"],
    ["Cabernet sauvignon", 0.145, 0.2, 0.6, ""],
    ["Coconut water",      0,    6, 0,   "Japanese whisky"],
    ["Espresso",           0,    0, 1.5, "Rum, Carpano Antica, green Chartreuse"]
];

//these are the proportions for propper mixing, its a little confusing without the headers, look at the spreadsheet to figure out whats what
var props = [
    [51, 60, 5.2, 5.9, 156, 178, 15, 19.7, 5, 8.9, 0.76, 0.94],
    [46, 49, 6.6, 7, 198, 209, 12.1, 15.2, 6.7, 9, 0.49, 0.68],
    [24, 24, 2.9, 3.1, 88, 93, 27, 32, 7, 8, 00, 00],
    [41, 49, 4.3, 4.75, 130, 142, 21, 29, 3.7, 5.6, 00, 0.20],
    [0, 0, 5, 6, 150, 180, 14, 16, 5, 7.5, 0.38, 0.51]
];



//Data above ^^^^^^^
//Code bellow





//make one big array of all the ingredients
var all_drinks = [];
var count = 0;

//add spirits
var i = 0;
while(i < spirits.length){
    all_drinks.push(spirits[i]);
    count++;
    i++;
}
//add sweeteners
i = 0;
while(i < sweeteners.length){
    all_drinks.push(sweeteners[i]);
    count++;
    i++;
}
//add juices and acids
i = 0;
while(i < juices.length){
    all_drinks.push(juices[i]);
    count++;
    i++;
}
//add bitters
i = 0;
while(i < bitters.length){
    all_drinks.push(bitters[i]);
    count++;
    i++;
}
//add vermouth
i = 0;
while(i < vermouths.length){
    all_drinks.push(vermouths[i]);
    count++;
    i++;
}
//add liqueurs
i = 0;
while(i < liqueurs.length){
    all_drinks.push(liqueurs[i]);
    count++;
    i++;
}
//add sodas
i = 0;
while(i < sodas.length){
    all_drinks.push(sodas[i]);
    count++;
    i++;
}
//add others
i = 0;
while(i < others.length){
    all_drinks.push(others[i]);
    count++;
    i++;
}
