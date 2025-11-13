<!DOCTYPE html>
<html>
<head>
    <title>HCPCS Fee Lookup</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.6;
        }

        input[type="text"] {
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 15px;
            width: 250px;
            font-size: 14px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
        }

        th, td {
            padding: 8px 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            font-size: 12px;
        }

        th {
            background-color: #f2f2f2;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 12px;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        tr:hover {
            background-color: #e6f7ff;
        }

        h1 {
            font-size: 20px;
        }

        iframe {
            width: 100%;
            height: 500px;
            overflow: auto;
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <h1> BCBS of Texas </h1>
    <input type="text" id="hcpcsQuery" placeholder="Enter HCPCS Code">
    <table id="hcpcsTable">
        <tbody>
        </tbody>
    </table>

    <script>
        function parseCSVLine(line) {
            const fields = [];
            let field = '';
            let inQuotes = false;

            for (let char of line) {
                if (char === '"') {
                    inQuotes = !inQuotes;
                } else if (char === ',' && !inQuotes) {
                    fields.push(field);
                    field = '';
                } else {
                    field += char;
                }
            }
            fields.push(field);
            return fields;
        }

        function loadCsv() {
            const csvUrl = 'https://raw.githubusercontent.com/AER2436/hcpcs/main/BCBS_2024_DMEPOS_FEE.csv';
            const table = document.getElementById('hcpcsTable');

            fetch(csvUrl)
                .then(response => response.text())
                .then(csvData => {
                    const lines = csvData.split('\n');
                    const headerRow = parseCSVLine(lines.shift());
                    let thead = table.createTHead();
                    let headerTr = thead.insertRow();

                    const headerNames = ['HCPCS', 'Modifier', 'Allowable', 'Effective Date', 'End Date'];
                    const headerColumns = [0, 1, 2, 3, 4];

                    headerColumns.forEach((colIndex, index) => {
                        let th = document.createElement('th');
                        th.textContent = headerNames[index] || '';
                        th.setAttribute('data-label', headerNames[index]);
                        headerTr.appendChild(th);
                    });

                    let tbody = table.getElementsByTagName('tbody')[0];

                    for (let row of lines) {
                        const columns = parseCSVLine(row);
                        const newRow = tbody.insertRow();

                        headerColumns.forEach((colIndex, index) => {
                            let cell = newRow.insertCell();
                            cell.textContent = columns[colIndex] || '';
                            cell.setAttribute('data-label', headerNames[index]);
                        });
                    }
                })
                .catch(error => {
                    console.error('Error loading CSV:', error);
                });
        }

        document.getElementById('hcpcsQuery').addEventListener('input', lookupFee);

        function lookupFee() {
            const query = document.getElementById('hcpcsQuery').value.trim().toUpperCase();
            const table = document.getElementById('hcpcsTable').getElementsByTagName('tbody')[0];
            const rows = table.getElementsByTagName('tr');

            for (let row of rows) {
                const hcpcs = row.cells[0].textContent.toUpperCase();
                if (query && hcpcs.indexOf(query) === -1) {
                    row.style.display = 'none';
                } else {
                    row.style.display = '';
                }
            }
        }

        loadCsv();
    </script>
</body>
</html>