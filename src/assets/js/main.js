import 'bootstrap';

const baseUrl = 'https://maximova.dk/wp-json/wp/v2/posts'
const cards = document.querySelector('#rec-card');

let token;
fetch('https://maximova.dk/wp-json/jwt-auth/v1/token',{
    method: 'POST',
    headers: {
        'Content-type':'application/json'
    },
    body: JSON.stringify({
        "username": "Admin",
        "password": "admin"
    })
})
.then(response => response.json())
.then(data => {
    token = data.data.token;
})


.then(() => {
         fetch(`${baseUrl}?status=private&per_page=100`, {
        method:'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {

        console.log(data);
        myItem1img = document.querySelector('#product1Img');
        myItem1img.innerHTML = `
        <img src="${data[0].acf.image.url}" alt="${data[0].acf.image.alt}" class="card-img-top">`;

        myItem1title = document.querySelector('#product1Title');
        myItem1title.innerHTML = `
        <h5>${data[0].acf.name}<h5>`;

        myItem1price = document.querySelector('#product1Price');
        myItem1price.innerHTML = `
        <p>${data[0].acf.price}€<p>`;

        if (data[0].acf.discount) {
            myItem1Discount = document.querySelector('#product1Discount');
            myItem1Discount.innerHTML = `
            <p>${data[0].acf.discount}€<p>`;

            myItem1price.innerHTML = `
            <p><s>${data[0].acf.price}€</s><p>`;
        }



        myItem2img = document.querySelector('#product2Img');
        myItem2img.innerHTML = `
        <img src="${data[1].acf.image.url}" alt="${data[1].acf.image.alt}" class="card-img-top">`;
       
        myItem2title = document.querySelector('#product2Title');
        myItem2title.innerHTML = `
        <h5>${data[1].acf.name}<h5>`;

        myItem2price = document.querySelector('#product2Price');
        myItem2price.innerHTML = `
        <p>${data[1].acf.price}€<p>`;

        if (data[1].acf.discount) {
            myItem2Discount = document.querySelector('#product2Discount');
            myItem2Discount.innerHTML = `
            <p>${data[1].acf.discount}€<p>`;

            myItem2price.innerHTML = `
            <p><s>${data[1].acf.price}€</s><p>`;
        }



        myItem3img = document.querySelector('#product3Img');
        myItem3img.innerHTML = `
        <img src="${data[2].acf.image.url}" alt="${data[2].acf.image.alt}" class="card-img-top">`;
       
        myItem3title = document.querySelector('#product3Title');
        myItem3title.innerHTML = `
        <h5>${data[2].acf.name}<h5>`;

        myItem3price = document.querySelector('#product3Price');
        myItem3price.innerHTML = `
        <p>${data[2].acf.price}€<p>`;

        if (data[2].acf.discount) {
            myItem3Discount = document.querySelector('#product3Discount');
            myItem3Discount.innerHTML = `
            <p>${data[2].acf.discount}€<p>`;

            myItem3price.innerHTML = `
            <p><s>${data[2].acf.price}€</s><p>`;
        }


        myItem4img = document.querySelector('#product4Img');
        myItem4img.innerHTML = `
        <img src="${data[3].acf.image.url}" alt="${data[3].acf.image.alt}" class="card-img-top">`;
       
        myItem4title = document.querySelector('#product4Title');
        myItem4title.innerHTML = `
        <h5>${data[3].acf.name}<h5>`;

        myItem4price = document.querySelector('#product4Price');
        myItem4price.innerHTML = `
        <p>${data[3].acf.price}€<p>`;

        if (data[3].acf.discount) {
            myItem4Discount = document.querySelector('#product4Discount');
            myItem4Discount.innerHTML = `
            <p>${data[3].acf.discount}€<p>`;

            myItem4price.innerHTML = `
            <p><s>${data[3].acf.price}€</s><p>`;
        }



        myItem5img = document.querySelector('#product5Img');
        myItem5img.innerHTML = `
        <img src="${data[4].acf.image.url}" alt="${data[4].acf.image.alt}" class="card-img-top">`;
       
        myItem5title = document.querySelector('#product5Title');
        myItem5title.innerHTML = `
        <h5>${data[4].acf.name}<h5>`;

        myItem5price = document.querySelector('#product5Price');
        myItem5price.innerHTML = `
        <p>${data[4].acf.price}€<p>`;

        if (data[4].acf.discount) {
            myItem5Discount = document.querySelector('#product5Discount');
            myItem5Discount.innerHTML = `
            <p>${data[4].acf.discount}€<p>`;

            myItem5price.innerHTML = `
            <p><s>${data[4].acf.price}€</s><p>`;
        }



        myItem6img = document.querySelector('#product6Img');
        myItem6img.innerHTML = `
        <img src="${data[5].acf.image.url}" alt="${data[5].acf.image.alt}" class="card-img-top">`;
       
        myItem6title = document.querySelector('#product6Title');
        myItem6title.innerHTML = `
        <h5>${data[5].acf.name}<h5>`;

        myItem6price = document.querySelector('#product6Price');
        myItem6price.innerHTML = `
        <p>${data[5].acf.price}€<p>`;

        if (data[5].acf.discount) {
            myItem6Discount = document.querySelector('#product6Discount');
            myItem6Discount.innerHTML = `
            <p>${data[5].acf.discount}€<p>`;

            myItem6price.innerHTML = `
            <p><s>${data[5].acf.price}€</s><p>`;
        }



        myItem7img = document.querySelector('#product7Img');
        myItem7img.innerHTML = `
        <img src="${data[6].acf.image.url}" alt="${data[6].acf.image.alt}" class="card-img-top">`;
       
        myItem7title = document.querySelector('#product7Title');
        myItem7title.innerHTML = `
        <h5>${data[6].acf.name}<h5>`;

        myItem7price = document.querySelector('#product7Price');
        myItem7price.innerHTML = `
        <p>${data[6].acf.price}€<p>`;

        if (data[6].acf.discount) {
            myItem7Discount = document.querySelector('#product7Discount');
            myItem7Discount.innerHTML = `
            <p>${data[6].acf.discount}€<p>`;

            myItem7price.innerHTML = `
            <p><s>${data[6].acf.price}€</s><p>`;
        }



        myItem8img = document.querySelector('#product8Img');
        myItem8img.innerHTML = `
        <img src="${data[7].acf.image.url}" alt="${data[7].acf.image.alt}" class="card-img-top">`;
       
        myItem8title = document.querySelector('#product8Title');
        myItem8title.innerHTML = `
        <h5>${data[7].acf.name}<h5>`;

        myItem8price = document.querySelector('#product8Price');
        myItem8price.innerHTML = `
        <p>${data[7].acf.price}€<p>`;

        if (data[7].acf.discount) {
            myItem8Discount = document.querySelector('#product8Discount');
            myItem8Discount.innerHTML = `
            <p>${data[7].acf.discount}€<p>`;

            myItem8price.innerHTML = `
            <p><s>${data[7].acf.price}€</s><p>`;
        }

        

        myItem9img = document.querySelector('#product9Img');
        myItem9img.innerHTML = `
        <img src="${data[8].acf.image.url}" alt="${data[8].acf.image.alt}" class="card-img-top">`;
       
        myItem9title = document.querySelector('#product9Title');
        myItem9title.innerHTML = `
        <h5>${data[8].acf.name}<h5>`;

        myItem9price = document.querySelector('#product9Price');
        myItem9price.innerHTML = `
        <p>${data[8].acf.price}€<p>`;

        if (data[8].acf.discount) {
            myItem9Discount = document.querySelector('#product9Discount');
            myItem9Discount.innerHTML = `
            <p>${data[8].acf.discount}€<p>`;

            myItem9price.innerHTML = `
            <p><s>${data[8].acf.price}€</s><p>`;
        }


        myItem10img = document.querySelector('#product10Img');
        myItem10img.innerHTML = `
        <img src="${data[9].acf.image.url}" alt="${data[9].acf.image.alt}" class="card-img-top">`;
       
        myItem10title = document.querySelector('#product10Title');
        myItem10title.innerHTML = `
        <h5>${data[9].acf.name}<h5>`;

        myItem10price = document.querySelector('#product10Price');
        myItem10price.innerHTML = `
        <p>${data[9].acf.price}€<p>`;

        if (data[9].acf.discount) {
            myItem10Discount = document.querySelector('#product10Discount');
            myItem10Discount.innerHTML = `
            <p>${data[9].acf.discount}€<p>`;

            myItem10price.innerHTML = `
            <p><s>${data[9].acf.price}€</s><p>`;
        }



        myItem11img = document.querySelector('#product11Img');
        myItem11img.innerHTML = `
        <img src="${data[10].acf.image.url}" alt="${data[10].acf.image.alt}" class="card-img-top">`;
       
        myItem11title = document.querySelector('#product11Title');
        myItem11title.innerHTML = `
        <h5>${data[10].acf.name}<h5>`;

        myItem11price = document.querySelector('#product11Price');
        myItem11price.innerHTML = `
        <p>${data[10].acf.price}€<p>`;

        if (data[10].acf.discount) {
            myItem11Discount = document.querySelector('#product11Discount');
            myItem11Discount.innerHTML = `
            <p>${data[10].acf.discount}€<p>`;

            myItem11price.innerHTML = `
            <p><s>${data[10].acf.price}€</s><p>`;
        }


        
        myItem12img = document.querySelector('#product12Img');
        myItem12img.innerHTML = `
        <img src="${data[11].acf.image.url}" alt="${data[11].acf.image.alt}" class="card-img-top">`;
       
        myItem12title = document.querySelector('#product12Title');
        myItem12title.innerHTML = `
        <h5>${data[11].acf.name}<h5>`;

        myItem12price = document.querySelector('#product12Price');
        myItem12price.innerHTML = `
        <p>${data[11].acf.price}€<p>`;

        if (data[11].acf.discount) {
            myItem12Discount = document.querySelector('#product12Discount');
            myItem12Discount.innerHTML = `
            <p>${data[11].acf.discount}€<p>`;

            myItem12price.innerHTML = `
            <p><s>${data[11].acf.price}€</s><p>`;
        }
    })

})


