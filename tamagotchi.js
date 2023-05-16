const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function () {
        let isHungry = this.meal < 3 ? 'Я голоден' : 'Я не голоден'
        let isEnergy = this.energy < 3 ? 'Я хочу спать' : 'Я не хочу спать'
        let isMood = this.mood < 3 ? 'Мне скучно' : 'Мне весело'
        if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
            console.log(`${this.name} умер :(`)
        }
        else {
        console.log(`Имя: ${this.name}, Еда: ${isHungry} (${this.meal}), Энергия: ${isEnergy} (${this.energy}), Настроение: ${isMood} (${this.mood})`)
        }
    },
    getName: function (str) {
        this.name = str
    },
    eating: function () {
        if (this.meal < 5) {
            this.meal++
        }
        this.mood--
    },
    sleeping: function () {
        if (this.energy < 5) {
            this.energy++
        }
        this.meal--
    },
    playing: function () {
        if (this.mood < 5) {
            this.mood++
        }
        this.energy--
    },
  }

tamogotchi.getStatus()