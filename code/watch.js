['allEventsValue', 'timerValue', 'volumeValue', 'appearValue'].forEach(item => {
  this.watch[item] = this.getWatchFn(item)
})

aaa (a, b, c)
{
  const temArr = ['allEventsValue', 'timerValue', 'volumeValue']
  if (temArr.includes(a)) {
    this[a] = this[a].replace(/[^\.\d]/g, '')
  } else {
    if (this[a] !== c) {
      this[a] = this[a].replace(/[^\.\d]/g, '')
    }
  }
  this[a] = this.a.replace('.', '')
  if (this[a] !== temArr[0] && this[a].indexOf(c) < 0 && this[a].length > 0) {
    this[a] = this[a] + c
  }
}

getWatchFn (key)
{
  return function (key) {
    this.aaa(key, val)
  }
}

// watchAllEventsVal (val) 
// {
//   this.aaa('allEventsValue', val)
// }
// watchTimerVal (val) 
// {
//   this.aaa('timerValue', val, 's')
// }
// watchVolumeVal (val) 
// {
//   this.aaa('volumeValue', val, 'ul')
// }
// watchAppearVal (val) 
// {
//   this.aaa('appearValue', val, 'All')
// }