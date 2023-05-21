
let gp = document.getElementById("grandparent");
let p = document.getElementById("parent");
let c = document.getElementById("child");

gp.addEventListener("click", e=> {console.log( "capturing gp") },{capture:true});
p.addEventListener("click", e=> {console.log( "capturing p") },{capture:true});
c.addEventListener("click", e=> {console.log( "capturing c") },{capture:true});

gp.addEventListener("click", e=> console.log( "bubbling" + e.target.textContent));

p.addEventListener("click", e=> console.log( "bubbling" + e.target.textContent));

c.addEventListener("click", e=> console.log( "bubbling" + e.target.textContent));




