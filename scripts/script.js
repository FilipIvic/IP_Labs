//document - globalni objekt za pristup stranici
//querySelectorAll -> vraća niz elemenata koji zadovoljavaju neki selektor
let thumbnails = document.querySelectorAll("#slider .thumbnail");
for(let i = 0; i < thumbnails.length; i++) {
    let thumbnail = thumbnails[i];
    //addEventListener registrira funkciju za izvršavanje
    //kad se neki event (npr click, mousemove) dogodi nad objektom
    thumbnail.addEventListener("click", handleThumbnailClick);
}

//e -> objekt kojeg browser proslijedi funkciji
//nosi dodatne info o događaju (di se kliklo, na koji element, da li su ctrl, alt...)
function handleThumbnailClick(e){
    let clickedThumbnail = e.currentTarget;
    selectThumbnail(clickedThumbnail);
}

function selectThumbnail(thumbnail) {
    //1. Dohvati trenutno selektirani thumbnail i makni mu plavu crtu (class selected)
    //querySelector -> null ili element kojeg je naša
    let currentlySelectedThumbnail = document.querySelector("#slider .thumbnail.selected");
    currentlySelectedThumbnail.classList.remove("selected");
    
    //2. Dodaj plavu crtu (class selected) na kliknuti thumbnail
    thumbnail.classList.add("selected");
    
    //3. Naći veliku sliku kliknutog thumbnaila
    let clickedThumbnailLargeImagePath = thumbnail.getAttribute("data-large-img-url");
    
    //4. Postavitit veliku sliku za glavnu sliku slidera
    let sliderMainImage = document.querySelector("#slider-main-picture-container img");
    sliderMainImage.src = clickedThumbnailLargeImagePath;
}
//--------------------------------------------------------------------------------------------------------------------
let sliderRightArrow = document.querySelector("#slider .slider-arrow-right");
sliderRightArrow.addEventListener("click", handleRightArrowClick);

function handleRightArrowClick(){
    let thumbnails = document.querySelectorAll("#slider .thumbnail");
    let currentIndex = getSelectedThumbnailIndex();
    let nextIndex = currentIndex + 1;

    if(nextIndex >= thumbnails.length) {
        nextIndex = 0;
    }

    selectThumbnail(thumbnails[nextIndex]);
}

function getSelectedThumbnailIndex(){
    let thumbnails = document.querySelectorAll("#slider .thumbnail");
    let selectedThumbnail = document.querySelector("#slider .thumbnail.selected");

    for(let i = 0; i < thumbnails.length; i++) {
        if(selectedThumbnail == thumbnails[i]) {
            return i;
        }
    }

    return -1;
}
//---------------------------------------------------------------------------------------------------------------------
let sliderLeftArrow = document.querySelector("#slider .slider-arrow-left");
sliderLeftArrow.addEventListener("click", handleLeftArrowClick);

function handleLeftArrowClick(){
    let thumbnails = document.querySelectorAll("#slider .thumbnail");
    let currentIndex = getSelectedThumbnailIndex();
    let nextIndex = currentIndex - 1;

    if(nextIndex == 0) {
        nextIndex = thumbnails.length - 1;
    }
    selectThumbnail(thumbnails[nextIndex]);
}

//---------------------------------------------------------------------------------------------------------------------
//Brisanje

let deleteButtons = document.querySelectorAll("#cards-container .delete-button");
for(let i = 0; i < deleteButtons.length; i++){
    let deleteButton = deleteButtons[i];
    deleteButton.addEventListener("click", handleDeleteCardClick);
}

function handleDeleteCardClick(e){
    let clickedCard = e.currentTarget.parentElement;
    let cardTitle = clickedCard.querySelector("h3");

    if(confirm("Izbrisati karticu: " + cardTitle.textContent + "?")){
        clickedCard.remove();
    }
}

//---------------------------------------------------------------------------------------------------------------------

let hearts = document.querySelectorAll("#cards-container .heart-icon");
for(let i = 0; i < hearts.length; i++){
    let heart = hearts[i];
    heart.addEventListener("click", handleHeartClick);
}

function handleHeartClick(e){
    let clickedHeart = e.currentTarget;
    if(clickedHeart.classList.contains("fa-heart-o")){
        clickedHeart.classList.remove("fa-heart-o");
        clickedHeart.classList.add("fa-heart");
    }else{
        clickedHeart.classList.add("fa-heart-o");
        clickedHeart.classList.remove("fa-heart");
    }  
}