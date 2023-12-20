/* eslint-disable */
window.GetPagesByCategory = function(currentTitle, currentCategory) {
    return {
        data: [],
        init: function() {
            var al = this; 
            var url = window.location.origin + '/api.php'
            var params = {
                action: "query",
                format: "json",
                generator: "categorymembers",
                gcmtitle: currentCategory,
                prop: 'categories',
                cllimit: '12',
                gcmlimit: '12',  
            };
            url = url + "?origin=*";
            Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
            
            fetch(url)
                .then(function(response){return response.json();})
                .then(function(response) {
                    al.data = Object.values(response.query.pages).filter(function(item) {
                        if (item.title !== currentTitle) {
                            return item
                        }
                    });   
                    var seeAlso = document.getElementById('see-also');
                    if (al.data.length > 0) {
                        seeAlso.innerHTML = al.toOrderList()
                        seeAlso.classList.remove("hidden")
                    } else {
                        seeAlso.parentNode.getElementsByTagName('h2')[0].style.display = "none";
                    }             
                })
                .catch(function(error){console.log(error);});
        },

        toOrderList: function () {
            var str = '<ul>'
            this.data.forEach(function(item){
                str += "<li><a href='"+item.title+"'>"+item.title+"</a></li>"
            })
            str +='</ul>';
            return str;
        }
    }
};