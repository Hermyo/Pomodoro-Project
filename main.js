$(document).ready(function () {
    let buzzer = $("#buzzer")[0];
    let count = parseInt($("#num").html());
    let breakTime = parseInt($("#breakNum").html());

    $("#reset").hide();
    $("#start").click(function () {
        let counter = setInterval(timer, 1000);

        function timer() {
            //Hide variables
            $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").hide();
            $("#timeType").html("Session Time: ");
            count -= 1;
            if (count === 0) {
                buzzer.play();
                clearInterval(counter);
                let startBreak = setInterval(breakTimer, 1000);
                $("#num").hide();
            }
            $("#num").html(count);

            function breakTimer() {
                $("#timeType").html("Break Time: ");
                $("#breakNum").show();
                breakTime -= 1;
                if (breakTime === 0) {
                    clearInterval(startBreak);
                }
                $("#breakNum").html(breakTime);
            }
        }

    });

    $("#minus5Clock").click(function () {
        if (count > 5) {
            count -= 5;
            $("#num").html(count);
        }
    });

    $("#add5Clock").click(function () {
        count += 5;
        $("#num").html(count);
    });

    $("#minus5Break").click(function () {
        if (breakTime > 5) {
            breakTime -= 5;
            $("#breakNum").html(breakTime);
        }
    });

    $("#add5Break").click(function () {
        breakTime += 5;
        $("#breakNum").html(breakTime);
    });

});