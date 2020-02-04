<template>
    <div class="takeOrder">
        <h1 v-text="title"></h1>

        <form>
            <div class="formGroup">
                <label for="idInput" v-text="'Order ID: '"></label>
                <input id="idInput" v-model="order.id" disabled>
            </div>
            <div class="formGroup">
                <label for="products" v-text="'Add Product: '"></label>
                <input id="products" v-model="productName" v-on:keyup.enter="addProduct(productName)">
                <div class="childrenWrapper">
                    <child-example v-for="(child,index) in order.products"
                                   class="child"
                                   :name="child"
                                   :key="index"
                    ></child-example>
                </div>
            </div>
            <div class="formGroup">
                <label for="preparationTime" v-text="'Time: '"></label>
                <input id="preparationTime" class="orderTime" v-model="preparationTime" disabled>
            </div>
        </form>

        <button @click="takeOrder()" v-text="'Take Order'"></button>
    </div>
</template>


<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import ChildExample from './Child.vue';
    import Order from '@/assets/ts/Entities/Order';
    import Queue from '@/assets/ts/Entities/Queue';

    @Component({
        name: 'TakeOrder',
        components: {
            ChildExample,
        },
    })
    export default class TakeOrder extends Vue {
        @Prop({required: true}) public title!: string;

        private productName: string = '';
        private order: Order = new Order();
        private queue: Queue = new Queue();

        public addProduct(productName: string): void {
            this.order.addProduct(productName);

            this.productName = '';
        }

        public takeOrder(): void {
            if (!this.validateOrder()) {
                return;
            }

            this.addToQueue(this.order);
            this.cleanForm();
        }

        public get preparationTime(): string {
            return TakeOrder.msToTime(this.order.preparationTime);
        }

        private static msToTime(duration: number): string {
            return ((duration / 1000) % 60) + ' sec';
        }

        private validateOrder(order: Order = this.order): boolean {
            return true;
        }

        private addToQueue(order: Order): void {
            this.queue.addOrder(order);
        }

        private cleanForm(): void {
            this.order = new Order();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../../assets/css/components/takeOrder/index";
</style>
