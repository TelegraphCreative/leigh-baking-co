<template>
    <form @submit.prevent="handleSubmit">
        
        <slot></slot>

        <input type="text" name="_gotcha" style="display:none" />
        <input type="hidden" name="_subject" value="Hire Telegraph - Form Submission" />
        <button type="submit" class="btn -full">Send</button>

    </form>    
</template>

<script>
import { Validation } from '../_vendor/Validation';
    
export default {
    mounted(){
        const _this = this
        window.addEventListener("load", function() {
            const form = _this.$el
            const submitBtn = form.querySelector('[type="submit"]')

            Validation.init(form, true);

        });
    },
    methods: {

        handleSubmit(event){
                const _this = this
                const form = _this.$el
                const submitBtn = form.querySelector('[type="submit"]')

                Validation.validateSection(form).then(result => {
                    submitBtn.disabled = false;
                    if (result === true) {

                        const data = new FormData(form)
                        const req = new XMLHttpRequest()

                        req.open(form.method, form.action)
                        req.send(data)

                        console.log(form)
                        console.log(data)
                        
                    } else {
                        // section invalid, result is array of invalid inputs
                        Validation.focusInput(result[0]);
                        submitBtn.disabled = true;
                    }
                })

        }
    }
}
// classInputGroup: 'field-group'
// classInputGroupError: '-error'
// classInputGroupSuccess: '-success'
// classLabel: 'standard-label'
// classError: 'helper-text'
</script>



