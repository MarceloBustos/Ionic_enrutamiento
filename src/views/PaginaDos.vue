<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Página 2</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true" class="ion-padding">
            Contenido de la página 2
            <ion-button router-link="/pagina1">
                Ir a página 1
            </ion-button>
            <h1>Saludo: {{ $route.params.mensaje }}</h1>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
</script>

<style scoped></style>