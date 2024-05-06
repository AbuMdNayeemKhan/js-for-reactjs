let addData = () => {
    let keyId = document.getElementById('key');
    let keyData = keyId.value;
    let valueId = document.getElementById('Value');
    let valueData = valueId.value;
    localStorage.setItem(keyData, valueData);
    keyId.value = ' ';
    keyData.value = ' ';

    alert('hello world');
}