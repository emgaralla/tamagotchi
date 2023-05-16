const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function () {
        if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
            console.log(`${this.name} умер :(`)
        }
        if (this.meal < 3) {
            this.meal = `Я голоден (${this.meal})`
        }
        if (this.energy < 3) {
            this.energy = `Я хочу спать (${this.energy})`
        }
        if (this.mood < 3) {
            this.mood = `Мне скучно (${this.mood})`
        }
            console.log(`Имя: ${this.name}, Еда: ${this.meal}, Энергия: ${this.energy}, Настроение: ${this.mood}`)
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