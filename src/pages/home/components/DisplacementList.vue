<template>
    <div class="displacement-section-wrapper">
        <div class="try-wrapper">
            <img :src="require('@/assets/svg/arrow.svg')" class="try-image" />
            <p class="try">try with different displacement images</p>
        </div>

        <div class="displacements-wrapper">
            <img v-for="(image, index) in getDisplacements"
                 :src="image"
                 class="displacement-image"
                 alt="displacement"
                :class="{ 'selected' : index === getCurrentDisplacement }"
                 @click="setCurrentDisplacement(index)">
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        name : "DisplacementList",
        computed : {
            ...mapGetters([
                "getCurrentDisplacement",
                "getDisplacements"
            ])
        },
        methods : {
            ...mapActions([
                "setCurrentDisplacement"
            ])
        }
    }

</script>

<style lang="scss" scoped>

    .displacement-section-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .try-wrapper {
        display:flex;
        align-items:center;
    }

    .try-image {
        height:40px;
        margin-right:10px;
    }

    .try {
        font-family: 'Reenie Beanie', cursive;
        font-size:24px;
        color:$light-gray;
    }

    .displacements-wrapper {
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap:wrap;
        max-width:250px;
    }

    .displacement-image {
        width:100px;
        height:100px;
        margin:10px;
        object-fit: cover;
        cursor:pointer;

        &.selected {
            border: solid 5px black;
        }
    }

</style>