<template>
    
    <div>
        <div class="work-list__items">

            <!-- List Item -->
            <slot name="listItem">
            </slot>

        </div>

        <!-- Preview -->
        <div class="work-list__preview">

            <figure class="image -is1x1 -fit-cover">
                <img :src="workPreview" alt="">
            </figure>

        </div>
    </div>

</template>
<script>
export default {
    props: {
        items: {
            required: true
        }
    },
    data(){
        return {
            workPreview: ''
        }
    },
    mounted() {
        const those = this;

        window.addEventListener('load', function() {

            const items = document.querySelectorAll('.' + those.items)

            items.forEach(item => {

                item.addEventListener('mouseenter', function(){
                    
                    const itemPreview = item.getAttribute('data-preview');
                    those.workPreview = itemPreview

                })
                

            });
        })
    }
}
</script>
