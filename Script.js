document.getElementById('unbanForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const min = parseInt(document.getElementById('rangeMin').value);
    const max = parseInt(document.getElementById('rangeMax').value);
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    
    const today = new Date();
    const unbanDate = new Date(today);
    unbanDate.setDate(today.getDate() + randomValue);
    
    document.getElementById('result').innerText = `${username}, your unban date is: ${unbanDate.toDateString()}`;
});
