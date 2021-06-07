function initImages() {
    const images = [...document.querySelectorAll('.slide')];
    for (const [i, image] of images.entries('reference')) {
        image.style.width = 15 + 'vw';
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

function initLooks() {
    const looks = [...document.querySelectorAll('.look')];
    for (const [i, look] of looks.entries()) {
        look.style.width = 25 + "vw";
        look.style.transition = '.3s ease-in-out';
    }
    updateLooksPositions(looks);
    return looks;
}

function updateImagesPositions(images) {
    for (const [i, image] of images.entries()) {
        const translate = -i * 15;
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

function updateLooksPositions(looks) {
    for (const [i, look] of looks.entries()) {
        const translate = i * 25;
        look.style.transform = `translateX(${translate}vw)`;

        if(i > 0) {
            look.style.display = 'none';
        } else {
            look.style.display = 'inline';
        }
    }
}

function onClickNext(images, references, looks) {
    images.push(images.shift());
    references.push(references.shift());
    looks.push(looks.shift())
    updateImagesPositions(images);
    updateReferencesPositions(references);
    updateLooksPositions(looks)
}

function onClickPrev(images, references, looks) {
    images.unshift(images.pop());
    references.unshift(references.pop());
    looks.unshift(looks.pop())
    updateImagesPositions(images);
    updateReferencesPositions(references);
    updateLooksPositions(looks)
}

function main() {
    const images = initImages();
    const references = initReferences();
    const looks = initLooks();
    const nextButton = document.getElementById('chevron-right');
    const prevButton = document.getElementById('chevron-left');
    nextButton.addEventListener('click', () => {
        onClickNext(images, references, looks);
    })
    prevButton.addEventListener('click', () => {
        onClickPrev(images, references, looks);
    })
}

main();