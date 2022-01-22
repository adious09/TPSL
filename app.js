if (window.innerWidth < 1000){
    document.body.innerHTML = "<center><h1>Open In Desktop</h1><center>"
}

let btn = document.getElementById('cal-btn')

btn.addEventListener('click', ()=>{
    var ep = document.getElementById('ep').value
    var tp = document.getElementById('tp').value
    var sl = document.getElementById('sl').value

    var tpp = parseFloat(ep)* (parseFloat(tp)/100)
    var tp_res = parseFloat(ep) + parseFloat(tpp)

    document.getElementById('tp_res').innerText = tp_res.toFixed(3)
    
    var slp = parseFloat(ep)* (parseFloat(sl)/100)
    var sl_res = parseFloat(ep) - parseFloat(slp)
    
    document.getElementById('sl_res').innerText = sl_res.toFixed(3)
})
