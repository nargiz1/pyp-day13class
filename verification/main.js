let nums = document.querySelectorAll("input");

nums[0].focus()
document.addEventListener("paste", function(){
    console.log(window.getSelection().toString());
    if(window.getSelection().toString().length == 6){
        for(let i = 0; i< nums.length; i++){
            nums[i].value = window.getSelection().toString().value[i]
        }
    }
})
nums.forEach(num=> {
    num.addEventListener("input", function(){
            if(num.value.length >1){
                this.value = this.value[this.value.length -1]
            }
            if(num.nextElementSibling && num.value != ''){
                num.nextElementSibling.focus()
            }else if(!num.nextElementSibling && num.value != ''){
                num.blur()
            }
        })
})