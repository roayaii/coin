<template >
    <div class="relative w-full">
        <div v-show="active"  class="bg-black/30 fixed top-0 bottom-0 right-0 left-0 h-screen w-screen z-10000  select-none flex flex-col place-content-center place-items-center" >
            <TransitionScale>
                <div  class="false min-w-[240xp] lg:min-w-[320px] min-h-[200px] rounded-lg p-5 flex flex-col items-center justify-center gap-2 bg-white"  >
                    <loading-icon />
                </div>
            </TransitionScale>
        </div>
    </div>
</template>


<script setup>
    const props = defineProps({
        active: {
            type: Boolean,
            default: false,
        },
    });
</script>
