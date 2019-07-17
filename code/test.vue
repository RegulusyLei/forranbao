<template>
  <div class="collapse">
    <div class="item" v-for="(item, index) in options" :key="index">
      <p class="title">
        <i class="el-icon-caret-bottom" @click="item.visible = !item.visible"></i>
        <span>{{item.title}}</span>
      </p>
      <ul class="content" v-if="item.visible">
        <li v-for="(items, indexs) in item.child" :key="indexs">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          title: '标题内容',
          visible: false,
          child: [
            { title: '子标题1' },
            { title: '子标题2' },
            { title: '子标题3' },
            { title: '子标题4' },
            { title: '子标题5' }
          ]
        },
        {
          title: '标题内容',
          visible: false,
          child: [
            { title: '子标题1' },
            { title: '子标题2' },
            { title: '子标题3' },
            { title: '子标题4' },
            { title: '子标题5' }
          ]
        }
      ]
    }
  },
  methods: {
    handleChange (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .collapse {
    width: 500px;
    .item {
      border: 1px solid #d1d1d1;
      .title {
        margin: 0;
        padding: 10px 0;
        border: 1px solid #ddd;
      }
    }
  }
</style>
