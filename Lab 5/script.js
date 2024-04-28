const subbtn = document.getElementById('btn')

subbtn.addEventListener('click', function() {
    var val1 = document.getElementById('Fnumber').value;
    var val2 = document.getElementById('Snumber').value;
    var results = parseInt(val1) + parseInt(val2);

    document.getElementById('result').value = results;
    console.log(results)
})