class Slider {
    constructor(images,id,parentClassName){
        // var mainContainer = document.getElementById(this.id);
        this.id = "slider"+id;
        // this.mainContainer = document.getElementById(this.id);
        this.images = images;
        this.currentImageSrc = images[0];
        this.slider = document.getElementsByClassName(parentClassName)[0].appendChild(this.createSliderContainer(images));
        document.getElementById(0).classList.add("currentImage");
    }

    static slider() {
        return 'slider';
    }

    static mainIMG() {
        return 'mainIMG';
    }

    static bigImg() {
        return 'bigImg';
    }

    static carousel() {
        return 'carousel';
    }

    static arrow() {
        return 'arrow';
    }

    static miniImgs() {
        return 'miniImgs';
    }

    static currentImage(){
        return 'currentImage';
    }

    createSliderContainer(images){
        let slider = document.createElement("div");
        slider.classList.add(Slider.slider());
        slider.id = this.id;
        slider.appendChild(this.createMainImgContainer());
        slider.appendChild(this.createCarousel(images));

        return slider;
    }

    mainContainer(){
        let result = document.getElementById(this.id);
        return result;
    }

    createMainImgContainer(){
        let mainIMG = document.createElement("div");
        mainIMG.classList.add(Slider.mainIMG());
        let img = document.createElement("img");
        img.src = this.currentImageSrc;
        img.classList.add(Slider.bigImg());
        mainIMG.appendChild(img);
        return mainIMG;
    }

    createCarousel(images){
        let carousel = document.createElement("div");
        carousel.classList.add(Slider.carousel());
        carousel.appendChild(this.createCarouselLeftButton());
        carousel.appendChild(this.createCarouselImgContainer(images));
        carousel.appendChild(this.createCarouselRightButton());
        return carousel;
    }

    createCarouselLeftButton(){
        let img = document.createElement("img");
        img.src = "left.svg";
        img.classList.add(Slider.arrow());
        img.addEventListener("click", function () {
            let arr = mainContainer.getElementsByClassName(Slider.miniImgs());
            if (currentImageId === 0){
                currentImageId = arr.length - 1;
            }
            else {
                currentImageId--;
            }
            for (let i = 0; i < arr.length; i++){
                arr[i].classList.remove(Slider.currentImage());
            }
            Slider.mainContainer().getElementById(currentImageId).classList.add(Slider.currentImage());
            Slider.mainContainer().getElementsByClassName(Slider.mainIMG())[0].removeChild(Slider.mainContainer().getElementsByClassName(Slider.bigImg())[0]);
            let newImg = document.createElement("img");
            newImg.src = Slider.mainContainer().getElementById(currentImageId).src;
            newImg.classList.add(Slider.bigImg());
            Slider.mainContainer().getElementsByClassName(Slider.mainIMG())[0].appendChild(newImg);
        });
        return img;
    }

    createCarouselRightButton(){
        let img = document.createElement("img");
        img.src = "right.svg";
        img.classList.add(Slider.arrow());
        img.addEventListener("click",function () {
            let arr = Slider.mainContainer().getElementsByClassName(Slider.miniImgs());
            if (currentImageId < arr.length - 1){
                currentImageId++;
            }
            else {
                currentImageId = 0;
            }
            for (let i = 0; i < arr.length; i++){
                arr[i].classList.remove(Slider.currentImage());
            }
            Slider.mainContainer().getElementById(currentImageId).classList.add(Slider.currentImage());
            Slider.mainContainer().getElementsByClassName(Slider.mainIMG())[0].removeChild(Slider.mainContainer().getElementsByClassName(Slider.bigImg())[0]);
            let newImg = document.createElement("img");
            newImg.src = this.mainContainer.getElementById(currentImageId).src;
            newImg.classList.add(Slider.bigImg());
            Slider.mainContainer().getElementsByClassName(Slider.mainIMG())[0].appendChild(newImg);
        });
        return img;
    }

    createCarouselImgContainer(images){
        let container = document.createElement("div");
        container.classList.add("container");
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
        img.classList.add(Slider.miniImgs());
        img.addEventListener("click",function (){
            let arr = this.mainContainer().getElementsByClassName(Slider.miniImgs());
            for (let i = 0; i < arr.length; i++){
                arr[i].classList.remove(Slider.currentImage());
            }
            this.mainContainer().getElementById(this.id).classList.add(Slider.currentImage());
            this.mainContainer().getElementsByClassName(Slider.mainIMG())[0].removeChild(this.mainContainer().getElementsByClassName(Slider.bigImg())[0]);
            let newImg = document.createElement("img");
            newImg.src = this.src;
            newImg.classList.add(Slider.bigImg());
            this.mainContainer().getElementsByClassName(Slider.mainIMG())[0].appendChild(newImg);
            currentImageId = this.id;
        });
        return img;
    }
}