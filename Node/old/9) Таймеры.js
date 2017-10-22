// 0. Влиения на процесс: ref() unref()
// 1. process.nextTick(f) = setTimeout(f, 0) до I/O
// 2. setEmmediate(f) = setTimeout(f, 0) после I/O
