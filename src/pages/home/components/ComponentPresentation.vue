<template>
    <section class="component-presentation-section">
        <div class="repo-links">
            <a class="github-button" href="https://github.com/AlbanCrepel/vue-displacement-slideshow"
               data-icon="octicon-star"
               data-size="large"
               aria-label="Star AlbanCrepel/vue-displacement-slideshow on GitHub">Star</a>
        </div>

        <div class="presentation-content">
            <h2>Webgl image displacement transitions made simple.</h2>

            <displacement-list></displacement-list>
        </div>
    </section>
</template>

<script>

    import DisplacementList from "./DisplacementList.vue";

    export default {
        components: {DisplacementList},
        name : "ComponentPresentation"
    }

</script>

<style lang="scss" scoped>

    .component-presentation-section {
        background-color:$background-color;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:65px 20px 0 20px;
        min-width: 0;
    }

    h2 {
        font-weight:400;
        border-left: solid 10px black;
        color:white;
        padding-left:10px;
        margin: 40px 0;
    }

    .repo-links {
        align-self:flex-end;
    }

    .presentation-content {
        display: flex;
        justify-content: center;
        height:100%;
        flex-direction: column;
    }

    @media screen and (max-width: $responsive-width) {
        .component-presentation-section {
            padding:20px;
            flex: 0 0 auto;
        }

        .presentation-content{
            justify-content: flex-start;
            height:auto;
        }

        .slideshow-wrapper{
            width:100%;
            height:90vh;
        }
    }
</style>