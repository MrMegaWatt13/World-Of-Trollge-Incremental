//Resources-------------------------------------------------------------------
//O-Oil B-Blood M-Mysterious S-Sorrow NE-Night Essence

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
    function gainTroll(number){
    Trolls = Trolls + number;
    document.getElementById("Trolls").innerHTML = Trolls;
}; 

window.setInterval(function(){
    
    gainOCup(); 
    
}, 1000);
window.setInterval(function(){
    
    gainBCup(); 
    
}, 10000);
window.setInterval(function(){
    
    gainMCup(); 
    
}, 100000);
window.setInterval(function(){
    
    gainSCup(); 
    
}, 1000000);
window.setInterval(function(){
    
    gainNE(); 
    
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

//Trolls-------------------------------------------------------------------


