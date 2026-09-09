const form = document.querySelector("form")

// const height= parseInt(document.querySelector("#height").value)
// we can declare here becuase it will give empty value

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height= parseInt(document.querySelector("#height").value)
    const weight= parseInt(document.querySelector("#weight").value)
    const result= document.querySelector(".results")

    if(height === '' || height< 0 || isNaN(height)){
        result.innerHTML=`please give a valid height ${height}`;
    }
    else if(weight === '' || weight< 0 || isNaN(weight)){
        result.innerHTML=`please give a valid height ${height}`;
    }else{
        const bmi= (weight / ((height * height)/10000)).toFixed(2)
        const resMsg= document.querySelector(".res-msg")
        //show results
        result.innerHTML=`${bmi}`;
        if(bmi<18.6){
            resMsg.innerHTML="Under Weight"
        }else if(bmi>18.6 && bmi<24.9){
            resMsg.innerHTML="Normal wight"
        }else{
            resMsg.innerHTML="Over weight";
        }
    }

})