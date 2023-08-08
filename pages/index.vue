<template>
    <div class=" container mx-auto p-6 overflow-hidden" >
        <div class="border rounded">
            <div class="grid grid-cols-4 lg:grid-cols-5 [&>div]:text-center [&>div]:text-sm [&>div]:lg:text-base divide-x-reverse divide-x-2 font-medium [&>div]:h-[60px] [&>div]:flex [&>div]:items-center [&>div]:justify-center">
                <div>رمز ارز</div>
                <div >قیمت پایانی</div>
                <div>تغییر روزانه</div>
                <div class="lg:col-span-2">
                    معامله
                </div>
            </div>
            <div v-for="item,i in coins.stats" :key="i" mt-2>
                <hr>
                <CoinItem :key="i" :information="item" :name="i" />
            </div>
        </div>
    </div>
</template>


<script setup >
const {getCoins, coins} = useCoins()
const {start, stop, loady} = useLoading()
start()
await getCoins()
stop()
</script>