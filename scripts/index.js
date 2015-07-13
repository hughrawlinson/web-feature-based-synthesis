(function(){
	console.log("This worked");
    window.ctx = new AudioContext();
    var osc1 = ctx.createOscillator();
    osc1.type = "sawtooth";
    var osc2 = ctx.createOscillator();
    osc2.type = "square";
    var osc3 = ctx.createOscillator();
    osc3.type = "triangle";
    
    var g1 = ctx.createGain();
    var g2 = ctx.createGain();
    var g3 = ctx.createGain();

    var f1 = ctx.createBiquadFilter();
    f1.type = "lowpass";

    osc1.start();
    osc2.start();
    osc3.start();

    osc1.connect(g1);
    osc2.connect(g2);
    osc3.connect(g3);
    g1.connect(f1);
    g2.connect(f1);
    g3.connect(f1);
    f1.connect(ctx.destination);
}());
