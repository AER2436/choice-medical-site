<!DOCTYPE html>
<html>

<head>
    <title>Zip Code Lookup</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        input[type="text"] {
            padding: 8px;
            margin-right: 10px;
        }

        button {
            padding: 8px 12px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        #result {
            margin-top: 20px;
            font-weight: bold;
        }

        #disclaimer {
            font-size: 0.8em;
            color: #888;
            margin-bottom: 10px;
        }
    </style>
</head>

<body>
    <h1>Zip Code Lookup</h1>
    <p id="disclaimer">If no result, then the ZIP code is in a non-rural/non-CBA area</p>
    <input type="text" id="zipInput" placeholder="Enter Zip Code">
    <table id="resultTable">
        <thead>
            <tr>
                <th>State</th>
                <th>Zip Code</th>
                <th>Year/Qtr</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    <div id="result"></div>

    <script>
        const zipInput = document.getElementById('zipInput');
        const resultDiv = document.getElementById('result');
        const tableBody = document.getElementById('resultTable').getElementsByTagName('tbody')[0];

        zipInput.addEventListener('input', function() {
            if (zipInput.value.length === 5) {
                lookupZip();
            }
        });

        function lookupZip() {
            const zip = zipInput.value;
            console.log('Searching for zip:', zip);
            resultDiv.textContent = '';
            tableBody.innerHTML = '';

            fetch('https://raw.githubusercontent.com/AER2436/hcpcs/main/DMEZIPCodeQuarter2-2025.csv')
                .then(response => {
                    console.log('Fetch response:', response);
                    return response.text();
                })
                .then(csvData => {
                    console.log('CSV data:', csvData);
                    const rows = csvData.split('\n');
                    let found = false;

                    for (let row of rows) {
                        const columns = row.split(',');
                        console.log('Row columns:', columns);
                        if (columns[1] === zip) {
                            console.log('Zip code match found!');
                            let newRow = tableBody.insertRow();
                            let cell1 = newRow.insertCell(0);
                            let cell2 = newRow.insertCell(1);
                            let cell3 = newRow.insertCell(2);
                            let cell4 = newRow.insertCell(3);
                            cell1.textContent = columns[0];
                            cell2.textContent = columns[1];
                            cell3.textContent = columns[2];
                            cell4.textContent = columns[3];
                            found = true;
                            break;
                        }
                    }

                    if (!found) {
                        console.log('Zip code not found.');
                        resultDiv.textContent = 'Zip code not found.';
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    resultDiv.textContent = 'Error fetching data.';
                });
        }
    </script>
</body>

</html>