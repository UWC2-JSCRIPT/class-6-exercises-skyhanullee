$(document).ready(function() {
    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    const $newA = $('<a>');
    $newA.text('Buy Now!')
    $newA.attr('id', 'cta');

    // const $lastP = $('p');
    // $lastP.append($newA);
    $('main').append($newA);

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const $img = $('img');
    const $imgDataColor = $img.attr('data-color');
    console.log($imgDataColor);

    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    const $thirdLi = $('ul li:nth-child(3)');
    $thirdLi.toggleClass('highlight');


    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    $('p').remove();

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $newA.click((e) => {
        // console.log('buy now clicked');
        $newA.removeAttr('href');
        $newA.text('Added to cart');
    });

});