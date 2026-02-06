export default function decorate(block) {
const ul = block.querySelector('ul');
  
  if (!ul) return;

  // Get all li elements
  const listItems = ul.querySelectorAll('li');
  
  // Create container div for table
  const tableContainer = document.createElement('div');
  tableContainer.className = 'table-container';

  // Create header row
  const headerRow = document.createElement('div');
  headerRow.className = 'table-row header-row';
  headerRow.innerHTML = `
    <div class="table-cell header-cell">First Name</div>
    <div class="table-cell header-cell">Last Name</div>
    <div class="table-cell header-cell">Employee ID</div>
  `;
  tableContainer.append(headerRow);

  // Convert each li to a table row
  listItems.forEach((li) => {
    const cells = li.querySelectorAll('.cards-card-body');
    
    const row = document.createElement('div');
    row.className = 'table-row';

    cells.forEach((cell) => {
      const tableCell = document.createElement('div');
      tableCell.className = 'table-cell';
      tableCell.textContent = cell.textContent.trim();
      row.append(tableCell);
    });

    tableContainer.append(row);
  });

  // Replace ul with new table structure
  ul.replaceWith(tableContainer);
}
