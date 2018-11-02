import test from 'ava';
import s from '.';

test('Test subtraction', t => {
	t.is(4, s(7, 3));
});
