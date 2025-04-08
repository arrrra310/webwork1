document.getElementById('tippercent').addEventListener('change', function() {
    // 檢查用戶是否選擇了自定義選項
    if (this.value === 'custom') {
        document.getElementById('customtip').style.display = 'inline';
    } else {
        document.getElementById('customtip').style.display = 'none';
    }
});

// 讓 Enter 鍵可以跳到下一個輸入框或觸發計算
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
       event.preventDefault(); // 防止表單預設提交行為
        
        let activeElement = document.activeElement;
        console.log(activeElement.id)//檢查所在物件
        if (activeElement.id === 'foodcost') {
            // 如果當前焦點在菜單金額輸入框，則移到小費選擇
            document.getElementById('tippercent').focus();
        } else if (activeElement.id === 'tippercent') {
            // 如果當前焦點在選擇框，檢查是否為 "自定義"
            if (document.getElementById('tippercent').value === 'custom') {
                document.getElementById('customtip').focus();
            } else {
                document.getElementById('btn').click(); // 直接計算
            }
        } else if (activeElement.id === 'customtip') {
            // 如果在自定義輸入框，按 Enter 直接計算
            document.getElementById('btn').click();
        }
    }
});


document.getElementById('btn').addEventListener('click', function() {
    // 獲取用戶輸入的花費
   let foodCost = parseFloat(document.getElementById('foodcost').value);

    // 獲取用戶選擇的小費百分比
    let tipPercent;
    if (document.getElementById('tippercent').value === 'custom') {
        tipPercent = parseFloat(document.getElementById('customtip').value) / 100;
    } else {
        tipPercent = parseFloat(document.getElementById('tippercent').value);
    }

    // 確保小費百分比是有效的數字
    if (isNaN(tipPercent)) {
        alert('請輸入有效的小費百分比');
        return;
    }

    // 計算小費金額
    let tipamount = foodCost * tipPercent;
    let sum = foodCost + tipamount;

    // 顯示小費金額
    document.getElementById('tipamount').textContent = `$${tipamount.toFixed(2)}`;
    document.getElementById('sum').textContent = `$${sum.toFixed(2)}`;
});
