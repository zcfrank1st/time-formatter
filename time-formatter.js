/**
 * Created by zcfrank1st on 9/25/14.
 */
/**
 *
 * @param option
 * var option = {
 *      count : 1,
 *      isArray : true | false
 * }
 *
 * default： [] from yesterday
 */
function getFormatDayOrDays (option) {
    var defaultOption = {
        count : 1,
        isArray : false
    };
    var innerOption = option || defaultOption;

    function cutDate (dateString) {
        return dateString.slice(0, 10);
    }

    var nowTimes = new Date().getTime() + 8 * 3600 * 1000;

    if (innerOption.isArray === false) {
        var offset = innerOption.count;
        var targetTimes = nowTimes - offset * 24 * 60 * 60 * 1000;
        return cutDate(new Date(targetTimes).toISOString());
    } else {
        var timeArray = [];
        var offsetAggr = innerOption.count;
        for (var i = 1; i <= offsetAggr; i++) {
            var timeTarget = nowTimes - i * 24 * 60 * 60 * 1000;
            timeArray.push(cutDate(new Date(timeTarget).toISOString()));
        }
        return timeArray;
    }
}

console.log(getFormatDayOrDays({
    isArray: false,
    count: 1
}));

console.log(getFormatDayOrDays({
    isArray: true,
    count: 7
}));