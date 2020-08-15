$(`form`).submit(function () { // Change
  const th = $(this);
  $.ajax({
    type: `POST`,
    url: `vendor/mail.php`, // Change
    data: th.serialize()
  }).done(function () {
    console.log(`yes`);
    $(`.modal`).fadeOut();
    alert(`Успешно`);
    setTimeout(function () {
      // Done Functions
      th.trigger(`reset`);
    }, 1000);
  });
  return false;
});
