function getBmi()
{
    let cm=Number(document.getElementById('cm').value);
    let kg=Number(document.getElementById('kg').value);
    let heightinmet= parseFloat(cm/100);
    let Bmi=kg/(heightinmet*heightinmet);
    Bmi=Bmi.toFixed(1)
    if(cm==0|| kg==0)
        {
            alert("please enter some values")
        }
        else{
            document.getElementById('result').innerHTML=`Your BMI is ${Bmi} 😊`
        }
}