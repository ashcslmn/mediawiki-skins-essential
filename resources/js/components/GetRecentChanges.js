/* eslint-disable */
window.GetRecentChanges = function() {
    return {
        data: [],
        init: function() {
            var al = this; 
            var url = 'https://pinkpedia.org' + '/api.php'
            var params = {
                rctype: "new",
                action: "query",
                list: "recentchanges",
                rcprop: "title",
                rclimit: "10",
                format: "json"  
            };

            url = url + "?origin=*";
            Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
            console.log(url);

            fetch(url)
                .then(function(response){return response.json();})
                .then(function(response) {
                    al.data = response.query.recentchanges;
                    for (var rc in al.data) {
                        console.log(this.data[rc].title);
                    }
                })
                .catch(function(error){console.log(error);});

        },
    }
};