
// イベント用関数の定義
function seriesMouseOver(e) {
    console.log("series.mouseOver");
}
function seriesMouseOut(e) {
    console.log("series.mouseOut");
}
function pointMouseOver(e) {
    console.log("series.point.mouseOver");
    console.log("x: " + e.target.x + ",y: " + e.target.y);
}
function pointMouseOut(e) {
    console.log("series.point.mouseOut");
}

$(function () {

    // データの定義
    var data_single_1 = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0];
    var data_single_2 = [10, 5, null, 3, 4, 5, 6, 8];
    var data_single_3 = [null, null, null, 1, 2, 3, 4, 5, 6, null, 7, 8, 9];

    // series.point.events.mouseOverにて各ポイントにマウスが乗った際のイベントが検知される。
    // グラフに表示中かつ選択中のポイントと、他コントロールを同期したい場合は、
    // series.point.events.mouseOverのイベントを使うこと。
    $("#StockChart_spline").highcharts('StockChart', {
        title: {
            text: 'highstock test'
        },
        series: [
            {
                name: 'data_single_1',
                data: data_single_1,
                events: {
                    mouseOver: seriesMouseOver,
                    mouseOut: seriesMouseOut
                },
                point: {
                    events: {
                        mouseOver: pointMouseOver,
                        mouseOut: pointMouseOut
                    }
                }
            },
            {
                name: 'data_single_2',
                data: data_single_2,
                events: {
                    mouseOver: seriesMouseOver,
                    mouseOut: seriesMouseOut
                },
                point: {
                    events: {
                        mouseOver: pointMouseOver,
                        mouseOut: pointMouseOut
                    }
                }
            },
            {
                name: 'data_single_3',
                data: data_single_3,
                events: {
                    mouseOver: seriesMouseOver,
                    mouseOut: seriesMouseOut
                },
                point: {
                    events: {
                        mouseOver: pointMouseOver,
                        mouseOut: pointMouseOut
                    }
                }
            }
        ],
        // tooltipを同じウィンドウ内に表示させるための設定値
        tooltip: {
            shared: true,
            split: false
        }
    });
});


