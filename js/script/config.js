define(function () {
    require.config({
            baseUrl: '/requireEtc/js/',
            urlArgs: "v=" +  (new Date()).getTime(), // 该配置项用于处理缓存问题
            paths: {
                'jquery': 'lib/jquery.min'
            },
            shim:{

            }
        });
});