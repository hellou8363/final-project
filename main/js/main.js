const mountainInfoTemplate = (mountainName, text, favoriteCount) => `
<div class="item">
<img src="./img/gray.png" alt="img" />
<h3 id="mountainName">${mountainName}</h3>
<p id="text">${text}</p>
<form action="#" method="get">
  <button
    type="submit"
    name="favorite"
    value="true"
    class="favorite"
  ></button>
  <span class="favorite-count">${favoriteCount}</span>
</form>
</div>`;

