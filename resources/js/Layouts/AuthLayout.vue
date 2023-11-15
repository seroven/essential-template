<template>
    <Toast position="top-left" />
    <div class="w-screen h-screen grid p-0 relative">

        <div class="col-12 md:col-5 flex p-0 flex-column justify-content-between align-items-center relative"
            id="login-panel">
            <div class="mb-5 flex justify-content-center z-2 pt-6">
                <div class="w-15rem" id="login-slot-group-image">
                    <img src="/images/logo_grupo_flesan.png" class="w-full">
                </div>
            </div>
            <div class="surface-card py-4 shadow-2 border-round w-full sm:w-25rem z-3 px-5" id="login-slot">
                <div class="w-full h-5rem flex justify-content-center mb-3" id="login-slot-portal-image">
                    <img src="/images/logo_portal_proveedores.png" class="h-full">
                </div>
                <main>
                    <slot />
                </main>
            </div>
            <div class="w-full flex  bg-white z-2">
                <img src="/images/cinta_logos.png" class="w-full">
            </div>

            <div class="absolute left-0 right-0 bottom-0 top-0 z-1" id="images-gray-squares"></div>

        </div>
        <div class="md:col-7 p-0" id="image-panel">

            <Carousel :value="images" :numVisible="1" :numScroll="1" class="h-full" circular :autoplayInterval="5000">
                <template #item="slotProps">
                    <div class="w-full h-full relative">
                        <div class="w-full h-full bg-cover bg-center" :style="{backgroundImage: `url(${slotProps.data.path})`}">

                        </div>

                        <div id="background-image-title"
                            class="absolute right-0 font-opensans-italic flex flex-column pl-5 py-1 pr-4 color-title-background justify-content-center align-items-center ml-2"
                            style="bottom: 3rem;">
                            <div class="font-semibold text-2xl" id="image-title-panel">
                                {{ slotProps.data.description }}
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>




        </div>



    </div>
</template>

<script>
import getPrimeVueComponents from "../primevue.components.js";

export default {
    components: {
        ...getPrimeVueComponents(),
    },
    data() {
        return {
            images: [
                {
                    path: '/images/projects/project01.jpg',
                    description: 'Ex Clínica Servet, Providencia'
                },
                {
                    path: '/images/projects/project02.jpg',
                    description: 'Fachada Icono'
                },
                {
                    path: '/images/projects/project03.jpg',
                    description: 'Habilitación IKEA, Cerrillos'
                },
                {
                    path: '/images/projects/project04.jpg',
                    description: 'Planta Lixiviación Codelco Andina, Los Andes'
                },
                {
                    path: '/images/projects/project05.jpg',
                    description: 'Voladura Controlada, Edificio Hotel Placas Los Bronces, Los Andes'
                },
            ]
        }
    }
};
</script>

<style scoped>
#background-image-title {
    background: url('/public/images/fondo_texto_foto.png');
    background-repeat: repeat-x;
    background-size: cover;
    background-position-x: left;
}

#images-gray-squares {
    background: url('/public/images/background.png');
    background-repeat: repeat-x;
    background-size: cover;
    background-position-x: center;
}

.background-text-color {
    background-color: #f41b35;
}

.background-text {
    background: linear-gradient(to right,
            #0c0c0cb5,
            #0c0c0c05,
            rgb(0 0 0 / 0%));
}

.color-title-background {
    color: #7b7873;
}

.form-container {
    max-width: 60rem;
}



@media screen and (min-width: 2560px) {
    #login-panel {
        width: 30%;
    }

    #image-panel {
        width: 70%;
    }

    #image-title-panel {
        font-size: 2rem !important;
    }

    #login-slot {
        width: 30rem !important;
    }

    #login-slot-portal-image {
        height: 7rem !important;
    }

    #login-slot-group-image {
        width: 20rem !important;
        margin-top: 2rem;
    }

}

@media screen and (max-width: 1366px) { 
    #image-title-panel {
        font-size: 1.3rem !important;
    }
}
</style>
