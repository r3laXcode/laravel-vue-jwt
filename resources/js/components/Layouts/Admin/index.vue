<template>
    <section>
        <Header />
        <router-view></router-view>
    </section>
</template>

<script>
import Header from './Header.vue';

export default {
    name:'ComponenteLayoutAdmin',
    mounted() {
        console.log('Component LayoutAdmin Mounted');
    },
    components: {
        Header,
    }
}
</script>

<style>

</style>
