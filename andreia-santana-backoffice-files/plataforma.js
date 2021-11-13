window.onload = function () {
    var input1 = document.getElementById('expo_title');
    var input2 = document.getElementById('year');
    var input3 = document.getElementById('highlight');
    
    document.getElementById('download').onclick = function (code) {
        var expo_title = "expo_title: '" + input1.value + "',\n";
        var year = "year: '" + input2.value + "',\n";
        var pieces = create_parameter_2('piece', piecesCount);
        var description = "description: '" + output.value + "',\n";
        var images = create_parameter('images', image_count);
        var highlight = "highlight: '" + input3.value + "'\n";

        var pastehere = '// ░▒▓█ PASTE BELLOW HERE █▓▒░' + "\n";
        this.href = 'data:text/plain;charset=utf-11,' + encodeURIComponent(",{\n" + expo_title + year + pieces + description + images + highlight + "}" + '\n' + '\n' + pastehere);
    };
};




var piecesCount = -1;

let add_pieces = document.getElementById('add_piece');
add_pieces.addEventListener('click', function () {
    add_two_items('piece', piecesCount);
    piecesCount++;
});

var remove_pieces = document.getElementById('remove_piece');
remove_pieces.addEventListener('click', function () {
    remove_two_items(this, piecesCount);
    piecesCount--;
});


var image_count = -1;
var add_image = document.getElementById('add_image');
add_image.addEventListener('click', function () {
    add_item('image', image_count);
    image_count++;
});
var remove_image = document.getElementById('remove_image');
remove_image.addEventListener('click', function () {
    remove_item(this, image_count);
    image_count--;
});


function add_item(a, b) {
    b++
    var f = document.getElementById(a);
    var new_a_p = document.createElement('p');
    new_a_p.setAttribute('id', a + '# ' + b + 'p')
    new_a_p.appendChild(document.createTextNode(a + '# ' + b));

    var new_a = document.createElement('input');
    new_a.setAttribute('id', a + b);

    f.appendChild(new_a_p);
    f.appendChild(new_a);
}

function add_two_items(a, b) {

    b++
    var f = document.getElementById(a);
    var new_a_p = document.createElement('p');
    new_a_p.setAttribute('id', a + '# ' + b + 'p')
    new_a_p.appendChild(document.createTextNode(a + '# ' + b));

    var new_a = document.createElement('input');
    new_a.setAttribute('id', a + b);

    var secondInput = document.createElement('input');
    secondInput.setAttribute('id', a + b + "Second");

    f.appendChild(new_a_p);
    f.appendChild(new_a);
    f.appendChild(secondInput);

}

function remove_item(evt, b) {
    var i = evt.id;
    var k = i.slice(7);
    var last_tag_p = document.getElementById(k + '# ' + b + 'p');
    var last_tag = document.getElementById(k + b);
    last_tag_p.remove();
    last_tag.remove();
}

function remove_two_items(evt, b) {
    var i = evt.id;
    var k = i.slice(7);
    var last_tag_p = document.getElementById(k + '# ' + b + 'p');
    var last_tag = document.getElementById(k + b);
    var last_tag_second = document.getElementById(k + b + "Second");
    last_tag_p.remove();
    last_tag.remove();
    last_tag_second.remove();
}

function create_parameter(a, b) {
 
    var y = a + ": [";
    for (i = 0; i <= b; i++) {
        var input_a = document.getElementById(a + i);
        if (i == b) {
            y = y + "'" + input_a.value + "'"
        } else {
            y = y + "'" + input_a.value + "', "
        }
    }
    y = y + "],\n";
    return y
}
function create_parameter_2(name, count) {
    let totalNumberOfElements = document.getElementById("piece").children;
    let numberInput = 0;
    for (let j = 0; j < totalNumberOfElements.length; j++) {

        if (totalNumberOfElements[j].nodeName === "INPUT") {
            numberInput++;
        }
    }
    numberInput /= 2;
    numberInput -= 1;



    var y = name + ": [";
    for (i = 0; i <= count; i++) {
        var input_a = document.getElementById(name + i);
        y += "{title: "
        if (i == count) {
            y = y + "'" + input_a.value + "'"
        } else {
            y = y + "'" + input_a.value + "' "
        }
        y += ", "

        var input_a = document.getElementById(name + i + "Second");
        y += "description: "
        if (i == count) {
            y = y + "'" + input_a.value + "'"
        } else {
            y = y + "'" + input_a.value + "' "
        }
        y += "}";

        if (i !== count) {
            y += ","
        }
    }

    y = y + "],\n";
    
    return y
}

