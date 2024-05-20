<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Велосипед и Умный дом</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
<style>
button {
    font-size: 24px;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
}
</style>
</head>
<body>

<button onclick="iconClick('велосипед')"><i class="fas fa-bicycle"></i> Велосипед</button>
<button onclick="iconClick('умный дом')"><i class="fas fa-home"></i> Умный дом</button>

<script>
function iconClick(btnType) {
    if(btnType === 'велосипед') {
        alert('Вы нажали на кнопку велосипеда!');
        // Здесь может быть код для действий с велосипедом
    } else if (btnType === 'умный дом') {
        alert('Вы нажали на кнопку умного дома!');
        // Здесь может быть код для управления умным домом
    }
}
</script>

</body>
</html>
