const quoteItem = [
    {
        quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, sint! Delectus numquam aliquid iusto ullam!",
        author: "confusicius"
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, sint! Delectus numquam aliquid iusto ullam!",
        author: "shakes speare"
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, sint! Delectus numquam aliquid iusto ullam!",
        author: "tagore"
    }
]

// count value
let count = 0;


// input from html
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.querySelector(".quote-item button");

// btn
btn.addEventListener("click", () => {
    // next quote
    count++;

    // late to first quote
    if (count == quoteItem.length) {
        count = 0;
    }

    // data to html
    quote.innerHTML = quoteItem[count].quote;
    author.innerHTML = `- ${quoteItem[count].author}`;
})

// data to html
quote.innerHTML = quoteItem[count].quote;
author.innerHTML = `- ${quoteItem[count].author}`;