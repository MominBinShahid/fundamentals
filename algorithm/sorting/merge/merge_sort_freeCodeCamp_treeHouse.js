// Link to the course: https://www.youtube.com/watch?v=8hly31xKli0

/**
 Sorts a list in ascending order
 Returns a new sorted list

 Divide: Find the mid-point of the list and divide into sublists
 Conquer: Recursively sort the sublists created in previous step
 Combine: Merge the sorted sublists created in previous step
 */
function merge_sort(list) {
  // stopping condition
  if (list.length <= 1) return list;

  const [left_half, right_half] = split(list);
  const left = merge_sort(left_half);
  const right = merge_sort(right_half);

  return merge(left, right);
}

/**
 Divide the unsorted list at midpoint into sublists
 Return two sublists - left and right
 */
function split(list) {
  const mid = Math.floor(list.length / 2);

  const left = list.slice(0, mid);
  const right = list.slice(mid);

  return [left, right];
}

/**
 Merge two lists (arrays), sort them in process
 Returns a new merged list
 */
function merge(left, right) {
  const l = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      l.push(left[i]);
      i++;
    } else {
      // left[i] >= right[j]
      l.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    l.push(left[i]);
    i++;
  }

  while (j < right.length) {
    l.push(right[j]);
    j++;
  }

  return l;
}

// test case
function verify_sorted(list) {
  const n = list.length;

  if (n === 0 || n === 1) {
    return true;
  }

  return list[0] < list[1] && verify_sorted(list.slice(1));
}

const main = () => {
  const alist = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const l = merge_sort(alist);

  console.log("Results →");
  console.log(alist, verify_sorted(alist) ? "Sorted ✅" : "Not Sorted ❌");
  console.log(l, verify_sorted(l) ? "Sorted ✅" : "Not Sorted ❌");
};

main();
