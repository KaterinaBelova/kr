module.exports = function ($http) {

    var info = { basket:[] };

    $http.get("/userInfo").then(function(ret)
    {
        info.user = ret.data;
    });

    info.AddToBasket = function (p)
    {
        $http.post("/addProduct", {id: p.id}).then(function (ret) {
            if (ret.data.success)
            {
                info.basket.push(p);
            }
        });
    };

    return info;
}