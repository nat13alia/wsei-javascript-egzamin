document.addEventListener('DOMContentLoaded', function() {
    
    const btn1 = document.querySelector('#button-1');
    const btn2 = document.querySelector('#button-2');
    const btn3 = document.querySelector('#button-3');

    const list = document.querySelector('#shopping-list');

    btn1.addEventListener('click', function() {
        const li = document.createElement('li');
        li.innerHTML = 'chleb';
        list.appendChild(li);
    });

    btn2.addEventListener('click', function() {
        list.removeChild(list.children[list.children.length-1]);
    });

    btn3.addEventListener('click', function() { 
        list.appendChild(list.children[1].cloneNode(true));
    });

});
