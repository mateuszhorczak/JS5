function getRandomColor() {
    const colors = ["red", "orange", "green", "blue", "cyan", "magenta", "purple", "pink", "brown", "teal"];
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

function handleParagraphClick(event) {
    const paragraphs = document.querySelectorAll('p')
    paragraphs.forEach((p) => {
        p.classList.remove('green-border', 'orange-border', 'blue-border', 'highlight')
        p.style.backgroundColor = 'transparent'
    })
    const clickedParagraph = event.currentTarget
    const index = Array.from(paragraphs).indexOf(clickedParagraph) + 1

    clickedParagraph.classList.add('green-border')
    const nextParagraph = paragraphs[index]
    if (nextParagraph) {
        nextParagraph.classList.add('blue-border')
    }

    const prevParagraph = paragraphs[index - 2]
    if (prevParagraph) {
        prevParagraph.classList.add('orange-border')
    }

    if (index % 2 === 0) {
        clickedParagraph.style.backgroundColor = '#eee'
    } else {
        clickedParagraph.backgroundColor = '#666'
    }

    event.stopPropagation()
}

function handleHeaderClick(event) {
    const clickedHeader = event.currentTarget;
    const paragraph = clickedHeader.nextElementSibling;

    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
}

function addNewParagraph() {
    const newParagraphText = document.getElementById('newParagraph').value;
    if (newParagraphText) {
        const newParagraph = document.createElement('p');
        const newHeader = document.createElement('h2')
        const section = document.querySelector('section')
        newParagraph.textContent = newParagraphText;
        newHeader.textContent = 'Kolejny paragraf'
        section.appendChild(newHeader)
        section.appendChild(newParagraph)
        initParagraphBehaviors();
    }
}

function initParagraphBehaviors() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
        const paragraphNumber = index + 1;
        const paragraphLength = p.textContent.length;
        p.setAttribute('title', `Paragraf ${paragraphNumber} z ${paragraphs.length}, Długość: ${paragraphLength} znaków`);
        p.style.color = getRandomColor();
        p.addEventListener('click', handleParagraphClick);
    });

    const headers = document.querySelectorAll('h2');
    headers.forEach(header => header.addEventListener('click', handleHeaderClick));
}

document.addEventListener('DOMContentLoaded', function () {
    const paragraphs = document.querySelectorAll('p')
    const headers = document.querySelectorAll('h2')
    paragraphs.forEach((p, index) => {
        const paragraphNumber = index + 1
        const paragraphLength = p.textContent.length
        p.setAttribute('title', `Paragraf ${paragraphNumber} z ${paragraphs.length}, Dlugość: ${paragraphLength} znaków`)
        p.style.color = getRandomColor()
    })

    paragraphs.forEach((p) => p.addEventListener('click', handleParagraphClick))
    headers.forEach((h) => h.addEventListener('click', handleHeaderClick))
})
