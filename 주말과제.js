function setListenerToCard(){
    const cardAreaArr= document.querySelectorAll(".card-area");
    for (const cardArea of cardAreaArr){
        cardArea.addEventListener("click" , function(evt){

            const temp =evt.currentTarget;
            temp.classList.toggle("flip")
            setTimeout(() => {
                 temp.classList.toggle("flip")
            }, 2000);
        })
    }

}
let arr = [];

const main = document.querySelector("main");


function generatedCardList(){
    
    main.innerHTML = "";

   
   arr = ["늑대인간","늑대인간","예언자","강도","말썽쟁이","마을주민","마을주민"];

    const result = shuffleArr(arr);

   renderCards(arr);

    
    savedHTML = main.innerHTML;
    main.innerHTML += `늑대인간 <br> 예언자 확인후 변경진행 <br>`;

    
}

function handleSwap() {
  const idx1Input = document.querySelector('input[name="idx1"]');
  const idx2Input = document.querySelector('input[name="idx2"]');

  const idx1 = Number(idx1Input.value);
  const idx2 = Number(idx2Input.value);

  swapCard(idx1, idx2);

  idx1Input.value = "";
  idx2Input.value = "";
}

function shuffleArr(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  return arr;
}

function handleClick(){
    generatedCardList();
    setListenerToCard();
}


function swapCard(idx1, idx2){
    if (
        idx1 < 0 || idx2 < 0 ||
        idx1 >= arr.length || idx2 >= arr.length
    ) {
        alert("잘못된 번호입니다");
        return;
    }

    [arr[idx1-1], arr[idx2-1]] = [arr[idx2-1], arr[idx1-1]];
    renderCards(arr);

}

function renderCards(arr){

    for (const temt of arr){
        main.innerHTML += `
        <div class="card-area">
            <div class="card">
                <div class="card-back">${temt}</div>
                <div class="card-front">?</div>
            </div>
        </div>`;
        
    }
    main.innerHTML += `완료 <br>`;

    setListenerToCard();
}