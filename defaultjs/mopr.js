// Global variable OS
var OS = null;

$(document).ready(function() {

    var output = new classOutput();
    var input = new classInput();

    OS = new classOS( {
        output: output,
        input: input
    });

    OS.output.pushBuffer([
        'E0ATDT5I7N1D3E6X>',
        ' CONNECT',
	' PLEASE USE A DESKTOP OR LAPTOP TO VIEW THIS SITE, IF YOU WISH TO VIEW A VERSION ON MOBILE GO TO MANLEY.GA/MOBILE/ ',
        '  '
    ]);

    var shell = new classShell();
    shell.start();

});
