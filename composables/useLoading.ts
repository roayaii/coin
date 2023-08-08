export default function () {
    const loady = useState('loady', () => false)

    function start () {
        loady.value = true
    }

    function stop () {
        loady.value = false
    }

    return {
        loady,
        start, stop
    }
}