var clickCount = 0;
var image = document.getElementById('image');

image.addEventListener('click', counter);

function counter() {
    clickCount++;
    console.log(clickCount);
    
    if (clickCount === 13) {
        window.location.href = 'https://www.youtube.com/shorts/_QPzkxVcpG4';
    };
}