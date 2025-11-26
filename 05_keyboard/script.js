const insert = document.getElementById("insert");
let isTableActive = false;

window.addEventListener("keydown", (e) => {
  if (!isTableActive) {
    insert.innerHTML = `
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>KeyCode</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            </tbody>
        </table>
      </div>
      <button id="resetBtn">Reset</button>
    `;
    
    isTableActive = true;

    document.getElementById("resetBtn").addEventListener("click", resetTable);
  }

  const tableBody = document.getElementById("tableBody");
  
  const newRow = document.createElement("tr");
  newRow.classList.add("new-row");
  
  newRow.innerHTML = `
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  `;

  tableBody.appendChild(newRow);
  
  const container = document.querySelector('.table-container');
  container.scrollTop = container.scrollHeight;
});

const resetTable = () => {
  isTableActive = false;
  insert.innerHTML = `
    <div class="key">Press any key to get the keyCode</div>
  `;
};