const drawPyramid = (height) => {
    for(let i = 0; i < height; i++){
        let spaceBefore = '';
        let stars = '';

        for(let j = 0; j < 2*i+1; j++){
            stars += "*";
        }

        for(let k = 0; k < height - i - 1; k++){
            spaceBefore += " ";
        }
        console.log(spaceBefore + stars);
    }
};

const desiredHeight = Number(prompt("Задайте висоту пірамідки"));
drawPyramid(desiredHeight);