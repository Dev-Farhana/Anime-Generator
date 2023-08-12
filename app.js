const btnEle = document.getElementById('btn');
const animeConatinerEle = document.querySelector('.anime-container');
const animeImgEle = document.querySelector('.anime-img');
const animeNameEle = document.querySelector('.anime-name');

btnEle.addEventListener('click', async function(){
    try{
        btnEle.disabled = true;
        btnEle.innerText= "Loading..";
        animeNameEle.innerText= "Updating.";
        animeImgEle.src = "wait let me find";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        btnEle.disabled= false;
        btnEle.innerText = "Get Anime";
        animeConatinerEle.style.display = "block";
        animeImgEle.src = data.url;
        animeNameEle.innerText= data.artist;
    } catch (error){
        console.log(error);
        btnEle.disabled=false;
        btnEle.innerText = "Get Anime";
        animeNameEle.innerText = " An error, try again";
    }
});