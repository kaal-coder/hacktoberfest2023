const characterAmountRange=document.getElementById('characterAmountRange');
const characterAmountNumber=document.getElementById('characterAmountNumber');
const includeUppercaseElement=document.getElementById('includeuppercase');
const includeNumberElement=document.getElementById('includenumbers');
const includeSymbolElement=document.getElementById('includesymbols');

const form =document.getElementById('passwordgenerator');

const passworddisplay=document.getElementById('passwordDisplay');

characterAmountNumber.addEventListener('input',syncCharacterAmount);
characterAmountRange.addEventListener('input',syncCharacterAmount);

const uppercase= arraygenerate(65,90);
const lowercase= arraygenerate(97,122);
const numbers= arraygenerate(48,57);
const symbols= arraygenerate(33,47);


form.addEventListener('submit',e=>{
    e.preventDefault()
    const characteramount=characterAmountNumber.value;
    const includeuppercase=includeUppercaseElement.checked;
    const includenumbers=includeNumberElement.checked;
    const includesymbols=includeSymbolElement.checked;
    const password=generatepassword(characteramount,includeuppercase,includenumbers,includesymbols);
    passworddisplay.innerText=password;
})
function generatepassword(characteramount,includeuppercase,includenumbers,includesymbols){
    console.log("hai");
    let charcodes=lowercase.slice();
    if(includeuppercase) charcodes=charcodes.concat(uppercase);
    if(includenumbers) charcodes=charcodes.concat(numbers);
    if(includesymbols) charcodes=charcodes.concat(symbols);
    const passwordchar=[];
    for(let i=0;i<characteramount;i++)
    {
        const character=charcodes[Math.floor(Math.random()*charcodes.length)];
        passwordchar.push(String.fromCharCode(character));
    }
   return passwordchar.join('');
}

function arraygenerate(low,high)
{
    const array=[];
    for(let i=low;i<=high;i++)
    {
        array.push(i);
    }
    return array;
}
function syncCharacterAmount(e){
    const value=e.target.value;
    characterAmountNumber.value=value;
    characterAmountRange.value=value;
}