const grabtext = await page.evaluate(() => {
    const text = Array.from(document.querySelectorAll(".display-flex span:nth-child(1) span:nth-child(1) a span:nth-child(1) span:nth-child(1)"));
    let names = [];
    text.forEach((Name)=>{
        console.log(Name.innerText);
        names.push(Name.innerText);
        console.log(names);
    });
    return names;
});


console.log(grabtext);

