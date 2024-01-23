const userNameE1=document.querySelector("#username");
const heightE1=document.querySelector("#height");
const weightE1 =document.querySelector("#weight");
const bmiE1=document.querySelector("#bmi");
console.log(userNameE1,heightE1,weightE1,bmiE1);

const commentE1=document.querySelector("#comment");
function clearForm(){
    userNameE1.value="";
    heightE1.value="";
    weightE1.value="";
    bmiE1.innerText="";
    commentE1.innerText="";
}


let Comment="";
commentE1.innerHTML=Comment;

console.log(userNameE1,heightE1,weightE1);
// console.log(getBmi("a",weightE1.value));



function calcBmi(){
    let height=heightE1.value;
    let weight = weightE1.value;
if(height==""||weight==""){
    alert("輸入不能為空!");
    return;
}

    let bmi=getBmi(height,weight);
    let comment;
    if(bmi<18.5){
        comment="體重過輕";
    }
    else if(bmi<24){
        comment="正常範圍";
    }
    else if(bmi<27){
        comment="過重";
    }
    else if(bmi<30){
        comment="輕度肥胖";
    }
    else if(bmi<35){
        comment="中度肥胖";
    }
    else {
        comment="重度肥胖";
    }
    console.log(bmi,comment);
    bmiE1.innerHTML="BMI:"+bmi;
    commentE1.innerHTML=comment;
}

function getBmi(height, weight){
    let bmi=weight/(height/100)**2;
    if (isNaN(bmi)) {
        return "數值錯誤!";
    }
    return bmi.toFixed(2);
}