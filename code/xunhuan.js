const data = [
  {
    name: 1,
    child: [
      {
        name: 11,
      },
      {
        name: 12
      },
      {
        name: 13
      }
    ]
  },
  {
    name: 2,
    child: [
      {
        name: 21,
      },
      {
        name: 22
      },
      {
        name: 23
      }
    ]
  }
]

const addCustomKey = (arr, childKey, obj) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let key in obj) {
      // this.$set(arr[i], key, obj[key])
      arr[i][key] = obj[key]
    }
    if (arr[i][childKey].length) {
      addCustomKey(arr[i][childKey], childKey, obj)
    }
  }
}


addCustomKey(data, 'child', { sex: 1 })