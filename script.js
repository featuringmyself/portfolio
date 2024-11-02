function show_me() {
    let img = document.getElementById('facereveal');
    
    if (img.src.endsWith('rudra1.jpg')) {
        img.src = 'images/rudra3.jpg';
        document.getElementById('circular-text').style.display = 'none'; 
    } else {
        img.src = 'images/rudra1.jpg';
        console.log(img.src);
    }
    
}
