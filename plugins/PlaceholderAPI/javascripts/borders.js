var faction = "(%worldguard_region_min_point_x%,%worldguard_region_min_point_y%,%worldguard_region_min_point_z%) -> (%worldguard_region_max_point_x%,%worldguard_region_max_point_y%,%worldguard_region_max_point_z%)";
 
function check() {
 
   if (faction === "(,,) -> (,,)") {
       return "§c(пусто)";
   }
   
   else {
       return "(%worldguard_region_min_point_x%,%worldguard_region_min_point_y%,%worldguard_region_min_point_z%) -> (%worldguard_region_max_point_x%,%worldguard_region_max_point_y%,%worldguard_region_max_point_z%)";
   }
}
check();