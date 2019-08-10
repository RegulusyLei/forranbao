<script>
export default {
  data () {
    return {
      attr1: '',
      attr2: ''
    }
  },
  methods: {
    test1 () {
      this.$emit('event', {
        attr1: this.attr1,
        attr2: this.attr2
      })
    },
    test2 () {
      this.$emit('event', {
        attr1: this.attr1,
        attr2: this.attr2
      })
    }
  }
}
</script>
