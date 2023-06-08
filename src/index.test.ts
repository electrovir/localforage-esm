import {randomString} from '@augment-vir/browser';
import {clickElement} from '@augment-vir/browser-testing';
import {html, fixture as renderFixture, waitUntil} from '@open-wc/testing';
import localforage from './index';

describe('localforage esm shim', () => {
    it('can set and get items through localforage', async () => {
        const valueToStore: string = randomString();

        let retrievedValue: string | undefined;

        const fixture = await renderFixture(
            html`
                <button
                    @click=${async () => {
                        await localforage.setItem('test-item', valueToStore);
                        retrievedValue = (await localforage.getItem('test-item')) ?? undefined;
                    }}
                >
                    click me
                </button>
            `,
        );

        await clickElement(fixture);
        await waitUntil(() => {
            return retrievedValue === valueToStore;
        });
    });
});
