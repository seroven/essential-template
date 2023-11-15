<template>
    <AuthLayout>
        <Button label="Sign in with google" icon="pi pi-google" severity="secondary" size="large" :loading="loadingSubmit"
            outlined @click="submit" class="w-full"></Button>
        <div v-ripple class="p-2 bg-primary mt-2 border-round p-ripple text-center select-none">
            <font-awesome-icon icon="fa-brands fa-chrome" class="text-gray-50 mr-1" /> Sistema optimizado para navegador Google Chrome.
        </div>
    </AuthLayout>
</template>

<script>
import { useToast } from "primevue/usetoast";
import axios from "axios";
import { ToastGenerate } from "../../Shared/Classes/ToastGenerate.js";
import { useForm } from '@inertiajs/vue3'
import { TypeMessage } from "../../Shared/Constants/type-message";
import AuthLayout from "../../Layouts/AuthLayout.vue";
import getPrimeVueComponents from "../../primevue.components";

export default {
    components: {
        ...getPrimeVueComponents(),
        AuthLayout
    },
    props: {
        rut: String
    },
    mounted() {
    },
    data() {
        return {
            email: "",
            form: {
                email: "",
                password: "",
            },
            loadingSubmit: false,
            toast: useToast(),
        };
    },
    methods: {
        submit() {
            // this.loadingSubmit = true;
            console.log('Send');
            this.$inertia.visit('/solicitud')
            // axios.post(route("auth.login"), this.form).then((response) => {
            //     if (response.data.code == 200) {
            //         this.$inertia.visit('/facturas')
            //     } else {
            //         this.loadingSubmit = false;
            //         this.toast.add(ToastGenerate.gen(TypeMessage.LOGIN_ERROR))

            //     }
            // });
        }
    },
};
</script>