<template>
    <div class="grid grid-cols-4 lg:grid-cols-5 font-medium divide-x-reverse divide-x-2 [&>div]:h-20 [&>div]:text-center [&>div]:text-xs [&>div]:lg:text-lg  [&>div]:font-medium [&>div]:flex [&>div]:items-center [&>div]:justify-center">
        <div> {{ name.split('-')[0].toUpperCase() }} </div>
        <div class="break-words">{{ Number(information.latest).toLocaleString('fa-IR') }} ریال</div>
        <div dir="ltr" class="text-right lg:tracking-wider"> {{ information.dayChange }} % </div>
        <div class="lg:col-span-2 flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-4">
            <coin-buttons :disabled="crypto > 0" :class="[crypto > 0 ? 'cursor-not-allowed !bg-gray-200' : '' ]" @trade="buyCoin(information , name)" color="green">
                خرید
            </coin-buttons>
            <coin-buttons :disabled="cryptoName != name" :class="[cryptoName == name ? '' : 'cursor-not-allowed !bg-gray-200' ]" @trade="sellCoin(information, name)" color="red">
                فروش
            </coin-buttons>
        </div>
    </div>
</template>


<script setup >


const props = defineProps({
    information : Object,
    name : String
})
const { buyCoin, sellCoin,cryptoName, crypto, balance } = useCoins()

// const cryptoCheck = computed(() => {
//     if(crypto.value == 0){
//         return false
//     }else if(props.name == cryptoName){
//         return false
//     }else {
//         return true
//     }
// })
</script>


<style scoped>
</style>