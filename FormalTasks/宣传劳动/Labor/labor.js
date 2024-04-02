new Vue({
    el:"#move",
    data:{
        index:0,
        labor_arr:[
            "../pictures/04.jpg",
            "../pictures/05.jpg",
            "../pictures/06.jpg",
            "../pictures/07.jpg",
        ]
    },
    methods:{
        goleft:function(){
            if(this.index==0){
                this.index=3;
            }else{
                this.index--;
            }
        },
        goright:function(){
            if(this.index==3){
                this.index=0;
            }else{
                this.index++;
            }
        }
    }
})
const parent=document.querySelector(".about");
const child=document.querySelector(".about_lot");
const bullet=document.querySelector(".declare");
const picture=document.querySelector(".pic_1")
parent.addEventListener("click",function(){
    if(child.style.display=="none"){
        child.style.display="flex";
        bullet.style.display="block";
        // picture.style.margin="10px 8px 0 32px";
    }else{
        child.style.display="none";
        bullet.style.display="flex";
        // bullet.style.alignitems="center";
        // picture.style.margin="0 8px 0 32px";
    }
})