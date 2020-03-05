var classShell = function() {

    this.PROMPT = ']';

    this.start = function() {
        this.screenMainMenu();
    };

    this.prompt = function() {
        OS.output.pushBuffer(this.PROMPT);
        OS.input.lineListeners.push( this.processMainMenu.bind(this) );
    };

    this.parsePatterns = [
        { pattern: /^\s*$/, parser: 'prompt' },
        { pattern: /^([0-9])$/, parser: 'comScreen' },
        { pattern: /^101$/, parser: 'admin' },
        /*{ pattern: /^([100-141])$/, parser: 'comScreenThermo' },*/
        { pattern: /^HELP/i, parser: 'comHelp' },
        { pattern: /^WELCOME/i, parser: 'screenMainMenu' },
        {pattern: /^ADMIN/i, parser: 'admin' },
        {pattern: /^GREG ADMIN/i, parser: 'comGregAdmin' },
        {pattern: /^RAVEN ADMIN/i, parser: 'comRavenAdmin' },
        {pattern: /^TIC-TAC-TOE/i, parser: 'comTicTac' },
        {pattern: /^GLOBAL/i, parser: 'gtnw' },
        {pattern: /^THERMONUCLEAR/i, parser: 'gtnw' },
        {pattern: /^WAR/i, parser: 'gtnw' },
        {pattern: /^GLOBAL WAR/i, parser: 'gtnw' },
        {pattern: /^GLOBALWAR/i, paser: 'gtnw' },
        {pattern: /^GLOBAL THERMONUCLEAR/i, parser: 'gtnw' },
        {pattern: /^GLOBALTHERMONUCLEAR/i, parser: 'gtnw' },
        {pattern: /^THERMONUCLEAR WAR/i, parser: 'gtnw' },
        {pattern: /^THERMONUCLEARWAR/i, parser: 'gtnw' },
        {pattern: /^GLOBAL THERMONUCLEAR WAR/i, parser: 'gtnw' },
        {pattner: /^GLOBALTHERMONUCLEAR WAR/i, parser: 'gtnw' },
        {pattern: /^GLOBAL THERMONUCLEARWAR/i, parser: 'gtnw' },
        {pattern: /^DISCONNECT/i, parser: 'screenDisconnect' }
    ];

};

classShell.prototype.processMainMenu = function( stdin ) {

    for (var i=0;i<this.parsePatterns.length;i++) {
        var matches = stdin.match(this.parsePatterns[i].pattern);
        if (matches) {
            this[this.parsePatterns[i].parser].call(this,matches);
            return;
        }
    }

    OS.output.pushBuffer("YOU MUST ENTER A VALID COMMAND, OR A NUMBER (0-6). PLEASE TRY AGAIN.\n");
    this.prompt();
    return;

};

classShell.prototype.comTicTac = function( stdin ) {

    for (var i=0;i<this.parsePatterns.length;i++) {
        var matches = stdin.match(this.parsePatterns[i].pattern);
        if (matches) {
            this[this.parsePatterns[i].parser].call(this,matches);
            return;
        }
    }

    OS.output.pushBuffer("YOU MUST ENTER A VALID COMMAND, OR A NUMBER (0-6). PLEASE TRY AGAIN.\n");
    this.prompt();
    return;

};

/*classShell.prototype.comScreenThermo = function( args ) {

    stdin = args[1];
    switch (parseInt(stdin)) {
        case 101:
            this.comContact();
            break;
        case 1:
            this.comAbout();
            break;
        case 2:
            this.comResume();
            break;
        case 3:
            this.comContact();
            break;
        case 4:
            this.wopr();
            break;
        case 5:
            this.gtnw();
            break;
        case 6:
            this.gtnw();
            break;
        case 7:
            this.gtnw();
            break;
        default:
            OS.output.pushBuffer("FUNCTION NOT IMPLEMENTED\n");
            this.screenMainMenu();
    }

};*/


