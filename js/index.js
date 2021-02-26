window.onload = function () {
    let bar = document.querySelector('.bar');
    let nav = document.querySelector('.nav');
    let myMenu = document.querySelector('#myMenu');
    let fullUp = document.querySelector('.full_up');
    let fullDown = document.querySelector('.full_down');
    let tips = document.querySelector(".tips");
    new fullpage('#fullpage', {
      sectionsColor: ['#0f0','#00f','#ff0','#fff','#0ff','#0f0','#000'],
        verticalCentered:false,
        //    离开时回调
        onLeave (origin, destination, direction){
            if (destination.isFirst){
                bar.style.display = "block";
                nav.style.top = "42px";
                myMenu.style.display = "none";
            }else {
                bar.style.display = "none";
                nav.style.top = "0";
                myMenu.style.display = "block";
            }
            if (destination.isLast){
                tips.style.display = "none";
            }else {
                tips.style.display = "block";
            }
        },
        //前面屏必须从第一屏开始，最后一屏没有要删除，不然刷新会有白屏bug
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fivePage','sixPage'],
        menu: '#myMenu',

    });
    //  监听侧边菜单点击事件
    fullUp.onclick = function () {
        fullpage_api.moveSectionUp();
    };
    fullDown.onclick = function () {
        fullpage_api.moveSectionDown();
    };
    //第四屏鼠标移入移出事件
    fourMouse();

};
function fourMouse() {
    let secFourLi = document.querySelectorAll(".section_four>ul>li");
    let secFourImg = document.querySelectorAll(".section_four>ul>li>img");
    let secFourH3 = document.querySelectorAll(".section_four>ul>li>h3");
    for (let i = 0; i < secFourLi.length; i++){
        let item = secFourLi[i];
        //移入事件
        item.onmouseenter = function () {
            secFourLi[0].style.width ="25%";
            secFourLi[1].style.width ="25%";
            secFourLi[2].style.width ="25%";
            secFourLi[i].style.width ="50%";
            secFourImg[i].style.opacity = "1";
            secFourH3[i].style.opacity = "0";
            if (i === 0){
                secFourImg[0].style.left = "0";
            }else if(i === 2){
                secFourImg[2].style.right = "0";

            }
        };
    //    移出事件
        item.onmouseleave = function () {
            secFourLi[0].style.width = "33%";
            secFourLi[1].style.width = "34%";
            secFourLi[2].style.width = "33%";
            secFourImg[i].style.opacity = "0.6";
            secFourH3[i].style.opacity = "1";
            if(i === 0){
                secFourImg[0].style.left = "-180px";
            }else if(i === 2){
                secFourImg[2].style.right = "-180px";
            }
        }

    }
}
