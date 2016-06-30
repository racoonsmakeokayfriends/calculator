

window.onload = function() {
    var num_list = document.querySelector("ul#num-pad");
    var op_list = document.querySelector("ul#operations");

    var console_el = document.getElementById('console');
    var submit_btn = document.getElementById('submit');

    var CURR_EVAL = [];


    // this assumes CURR_EVAL follows the pattern
    //      [34, 'add', 44, 'sub', 55..]
    // where it starts and ends w/numbers with alternating num/action/num/action/num...
    function enter_eval() {
        console.log(CURR_EVAL);
        answer = CURR_EVAL[0]
        for (var i=1; i<=CURR_EVAL.length; i+=2) {
            if (CURR_EVAL[i] == 'add') {
                answer += CURR_EVAL[i+1];
            }

            if (CURR_EVAL[i] == 'sub') {
                answer -= CURR_EVAL[i+1];
            }

            if (CURR_EVAL[i] == 'mul') {
                answer = answer * CURR_EVAL[i+1];
            }

            if (CURR_EVAL[i] == 'div') {
                answer = answer / CURR_EVAL[i+1];
            }
        }

        CURR_EVAL = [];
        return answer;
    }
    
    // user presses a numpad button
    // TODO: make sure only numbers show up, and no '<li class=....</li>'
    num_list.addEventListener("click", function (e) {
        console_el.setAttribute('value', console_el.getAttribute('value') + e.target.innerHTML);
    });

    // user hits submit
    // TODO: console now has the value of enter_eval()
    submit_btn.addEventListener('click', function(e) {

        CURR_EVAL.push(parseInt(console_el.getAttribute('value')));
        alert(enter_eval());
    });

    // user presses an operation (+-*/) button
    // TODO: make sure only operations show up'
    op_list.addEventListener("click", function (e) {
        var action = e.target.getAttribute('id');
        CURR_EVAL.push(parseInt(console_el.getAttribute('value')));
        CURR_EVAL.push(action);

        console_el.setAttribute('value','');
        console.log(CURR_EVAL);
    });


};


