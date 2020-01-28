document.addEventListener("DOMContentLoaded", function (event) {

    var chart1 = new cryptowatch.Embed('kraken', 'btceur', {
        timePeriod: '1d',
        presetColorScheme: 'delek'
    });
    chart1.mount('#chart-container-1');

    var chart2 = new cryptowatch.Embed('kraken', 'etheur', {
        timePeriod: '1d',
        presetColorScheme: 'delek'
    });
    chart2.mount('#chart-container-2');

    var chart3 = new cryptowatch.Embed('kraken', 'ltceur', {
        timePeriod: '1d',
        presetColorScheme: 'delek'
    });
    chart3.mount('#chart-container-3');

    var chart4 = new cryptowatch.Embed('kraken', 'zeceur', {
        timePeriod: '1d',
        presetColorScheme: 'delek'
    });
    chart4.mount('#chart-container-4');

    var chart5 = new cryptowatch.Embed('kraken', 'algoeur', {
        timePeriod: '1d',
        presetColorScheme: 'delek'
    });
    chart5.mount('#chart-container-5');

    var chart6 = new cryptowatch.Embed('kraken', 'adaeur', {
        timePeriod: '1d',
        presetColorScheme: 'delek'
    });
    chart6.mount('#chart-container-6');

    var chart7 = new cryptowatch.Embed('kraken', 'atomeur', {
        timePeriod: '1d',
        presetColorScheme: 'delek'
    });
    chart7.mount('#chart-container-7');

    var chart8 = new cryptowatch.Embed('kraken', 'xmreur', {
        timePeriod: '1d',
        presetColorScheme: 'delek'
    });
    chart8.mount('#chart-container-8');
});
