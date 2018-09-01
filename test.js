import test from 'ava';
import m from './build';

const run = command =>
	new Promise(resolve => {
		m(command).on('exit', resolve);
	});

test('It works for locally installed node CLI', async t => {
	t.is(await run('internal-ip -4'), 0);
});

test('It throws for non-existing CLI', async t => {
	t.not(await run('loremlorem'), 0);
});
