let check = document.querySelector('.check')
let text = document.querySelector('.text')
let number = document.querySelector('.number')
let img = document.querySelector('.img-container')

number.addEventListener('keyup', function() {
    // let mtnNumberPattern = /^(\+234?[703 | 816])?\d{3}\d{3}\d{4}$/;
     let mtnNumberPattern = /^(\+234706|\+234816|\+234703|\+234803|\+234806|\+234810|\+234813|\+234814|\+234903|\+234906)?\d{3}\d{4}$/;
     let airtelNumberPattern = /^(\+234802|\+234808|\+234812|\+234701|\+234708|\+234902)?\d{3}\d{4}$/;
     let gloNumberPattern = /^(\+234805|\+234807|\+234705|\+234815|\+234811|\+234905)?\d{3}\d{4}$/;
     let etisalatNumberPattern = /^(\+234809|\+234818|\+234817|\+234909)?\d{3}\d{4}$/;

    if(!number.value || ![14].includes(number.value.length)){
        img.style.display = 'none'
    }
    if(mtnNumberPattern.test(number.value)) {
        img.src = 'https://www.mtn.com/wp-content/themes/mtn-refresh/public/img/mtn-logo-footer.svg';
        img.style.display = 'block'
    }
    if(airtelNumberPattern.test(number.value)) {
        img.src = 'https://www.airtel.com.ng/assets/images/airtel-logo.png';
        img.style.display = 'block'
    }
    if(gloNumberPattern.test(number.value)) {
        img.src = 'https://www.gloworld.com/logo.png';
        img.style.display = 'block'
    }
     if(etisalatNumberPattern.test(number.value)) {
        img.src = 'https://9mobile.com.ng/wp-content/uploads/2020/08/logo3.png';
        img.style.display = 'block'
    }
    
})



