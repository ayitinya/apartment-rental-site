<script setup>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const props = defineProps({
    data: {
        required: true
    },
    slidesPerView: {
        default: 1
    },
    autoplayDelay: {
        default: 6000
    },
    responsiveLayout: {
        default: {
            400: {
                slidesPerView: 2
            },
            600: {
                slidesPerView: 3
            },

            1024: {
                slidesPerView: 4,
            },
        }
    }
})

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay]
</script>

<template>
    <div class="carousel-container">
        <div class="carousel-items" ref="carouselItems">
            <Swiper :modules="modules" :slides-per-view="1" :space-between="10" :loop="true" navigation
                :pagination="{ clickable: true }"
                :autoplay="{ delay: autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: true }"
                :breakpoints="responsiveLayout" :centeredSlides="true">
                <template v-for="item in data">
                    <SwiperSlide>
                        <slot name="item" v-bind="item"></slot>
                    </SwiperSlide>
                </template>

            </Swiper>
        </div>
    </div>
</template>

<style scoped>
</style>