/**
 * Created by bender on 10.12.15.
 */
$(function () {
    $.ajax({
        url: '/data',
        type: 'GET',
        success: function(response){
            $.each(response.graph, function(i, item){
                var srv={};
                $.each(item.counts, function(i, item){
                    srv[item._id.server] = item.count ;
                });
                $('#container').append(item._id + ' ' + srv + '<br>');
                console.log(srv);
            });
        }
    });

    //$('#container').highcharts({
    //    title: {
    //        text: 'Monthly Average Temperature',
    //        x: -20 //center
    //    },
    //    subtitle: {
    //        text: 'Source: WorldClimate.com',
    //        x: -20
    //    },
    //    xAxis: {
    //        categories: ['00:00:33', '00:20:31', '00:40:31', '01:00:32', '01:20:30', '01:40:32', '02:00:32', '02:20:31', '02:40:31', '03:00:30', '03:20:30', '03:40:32', '04:00:32', '04:20:32', '04:40:31', '05:00:32', '05:20:32', '05:40:32', '06:00:32', '06:20:32', '06:40:34', '07:00:34', '07:20:33', '07:40:38', '08:00:34', '08:20:34', '08:40:33', '09:00:33', '09:20:44', '09:40:31', '10:00:31', '10:20:32', '10:40:32', '11:00:33', '11:20:50', '11:40:32', '12:00:34', '12:20:31', '12:40:32', '13:00:32', '13:20:32', '13:40:31', '14:00:33', '14:20:39', '14:41:00', '15:00:34', '15:20:32', '15:40:32', '16:00:34', '16:20:32', '16:40:32', '17:00:32', '17:20:32', '17:40:33', '18:00:34', '18:20:32', '18:40:32', '19:00:33', '19:20:31', '19:40:32', '20:00:35', '20:20:32', '20:40:32', '21:00:33', '21:20:34', '21:40:32', '22:00:32', '22:20:32', '22:40:31', '23:00:31', '23:20:32', '23:40:30']
    //
    //    },
    //    yAxis: {
    //        title: {
    //            text: 'Parrot\'s'
    //        },
    //        plotLines: [{
    //            value: 0,
    //            width: 1,
    //            color: '#808080'
    //        }]
    //    },
    //    tooltip: {
    //        valueSuffix: ' Parrot\'s'
    //    },
    //    legend: {
    //        layout: 'vertical',
    //        align: 'right',
    //        verticalAlign: 'middle',
    //        borderWidth: 0
    //    },
    //    series: [{
    //        name: 'sevastopol',
    //        data: [839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 839, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846, 846]
    //
    //    }, {
    //        name: 'frodo',
    //        data: [1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1748, 1748, 1748, 1748, 1748, 1748, 1748, 1748, 1748, 1748, 1748, 1750, 1754, 1754, 1754, 1754, 1754, 1754, 1754, 1754, 1754, 1754, 1754, 1754, 1754, 1754, 1754, 1754, 1754, 1754, 1754, 1754]
    //    },{
    //        name: 'shanghai',
    //        data: [6414, 6414, 6414, 6414, 6414, 6414, 6414, 6414, 6414, 6414, 6414, 6414, 6414, 6414, 6414, 6414, 6414, 6414, 6414, 6414, 6416, 6416, 6416, 6416, 6416, 6416, 6417, 6425, 6427, 6427, 6431, 6435, 6443, 6451, 6458, 6466, 6468, 6468, 6469, 6472, 6473, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477, 6477]
    //
    //    }]
    //});
});