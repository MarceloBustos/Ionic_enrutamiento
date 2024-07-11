<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Index</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <h1>Index</h1>
            <ion-router-outlet></ion-router-outlet>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet } from '@ionic/vue';
</script>

<style></style>