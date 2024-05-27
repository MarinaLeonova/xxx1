//Поиск
function searchBooks() {
  let query = document.getElementById('search-input').value;
  let resultsDiv = document.getElementById('results');

  let db = openDatabase('biblioteka.sqlite', '1.0', 'База данных библиотеки', 2 * 1024 * 1024);

  db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM Biblioteka WHERE Название_книги LIKE ?', ['%' + query + '%'], function(tx, results) {
      resultsDiv.innerHTML = '';
      if (results.rows.length == 0) {
        resultsDiv.innerHTML = 'К сожалению, ничего не найдено.';
      } else {
        for (let i = 0; i < results.rows.length; i++) {
          let row = results.rows.item(i);
          let resultDiv = document.createElement('div');
          resultDiv.textContent = row.Название_книги + ' (' + row.Автор + ')';
          resultsDiv.appendChild(resultDiv);
        }
      }
    });
  });
}