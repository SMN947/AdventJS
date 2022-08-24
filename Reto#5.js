const date = new Date('Dec 25, 2021');
var a = daysToXmas(date); // 0
a
const date1 = new Date('Dec 23, 2021');
var a = daysToXmas(date1); // -1
a
const date2 = new Date('Dec 31, 2021');
var a = daysToXmas(date2); // -6
a
const date3 = new Date('Jan 1, 2022 00:00:01');
var a = daysToXmas(date3); // -7
a
const date4 = new Date('Jan 1, 2022 00:59:59');
var a = daysToXmas(date4);
a

function daysToXmas(date) {
	let navidad = new Date('Dec 25, 2021');
	return Math.ceil((navidad - date)/86400/1000)
}
