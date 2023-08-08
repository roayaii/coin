<template>
    <div class="container mx-auto  px-4 py-2 bg-transparent ">
        <div class="flex items-center justify-between">
            <h1 class="text-blue-700 text-3xl lg:text-6xl font-black">
                Crypto
            </h1>
            <div class="rounded-lg border-2 border-blue-400  px-3 py-2 text-blue-800 font-medium text-sm lg:text-lg">
                <p>
                    موجودی حساب شما
                </p>
                <p class="text-center"   v-if="crypto == 0">
                    {{ balance.toLocaleString('fa-IR') }} ریال
                </p>
                <p class="text-center flex flex-row-reverse items-center justify-center gap-2 text-sm lg:text-2xl" v-else>
                        <span  class="font-bold">
                            {{ crypto }}
                        </span>
                       <span class="font-bold">
                            {{ cryptoName.split('-')[0].toUpperCase() }}
                       </span>

                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { balance, crypto, cryptoName } = useCoins()
</script>