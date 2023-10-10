function dizisizTersKelimeler(cumle) {
    return cumle.split(" ").reverse().join(" ");
}
const girilenCumle = "Ali Ata Bak"
const tersineCevrilmiscumle = dizisizTersKelimeler(girilenCumle);
console.log(tersineCevrilmiscumle)

//!------------------------------------

function reverseWordsWithoutArray(sentence) {
    let reversedSentence = "";
    let word = "";
    for (let i = sentence.length - 1; i >= 0; i--) {
      if (sentence[i] === " " || i === 0) {
        if (i === 0) {
          word += sentence[i];
        }
        for (let j = word.length - 1; j >= 0; j--) {
          reversedSentence += word[j];
        }
  
        if (i !== 0) {
          reversedSentence += " ";
        }
  
        word = "";
      } else {
        word += sentence[i];
      }
    }
    return reversedSentence;
  }
  
  const inputSentence = "En Büyük Türkiye";
  const reversedSentence = reverseWordsWithoutArray(inputSentence);
  console.log(reversedSentence);