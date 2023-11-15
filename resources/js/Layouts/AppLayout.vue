<template>
    <div class="min-h-screen relative bg-gray-50 flex flex-column">
        <div class="w-full h-full flex-1">

            <Sidebar></Sidebar>

            <main class="">
                <slot />
            </main>
        </div>
        <div class="h-4rem flex flex-column text-white justify-content-center align-items-center background-red">
            <span class="font-semibold text-md">Desarrollado por la Gerencia de Procesos y Tecnología</span>
            <span class="text-xs">Todos los derechos reservados. <b>Version</b> 1.1.0 © 2023</span>
        </div>
    </div>
</template>

<script>
import Sidebar from "../Components/Sidebar.vue"

export default {
    components: {
        Sidebar
    },
    mounted() {

    }
}
</script>


<style >
@import './css/sidebar.css';

.background-red {
    background-color: #f41b35;
}
</style>