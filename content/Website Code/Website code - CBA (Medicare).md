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

        th,
        td {
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

        /* Responsive adjustments */
        @media screen and (max-width: 600px) {
            table {
                border: 0;
            }

            table thead {
                display: none;
            }

            table tr {
                margin-bottom: 8px;
                display: block;
                border-bottom: 2px solid #ddd;
            }

            table td {
                display: block;
                text-align: right;
                font-size: 12px;
                border-bottom: 1px solid #ddd;
                position: relative;
            }

            table td::before {
                content: attr(data-label);
                position: absolute;
                left: 0;
                width: 50%;
                padding-left: 0;
                font-weight: bold;
                text-align: left;
            }
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
    <h1>CBA </h1>
    <input type="text" id="hcpcsQuery" placeholder="Enter HCPCS Code">
    <table id="hcpcsTable">
        <tbody>
        </tbody>
    </table>

    <script>
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

        function loadCsv() {
            const csvUrl = 'https://raw.githubusercontent.com/AER2436/hcpcs/main/formerCBA_APR2025.csv';
            const table = document.getElementById('hcpcsTable');

            fetch(csvUrl)
                .then(response => response.text())
                .then(csvData => {
                    const rows = csvData.split('\n');
                    const headerRow = rows.shift().split(',').map(header => header.trim());
                    let thead = table.createTHead();
                    let headerTr = thead.insertRow();

                    // Create headers from the first row of CSV
                    headerRow.forEach(header => {
                        let th = document.createElement('th');
                        th.textContent = header || '';
                        th.setAttribute('data-label', header || '');
                        headerTr.appendChild(th);
                    });

                    let tbody = table.getElementsByTagName('tbody')[0];

                    // Create data rows
                    for (let row of rows) {
                        const columns = row.split(',').map(col => col.trim());
                        const newRow = tbody.insertRow();

                        columns.forEach((col, index) => {
                            let cell = newRow.insertCell();
                            cell.textContent = col || '';
                            cell.setAttribute('data-label', headerRow[index] || '');
                        });
                    }
                })
                .catch(error => {
                    console.error('Error loading CSV:', error);
                });
            }

        loadCsv();
    </script>
</body>

</html>