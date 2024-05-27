let price  = document.querySelector('#price');
let total  = document.querySelector('#total');
function recountTotal() {
    let costs = table.querySelectorAll('.cost');
    
    if (costs) {
        let sum = 0;
        
        for (let cost of costs) {
            sum += +cost.textContent;
        }
        
        total.textContent = sum;
    }
}
// в конце надо добавить в html это 
// <div id="result">
//    общий итог: <span id="total">0</span>
// </div>