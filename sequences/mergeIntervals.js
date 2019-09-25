/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */

var merge = function(intervals) {
    //add start and ends indexes to obj
    const dict = {};
    const mergedIntervals = [];
    for(let i = 0; i < intervals.length; i += 1){
      dict[intervals[i][0]] = intervals[i][1];
    }
    console.log(dict);
    let currStart = Object.keys(dict)[0];
    let currEnd = dict[currStart];
    for(let start of Object.keys(dict)){
      console.log(currStart,currEnd)
      if(currEnd >= start) currEnd = dict[start]
      else {
        mergedIntervals.push([Number(currStart),currEnd]);
        currStart = start;
        currEnd = dict[start];
      }
    }
    console.log(dict)
    return mergedIntervals;
};
console.log(merge([[2,6],[15,18],[8,10],[1,3]]))