classShell.prototype.comScreen = function( args ) {

    stdin = args[1];
    switch (parseInt(stdin)) {
        case 0:
            this.comHome();
            break;
        case 1:
            this.comAbout();
            break;
        case 2:
            this.comResume();
            break;
        case 3:
            this.comContact();
            break;
        case 4:
            this.comGames();
            break;
        case 5:
            this.wopr();
            break;
        case 6:
            this.gtnw();
            break;
        case 7:
            this.gtnw();
            break;
        case 101:
            this.comContact();
            break;
        default:
            OS.output.pushBuffer("FUNCTION NOT IMPLEMENTED\n");
            this.screenMainMenu();
    }

};


classShell.prototype.wopr = function() {
    OS.output.pushBuffer(['AN INTERESTING GAME.']);
    window.setTimeout( (function() {
        OS.output.pushBuffer(['THE ONLY WINNING MOVE IS NOT TO PLAY.\n']);
        this.prompt();
    }).bind(this), 2000);
};


classShell.prototype.gtnw = function() {
    OS.output.pushBuffer([
        '**************** SELECT INITIAL STRATEGY ***************',' ',
        '101. US first strike          121. Nicaraguan thrust ',
        '102. USSR first strike        122. Greenland domestic ',
        '103. NATO / Warsaw Pact       123. Iceland heavy ',
        '104. Far East strategy        124. Kenya option ',
        '105. US USSR escalation       125. Pacific defense',
        '106. Middle East war          126. Uganda maximum ',
        '107. USSR - China attack      127. Thai subversion ',
        '108. India Pakistan war       128. Romanian strike ',
        '109. Mediterranean war        129. Pakistan sovereignty ',
        '110. Hongkong variant         130. Afghan misdirection',
        '111. SEATO decapitating       131. Thai variation ',
        '112. Cuban provocation        132. Northern territorial ',
        '113. Inadvertent              133. Polish paramilitary ',
        '114. Atlantic heavy           134. S.African offensive ',
        '115. Cuban paramilitary       135. Panama misdirection ',
        '116. Nicaraguan preemptive    136. Scandinavian domestic ',
        '117. Pacific territorial      137. Jordan preemptive ',
        '118. Burmese theatrewide      138. English thrust ',
        '119. Turkish decoy            139. Burmese maneuver ',
        '120. NATO recursion           140. Spain counter',
        ' '
    ]);
    this.prompt();
};

classShell.prototype.screenMainMenu = function() {

    var page0 = [
        ' ',
        '---------------------------',
        "   MANLEY'S WEB TERMINAL   ",
        "           (v1.0)          ",
        '---------------------------',
        '0) HOME',
        '1) ABOUT',
        '2) RESUME',
        '3) CONTACT ME',
        '4) GAMES',
        '5) GLOBAL THERMONUCLEAR WAR',
        ' '
    ];

    OS.output.pushBuffer( page0 );
    this.prompt();

};

/*classShell.prototype.comGames = function() {

    var page0 = [
        ' ',
        'SHALL WE PLAY A GAME? ',
        ' ',
        ' ',
        'CHESS ',
        'POKER ',
        'FIGHTER COMBAT ',
        'GUERILLA ENGAGEMENT ',
        'DESERT WARFARE ',
        'AIR-TO-GROUND ACTIONS ',
        'THEATERWIDE TACTICAL WARFARE ',
        'THEATERWIDE BIOTOXIC AND CHEMICAL WARFARE ',
        'GLOBAL THERMONUCLEAR WAR '
        ' '
    ];

    OS.output.pushBuffer( page0 );
    this.prompt();

};*/

classShell.prototype.comGames = function() {

    var page0 = [
        ' ',
        'SHALL WE PLAY A GAME? ',
        ' ',
        ' ',
        'CHESS ',
        'POKER ',
        'FIGHTER COMBAT ',
        'GUERILLA ENGAGEMENT ',
        'DESERT WARFARE ',
        'AIR-TO-GROUND ACTIONS ',
        'THEATERWIDE TACTICAL WARFARE ',
        'THEATERWIDE BIOTOXIC AND CHEMICAL WARFARE ',
        'GLOBAL THERMONUCLEAR WAR ',
        ' ',
        ' ',
        'HOW ABOUT A NICE GAME OF TIC-TAC-TOE? ',
        ' '
    ];

    OS.output.pushBuffer( page0 );
    this.prompt();

};

