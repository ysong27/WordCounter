
$(document).ready(function () {

    // words array
    function getWordsFromText(text) {
        text = text.trim().toLowerCase().replace(/[^a-z0-9]/gi, ' ');
        var words = text.split(/\s+/);
        return words;
    }

    // words dictionary with count (of each word)
    function getWordCountDictionary(words) {
        wordDict = new Object();
        for (word of words) {
            if (!wordDict[word]) {
                wordDict[word] = 1;
            } else {
                wordDict[word]++;
            }
        }
        return wordDict;
    }

    function getInputText() {
        var inputText = $("#userText").val();
        if (inputText != "") {
            return inputText;
        }
        return "";
    }

    function createWordCountTable(wordDict) {
        var wordCountTableBodyContent = "";
        for (var word in wordDict) {
            wordCountTableBodyContent += `
            <tr><td>${word}</td><td>${wordDict[word]}</td></tr>      
          `;
        }
        // display word count table
        var wordCountTable = `
          <table>
            <thead>
              <th>Word</th>
              <th>Count</th>
            </thead>
            <tbody>
              ${wordCountTableBodyContent}
            </tbody>
          </table>`;
        return wordCountTable;
    }

    $("#wordCountButton").on("click", function () {

        // get text, words, and word count dictionary
        var text = getInputText();
        if (text != "") {
            var words = getWordsFromText(text);
            var wordsDict = getWordCountDictionary(words);
            console.log(wordsDict);

            // create and display wordCountTable
            var wordCountTable = createWordCountTable(wordDict);
            $("#wordCountTableContainer").html(wordCountTable);
        }
    });
});



