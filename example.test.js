import nightmare from 'nightmare';

const night = nightmare({ show: true });

describe('Test blog content', () => {
    describe('homepage', () => {
        it('go to page', async () => {
            await night.goto('http://blog.thib.me/');
        });

        it('page title', async () => {
            const title = await night.evaluate(() => document.querySelector('header h1').innerText);

            expect(title).toEqual('Thibaud’s blog');
        });

        it('articles on homepage', async () => {
            const nbArticles = await night.evaluate(() => document.querySelectorAll('.blog-index h1').length);

            expect(nbArticles).toEqual(5);
        });
    });

    it('teardown nightmare instance', async () => {
        await night.end();
    });
});
