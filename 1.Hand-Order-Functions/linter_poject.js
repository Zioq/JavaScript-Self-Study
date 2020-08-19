/**
 * THIS PROJECT IS A MINI SIZE OF SYSTEM WHICH WORKD PROCESSING SOFTWARE DOES.
 * In this code is designed for creating a small version of a linter using array methods
 */

let article = "HUAWEI’S TELECOMS gear is popular around the world thanks to its high quality and low prices. Not in America, where the Chinese giant is banished over (unproven) fears that it could be used by spies in Beijing to eavesdrop on Americans. But expelling Huawei from the United States—and pressing allies to do the same—was not enough for the Trump administration. It seems to want Huawei dead. Full stop. Last year the Department of Commerce (DoC) barred American firms from selling Huawei chips made in America, which oxygenate swathes of the global semiconductor industry. In May the DoC added a rule banning domestic and foreign firms from using American-built chipmaking equipment to create custom-made processors for Huawei On August 17th the DoC tightened the noose once again—this time, many experts think, for good. Its new rule prohibits anyone from selling any chips to Huawei, custom or not, if these were produced with American technology. This covers practically every chipmaker in the world, including those in China, thus closing loopholes that the global chip industry’s high-powered lawyers have found in the earlier edicts. The share price of MediaTek, a Taiwanese company which was hoping to sell Huawei generic components, plunged by 10% on the news.";

// Setting the overusedWords and unneccessaryWords
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually'];

// Split the article by ' ' to count words
const articleWords = article.split(' ');

//console.log(articleWords);
// Count words
console.log(articleWords.length);

// There is an array of words that are unneccessary. Iterate over artile to filter out these words and save it in new variable.
let betterArticle = articleWords.filter( word => {
    return !unnecessaryWords.includes(word);
});

// Count how may unnecessaryWord used in the article.

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of articleWords) {
    if (word === "really") {
        reallyCount +=1;
    } else if (word === "very") {
        veryCount += 1;
    } else if (word === "basically") {
        basicallyCount +=1;
    }
}
console.log(reallyCount);
console.log(veryCount);
console.log(basicallyCount);

//Count the Setnece 
let sentence = 0;

articleWords.forEach(word => {
    if (word[word.length - 1] === "." || word[word.length -1] ==='!') {
        sentence += 1;
    }
});
console.log(sentence);

//Check how many "HUAWEI" and "CHINA" is used

let countHuawei = 0;
let countChina = 0;

// Covert all letters as lowercases
let lowercasesArticle = articleWords.map(word => {
    return word.toLocaleLowerCase();
});

//console.log(lowercasesArticle);

for (word of lowercasesArticle) {
    if (word.match(/\bhuawei\b/)) {
        countHuawei +=1;
    } else if (word.match(/\bchina\b/)) {
        countChina +=1;
    }
}
console.log(countHuawei);
console.log(countChina);