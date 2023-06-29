function dodajDiv() {
  const div = document.createElement('div');
  div.className = 'wyjazdy';

  const html = `
    <div class="pole nazwa-wyjazdu">
      <p class="p-pole">Nazwa Wyjazdu:</p>
      <input type="text" name="nazwa-celu" id="nazwa-celu" class="cel" />
    </div>
    <div class="dane-wyjazdu">
      <div class="pole">
        <p class="p-pole">Data wyjazdu:</p>
        <input type="date" name="data-celu" id="data-celu" class="cel" />
      </div>
      <div class="pole">
        <p class="p-pole">Godzina:</p>
        <input
          type="time"
          name="godzina-celu"
          id="godzina-celu"
          class="cel"
        />
      </div>
      <div class="pole">
        <p class="p-pole">Ilość osób:</p>
        <input
          type="number"
          name="ilosc-osob"
          id="ilosc-osob"
          class="cel"
          readonly
        />
      </div>
      <div class="pole">
        <p class="p-pole">Cena Wyjazdu:</p>
        <input type="number" name="cena" id="cena" class="cel" readonly />
      </div>
    </div>
    <div class="pole opis-wyjazdu">
      <p class="p-pole">Opis:</p>
      <input type="text" name="opis" id="opis" class="cel opis" />
    </div>
    <img src="images/edit.png" alt="" class="ikonka" />
    <img src="images/gg-maps.png" alt="" class="ikonka" />
  `;

  div.innerHTML = html;

  document.body.appendChild(div);
}