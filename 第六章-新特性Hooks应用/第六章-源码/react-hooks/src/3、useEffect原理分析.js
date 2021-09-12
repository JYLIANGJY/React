let _deps; // _deps 记录 useEffect 上一次的 依赖

function useEffect(callback, depArray) {
  const hasNoDeps = !depArray; // 如果 dependencies 不存在
  const hasChangedDeps = _deps
    ? !depArray.every((el, i) => el === _deps[i]) // 两次的 dependencies（传递过来的依赖与上一次的依赖是否相同） 是否完全相等,如果相等，没有变化，返回false,如果有变化返回true.
    : true;
  /* 如果 dependencies 不存在，或者 dependencies 有变化*/
  if (hasNoDeps || hasChangedDeps) {
    callback();
    _deps = depArray;
  }
}