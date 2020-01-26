// 1
let allElementsWithSampleClass = document.querySelectorAll('.sample_class')

function getTagsOfElements(elements) {
    let tab = [];

    for (let i = 0; i < elements.length; i++) {
        tab.push(elements[i].tagName);
    }
    return tab;
}
console.log(allElementsWithSampleClass);
console.log(getTagsOfElements(allElementsWithSampleClass));

// 2
let elementWithIDsampleID = document.getElementById('sample_id');
console.log(elementWithIDsampleID);

function getClassesOfElement(element) {
    return element.className.split(' ');
}

console.log(getClassesOfElement(elementWithIDsampleID)); 

// 3
let allLisWithinSampleClass2 = document.querySelectorAll('.sample_class_2 li');
function getInnerTextsOfElements(elements) {
    let tab = [];
    for (let i = 0; i < elements.length; i++) {
        tab.push(elements[i].innerHTML);
    }
    return tab;
}
console.log(getInnerTextsOfElements(allLisWithinSampleClass2));

// 4
var allTheLinks = document.querySelectorAll('a');
function getAddressesOfElements(elements) {
    let tab = [];
    for (let i = 0; i < elements.length; i++) {
        tab.push(elements[i].href);
    }
    return tab;
}
console.log(getAddressesOfElements(allTheLinks));

// 5
const children = document.querySelector('.sample_class_3').children;
console.log(getTagsOfElements(children));
