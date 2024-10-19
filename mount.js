const delayed = document.getElementsByClassName('del')

loop()

function loop(manual = false) {
    setTimeout(() => {
        for (let i = 0; i < delayed.length; i++) {
            setTimeout(() => {
                delayed[i].classList.add('d-none')
                delayed[i].classList.remove('o-none')
                delayed[i].classList.remove('d-none')
                console.log(delayed[i])
            }, !manual ?100 * i:150 * i)
        }
    }, !manual ? 800 : 0);
}
