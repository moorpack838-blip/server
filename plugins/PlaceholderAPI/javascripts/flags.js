var faction = "%worldguard_region_flags%";
 
function check() {
 
   if (faction === "") {
       return "§c(пусто)";
   }
   if (faction === "[]") {
       return "§c(пусто)";
   }
   
   else {
       return "%worldguard_region_flags%";
   }
}
check();