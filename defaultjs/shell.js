var classShell = function() {
    
    this.prompt = ']';
    
    this.start - function() {
        this.screenMainMenu();
    };
    
    this.prompt = function() {
        OS.output.pushBuffer(this.PROMPT);
        OS.input.lineListeners.push( this.processMainMenu.bind(this) );
    };
    
    this.parsePatterns = [
        { pattern: /^\s*$/, parser: 'prompt' },
        { pattern: /^([0-9])$/, parser: 'comScreen' },
        
        { pattern: /^HELP/i, parser: 'comHelp' },
        { pattern: /^WELCOME/i, parser: 'screenMainMenu' },
        
        { pattern: /^ABOUT/i, parser: 'comAbout' },
        
        /*Global Thermonuclear War*/
        { pattern: /^GLOBAL/i, parser: 'gtnw' },
        { pattern: /^THERMONUCLEAR/i, parser: 'gtnw' },
        { pattern: /^WAR/i, parser: 'gtnw' },
        { pattern: /^GLOBAL WAR/i, parser: 'gtnw' },
        { pattern: /^GLOBAL THERMONUCLEAR/i, parser: 'gtnw' },
        { pattern: /^GLOBAL THERMONUCLEAR WAR/i, parser: 'gtnw' },
       
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
    
    OS.output.pushBuffer("YOU MUST ENTER A VALID COMMAND, OR A NUMBER (0-9). PLEASE TRY AGAIN.\N");
    this.prompt();
    return;
};

classShell.prototype.comScreen = function( args ) {
    
    stdin = args[1];
    
    switch (parseInt(stdin)) {
        case 0:
            this.comHelp();
            break;
        case 1:
            this.comHelp();
            break;
        case 2:
            this.comHelp();
            break;
        case 3:
            this.comHelp();
            break;
        case 4:
            this.comHelp();
            break;
        case 5:
            this.comHelp();
            break;
        case 6:
            this.mopr();
            break;
        case 7:
            this.comHelp();
            break;
        case 8:
            this.comHelp();
            break;
        case 9:
            this.comHelp();
            break;
        default:
            OS.output.pushBuffer("FUNCTION NOT IMPLEMENTED\n");
            this.screenMainMenu();
    }
};

/*Start Menu"*/
classShell.prototype.screenMainMenu = function() {
    
    var page0 = [
        ' ',
        '-------------------------'
        "   MANLEY'S WEB TERMAL   ",
        "          (v1.0)         ",
        '0) OPTION 0',
        '1) OPTION 1',
        ' '
        
    ];
    
    OS.output.pushBuffer( page0 );
    this.prompt();
};
        

/*Option 6*/
classShell.prototype.mopr = function() {
    OS.output.pushBuffer(['AN INTERESTING GAME.']);
    window.setTimeout( (function() {
        OS.output.pushBuffer(['THE ONLY WINNING MOVE IS NOT TO PLAY.\n']);
        this.prompt();
    }).bind(this), 2000);
};
            
