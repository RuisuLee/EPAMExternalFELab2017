class Slider {
    constructor(images,id,parentClassName){
        this.id = "slider"+id;
        this.images = images;
        this.currentImageSrc = images[0];
        this.slider = document.getElementsByClassName(parentClassName)[0].appendChild(this.createSliderContainer(images));
        document.getElementById(currentImageId).classList.add("currentImage");
    }

    createSliderContainer(images){
        let slider = document.createElement("div");
        slider.className = "slider";
        slider.id = this.id;
        slider.appendChild(this.createMainImgContainer());
        slider.appendChild(this.createCarousel(images));

        return slider;
    }

    createMainImgContainer(){
        let mainIMG = document.createElement("div");
        mainIMG.className = "mainIMG";
        let img = document.createElement("img");
        img.src = this.currentImageSrc;
        img.className = "bigImg";
        mainIMG.appendChild(img);
        return mainIMG;
    }

    createCarousel(images){
        let carousel = document.createElement("div");
        carousel.className = "carousel";
        carousel.appendChild(this.createCarouselLeftButton());
        carousel.appendChild(this.createCarouselImgContainer(images));
        carousel.appendChild(this.createCarouselRightButton());
        return carousel;
    }

    createCarouselLeftButton(){
        let img = document.createElement("img");
        img.src = "left.svg";
        img.className = "arrow";
        img.onclick = function() {
            let arr = document.getElementsByClassName('miniImgs');
            if (currentImageId === 0){
                currentImageId = arr.length - 1;
            }
            else {
                currentImageId--;
            }
            for (let i = 0; i < arr.length; i++){
                arr[i].classList.remove('currentImage');
            }
            document.getElementById(currentImageId).classList.add('currentImage');
            document.getElementsByClassName('mainIMG')[0].removeChild(document.getElementsByClassName('bigImg')[0]);
            let newImg = document.createElement("img");
            newImg.src = document.getElementById(currentImageId).src;
            newImg.className = "bigImg";
            document.getElementsByClassName('mainIMG')[0].appendChild(newImg);
        }
        return img;
    }

    createCarouselRightButton(){
        let img = document.createElement("img");
        img.src = "right.svg";
        img.className = "arrow";
        img.onclick = function() {
            let arr = document.getElementsByClassName('miniImgs');
            if (currentImageId < arr.length - 1){
                currentImageId++;
            }
            else {
                currentImageId = 0;
            }
            for (let i = 0; i < arr.length; i++){
                arr[i].classList.remove('currentImage');
            }
            document.getElementById(currentImageId).classList.add('currentImage');
            document.getElementsByClassName('mainIMG')[0].removeChild(document.getElementsByClassName('bigImg')[0]);
            let newImg = document.createElement("img");
            newImg.src = document.getElementById(currentImageId).src;
            newImg.className = "bigImg";
            document.getElementsByClassName('mainIMG')[0].appendChild(newImg);
        }
        return img;
    }

    createCarouselImgContainer(images){
        let container = document.createElement("div");
        container.className = "container";
        container.id = "container";
        let count = 0;
        for (let img of images){
            container.appendChild(this.createImg(img,count));
            count++;
        }
        return container;
    }

    createImg(url, id){
        let img = document.createElement("img");
        img.src = url;
        img.id = id;
        img.className = "miniImgs";
        img.onclick = function (img) {
            let arr = document.getElementsByClassName('miniImgs');
            for (let i = 0; i < arr.length; i++){
                arr[i].classList.remove('currentImage');
            }
            document.getElementById(img.currentTarget.id).classList.add('currentImage');
            document.getElementsByClassName('mainIMG')[0].removeChild(document.getElementsByClassName('bigImg')[0]);
            let newImg = document.createElement("img");
            newImg.src = img.currentTarget.src;
            newImg.className = "bigImg";
            document.getElementsByClassName('mainIMG')[0].appendChild(newImg);
            currentImageId = img.currentTarget.id;
        }
        return img;
    }
}