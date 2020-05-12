document.addEventListener("DOMContentLoaded", function() {

//                  VARIABLES
let categoryText = "";
let roleClass = document.querySelectorAll(".role");
let lvlClass = document.querySelectorAll(".level");
let toolsClass = document.querySelectorAll(".tools");
let langClass = document.querySelectorAll(".languages");
let closeClass = document.querySelectorAll(".close-icn");
let ftrCategoryId = "";
let ftrContainer = document.getElementById("categories");
let ftrCategories = document.getElementById("filter");
/***************************************************/


//                  FUNCTIONS
function buttonClick1() {
    categoryText = this.innerText;
    let classAttr = this.getAttribute("class");
    let categoryId = document.querySelector(`#${classAttr}Filter`);
    categoryId.style.backgroundColor = "hsl(180, 31%, 95%)";

    ftrCategoryId = document.querySelector(`#${classAttr}`);
    ftrCategoryId.style.display = "flex";
    ftrCategoryId.style.backgroundColor = "hsl(180, 31%, 95%)";
    ftrCategoryId.children[1].style.backgroundColor = "hsl(180, 29%, 50%)";
    ftrCategoryId.children[1].src = "./images/icon-remove.svg";
    ftrContainer.style.display = "flex";
    ftrCategories.style.display = "flex";
    categoryId.innerText = categoryText;
    

    categoryText = categoryText.toLowerCase();
    let usersClass = document.querySelectorAll(".users");
    usersClass.forEach(user => {
        let dataRole = user.getAttribute("data-role"),
            dataLvl = user.getAttribute("data-level")
        if(dataRole == categoryText || dataLvl == categoryText) {
            user.style.display = "flex";
        }
        else if (dataRole != categoryText || dataLvl != categoryText) {
            user.style.display = "none";
        }
    });
}

function buttonClick2() {
    categoryText = this.innerText;
    let classAttr = this.parentNode.getAttribute("class");
    let categoryId = document.querySelector(`#${classAttr}Filter`);
    categoryId.style.backgroundColor = "hsl(180, 31%, 95%)";

    ftrCategoryId = document.querySelector(`#${classAttr}`);
    ftrCategoryId.style.display = "flex";
    ftrCategoryId.style.backgroundColor = "hsl(180, 31%, 95%)";
    ftrCategoryId.children[1].style.backgroundColor = "hsl(180, 29%, 50%)";
    ftrCategoryId.children[1].src = "./images/icon-remove.svg";
    ftrContainer.style.display = "flex";
    ftrCategories.style.display = "flex";
    categoryId.innerHTML = categoryText;


    categoryText = categoryText.toLowerCase();
    let usersClass = document.querySelectorAll(".users");
    usersClass.forEach(user => {
        
        let dataLang = user.getAttribute("data-languages"),
            dataTools = user.getAttribute("data-tools");
            
        if(dataLang.includes(categoryText) || dataTools.includes(categoryText)) {
            user.style.display = "flex";
        }
        else {
            user.style.display = "none";
        }
    });
}

function clearFilter() {
    let ftrDivArray = document.querySelectorAll("#filter .category");
    ftrCategories.style.display = "none";
    ftrDivArray.forEach(function(ftrDivProps) {
        ftrDivProps.style.backgroundColor = "rgb(251, 249, 249)";
        ftrDivProps.style.display = "none";

        let ftrDivPropsChdn = ftrDivProps.children;
        ftrDivPropsChdn[0].innerText = "";
        ftrDivPropsChdn[1].src = "";
        for (let eachChdn of ftrDivPropsChdn) {
            eachChdn.style.backgroundColor = "rgb(251, 249, 249)";
        }
    });


    let usersClass = document.querySelectorAll(".users");
    usersClass.forEach(user => {
        user.style.display = "flex";
    });
}
/********************************************************/


//********************* ITERATIONS  *****************************
roleClass.forEach(classArray => { classArray.addEventListener("click", buttonClick1); });
lvlClass.forEach(classArray => { classArray.addEventListener("click", buttonClick1); });

closeClass.forEach(closeArray => {
    closeArray.addEventListener("click", function() {
        let closeParentEl = this.parentNode;
        closeParentEl.style.display = "none";
    });
});

langClass.forEach(classArray => {
    let classArrayProps = classArray.children;
    for(let eachProp of classArrayProps) {
        eachProp.addEventListener("click", buttonClick2);
    }
});
toolsClass.forEach((classArray) => {
    let classArrayProps = classArray.children;
    for(let eachProp of classArrayProps) {
        eachProp.addEventListener("click", buttonClick2);
    }
});



// ******************** CLEAR ***************************
let clear = document.querySelector("#filter p");
clear.addEventListener("click", clearFilter);

/************************************************************/

});


