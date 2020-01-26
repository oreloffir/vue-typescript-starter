<template>
    <div class="exampleClass">
        <h1 v-text="title"></h1>
        <div class="formGroup">
            <label for="input" v-text="inputLabel"></label>
            <input id="input" :class="inputClassName" v-model="inputValue">
        </div>
        <button @click="buttonClicked(inputValue)" v-text="buttonLabel"></button>

        <div class="childrenWrapper">

            <child-example v-for="(child,index) in children"
                           class="child"
                           :name="child"
                           :key="index"
            ></child-example>
        </div>
    </div>
</template>


<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import ChildExample from './Child.vue';

    @Component({
        name: 'Example',
        components: {
            ChildExample,
        },
    })
    export default class Example extends Vue {
        @Prop({required: true}) public title!: string;

        buttonLabel: string = 'Add child';
        inputLabel: string = 'Child name: ';
        inputValue: string = '';
        inputHasError: boolean = false;
        children: string[] = [];

        public buttonClicked(name: string): void {
            if (! this.validateInput(name)) {
                this.inputHasError = true;
                return;
            }

            this.children.push(name);
            this.inputHasError = false;
            this.inputValue = '';
        }

        private validateInput(name: string): boolean {
            if ( name === null || name === undefined || name === '' ) {
                return false;
            }

            return true;
        }

        get inputClassName(): Array<string|object> {
            return [{
                error: this.inputHasError,
            }];
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../../assets/css/components/example/index";
</style>