class Game {
  constructor() {}
  getState() {
    db.ref("gameState").on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    db.ref("/").update({
      gameState: state,
    });
  }

  async start(){
      if(gameState===0){
          player=new Player()
          var playerCountRef=await db.ref("playerCount").once("value")
          if(playerCountRef.exists()){
           playerCount=playerCountRef.val()
           player.getCount()

          }

          form=new Form ()
          form.display()

      }


  }
  play(){
    form.hide()
    text("Game Start",120,100)
    Player.getPlayerInfo()
    if(allPlayers !==undefined){
     var displayPosition=120

     for (var plr in allPlayers){
       displayPosition+=20
       text(allPlayers[plr].name+":"+allPlayers[plr].distance,100,displayPosition)
     }
    }
    
    
  }
}
