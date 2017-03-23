
function fetching(url, fnGood, fnBad) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function (e) {

        if (this.readyState === 4 && this.status === 200) {
            var data = this.response;
        } else {
            var err = this.onerror;
        }
    };

    xhr.send();
}


fetching("https://jsonplaceholder.typicode.com/users", function(data) {
    console.log("Sukces");
    console.log(data);
}, function(err) {
    console.log("Wystąpił błąd");
    console.log(err);
});
