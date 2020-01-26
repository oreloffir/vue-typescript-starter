<template>
    <label v-text="name"></label>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        name: 'ChildExample',
    })
    export default class ChildExample extends Vue {
        @Prop() private name!: {
            type: string,
            required: true,
        };
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/components/example/child";
</style>