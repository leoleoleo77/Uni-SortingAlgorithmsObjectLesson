// Create default array
const defaultArray = [2, 8, 1, 6, 3, 7, 5, 9];
let $container = displayArray(defaultArray);
let miliseconds = {value: 500};
document.getElementById('arr').value = defaultArray;

function unsort(arr) {
    $container = displayArray(arr);
}

/**
 * @public 
 * @returns {Jquery Object} A container with an array that can be animated
 */
function getArrayValue() {
    return $container;
}

/**
 * @public 
 * @returns {Javascript Object} An object containing the value for the animation miliseconds
 */
function getTimeout() {
    return {value: 500};
}

$(document).ready(() => {

    // Save Settings Button 

    $('#save-settings').click(() => {
        try {
            if ($('#arr').val() != '') {
                let arr = "[" +  $('#arr').val() + "]";
                arr = parse(arr);
                $container = displayArray(arr);
                sorted = false;
            }
            $("#settings-error").text("");
            if ($('#timeout').val() < 0) {
                $("p#success").text("");
                $("#settings-error").text("Timeout cannot be negative");
                return;
            }
            miliseconds.value = $("#timeout").val() !== '' ? 
                $("#timeout").val() : miliseconds.value;
            
            $('p#success').text('Saved!');
        }
        catch (e) {
            $("p#success").text("");
            $('#settings-error').text(e);
        }
    });

});