
/**
 * Toggles "done" class on <li> element
 */
const doneListItem = (function(e) {
  console.log('li clicked');
  e.preventDefault();
  let $this = $(this);
  $this.parent().toggleClass('done');
});

/**
* Delete element when delete link clicked
*/
const deleteListItem = function(e) {
  let $this = $(this);
  $this.fadeOut("normal", function() {
    $this.parent().remove();
  });
  
};

/**
* Adds new list item to <ul>
*/
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();
  // rest here...

  console.log(`add item clicked`);
  const $todayList = $('ul.today-list');

  // create new list, span, and delete elements
  const $newListItem = $('<li>');
  const $newText = $('<span>');
  const $newDelete = $('<a>');

  // set span text from input
  $newText.text(text);

  // set delete text for delete button
  $newDelete.text('Delete');

  // set delete class
  $newDelete.attr('class', 'delete');

  // append span to list element
  $newListItem.append($newText);

  // append delete to list element
  $newListItem.append($newDelete);

  // append list element to rest of the list
  $todayList.append($newListItem);

  // clear input textbox for next list item
  $('input').val('');

  // listener for done
  const $doneItem = $('li span');
  $doneItem.click(doneListItem);

  // listener for delete
  const $deleteItem = $('.delete');
  $deleteItem.click(deleteListItem);
};

// add listener for add
const $addItem = $('.add-item');
$addItem.click(addListItem);

// listener for done
const $doneItem = $('li span');
$doneItem.click(doneListItem);

// listener for delete
const $deleteItem = $('.delete');
$deleteItem.click(deleteListItem);

