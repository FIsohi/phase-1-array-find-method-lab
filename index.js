// code your solution here
superbowlWin = (record) => {
    let result = record.find( record => record.result === "W" )
    return result.year
  }