var faction = "%worldguard_region_name%";
 
function check() {
 
   if (faction === "") {
       return "Глобальный";
   }
   
   else {
       return "%worldguard_region_name%";
   }
}
check();