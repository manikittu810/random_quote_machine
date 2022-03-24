const quoteArray = [
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "Don't let yesterday take up too much of today", author: "Will Rogers" },
    { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { quote: "People who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen" },
    { quote: "The man who has confidence in himself gains the confidence of others.", author: "Hasidic Proverb" },
    { quote: "We know what we are, but not what we may be.", author: "William Shakespeare" }
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    const quoteNow = quoteArray[randomIndex];
    $("#text").html(quoteNow.quote);
    // Current Author
    $("#author").html(quoteNow.author);
    let currentHtml = $("#text").html();
    currentHtml = currentHtml.replace(/ /g, "%20");
    console.log(currentHtml);
    $("a").attr("href", "https://twitter.com/intent/tweet?text=" + currentHtml);
};
newQuote();

$("#new-quote").click(function () {
    newQuote();
});
