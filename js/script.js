var searchButton = document.querySelector(".search_hotel_show");
var sec = document.querySelector(".form_sec_search");
var formFind = document.querySelector(".hotel_search_form");
var entrydateFind = document.querySelector("#entrydate");
var outdateFind=document.querySelector("#outdate");

if (typeof(searchButton) != "undefined" && searchButton !=null){
searchButton.addEventListener ("click", function (event) {event.preventDefault();
  sec.classList.toggle("form_sec_search-show");
});
}

document.addEventListener("DOMContentLoaded", function(){
  sec.classList.remove("no-js");
})


formFind.addEventListener("submit", function (event) {
  if (!entrydateFind.value || !outdateFind.value) {
    event.preventDefault();
    sec.classList.remove("form_data_error");
    sec.offsetWidth = sec.offsetWidth;
    sec.classList.add("form_data_error");
  } });