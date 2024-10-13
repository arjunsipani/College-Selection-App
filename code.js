onEvent("top3Button", "click", function( ) {
  console.log("top3Button clicked!");
  setScreen("#3University");
  playSound("assets/category_transition/puzzle_game_big_upgrade_05.mp3", false);
});
onEvent("top2Button", "click", function( ) {
  console.log("top2Button clicked!");
  setScreen("#2University");
  playSound("assets/category_transition/puzzle_game_big_upgrade_04.mp3", false);
});
onEvent("top1Button", "click", function( ) {
  console.log("top1Button clicked!");
  setScreen("#1University");
  playSound("assets/category_transition/puzzle_game_big_upgrade_03.mp3", false);
});
onEvent("top3BackButton", "click", function( ) {
  console.log("top3BackButton clicked!");
  playSound("assets/category_alerts/vibrant_game_flutter_ambient_alert.mp3", false);
  setScreen("#3University");
});
onEvent("top2BackButton", "click", function( ) {
  console.log("top2BackButton clicked!");
  playSound("assets/category_alerts/vibrant_game_flutter_ambient_alert.mp3", false);
  setScreen("#2University");
});
onEvent("homeButton", "click", function( ) {
  console.log("homeButton clicked!");
  playSound("assets/category_alerts/vibrant_game_flutter_ambient_alert.mp3", false);
  setScreen("homeCoverPage");
});
onEvent("homeBackButton", "click", function( ) {
  console.log("homeBackButton clicked!");
  playSound("assets/category_alerts/vibrant_game_flutter_ambient_alert.mp3", false);
  setScreen("homeCoverPage");
});
playSound("assets/category_loops/stabilizing_breath_loop1.mp3", false);