// Product list page
.then(() => {
    fetch(`${baseUrl}?status=private&categories=4&per_page=25`, {
        method:'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {

        console.log(data);
        myItem1img = document.querySelector('#snowboard1Img');
        myItem1img.innerHTML = `
        <img src="${data[19].acf.image.url}" alt="${data[19].acf.image.alt}" class="card-img-top">`;

        myItem1title = document.querySelector('#snowboard1Title');
        myItem1title.innerHTML = `
        <h5>${data[19].acf.name}<h5>`;

        myItem1price = document.querySelector('#snowboard1Price');
        myItem1price.innerHTML = `
        <p>${data[19].acf.price}€<p>`;

        if (data[19].acf.discount) {
            myItem1Discount = document.querySelector('#snowboard1Discount');
            myItem1Discount.innerHTML = `
            <p>${data[19].acf.discount}€<p>`;

            myItem1price.innerHTML = `
            <p><s>${data[19].acf.price}€</s><p>`;
        }



        myItem2img = document.querySelector('#snowboard2Img');
        myItem2img.innerHTML = `
        <img src="${data[18].acf.image.url}" alt="${data[18].acf.image.alt}" class="card-img-top">`;
       
        myItem2title = document.querySelector('#snowboard2Title');
        myItem2title.innerHTML = `
        <h5>${data[18].acf.name}<h5>`;

        myItem2price = document.querySelector('#snowboard2Price');
        myItem2price.innerHTML = `
        <p>${data[18].acf.price}€<p>`;

        if (data[18].acf.discount) {
            myItem2Discount = document.querySelector('#snowboard2Discount');
            myItem2Discount.innerHTML = `
            <p>${data[18].acf.discount}€<p>`;

            myItem2price.innerHTML = `
            <p><s>${data[18].acf.price}€</s><p>`;
        }



        myItem3img = document.querySelector('#snowboard3Img');
        myItem3img.innerHTML = `
        <img src="${data[17].acf.image.url}" alt="${data[17].acf.image.alt}" class="card-img-top">`;
       
        myItem3title = document.querySelector('#snowboard3Title');
        myItem3title.innerHTML = `
        <h5>${data[17].acf.name}<h5>`;

        myItem3price = document.querySelector('#snowboard3Price');
        myItem3price.innerHTML = `
        <p>${data[17].acf.price}€<p>`;

        if (data[17].acf.discount) {
            myItem3Discount = document.querySelector('#snowboard3Discount');
            myItem3Discount.innerHTML = `
            <p>${data[17].acf.discount}€<p>`;

            myItem3price.innerHTML = `
            <p><s>${data[17].acf.price}€</s><p>`;
        }


        myItem4img = document.querySelector('#snowboard4Img');
        myItem4img.innerHTML = `
        <img src="${data[16].acf.image.url}" alt="${data[16].acf.image.alt}" class="card-img-top">`;
       
        myItem4title = document.querySelector('#snowboard4Title');
        myItem4title.innerHTML = `
        <h5>${data[16].acf.name}<h5>`;

        myItem4price = document.querySelector('#snowboard4Price');
        myItem4price.innerHTML = `
        <p>${data[16].acf.price}€<p>`;

        if (data[16].acf.discount) {
            myItem4Discount = document.querySelector('#snowboard4Discount');
            myItem4Discount.innerHTML = `
            <p>${data[16].acf.discount}€<p>`

            myItem4price.innerHTML = `
            <p><s>${data[16].acf.price}€</s><p>`;
        }



        myItem5img = document.querySelector('#snowboard5Img');
        myItem5img.innerHTML = `
        <img src="${data[15].acf.image.url}" alt="${data[15].acf.image.alt}" class="card-img-top">`;
       
        myItem5title = document.querySelector('#snowboard5Title');
        myItem5title.innerHTML = `
        <h5>${data[15].acf.name}<h5>`;

        myItem5price = document.querySelector('#snowboard5Price');
        myItem5price.innerHTML = `
        <p>${data[15].acf.price}€<p>`

        if (data[15].acf.discount) {
            myItem5Discount = document.querySelector('#snowboard5Discount');
            myItem5Discount.innerHTML = `
            <p>${data[15].acf.discount}€<p>`;

            myItem5price.innerHTML = `
            <p><s>${data[15].acf.price}€</s><p>`;
        }



        myItem6img = document.querySelector('#snowboard6Img');
        myItem6img.innerHTML = `
        <img src="${data[14].acf.image.url}" alt="${data[14].acf.image.alt}" class="card-img-top">`;
       
        myItem6title = document.querySelector('#snowboard6Title')
        myItem6title.innerHTML = `
        <h5>${data[14].acf.name}<h5>`;

        myItem6price = document.querySelector('#snowboard6Price');
        myItem6price.innerHTML = `
        <p>${data[14].acf.price}€<p>`;

        if (data[14].acf.discount) {
            myItem6Discount = document.querySelector('#snowboard6Discount');
            myItem6Discount.innerHTML = `
            <p>${data[14].acf.discount}€<p>`;

            myItem6price.innerHTML = `
            <p><s>${data[14].acf.price}€</s><p>`;
        }



        myItem7img = document.querySelector('#snowboard7Img');
        myItem7img.innerHTML = `
        <img src="${data[13].acf.image.url}" alt="${data[13].acf.image.alt}" class="card-img-top">`;
       
        myItem7title = document.querySelector('#snowboard7Title');
        myItem7title.innerHTML = `
        <h5>${data[13].acf.name}<h5>`;

        myItem7price = document.querySelector('#snowboard7Price');
        myItem7price.innerHTML = `
        <p>${data[13].acf.price}€<p>`;

        if (data[13].acf.discount) {
            myItem7Discount = document.querySelector('#snowboard7Discount');
            myItem7Discount.innerHTML = `
            <p>${data[13].acf.discount}€<p>`;

            myItem7price.innerHTML = `
            <p><s>${data[13].acf.price}€</s><p>`;
        }

        myItem8img = document.querySelector('#snowboard8Img');
        myItem8img.innerHTML = `
        <img src="${data[12].acf.image.url}" alt="${data[12].acf.image.alt}" class="card-img-top">`;
       
        myItem8title = document.querySelector('#snowboard8Title');
        myItem8title.innerHTML = `
        <h5>${data[12].acf.name}<h5>`;

        myItem8price = document.querySelector('#snowboard8Price');
        myItem8price.innerHTML = `
        <p>${data[12].acf.price}€<p>`;

        if (data[12].acf.discount) {
            myItem8Discount = document.querySelector('#snowboard8Discount');
            myItem8Discount.innerHTML = `
            <p>${data[12].acf.discount}€<p>`;

            myItem8price.innerHTML = `
            <p><s>${data[12].acf.price}€</s><p>`;
        }

        

        myItem9img = document.querySelector('#snowboard9Img');
        myItem9img.innerHTML = `
        <img src="${data[10].acf.image.url}" alt="${data[10].acf.image.alt}" class="card-img-top">`;
       
        myItem9title = document.querySelector('#snowboard9Title');
        myItem9title.innerHTML = `
        <h5>${data[10].acf.name}<h5>`;

        myItem9price = document.querySelector('#snowboard9Price');
        myItem9price.innerHTML = `
        <p>${data[10].acf.price}€<p>`;

        if (data[10].acf.discount) {
            myItem9Discount = document.querySelector('#snowboard9Discount');
            myItem9Discount.innerHTML = `
            <p>${data[10].acf.discount}€<p>`;

            myItem9price.innerHTML = `
            <p><s>${data[10].acf.price}€</s><p>`;
        }
    });
})


