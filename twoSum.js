function findTwoSum() {
    let arr = document.getElementById('two-sum-array').value.split(',').map(Number);
    let target = parseInt(document.getElementById('target').value);
    let indices = twoSum(arr, target);
    document.getElementById('two-sum-result').innerText = indices.length > 0 ? indices.join(', ') : 'No solution found';
}

function twoSum(arr, target) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[arr[i]] = i;
    }
    return [];
}