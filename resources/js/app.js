/* eslint-disable */
var seeAlso = document.getElementById('see-also');
if (seeAlso) {
    var params = JSON.parse(seeAlso.innerText)
    var l = window.GetPagesByCategory(params.title, params.category)
    l.init();
    // seeAlso.innerHTML = l.toOrderList()
    // console.log('data: ', l.data)
    // console.log('lenght: ', l.data.length)
    // if (l.data.length > 0) {
    //     seeAlso.classList.remove("hidden")
    // } else {
    //     seeAlso.parentNode.getElementsByTagName('h2')[0].style.display = "none";
    // }
}