<template>
    <AppLayout>

    </AppLayout>
</template>

<script>
import getPrimeVueComponents from "../../primevue.components";
import AppLayout from "../../Layouts/AppLayout.vue";
export default {
    components: {
        ...getPrimeVueComponents(),
        AppLayout
    }
}
</script>