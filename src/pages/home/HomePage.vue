<template>
    <div class="homepage">
        <h1>vue displacement slideshow</h1>
        <div class="slideshow-wrapper">
            <vue-displacement-slideshow
                    :images="images"
                    :displacement="getDisplacements[getCurrentDisplacement]"
                    :intensity.number="0.2"
                    :speedIn.number="1.4"
                    :speedOut.number="1.4"
                    ease="Expo.easeInOut"
                    ref="displacement"
                    class="slideshow"
                    :key="getCurrentDisplacement"
                    @loaded="onLoaded"></vue-displacement-slideshow>

            <div class="slideshow-navigation-wrapper">
                <img :src="require('@/assets/svg/chevron-left.svg')"
                     class="slideshow-navigation-icon"
                     @click="previousImage"/>
                <img :src="require('@/assets/svg/chevron-right.svg')"
                     class="slideshow-navigation-icon"
                     @click="nextImage"/>
            </div>

            <div class="loader-wrapper" v-if="!loaded">
                <div class="loader">
                    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                      <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                        <animateTransform attributeType="xml"
                          attributeName="transform"
                          type="rotate"
                          from="0 25 25"
                          to="360 25 25"
                          dur="0.6s"
                          repeatCount="indefinite"/>
                        </path>
                      </svg>
                </div>
            </div>
        </div>

        <component-presentation class="presentation"></component-presentation>
    </div>
</template>

<script>
    import VueDisplacementSlideshow from "vue-displacement-slideshow";
    import ComponentPresentation from "./components/ComponentPresentation.vue";
    import {mapGetters} from "vuex";

    export default {
        name: 'HomePage',
        components: {
            ComponentPresentation,
            VueDisplacementSlideshow
        },
        data() {
            return {
                currentDisplacement: 0,
                loaded : false
            }
        },
        computed: {
            images() {
                return [
                    require("@/assets/images/1.jpg"),
                    require("@/assets/images/2.jpg"),
                    require("@/assets/images/3.jpg")
                ];
            },
            ...mapGetters([
                "getCurrentDisplacement",
                "getDisplacements"
            ])
        },
        methods: {
            nextImage() {
                this.$refs.displacement.next();
            },
            previousImage() {
                this.$refs.displacement.previous();
            },
            onLoaded(){
                this.loaded = true;
                this.$forceUpdate();
            }
        }
    }

</script>

<style scoped lang="scss">

    .homepage {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        position: relative;
    }

    .slideshow-wrapper {
        position: relative;
        min-width: 66vw;
    }

    .slideshow {
        background-color: lighten($background-color, 5);
    }

    #title-wrapper {
        position: fixed;
        bottom: 6%;
        left: 6%;
    }

    h1 {
        color: white;
        font-size: 60px;
        font-weight: 400;
        position: absolute;
        top: 40px;
        left: 40px;
        z-index: 1;
        text-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
    }

    .slideshow-navigation-wrapper {
        position: absolute;
        bottom: 0px;
        right: 0px;
        z-index: 1;
        background-color: rgba(255, 255, 255, 0.1);
    }

    .loader-wrapper {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slideshow-navigation-icon {
        width: 15px;
        padding: 15px 25px;
        cursor: pointer;
    }

    @media screen and (max-width: $large-screen) {
        h1 {
            max-width: 900px;
        }
    }

    @media screen and (max-width: $responsive-width) {
        .homepage {
            flex-direction: column;
            overflow: auto;
        }

        .slideshow-wrapper {
            width: 100%;
            height: 90vh;
        }
    }

    @media screen and (max-width: $small-screen) {
        h1 {
            font-size: 32px;
        }
    }

    @media screen and (max-width: 400px) {
        h1 {
            max-width: 300px;
        }
    }

</style>

