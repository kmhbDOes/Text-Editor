
document.addEventListener('DOMContentLoaded', function () {
    const btnItalic = document.getElementById('btn-italic');
    const btnbold = document.getElementById('btn-bold');
    const textArea = document.getElementById('text-area');
    const btncolor = document.getElementById('btn-color');

    btnItalic.addEventListener('click', function () {
        // textArea.style.fontStyle = "italic";
        // console.log(textArea.value);
        if (textArea.style.fontStyle === "italic") {
            textArea.style.fontStyle = "normal";
        } else {
            textArea.style.fontStyle = "italic";
        }
    });

    btnbold.addEventListener('click', function () {
        // textArea.style.fontWeight = "900";
        // console.log(textArea.value);
        if (textArea.style.fontWeight === "bold") {
            textArea.style.fontWeight = "normal";
        } else {
            textArea.style.fontWeight = "bold";
        }

    });


    btncolor.addEventListener('click', function () {
        textArea.style.color = "red";
        console.log(textArea.value);

    });
});