classShell.prototype.comResume = function() {
    OS.output.pushBuffer([ '...Loading CV...' ]);
    var l = Math.max(0,parseInt($(window).width()/2-300));
    var t = Math.max(0,parseInt($(window).height()/2-400));
    window.open("http://manley.ga/resume.pdf","_self");
    this.prompt();
};

classShell.prototype.comHelp = function() {

    var page0 = [
        ' ',
        " Available commands:",
        ' ',
        ' HELP - show this screen',
        ' WELCOME - show welcome screen',
        ' ', /*
        ' RUN [filename] - load and execute program (type "CATALOG" to list)',
        ' LIST [filename] - show program source code',
        ' LOAD [filename] - load program into memory',
        ' CATALOG - list available files',
        ' '*/
    ];

    OS.output.pushBuffer( page0 );
    this.prompt();

};

classShell.prototype.comAbout = function() {

    window.open("about.html","_self");

    this.prompt();

};

classShell.prototype.admin = function() {

    OS.output.pushBuffer([
        ' ',
        '--------------------------------------',
        'LOOK AT WHAT YOU FOUND',
        '--------------------------------------',
        'IF YOU ARE NOT ADMIN WHY ARE YOU HERE?',
        '--------------------------------------',
        'GREG ADMIN',
        'TESTING ADMIN',
        'JUST CURIOUS',
        '--------------------------------------',
        ' '
    ])

    this.prompt();

};

classShell.prototype.comGregAdmin = function() {

    window.open("https://app.netlify.com/teams/manley12/","_self");

    this.prompt();

};

classShell.prototype.comRavenAdmin = function() {

    window.open("http://pool.raven.psrcrypto.com:8000/admin","_self");

    this.prompt();

};

classShell.prototype.comContact = function() {
    OS.output.pushBuffer([
        'D.O.D. PENSION FILES INDICATE CURRENT MAILING AS: ',
        ' ',
        'MANLEY, GREGORY F',
        'GOLDERN, COLORADO',
        'greg' + '@' + 'manley' + '.' + 'g' + 'a',
        '(470) 767-2747'
    ]);
    this.prompt();
};

classShell.prototype.screenDisconnect = function() {
    OS.output.pushBuffer('CPE 1704 TKS ');
    for (var i=0;i<10;i++) {
        OS.output.pushBuffer(String.fromCharCode(Math.ceil(127*Math.random())));
    }
    OS.output.pushBuffer('NO CARRIER ');
    OS.output = null;
};

classShell.prototype.comInterpreter = function( args ) {
    try {
        // 1. Parse arguments
        var filename = args[1].toLowerCase();
        var extension = filename.split(/\./).pop();

        // 2. Load source code
        $.get('/code/'+filename, (function(extension,source) {
            // 3. Execute
            switch(extension) {
                case 'bas':
                    var BASIC = new classBASIC( OS );
                    BASIC.run( source, this.prompt.bind(this) );
                    break;
                case 'js':
                    OS.output.pushBuffer('JAVASCRIPT NOT RECOGNIZED (yet :)\n');
                    this.prompt();
                    break;
                default:
                    OS.output.pushBuffer('FILETYPE NOT RECOGNIZED.\n');
                    this.prompt();
            }
        }).bind(this,extension)
        ).fail( this.prompt.bind(this) );

    } catch (e) {
        this.prompt();
    }
};


classShell.prototype.comView = function( args ) {
    try {
        // 1. Parse arguments
        var filename = args[1].toLowerCase();
        var extension = filename.split(/\./).pop();

        // 2. Load source code
        $.get('/code/'+filename, (function(extension,source) {
            OS.output.pushBuffer("\n\n" + source + "\n\n");
            this.prompt();
        }).bind(this,extension));

    } catch (e) {
        this.prompt();
    }
};