// Product page data
    .then(() => {
            fetch(`${baseUrl}/44`, {
                method:'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {

            // Breadcrumbs 
                productName = document.querySelector('#breadcrumb-item-name');
                productName.innerHTML = `${data.acf.name}`;
        
            // Product side image 1
                if (!data.acf.image_copy.url) {
                    productSideImg = document.querySelector('#side-img-1');
                } else {
                    productSideImg = document.querySelector('#side-img-1');
                    productSideImg.innerHTML = `
                    <img src="${data.acf.image_copy.url}" alt="${data.acf.image_copy.alt}" class="side-img">`;
                }
    
            // Product side image 2
                if (data.acf.image_copy.url && data.acf.image_copy2.url) {
                    productSideImg = document.querySelector('#side-img-2');
                    productSideImg.innerHTML = `
                    <img src="${data.acf.image_copy2.url}" alt="${data.acf.image_copy2.alt}" class="side-img">`;
                } 
    
                if (data.acf.
                    image_copy.url && !data.acf.image_copy2.url) {
                    productSideImg = document.querySelector('#side-img-2');
                }
    
                if (!data.acf.image_copy.url && !data.acf.image_copy2.url) {
                    $("#side-img-2").css("display", "none");
                }
    
            // Product side image 3
                if (data.acf.image_copy.url && data.acf.image_copy2.url && data.acf.image_copy3.url) {
                    productSideImg = document.querySelector('#side-img-3');
                    productSideImg.innerHTML = `
                    <img src="${data.acf.image_copy3.url}" alt="${data.acf.image_copy3.alt}" class="side-img">`;
                } 
    
                if (data.acf.image_copy.url && data.acf.image_copy2.url && !data.acf.image_copy3.url ) {
                    productSideImg = document.querySelector('#side-img-3');
                }
    
                if (data.acf.image_copy.url && !data.acf.image_copy2.url && !data.acf.image_copy3.url ) {
                    $("#side-img-3").css("display", "none");
                }
    
                if (!data.acf.image_copy.url && !data.acf.image_copy2.url && !data.acf.image_copy3.url ) {
                    $("#side-img-3").css("display", "none");
                }
                
            // Product main image
                productMainImg = document.querySelector('#main-img');
                productMainImg.innerHTML = `
                <img src="${data.acf.image.url}" alt="${data.acf.image.alt}" class="main-img">`;
    
            // Product name
                productName = document.querySelector('#product-name');
                productName.innerHTML = `${data.acf.name}`;
    
            // Product brand
                productBrand = document.querySelector('#product-brand');
                productBrand.innerHTML = `${data.acf.brand}`;
    
            // Product price & discount
            productPrice = document.querySelector('#product-price');
            productPrice.innerHTML = `${data.acf.price}€`;
    
                if (data.acf.discount) {
                    productDiscount = document.querySelector('#product-discount');
                    productDiscount.innerHTML = `${data.acf.discount}€`;
        
                    productPrice.innerHTML = `<s>${data.acf.price}€</ s>`;
                }
    
            // Product size
                let sizes = `${data.acf.Size}`;
                let size = sizes.split(',');

                if (!sizes) {
                    $("#select-size").css("display", "none");
                }
    
                if (!size[0]) {
                    $("#size1").css("display", "none");
                } else {
                    productSelectS = document.querySelector('#size1');
                    productSelectS.innerHTML = size[0];
                }

                if (!size[1]) {
                    $("#size2").css("display", "none");
                } else {
                    productSelectS = document.querySelector('#size2');
                    productSelectS.innerHTML = size[1];
                }

                if (!size[2]) {
                    $("#size3").css("display", "none");
                } else {
                    productSelectS = document.querySelector('#size3');
                    productSelectS.innerHTML = size[2];
                }
    
                if (!size[3]) {
                    $("#size4").css("display", "none");
                } else {
                    productSelectS = document.querySelector('#size4');
                    productSelectS.innerHTML = size[3];
                }

                if (!size[4]) {
                    $("#size5").css("display", "none");
                } else {
                    productSelectS = document.querySelector('#size5');
                    productSelectS.innerHTML = size[4];
                }

                if (!size[5]) {
                    $("#size6").css("display", "none");
                } else {
                    productSelectS = document.querySelector('#size6');
                    productSelectS.innerHTML = size[5];
                }
                 
                
    
            // Product avalibility
                productInStock = document.querySelector('#in-stock');
                productInStock.innerHTML = `${data.acf.in_stock}`;
    
            // Product description
                productDescr = document.querySelector('#nav-description');
                productDescr.innerHTML = `${data.acf.description}`;
    
            // Product specifications
                productSpects = document.querySelector('#nav-specifications');
                productSpects.innerHTML = `${data.acf.specification}`;
    
            // Product parameters
                productParms = document.querySelector('#nav-parameters');
                productParms.innerHTML = `${data.acf.parameters}`;
        })
})






// $('#products').load('productsCard.html');



// Sources
// https://stackoverflow.com/questions/6242976/javascript-hide-show-element
// https://www.freecodecamp.org/news/javascript-split-how-to-split-a-string-into-an-array-in-js/