<template>
  <main>
    <SectionTransport/>
    <SectionService/>
    <SectionProcedure/>
    <SectionResults/>
    <SectionFeedback/>
    <SectionForm/>
  </main>
</template>

<script>
import SectionTransport from './SectionTransport.vue'
import SectionService from './SectionService.vue'
import SectionProcedure from './SectionProcedure.vue'
import SectionResults from './SectionResults.vue'
import SectionFeedback from './SectionFeedback.vue'
import SectionForm from './SectionForm.vue'


export default {
    name:'BaseMain',
    components:{
        SectionTransport,
        SectionService,
        SectionProcedure,
        SectionResults,
        SectionFeedback,
        SectionForm
    }
}
</script>

<style lang="scss" scoped>

</style>