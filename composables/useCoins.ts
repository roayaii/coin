export default function(){
    const coins = ref()
    const balance = useState('balance' , (() => 10000000))
    const crypto = useState('crypto' , (() => 0))
    const cryptoName = useState('cryptoName' , (() => '')) 


    async function getCoins(){
        const { data, error } = await useFetch(`https://api.nobitex.ir/market/stats` , {
            method: "POST",
            body: {
                srcCurrency: 'btc,mana,doge,ada,ftm,dot',
                dstCurrency: 'rls'
            },
            headers: {
                'Content-Type': 'application/json',
                'API-Key': 'secret'
            }
        })
        coins.value = data.value
    }


    function buyCoin (item , name){
        
        if(balance.value > item.latest){
            crypto.value = Math.round(balance.value / item.latest)
            cryptoName.value = name
        } else {
            window.alert('اعتبار شما برای خرید این ارز کافی نیست')
        }
    }


    function sellCoin (item , name){
        balance.value = 10000000
        crypto.value = 0
        cryptoName.value = ''
    }

    return {
        getCoins,
        coins,
        balance,
        crypto,
        buyCoin,
        sellCoin,
        cryptoName
    }
}