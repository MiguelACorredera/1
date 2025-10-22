def sorted(word):
    print(word)
    word = list(word)
    print(type(word), word)
    word.sort()
    print(word)
    sortedword = ""
    for i in word:
        sortedword = sortedword + i
    return sortedword

def ranks(arr):
    res = []
    for i in range(len(arr)):
        res.append(1)
        for j in range(len(arr)):
            if (arr[i] > arr[j]) == False and arr[i] != arr[j]:
                res[i] = res[i] +1
            # elif
        print(res)







arr = [2,4,5,1,1,6,8,4,5]

res = ranks(arr)