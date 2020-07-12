const knownEle = [1, null, 4, 5, null, 8, null, null, null];

const col = document.querySelectorAll(".column");

const getNumber = (e) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('style', 'width: 80%;');
    e.target.appendChild(input);
    e.target.addEventListener('click', () => {
        console.log(e.target.innerHTML);
        e.target.innerHTML
    })
    
    

}


col.forEach((ele, index) => {
  ele.innerHTML = knownEle[index];
});

col.forEach((ele) => {
  if (ele.innerHTML === null || ele.innerHTML === "") {
    ele.addEventListener("click", getNumber);
  }
});

