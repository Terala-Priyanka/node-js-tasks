let buffer = '';
process.stdin.resume();
process.stdin.on('data', (d) => {
	process.stdout.write(d.toString().split('').reverse().join(''));
});