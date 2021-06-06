function initImages() {
    const images = [...document.querySelectorAll('.slide')];
    for (const [i, image] of images.entries('reference')) {
        image.style.width = 13 + 'vw';
        image.style.transition = '.3s ease-in-out';
    }
    updateImagesPositions(images);
    return images;
}

function initReferences() {
    const references = [...document.querySelectorAll('.reference')];
    for (const [i, reference] of references.entries()) {
        reference.style.height = 50 + "vh";
        reference.style.transition = '.3s ease-in-out';
    }
    updateReferencesPositions(references);
    return references;
}

function updateImagesPositions(images) {
    for (const [i, image] of images.entries()) {
        const translate = -i * 13;
        const scale = Math.max(1 - Math.sqrt(i / 5), 0) * 100;
        image.style.opacity = Math.max(1 - i / 4, 0);
        image.style.transform = `translateX(${translate}vw) scale(${scale}%)`;
        console.log(image);

        if(i > 4) {
            image.style.display = 'none';
        } else {
            image.style.display = 'unset';
        }
    }
}

function updateReferencesPositions(references) {
    for (const [i, reference] of references.entries()) {
        const translate = i * 50;
        reference.style.transform = `translateX(${translate}vw)`;

        if(i > 0) {
            reference.style.display = 'none';
        } else {
            reference.style.display = 'unset';
        }
    }
}

function onClickNext(images, references) {
    images.push(images.shift());
    references.push(references.shift());
    updateImagesPositions(images);
    updateReferencesPositions(references);
}

function onClickPrev(images, references) {
    images.unshift(images.pop());
    references.unshift(references.pop());
    updateImagesPositions(images);
    updateReferencesPositions(references);
}

function main() {
    const images = initImages();
    const references = initReferences();
    const nextButton = document.getElementById('chevron-right');
    const prevButton = document.getElementById('chevron-left');
    nextButton.addEventListener('click', () => {
        onClickNext(images, references);
    })
    prevButton.addEventListener('click', () => {
        onClickPrev(images, references);
    })
}

main();