const originalChemicals = [
    { id: 1, chemicalName: 'Ammonium Persulfate', vendor: 'LG Chem', density: 3525.92, viscosity: 60.63, packaging: 'Bag', packSize: 100, unit: 'kg', quantity: 6495.18 },
    { id: 2, chemicalName: 'Caustic Potash', vendor: 'Formosa', density: 3172.15, viscosity: 48.22, packaging: 'Bag', packSize: 100, unit: 'kg', quantity: 8751.90 },
    { id: 3, chemicalName: 'Dimethylaminopropylamino', vendor: 'LG Chem', density: 8453.37, viscosity: 12.62, packaging: 'Barrel', packSize: 75, unit: 'L', quantity: 5964.61 },
    { id: 4, chemicalName: 'Mono Ammonium Phosphate', vendor: 'Sinopec', density: 1597.65, viscosity: 76.51, packaging: 'Bag', packSize: 105, unit: 'kg', quantity: 8183.73 },
    { id: 5, chemicalName: 'Ferric Nitrate', vendor: 'DowDuPont', density: 364.04, viscosity: 14.90, packaging: 'Bag', packSize: 105, unit: 'kg', quantity: 4154.33 },
    { id: 6, chemicalName: 'n-Pentane', vendor: 'Sinopec', density: 4535.26, viscosity: 66.76, packaging: 'N/A', packSize: 'N/A', unit: 't', quantity: 6272.34 },
    { id: 7, chemicalName: 'Glycol Ether PM', vendor: 'LG Chem', density: 6495.18, viscosity: 72.12, packaging: 'Bag', packSize: 250, unit: 'kg', quantity: 8749.54 }
];

let chemicals = [...originalChemicals]; 

function renderTable() {
    const tableBody = document.getElementById('chemicalTableBody');
    tableBody.innerHTML = '';

    chemicals.forEach((chemical, index) => {
        const row = `
            <tr>
                <td>${chemical.id}</td>
                <td contenteditable="true">${chemical.chemicalName}</td>
                <td contenteditable="true">${chemical.vendor}</td>
                <td contenteditable="true">${chemical.density}</td>
                <td contenteditable="true">${chemical.viscosity}</td>
                <td contenteditable="true">${chemical.packaging}</td>
                <td contenteditable="true">${chemical.packSize}</td>
                <td contenteditable="true">${chemical.unit}</td>
                <td contenteditable="true">${chemical.quantity}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteRow(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

function addRow() {
    const newId = chemicals.length + 1;
    chemicals.push({
        id: newId,
        chemicalName: 'New Chemical',
        vendor: 'New Vendor',
        density: 0,
        viscosity: 0,
        packaging: 'N/A',
        packSize: 'N/A',
        unit: 'kg',
        quantity: 0
    });
    renderTable();
}

function deleteRow(index) {
    chemicals.splice(index, 1);
    renderTable();
}

function refreshTable() {
    chemicals = [...originalChemicals]; 
    renderTable();
}

function saveData() {
    console.log('Data saved:', chemicals);
    alert('Data saved successfully!');
}

let sortDirection = false;
function sortTable(columnIndex) {
    const sortedData = chemicals.sort((a, b) => {
        const columnKeys = ['id', 'chemicalName', 'vendor', 'density', 'viscosity', 'packaging', 'packSize', 'unit', 'quantity'];
        const key = columnKeys[columnIndex];
        return sortDirection ? (a[key] > b[key] ? 1 : -1) : (a[key] < b[key] ? 1 : -1);
    });

    sortDirection = !sortDirection;
    renderTable();
}

window.onload = () => {
    renderTable();
};
