$(`form`).submit(function () { // Change

  const check = document.querySelector(`#check`)

  const th = $(this);
  const purse = $(`#form-purse-name`);
  const price = $(`#form-purse-price`);

  if(!check.checked) {
    purse.remove();
    price.remove();
  }

  $.ajax({
    type: `POST`,
    url: `vendor/mail.php`, // Change
    data: th.serialize()
  }).done(function () {
    console.log(`yes`);
    $(`.modal`).fadeOut();
    // alert(`Успешно`);
    window.location.href = "./thanks.html";
    setTimeout(function () {
      // Done Functions
      th.trigger(`reset`);
    }, 1000);
  });
  return false;
});
