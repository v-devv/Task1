function findMax() {
    let arr = document.getElementById('max-array').value.split(',').map(Number);
    
    if (arr.length === 0) {
        document.getElementById('max-result').innerText = 'Array is empty';
        return;
    }
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    document.getElementById('max-result').innerText = max;
}
