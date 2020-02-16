function doGet() {
   return HtmlService.createHtmlOutputFromFile('index')
}

function getData() {
  return SpreadsheetApp
      .openById('17zMVbzevOV7HNpGIjkFKi_l_kUeuX7NX2jG5GIL8Jow')
      .getActiveSheet()
      .getDataRange()
      .getValues();
}
