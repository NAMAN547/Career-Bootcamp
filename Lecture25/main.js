
let gp = document.getElementById("grandparent");
let p = document.getElementById("parent");
let c = document.getElementById("child");

gp.addEventListener("click", e=> console.log( "capturing" + e.target.textContent),{capture:true});
p.addEventListener("click", e=> console.log( "capturing" + e.target.textContent),{capture:true});
c.addEventListener("click", e=> console.log( "capturing" + e.target.textContent),{capture:true});

gp.addEventListener("click", e=> console.log( "bubbling" + e.target.textContent));

p.addEventListener("click", e=> console.log( "bubbling" + e.target.textContent));

c.addEventListener("click", e=> console.log( "bubbling" + e.target.textContent));




