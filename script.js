// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const local = {};
dayjs.locale(local);

$(function () {
  const hour = dayjs().format('dd/MM/YYYY/H');

  function saveText() {
      $('.saveBtn').on('click', function () {
          const key = $(this).parent().attr('id');
          const value = $(this).siblings('.description').val();
          console.log(key, value);
          localStorage.setItem(key, value);
      });
  }

  function hourcolor() {
      $('.time-block').each(function () {
          const blockhour = parseInt(this.id);
          $(this).toggleClass('past', blockhour < hour);
          $(this).toggleClass('present', blockhour === hour);
          $(this).toggleClass('future', blockhour > hour);
      });
  }

  function refresh() {
      $('.time-block').each(function () {
          const blockhour = parseInt(this.id);
          if (blockhour === hour) {
              $(this).removeClass('past future').addClass('present');
          } else if (blockhour < hour) {
              $(this).removeClass('future present').addClass('past');
          } else {
              $(this).removeClass('present past').addClass('future');
          }
      });
  }

  $('.time-block').each(function(){
    const key =$(this).attr('id');
    const value =localStorage.getItem(key);
    $(this).children('.description').val(value)
  });

  function updatetime(){
    
  }

  saveText();
  hourcolor();
  refresh();
});