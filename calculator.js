const Vue = require('vue/dist/vue.js')

window.addEventListener("load", (event) => {
    let output = new Vue({
        el: '#output',
        data: {
            hex: 0,
            dec: 99999999,
            bin: 0,
            circle16: 'circle1',
            circle10: 'circle1',
            circle2: 'circle1'
        },
        methods: {
            
        }
    })

    let keypad = new Vue({
        el: '#keypad',
        data: {
            keys: [
            {"description":"A", "styles":"borderBottom dark"},
            {"description":"B", "styles":"borderBottom dark"},
            {"description":"C", "styles":"borderBottom dark"},
            {"description":"D", "styles":"borderBottom dark"},
            {"description":"7", "styles":"borderBottom"},
            {"description":"8", "styles":"borderBottom"},
            {"description":"9", "styles":"borderBottom"},
            {"description":"E", "styles":"borderBottom dark"},
            {"description":"4", "styles":"borderBottom"},
            {"description":"5", "styles":"borderBottom"},
            {"description":"6", "styles":"borderBottom"},
            {"description":"F", "styles":"borderBottom dark"},
            {"description":"1", "styles":"borderBottom dark"},
            {"description":"2", "styles":"borderBottom"},
            {"description":"3", "styles":"borderBottom"},
            {"description":"AC", "styles":"rowSpan2 borderBottom red"},
            {"description":"0", "styles":"borderBottom dark"},
            {"description":"DEL", "styles":"columnSpan2 borderBottom red"},
            ]
        },
        methods: {
            keyPressed: (event) => {
                let key = event.toElement.innerHTML
                console.log(key)
                output.dec *= 10
                output.dec += parseInt(key)
            }
        }
    })
})
