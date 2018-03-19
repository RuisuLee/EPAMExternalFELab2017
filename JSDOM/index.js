class Slider {
    constructor(images,id,parentClassName){
        this.sliderId = "slider"+id;
        this.currentImageID = 0;
        this.images = images;
        this.currentImageSrc = images[0];
        this.slider = document.getElementsByClassName(parentClassName)[0].appendChild(this.createSliderContainer(images));
        this.mainContainer().getElementsByClassName(0)[0].classList.add("currentImage");
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
        slider.id = this.sliderId;
        slider.appendChild(this.createMainImgContainer());
        slider.appendChild(this.createCarousel(images));

        return slider;
    }

    mainContainer(){
        let result = document.getElementById(this.sliderId);
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
            let container = this.mainContainer();
            let arr = container.getElementsByClassName(Slider.miniImgs());
            if (this.currentImageID === 0){
                this.currentImageID = arr.length - 1;
            }
            else {
                this.currentImageID--;
            }
            for (let i = 0; i < arr.length; i++){
                arr[i].classList.remove(Slider.currentImage());
            }
            container.getElementsByClassName(this.currentImageID)[0].classList.add(Slider.currentImage());
            container.getElementsByClassName(Slider.mainIMG())[0].removeChild(container.getElementsByClassName(Slider.bigImg())[0]);
            let newImg = document.createElement("img");
            newImg.src = container.getElementsByClassName(this.currentImageID)[0].src;
            newImg.classList.add(Slider.bigImg());
            container.getElementsByClassName(Slider.mainIMG())[0].appendChild(newImg);
        }.bind(this));
        return img;
    }

    createCarouselRightButton(){
        let img = document.createElement("img");
        img.src = "right.svg";
        img.classList.add(Slider.arrow());
        img.addEventListener("click",function () {
            let container = this.mainContainer();
            let arr = container.getElementsByClassName(Slider.miniImgs());
            if (this.currentImageID < arr.length - 1){
                this.currentImageID++;
            }
            else {
                this.currentImageID = 0;
            }
            for (let i = 0; i < arr.length; i++){
                arr[i].classList.remove(Slider.currentImage());
            }
            container.getElementsByClassName(this.currentImageID)[0].classList.add(Slider.currentImage());
            container.getElementsByClassName(Slider.mainIMG())[0].removeChild(container.getElementsByClassName(Slider.bigImg())[0]);
            let newImg = document.createElement("img");
            newImg.src = container.getElementsByClassName(this.currentImageID)[0].src;
            newImg.classList.add(Slider.bigImg());
            container.getElementsByClassName(Slider.mainIMG())[0].appendChild(newImg);
        }.bind(this));
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
        img.classList.add(id);
        img.addEventListener("click",function (){
            let container = this.mainContainer();
            this.currentImageID = event.target.id;
            let arr = container.getElementsByClassName(Slider.miniImgs());
            for (let i = 0; i < arr.length; i++){
                arr[i].classList.remove(Slider.currentImage());
            }
            container.getElementsByClassName(this.currentImageID)[0].classList.add(Slider.currentImage());
            container.getElementsByClassName(Slider.mainIMG())[0].removeChild(container.getElementsByClassName(Slider.bigImg())[0]);
            let newImg = document.createElement("img");
            newImg.src = event.target.src;
            newImg.classList.add(Slider.bigImg());
            container.getElementsByClassName(Slider.mainIMG())[0].appendChild(newImg);
        }.bind(this));
        return img;
    }
}