$("#myList").on("click", "button", function (event) {
  event.stopPropagation();
  $(this).closest("li").remove();
});
$("#myList").on("click", "li", function () {
  $(".modal-body").text($(this).find("span").text());
  const modal = new bootstrap.Modal(document.getElementById("taskModal"));
  modal.show();
});
$("#addBtn").on("click", function () {
  const taskText = $("#fld").val();
  const newLi = $("<li></li>").addClass("list-group-item d-flex justify-content-between align-items-center");
  const newSpan = $("<span></span>").text(taskText);
  const newBtn = $("<button></button>").addClass("btn btn-outline-danger").text("Delete");
  newLi.append(newSpan, newBtn);
  $("#myList").append(newLi);
  $("#fld").val("");
});