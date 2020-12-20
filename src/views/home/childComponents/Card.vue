<template>
  <IOverLaysCard v-if="type==0" />
  <IHorizontalCard v-else-if="type==1" />
  <ICapsCard v-else-if="type==2" />
</template>

<script>
import IOverLaysCard from 'components/common/card/homecards/IOverLaysCard'
import IHorizontalCard from 'components/common/card/homecards/IHorizontalCard'
import ICapsCard from 'components/common/card/homecards/ICapsCard'
import { HomeCardData } from 'components/common/card/homecards/index'
export default {
  props: {
    type: {
      type: Number,
      default: 0
    },
    data: {
      type: HomeCardData,
      default: () => {
        return new HomeCardData()
      }
    }
  },
  components: {
    IOverLaysCard,
    IHorizontalCard,
    ICapsCard
  }
}
</script>

<style>
</style>