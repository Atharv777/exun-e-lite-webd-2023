const makeSentence = (arr) => {
    if (arr.length === 1) {
        return arr[0].join("");
    }
    const sentenceArr = [];

    for (let i = 0; i < arr[0].length; i++) {
        const wordArr = [];

        for (let j = 0; j < arr.length; j++) {
            wordArr.push(arr[j][i])
        }

        sentenceArr.push(wordArr.join(""))

    }

    return (sentenceArr.join(" "))
}