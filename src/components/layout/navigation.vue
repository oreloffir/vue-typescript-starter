<template>
    <nav :class="{isOpen}">
        <div class="title" v-text="title"></div>

        <menu :class="className">
            <button class="toggleButton" @click="toggle"></button>

            <ul>
                <router-link to="/">
                    <i class="material-icons">home</i>
                    <li v-text="'Home'"></li>
                </router-link>

                <router-link to="/example">
                    <i class="material-icons">assignment</i>
                    <li v-text="'Example'"></li>
                </router-link>

                <router-link to="/new-order">
                    <i class="material-icons">add_shopping_cart</i>
                    <li v-text="'Take Order'"></li>
                </router-link>
            </ul>
        </menu>
    </nav>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        name: 'Navigation',
    })
    export default class Navigation extends Vue {
        @Prop({required: true}) public title!: string;

        private isOpen = true;

        public toggle() {
            this.isOpen = !this.isOpen;
        }

        get className() {
            return [{
                open: this.isOpen,
            }];
        }
    }
</script>