//Resources-------------------------------------------------------------------
//O-Oil B-Blood M-Mysterious S-Sorrow NE-Night Essence

var GainCups = 0;
    function gainGain(number){
    GainCups = GainCups + number;
    document.getElementById("GainCups").innerHTML = GainCups;
};
var OCups = 0;
    function gainOCup(number){
    OCups = OCups + number;
    document.getElementById("OCups").innerHTML = OCups;
}; 

var BCups = 0;
   function gainBCup(number){
    BCups = BCups + number;
    document.getElementById("BCups").innerHTML = BCups;
}; 
 
var MCups = 0;
    function gainMCup(number){
    MCups = MCups + number;
    document.getElementById("MCups").innerHTML = MCups;
}; 
 
var SCups = 0;
    function gainSCup(number){
    SCups = SCups + number;
    document.getElementById("SCups").innerHTML = SCups;
}; 

var NE = 0;
    function gainNE(number){
    NE = NE + number;
    document.getElementById("NE").innerHTML = NE;
}; 

var Trolls = 0;
    function gainTrolls(number){
    Trolls = Trolls + number;
    document.getElementById("Trolls").innerHTML = Trolls;
}; 

window.setInterval(function(){
    
    gainOCup(GainCups); 
    
}, 1000);
window.setInterval(function(){
    
    gainBCup(GainCups); 
    
}, 10000);
window.setInterval(function(){
    
    gainMCup(GainCups); 
    
}, 100000);
window.setInterval(function(){
    
    gainSCup(GainCups); 
    
}, 1000000);
window.setInterval(function(){
    
    gainNE(GainCups); 
    
}, 10000000);

function C1(){
    var C1Cost= Math.floor(5 * Math.pow(1,C1Cost));        
    if(OCups >= C1Cost){                                                                                                                                        
        OCups = OCups - C1Cost,                                                         
        document.getElementById('OCups').innerHTML = OCups;    
        document.getElementById('BCups').innerHTML = BCups;
        gainBCup();            
    };
    var nextCost = Math.floor(5 * Math.pow(1,C1Cost));       
    document.getElementById('C1Cost').innerHTML = nextCost;
};

function C2(){
    var C2Cost= Math.floor(5 * Math.pow(1,C2Cost));        
    if(BCups >= C2Cost){                                                                                                                                        
        BCups = BCups - C2Cost,                                                         
        document.getElementById('BCups').innerHTML = BCups;    
        document.getElementById('MCups').innerHTML = MCups;
        gainMCup();            
    };
    var nextCost = Math.floor(5 * Math.pow(1,C2Cost));       
    document.getElementById('C2Cost').innerHTML = nextCost;
};

function C3(){
    var C3Cost= Math.floor(5 * Math.pow(1,C3Cost));        
    if(MCups >= C3Cost){                                                                                                                                        
        MCups = MCups - C3Cost,                                                         
        document.getElementById('MCups').innerHTML = MCups;    
        document.getElementById('SCups').innerHTML = SCups;
        gainSCup();            
    };
    var nextCost = Math.floor(5 * Math.pow(1,C3Cost));       
    document.getElementById('C3Cost').innerHTML = nextCost;
};

function C4(){
    var C4Cost= Math.floor(7 * Math.pow(1,C4Cost));        
    if(SCups >= C4Cost){                                                                                                                                        
        SCups = SCups - C4Cost,                                                         
        document.getElementById('SCups').innerHTML = SCups;    
        document.getElementById('NE').innerHTML = NE;
        gainNE();            
    };
    var nextCost = Math.floor(7 * Math.pow(1,C4Cost));       
    document.getElementById('C4Cost').innerHTML = nextCost;
};

function TC1(){
    var TC1Cost= Math.floor(100 * Math.pow(1,TC1Cost));        
    if(Trolls >= TC1Cost){                                                                                                                                        
        Trolls = Trolls - TC1Cost,                                                         
        document.getElementById('Trolls').innerHTML = Trolls;    
        document.getElementById('OCups').innerHTML = OCups;
        gainOCup();            
    };
    var nextCost = Math.floor(100 * Math.pow(1,TC1Cost));       
    document.getElementById('TC1Cost').innerHTML = nextCost;
};

function TC2(){
    var TC2Cost= Math.floor(500 * Math.pow(1,TC2Cost));        
    if(Trolls >= TC2Cost){                                                                                                                                        
        Trolls = Trolls - TC2Cost,                                                         
        document.getElementById('Trolls').innerHTML = Trolls;    
        document.getElementById('BCups').innerHTML = BCups;
        gainBCup();            
    };
    var nextCost = Math.floor(500 * Math.pow(1,TC2Cost));       
    document.getElementById('TC2Cost').innerHTML = nextCost;
};

gainGain();

//Trolls-------------------------------------------------------------------

var TestTroll = 0;

var Troll = 0;

function getTestTroll(){
    var TestTrollCost= Math.floor(1 + Math.add(1,TestTrollCost));        
    if(Trolls >= TestTrollCost){
        Trolls = Trolls + 1;                                                                                                                                       
        Trolls = Trolls - TestTrollCost,                                                         
        document.getElementById('TestTroll').innerHTML = TestTroll;    
        document.getElementById('Trolls').innerHTML = Trolls;         
    };
    var nextCost = Math.floor(1 + Math.add(1,TestTrollCost));       
    document.getElementById('TestTrollCost').innerHTML = nextCost;
};

function getTroll(){
    var TrollCost= Math.floor(100 * Math.pow(1.2,TrollCost));        
    if(Trolls >= TrollCost){
        Trolls = Trolls + 1;                                                                                                                                       
        Trolls = Trolls - TrollCost,                                                         
        document.getElementById('Troll').innerHTML = Troll;    
        document.getElementById('Trolls').innerHTML = Trolls;         
    };
    var nextCost = Math.floor(100 * Math.pow(1.2,TrollCost));       
    document.getElementById('TrollCost').innerHTML = nextCost;
};

window.setInterval(function(){
 
    gainTrolls(Troll);  
    gainTrolls(100),(TestTroll); 
    
}, 1000);
