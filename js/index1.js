function getRandomColor() {
    var rgb = 'rgb(' + Math.floor(Math.random() * 155) + ','
        + Math.floor(Math.random() * 255) + ','
        + Math.floor(Math.random() * 255) + ')';
    return rgb;
}
function changeColor() {
    var lis = document.getElementsByClassName('tks');
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = getRandomColor();
    }
}
changeColor();
var taskAdd = document.getElementById('add');
taskAdd.onclick = function() {
    var taskUl = document.getElementById("ids");
    var taskLi = document.createElement('li');
    var taskSpan = document.createElement('span');
    var taskp = document.createElement('p');
    taskLi.innerHTML = "Watch Movie<i></i><br>";
    taskSpan.innerHTML = "Entertaiment";
    taskp.innerHTML = "Hire Baraa Bilal as CEO for Apple tomorrow at 9PM in the " +
        "at lazi'Cafe in Amman Jordan";
    taskLi.setAttribute("class",'tks');
    taskLi.appendChild(taskSpan);
    taskLi.appendChild(taskp);
    taskUl.appendChild(taskLi);
    taskLi.style.backgroundColor = getRandomColor();
}
var taskDelete = document.getElementById('delete');
taskDelete.onclick = function() {
    var taskLi = document.getElementsByClassName('tks');
    var taskUl = document.getElementsByClassName('tasks_content');
    var taskLiLast = taskLi[taskLi.length-1];
    taskUl[0].removeChild(taskLiLast);
}
var tasksListLi = document.getElementsByClassName('tasks_li');
var tasksContentLi = document.getElementsByClassName('tks');
for (var i = 0; i < tasksListLi.length; i++ ) {
    tasksListLi[i].onclick = function() {
        return function () {
            for (var j = 0; j < tasksContentLi.length; j++ ) {
                var temp = tasksContentLi[j].getElementsByTagName('span')[0].innerHTML;
                var text1 = this.innerHTML;
                if(temp != text1) {
                    tasksContentLi[j].style.display = "none";
                }
            }

        }
    }();
    tasksListLi[i].onmouseout = function() {
        return function () {
            for (var j = 0; j < tasksContentLi.length; j++ ) {
                if (tasksContentLi[j].style.display === "none") {
                    tasksContentLi[j].style.display = "block";
                }
            }
        }
    }();
}
var tabs = document.getElementById('tab');
var tabsLi = tabs.getElementsByTagName('li');
var items = document.getElementsByClassName('item');
for (var i = 0; i < tabsLi.length; i++) {
    tabsLi[i].onclick = function () {
        return function () {
            for (var j = 0; j < tabsLi.length; j++ ) {
                tabsLi[j].setAttribute('class',' ');
            }
            this.setAttribute('class','current');
            for (var r = 0; r < items.length; r++) {
                items[r].setAttribute('class',"item");
            }
            var itemsShow = document.getElementById("#" + this.title);
            console.log(this.title);
            itemsShow.setAttribute('class','item show');
        }
    }();
}
