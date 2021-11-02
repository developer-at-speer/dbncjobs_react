const fs = require('fs');
const csv = require('fast-csv');
const path = require('path');


const sumValue = () => {
	let totalValue = 0;
	fs
		.createReadStream(path.resolve(__dirname, 'testFile.csv'))
		.pipe(csv.parse({ headers: true }))
		.on('error', (error) => console.error(error))
		.on('data', (row) => {
			totalValue += Number(row.value.trim());
		})
		.on('end', () => console.log('total value: ' + totalValue));
}

sumValue();
