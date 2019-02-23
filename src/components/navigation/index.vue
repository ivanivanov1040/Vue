<template>
    <b-row>
        <b-col>
            <b-navbar toggleable="md" type="light" variant="secondary">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <router-link tag="b-navbar-brand" to="/">
                        <a>Новини</a>
                </router-link>
                <router-link tag="b-navbar-brand" to="/searchplayer">
                        <a>Търси играч</a>
                </router-link>
                <router-link tag="b-navbar-brand" to="/store">
                        <a>Магазин</a>
                </router-link>
            </b-navbar>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "index",
        components:{      
        }
    }
</script>

<style scoped>
.navbar
{
    background-color:blue !important;
}
.navbar a
{
    color: white !important;
}
</style>