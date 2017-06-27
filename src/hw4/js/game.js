    var game = {};
    
    
    game = {
      userName: '',
      place: 'start',
      movesLog: [],
      gameStarted: false,
      gameMove: function() {
        var answer = prompt(this.userName + ', ваш ход? (exit - выход)');

        this.movesLog.push(this.place + ": " + answer);
        console.log('\t' + this.movesLog[this.movesLog.length - 1]);

        if (answer == 'exit') {
          console.log('exit');
          this.gameStarted = false;
          return;
        }
        switch (this.place) {
          case 'start':
            if (answer == 'left') {
              alert(this.userName + ', слева вы видите дерево (варианты: right, enter)');
            } else if (answer == 'enter') {
              alert('входим в дом');
              this.place = 'houseEntrance';
            }
            break;
          
          case 'houseEntrance':
            if (answer == 'left') {
              alert(this.userName + ', слева видим лестницу (варианты: right, straight, up)');
            } else if (answer == 'straight') {
              alert('идем вперед');
              this.place = 'houseFirstFloorCenter';
            }
            break;
          
          default:
            alert(this.userName + ', вы выбрали неизвестное действие!');
        }
      },
      gameStart: function() {
        var answer = prompt('ваше имя? (exit - выход)');
        if (answer == 'exit') {
          console.log('exit');
          this.gameStarted = false;
          return;
        } else {
          this.userName = answer;
          this.gameStarted = true;
        }
      },
      showMove: function(n) {
        var n = parseInt(n);
        console.log(this.movesLog[n]);
      }
    };
    
    function start() {
      game.gameStart();
      
      while (game.gameStarted) {
        game.gameMove();
      }
    }