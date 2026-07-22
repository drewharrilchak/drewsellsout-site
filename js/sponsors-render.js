document.addEventListener('DOMContentLoaded', function () {
  var listEl = document.getElementById('sponsor-list');
  var countEl = document.getElementById('sponsor-count');
  var totalEl = document.getElementById('sponsor-total');
  if (!listEl || typeof SPONSORS === 'undefined') return;

  var total = 0;
  var html = '';

  SPONSORS.forEach(function (s) {
    total += s.amount;
    var itemsHtml = s.items.map(function (item) {
      return '<p>' + item + '</p>';
    }).join('\n');
    var noteHtml = s.note ? ' ' + s.note : '';

    html += '<div class="sponsor-entry">' +
      '<h3><a href="' + s.url + '" target="_blank" rel="noopener">' + s.name + '</a> - $' + s.amount.toLocaleString() + noteHtml + '</h3>' +
      itemsHtml +
      '</div>';
  });

  listEl.innerHTML = html;
  if (countEl) countEl.textContent = SPONSORS.length;
  if (totalEl) totalEl.textContent = '$' + total.toLocaleString();
});
