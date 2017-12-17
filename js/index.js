$(function() {

/*nav 用户登录注册部分
*/   
    $(".user").mouseenter(function () {
        $(".user>#userItems").css("display", "block")
    });
    $(".user").mouseleave(function () {
        $(".user>#userItems").css("display", "none")
    });

/*tab 页面切换
*/ 
   $('#tabs > li').click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var ind = $(this).index();
        $(".item").eq(ind).addClass("show").siblings().removeClass("show");
    });

/*dashboard 添加 todolist 事项
*/
    $('.home>.bottom>.main>#comment>#comment_plan>#plan_list>#list_head>#list_add').click(function() {
        console.log('hello');
        $('.home>.bottom>.main>#comment>#comment_plan>#plan_list>.todolist-add').css('display','block');
    });
    $(".home>.bottom>.main>#comment>#comment_plan>#plan_list>.todolist-add>#add-list").click(function() {
        var listContent = $('.home>.bottom>.main>#comment>#comment_plan>#plan_list>.todolist-add>input').val();
        if ($(".todolist>li").length >= 6) {
            $(this).click(function() {
                $(".todolist").append("");
            });
        } else {
            $(".todolist").append("<li><b></b>" + listContent + "<i class='list_delete'></i><i></i></li>");
            $('.home>.bottom>.main>#comment>#comment_plan>#plan_list>.todolist-add').css('display','none');
        }
    });
    $('.home>.bottom>.main>#comment>#comment_plan>#plan_list>.todolist-add>#cancel-list').click(function() {
        $('.home>.bottom>.main>#comment>#comment_plan>#plan_list>.todolist-add').css('display','none');
    });
    $(".todolist").on('click','.list_delete',function(){
        $(this).parent('li').remove();
    });

/* task 为task item 随机添加背景颜色
*/
    function getRandomColor() {
        var rgb = 'rgb(' + Math.floor(Math.random() * 155) + ','
                + Math.floor(Math.random() * 155) + ','
                + Math.floor(Math.random() * 155) + ')';
        return rgb;
    }
    var lis = document.getElementsByClassName('tks');
    for ( var i = 0; i < lis.length; i++ ) {
        lis[i].style.backgroundColor = getRandomColor();
    }

/* task 增加、删除 task item
*/
    $('.home>.bottom>.main>#tasks>.tasks_top>#add').click(function() {
        $("#tasks>.tasks_bottom>#task-form").css("display", "block");
    });
    $('.home>.bottom>.main>#tasks>.tasks_bottom>#task-form>fieldset>#task-button>#add-task').click(function() {
        var tasksContent1 = $("#tasks>.tasks_bottom>#task-form input#task-name").val();
        var tasksContent2 = $("input:radio:checked").val();
        var tasksContent3 = $("#tasks>.tasks_bottom>#task-form textarea#task-content").val();
        $("#ids").append("<li class='tks'>" + tasksContent1 + "<i></i><br><span>"+tasksContent2+"</span> " +
                "<p>"+tasksContent3+"</p></li>");
        $("#ids").children('li:last-child').attr("class",'tks').css("backgroundColor",getRandomColor());
        $("#tasks>.tasks_bottom>#task-form").css("display", "none");
        $("#tasks>.tasks_bottom>#task-form input#task-name").val("");
        $("#tasks>.tasks_bottom>#task-form textarea#task-content").val("");

    });
    $('.home>.bottom>.main>#tasks>.tasks_bottom>#task-form>fieldset>#task-button>#cancel-add').click(function() {
        $("#tasks>.tasks_bottom>#task-form").css("display", "none");
    });
    $('.home>.bottom>.main>#tasks>.tasks_bottom>#task-form>i').click(function() {
        $("#tasks>.tasks_bottom>#task-form").css("display", "none");
    });

    $('#delete').click(function() {
        $('.tks:last-child').remove();
    });

/* task 点击不同项目进行分类查看
*/
    $('.tasks_li').click(function () {
        var text1 = $(this).html();
        console.log(text1);
        var flag = true;
        if (text1 == 'All') {
            $('.tks').css('display', 'block');
            flag = false;
            console.log(flag);
        }
        if (flag) {
            for (var i = 0; i < $('.tks').length; i++) {
                var text2 = $('.tks').eq(i).children('span').html();
                if (text1 == text2) {
                    $('.tks').eq(i).css('display', 'block');
                } else {
                    $('.tks').eq(i).css('display', 'none');
                }
            }
        }

    });
});
