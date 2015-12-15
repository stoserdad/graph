/**
 * Created by bender on 10.12.15.
 */
$(function () {
    var mdate = new Date();
    mdate = mdate.getFullYear() + '-' +('0' + (mdate.getMonth()+1)).slice(-2) + '-' +('0' + mdate.getDate()).slice(-2);
    $('#dt').val(mdate);
    $('#df').val(mdate);
    $('#go').click(function(e){
        var dt = $('#dt').val();
        var df = $('#df').val();
        //console.log(dt, df);
        e.preventDefault();
        var month = {
            0:'Jan', 1:'Feb', 2:'Mar', 3:'Apr', 4:'May', 5:'June', 6:'July', 7:'Aug', 8:'Sept', 9:'Oct', 10:'Nov', 11:'Dec'
        };
        $.ajax({
            url: '/data',
            type: 'GET',
            success: function(response){
                var crucia=[], frodo=[], garau=[], greenscale=[], istanbul=[], sevastopol=[],
                    shanghai=[], silverstone=[], singapore=[], sofia=[], sorrento=[], stockholm=[], sydney=[],
                    dts='', y='', m='', d='';
                $.each(response.graph, function(i, item){
                    var srv={};
                    $.each(item.counts, function(i, item){
                        srv[item._id.server] = item.count ;
                    });
                    var a = new Date(item._id*1000);
                    if (dt === df) {
                        if (a.getMonth() == (dt.slice(-5, -3) - 1) && a.getDate() == dt.slice(-2)) {
                            y = a.getFullYear();
                            m = a.getMonth();
                            d = a.getDate();
                            dts = a.getFullYear() + '-' + month[a.getMonth()] + '-' + ('0' + a.getDate()).slice(-2);
                            crucia.push(srv.crucia);
                            frodo.push(srv.frodo);
                            garau.push(srv.garau);
                            greenscale.push(srv.greenscale);
                            istanbul.push(srv.istanbul);
                            sevastopol.push(srv.sevastopol);
                            shanghai.push(srv.shanghai);
                            silverstone.push(srv.silverstone);
                            singapore.push(srv.singapore);
                            sofia.push(srv.sofia);
                            sorrento.push(srv.sorrento);
                            stockholm.push(srv.stockholm);
                            sydney.push(srv.sydney);
                        }
                    } else {
                        if (a.getDate() >= dt.slice(-2) && a.getDate() <= df.slice(-2)){
                            y = a.getFullYear();
                            m = (dt.slice(-5, -3) - 1);
                            d = dt.slice(-2);
                            dts = dt + ' - ' + df;
                            crucia.push(srv.crucia);
                            frodo.push(srv.frodo);
                            garau.push(srv.garau);
                            greenscale.push(srv.greenscale);
                            istanbul.push(srv.istanbul);
                            sevastopol.push(srv.sevastopol);
                            shanghai.push(srv.shanghai);
                            silverstone.push(srv.silverstone);
                            singapore.push(srv.singapore);
                            sofia.push(srv.sofia);
                            sorrento.push(srv.sorrento);
                            stockholm.push(srv.stockholm);
                            sydney.push(srv.sydney);
                        }
                    }
                });
                $('#container').highcharts({
                    chart:{
                        zoomType: 'x'
                    },
                    title: {
                        text: 'Day ' + dts +' graph',
                        x: -20 //center
                    },
                    subtitle: {
                        text: 'Source: levin.omnicomm.ru',
                        x: -20
                    },
                    xAxis: {
                        type: 'datetime'
                    },
                    yAxis: {
                        title: {
                            text: 'Vehicles'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    tooltip: {
                        valueSuffix: ' Vehicles'
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0
                    },

                     plotOptions: {
                         spline: {
                             lineWidth: 1,
                             states: {
                                 hover: {
                                     lineWidth: 2
                                 }
                             }
                         },
                         series: {
                             marker: {
                                 radius: 3
                             }
                         }
                     },
                    series: [{
                        name: 'crucia',
                        data: crucia,
                        pointStart: Date.UTC(y, m, d),
                        pointInterval: 3600*1000/3,
                        zoneAxis: 'x',
                        selected: true

                    },{
                        name: 'frodo',
                        data: frodo,
                        pointStart: Date.UTC(y, m, d),
                        pointInterval: 3600*1000/3,
                        zoneAxis: 'x',
                        visible: false
                    }, {
                        name: 'garau',
                        data: garau,
                        pointStart: Date.UTC(y, m, d),
                        pointInterval: 3600*1000/3,
                        zoneAxis: 'x',
                        visible: false
                    },{
                        name: 'greenscale',
                        data: greenscale,
                        pointStart: Date.UTC(y, m, d),
                        pointInterval: 3600*1000/3,
                        zoneAxis: 'x',
                        visible: false
                    },{
                        name: 'istanbul',
                        data: istanbul,
                        pointStart: Date.UTC(y, m, d),
                        pointInterval: 3600*1000/3,
                        zoneAxis: 'x',
                        visible: false
                    },{
                        name: 'sevastopol',
                        data: sevastopol,
                        pointStart: Date.UTC(y, m, d),
                        pointInterval: 3600*1000/3,
                        zoneAxis: 'x',
                        visible: false
                    },{
                        name: 'shanghai',
                        data: shanghai,
                        pointStart: Date.UTC(y, m, d),
                        pointInterval: 3600*1000/3,
                        zoneAxis: 'x',
                        visible: false
                    },{
                        name: 'silverstone',
                        data: silverstone,
                        pointStart: Date.UTC(y, m, d),
                        pointInterval: 3600*1000/3,
                        zoneAxis: 'x',
                        visible: false
                    },{
                        name: 'singapore',
                        data: singapore,
                        pointStart: Date.UTC(y, m, d),
                        pointInterval: 3600*1000/3,
                        zoneAxis: 'x',
                        visible: false
                    },{
                        name: 'sofia',
                        data: sofia,
                        pointStart: Date.UTC(y, m, d),
                        pointInterval: 3600*1000/3,
                        zoneAxis: 'x',
                        visible: false
                    },{
                        name: 'sorrento',
                        data: sorrento,
                        pointStart: Date.UTC(y, m, d),
                        pointInterval: 3600*1000/3,
                        zoneAxis: 'x',
                        visible: false
                    },{
                        name: 'stockholm',
                        data: stockholm,
                        pointStart: Date.UTC(y, m, d),
                        pointInterval: 3600*1000/3,
                        zoneAxis: 'x',
                        visible: false
                    },{
                        name: 'sydney',
                        data: sydney,
                        pointStart: Date.UTC(y, m, d),
                        pointInterval: 3600*1000/3,
                        zoneAxis: 'x',
                        visible: false
                    }]
                });
            }
        });
    });
    $('#go').click();
});