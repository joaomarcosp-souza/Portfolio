let randomPlaceholderList = [
    "Buscar ex. ''Lightning''",
    "Buscar ex. ''Ashe'' ",
    "Buscar ex. ''Yuna'' ",
    "Buscar ex. ''Firion'' ",
    "Buscar ex. ''Aerith'' ",
    "Buscar ex. ''Cecil'' ",
    "Buscar ex. ''Bartz'' ",
    "Buscar ex. ''Tidus'' ",
    "Buscar ex. ''Refia'' ",
    "Buscar ex. ''Kefka'' "
]

let randomPlaceholder = randomPlaceholderList[Math.floor(Math.random() * randomPlaceholderList.length)]

$("#search").attr("placeholder", randomPlaceholder)

new Vue({
    el: "#vue-app",
    mounted: function () {
        this.getCharacters()
    },
    methods: {
        getCharacters() {
            axios.get("https://www.moogleapi.com/api/v1/characters")
                .then(response => { this.character = response.data })
        },
        setModal(character) {
            this.modal = character
        },
        scrollTop() {
            $("html, body").animate({ scrollTop: "0" }, 500)
        },
        getRandom() {
            axios.get("https://www.moogleapi.com/api/v1/characters/random")
                .then(response => {
                    this.random = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },

    computed: {
        filtered: function () {
            let filtered = this.character
            let empty = ""

            if (!this.search) {
                return empty
            }

            if (this.search) {
                let self = this
                filtered = this.character
                    .filter(function (character) {
                        return character.name.toLowerCase().indexOf(self.search) > -1
                            || character.name.indexOf(self.search) > -1
                            || character.origin.toLowerCase().indexOf(self.search) > -1;
                    })
            }
            return filtered
        },
    },
    data: {
        random: {},
        character: "",
        search: "",
        modal: {},
    }
})