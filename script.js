//fetch data
fetch("https://kea-alt-del.dk/t5/api/productlist")
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    //console.log(data)
    .then(function (data) {
        console.log(data)
        dataReceived(data);
    })

function dataReceived(products) {
    //loop trough products
    console.log(products)
    products.forEach(showProduct)

}
//executed once for each product
function showProduct(myProduct) {
    console.log(myProduct) 

    //finding the template
    const temp = document.querySelector("#productTemplate").content;
    //clone the template
    const myCopy = temp.cloneNode(true);
    
    if(!myProduct.discount) {
        //console.log("NOT DISCOUNT")
        myCopy.querySelector(".data_discount").classList.add("hidden")
        
    }
    if(myProduct.vegetarian) {
        myCopy.querySelector(".vegetarian").classList.remove("hidden");
    }
    if(myProduct.soldout) {
        const p = document.createElement("p");
        p.textContent = "Sold Out";
        p.classList.add("soldout")
        myCopy.querySelector("article").appendChild(p)
    }
    //fill in the template
myCopy.querySelector(".data_name").textContent = myProduct.name; 
    //append
    const parentElem = document.querySelector("section#starter");
    parentElem.appendChild(myCopy);
}






/*const name="Jonas";
function hi(){
    const name2="Lasse";
    console.log(name1, name2)
}

console.log(name1, name2)
*/
